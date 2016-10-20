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
            var redirectTo = (widget.getPreference("redirectTo"));

            $form.submit(function (event) {
                event.preventDefault();

                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;'
                };
                headers[b$.utils.xsrf.getXSRFRequestHeaderName()] = b$.utils.xsrf.getXSRFCookie();

                var xhr = $.ajax({
                    type: "POST",
                    url: "/portalserver/j_spring_security_check",
                    data: $form.serialize(),
                    headers: headers
                });

                xhr.success(function (response) {
                    $("body").addClass("authChange").fadeOut(200, function () {
                        window.location.href = b$.portal.portalServer.serverURL+redirectTo;
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
