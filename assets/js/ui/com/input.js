/* === Component: Input === */
var Input = (function () {
    'use strict';

    var init = function (container) {
        var $inputWrapper = $(container);
        var $inputField = $inputWrapper.find('.input-field');

        // Initial check for filled state if value is present on load
        if ($inputField.val()) {
            $inputWrapper.addClass('is-filled');
        }

        // Handle focus and blur events
        $inputField.on('focus', function () {
            $inputWrapper.addClass('is-focus');
        });

        $inputField.on('blur', function () {
            $inputWrapper.removeClass('is-focus');
            // Check filled state on blur as well
            if ($inputField.val()) {
                $inputWrapper.addClass('is-filled');
            } else {
                $inputWrapper.removeClass('is-filled');
            }
        });

        // Handle input event for filled state
        $inputField.on('input', function () {
            if ($inputField.val()) {
                $inputWrapper.addClass('is-filled');
            } else {
                $inputWrapper.removeClass('is-filled');
            }
        });

        // Handle disabled state (if it changes dynamically, though typically set on load)
        // This part assumes the disabled attribute might change.
        // For static disabled, the class should be set in HTML.
        // This check ensures consistency if JS is initializing after HTML render.
        if ($inputField.prop('disabled')) {
            $inputWrapper.addClass('is-disabled');
        } else {
            $inputWrapper.removeClass('is-disabled');
        }
    };

    return {
        init: init
    };
})();
