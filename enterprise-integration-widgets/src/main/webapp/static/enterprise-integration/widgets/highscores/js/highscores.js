/**
 * Copyright © 2003/2013 Backbase B.V.
 */


if (!window.training) var training = {};

training.highscores = (function ($) {
    'use strict';

    return {
        init: function (widget) {
            var $widget = $(widget.body);
            var $list = $widget.find(".players");

            $.ajax({
                url: be.contextRoot + "/services/rest/player/players/highscore",
                dataType: "json",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    $.each(data.players, function(index, player) {
                        $list.append('<li data-player="' + player.username + '"><span class="player-name">' + player.fullname + '</span><span class="player-score">' + player.highScore + '</span>');
                    });
                }
            });

            gadgets.pubsub.subscribe("Player.HighScoreUpdated", function (event) {
                var player = event;
                var $player = $list.find('li[data-player=' + player.username + ']');
                if($player == null) {
                    $list.append('<li data-player="' + player.username + '"><span class="player-name">' + player.fullname + '</span><span class="player-score">' + player.highScore + '</span>');
                } else {
                    $player.html('<li data-player="' + player.username + '"><span class="player-name">' + player.fullname + '</span><span class="player-score">' + player.highScore + '</span>')
                }
            });



        }


    };
}(window.jQuery));
