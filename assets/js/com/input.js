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

        const dateInputs = document.querySelectorAll('input[type="date"]');
        dateInputs.forEach(input => {
            const updateValue = (el) => {
                if (el.value) {
                    el.classList.add('has-value');
                    // CSS 변수 --date-content에 현재 날짜 값을 할당
                    el.style.setProperty('--date-content', `"${el.value}"`);
                } else {
                    el.classList.remove('has-value');
                    el.style.setProperty('--date-content', '""');
                }
            };

            // 1. 초기 로드 시 실행
            updateValue(input);

            // 2. 값이 바뀔 때마다 실행
            input.addEventListener('input', function () {
                updateValue(this);
            });
        });
    };
    init();

})();
