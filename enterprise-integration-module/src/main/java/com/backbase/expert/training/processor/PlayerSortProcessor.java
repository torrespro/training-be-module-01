package com.backbase.expert.training.processor;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;

import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;

/**
 * Created by bartv on 25/03/15.
 */
public class PlayerSortProcessor implements Processor {
    @Override
    public void process(Exchange exchange) throws Exception {
        final HashMap hashMap = exchange.getIn().getBody(HashMap.class);

        List players = (List) hashMap.get("players");

        final String sort = exchange.getIn().getHeader("sort",String.class);
        if(sort != null) {
            Collections.sort(players, new Comparator() {
                @Override
                public int compare(Object o1, Object o2) {
                    HashMap player1 = (HashMap) o1;
                    HashMap player2 = (HashMap) o2;

                    return player1.get(sort).toString().compareTo(player2.get(sort).toString());

                }
            });
        }
        hashMap.put("players", players);

        exchange.getOut().setBody(hashMap);


    }
}
