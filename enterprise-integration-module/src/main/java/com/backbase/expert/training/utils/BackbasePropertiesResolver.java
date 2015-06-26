package com.backbase.expert.training.utils;

import com.backbase.portal.foundation.domain.configuration.ApplicationConfiguration;
import org.apache.camel.CamelContext;
import org.apache.camel.component.properties.PropertiesComponent;
import org.apache.camel.component.properties.PropertiesResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import java.util.Properties;

/**
 * Created by bartv on 04/04/15.
 */
public class BackbasePropertiesResolver implements PropertiesResolver {

    @Autowired
    private ApplicationConfiguration applicationConfiguration;


    @Autowired
    public BackbasePropertiesResolver(@Qualifier(value = "bb-camel-context")  CamelContext camelContext) {
        final PropertiesComponent propertiesComponent = new PropertiesComponent("no-location-use-resolver");
        propertiesComponent.setPropertiesResolver(this);
        camelContext.addComponent("properties", propertiesComponent);
    }

    @Override
    public Properties resolveProperties(CamelContext context, boolean ignoreMissingLocation, String... uri) throws Exception {

        return applicationConfiguration.getAsProperties();
    }


}
