/**
 * Copyright © 2003/2013 Backbase B.V.
 */


if (!window.training) var training = {};

training.login = (function ($) {
    'use strict';

    return {
        init: function (widget) {
            var $widget = $(widget.body);
            var $form = $widget.find("form");
            var redirectTo = $(widget.getPreference("redirectTo"));

            $form.submit(function (event) {
                event.preventDefault();

                var xhr = $.ajax({
                    type: "POST",
                    url: be.contextRoot + "/j_spring_security_check",
                    data: $form.serialize(),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded;'
                    }
                });

                xhr.success(function (response) {
                    $("body").addClass("authChange").fadeOut(200, function () {
                        window.location.href = window.location.href;
                    });
                });

                xhr.error(function (jqXHR, status) {
                    alert(jqXHR.responseText);
                });

                return false;
            });


        }


    };
}(window.jQuery));
