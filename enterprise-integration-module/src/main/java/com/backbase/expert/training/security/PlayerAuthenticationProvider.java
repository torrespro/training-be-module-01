package com.backbase.expert.training.security;

import com.backbase.expert.training.services.webservice.Player;
import com.backbase.expert.training.services.webservice.PlayerManagementService;
import com.backbase.portal.foundation.business.service.GroupBusinessService;
import com.backbase.portal.foundation.business.service.UserBusinessService;
import com.backbase.portal.foundation.commons.exceptions.FoundationDataException;
import com.backbase.portal.foundation.commons.exceptions.ItemAlreadyExistsException;
import com.backbase.portal.foundation.commons.exceptions.ItemNotFoundException;
import com.backbase.portal.foundation.domain.model.Group;
import com.backbase.portal.foundation.domain.model.User;
import org.apache.commons.lang.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

/**
 * User: bartv
 * Date: 20-07-14
 * Time: 15:19
 */
@Component
public class PlayerAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {

    @Autowired
    private UserBusinessService userBusinessService;

    @Autowired
    private GroupBusinessService groupBusinessService;

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private PlayerManagementService playerManagementService;

    public PlayerAuthenticationProvider(PlayerManagementService playerManagementService) {
        this.playerManagementService = playerManagementService;
    }

    public PlayerAuthenticationProvider() {
    }

    @Override
    protected void additionalAuthenticationChecks(UserDetails userDetails,
                                                  UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {

    }

    @Override
    protected UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken authentication)
            throws AuthenticationException {


        Player player = playerManagementService.getPlayer(username);
        if(player == null) {
            return null;
        }

        if(!player.getPassword().equals(authentication.getCredentials().toString())) {
            return null;
        }


        try {
            return userBusinessService.getUser(username);
        } catch (ItemNotFoundException e) {
            User user = new User();
            user.setUsername(username);
            user.setPassword(RandomStringUtils.random(32));
            user.setEnabled(true);

            try {
                Group userGroup = groupBusinessService.getGroup("user");
                user.getGroups().add(userGroup);
                user =  userBusinessService.createUser(user);
                return user;

            } catch (ItemNotFoundException e1) {
                throw new AuthenticationServiceException(e1.getMessage());
            } catch (ItemAlreadyExistsException e1) {
                throw new AuthenticationServiceException(e1.getMessage());
            } catch (FoundationDataException e1) {
                throw new AuthenticationServiceException(e1.getMessage());
            }

        }

    }
}
