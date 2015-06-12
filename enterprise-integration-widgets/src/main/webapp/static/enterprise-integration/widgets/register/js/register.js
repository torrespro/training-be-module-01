/**
 * Copyright © 2003/2013 Backbase B.V.
 */

if (!window.training) var training = {};

training.register = (function ($) {
    'use strict';

    return {
        init: function (widget) {
            var $widget = $(widget.body);
            var $form = $widget.find("form");
            $form.attr("action", be.contextRoot + "/services/rest/player/register");

            $form.on("click", "#register", function () {
                var data = {
                    "username": $("#reg_username").val(),
                    "fullname": $("#reg_fullname").val(),
                    "password": $("#reg_password").val()
                };

                var xhr = $.ajax({
                    type: $form.attr("method"),
                    url: $form.attr("action"),
                    data: JSON.stringify(data),
                    contentType:"application/json; charset=utf-8",
                    dataType: "json"
                });

                xhr.success(function (response) {
                    alert("Player created! You can now login");
                });

                xhr.error(function (jqXHR, status) {
                    alert(jqXHR.responseText);
                });

                return false;
            });
        }
    };
}(window.jQuery));
