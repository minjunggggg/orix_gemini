var Toggle = (function () {
    'use strict';
    return {
        init: function (container) {
            console.log('Toggle.init called for container:', container);
            var $toggleInputs = $(container).find('.toggle-input');
            console.log('Found toggle inputs:', $toggleInputs.length);

            $toggleInputs.each(function() {
                var $this = $(this);
                // Set initial aria-checked state
                var initialIsChecked = $this.is(':checked');
                $this.attr('aria-checked', initialIsChecked);
                console.log('Initial state for', $this.attr('id'), 'aria-checked:', initialIsChecked);

                // If it's a toggle card, set initial 'is-checked' class
                var $toggleCardWrap = $this.closest('.toggle-card-wrap');
                if ($toggleCardWrap.length) {
                    if (initialIsChecked) {
                        $toggleCardWrap.addClass('is-checked');
                    } else {
                        $toggleCardWrap.removeClass('is-checked');
                    }
                    console.log('Initial state for card wrap:', $toggleCardWrap.attr('id') || $toggleCardWrap.attr('class'), 'is-checked:', initialIsChecked);
                }
            });


            $toggleInputs.on('change', function() {
                var $this = $(this);
                var isChecked = $this.is(':checked');
                $this.attr('aria-checked', isChecked);
                console.log('Change event for', $this.attr('id'), 'aria-checked:', isChecked);


                // If it's a toggle card, toggle the 'is-checked' class on the wrap
                var $toggleCardWrap = $this.closest('.toggle-card-wrap');
                if ($toggleCardWrap.length) {
                    if (isChecked) {
                        $toggleCardWrap.addClass('is-checked');
                    } else {
                        $toggleCardWrap.removeClass('is-checked');
                    }
                    console.log('Change state for card wrap:', $toggleCardWrap.attr('id') || $toggleCardWrap.attr('class'), 'is-checked:', isChecked);
                }
            });
        }
    };
})();

$(document).ready(function() {
    console.log('Document ready. Initializing Toggle module.');
    // Initialize all toggle components on the page
    $('.toggle-wrap, .toggle-card-wrap, .toggle-line-wrap, .toggle-check-wrap').each(function () {
        Toggle.init(this);
    });
});
