var FormPage = (function () {
    'use strict';

    var init = function () {
        // Accordion functionality
        $('.js-accordion-trigger').on('click', function () {
            var $this = $(this);
            var $accordionPanel = $this.closest('.agreement-item').find('.accordion-panel');
            var $divider = $this.closest('.agreement-item').find('.divider');

            $accordionPanel.toggleClass('is-hidden');
            $divider.toggleClass('is-hidden');
        });
    };
    init();
})();
