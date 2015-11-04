/**
 * Copyright © 2003/2013 Backbase B.V.
 */


if (!window.training) var training = {};

training.game2048Widget = (function ($) {
    'use strict';

    return {
        init: function (oWidget) {
            new GameManager(4, KeyboardInputManager, HTMLActuator, TrainingStorageManager);

        }


    };
}(window.jQuery));
