var SummaryDetailPage = (function () {
    'use strict';

    var init = function () {

        $('.js-accordion-trigger').on('click', function (e) {
            console.log('Accordion trigger clicked');
            var $this = $(this);
            var $agreementItem = $this.closest('.agreement-item');
            var $accordionPanel = $agreementItem.find('.accordion-panel');

            $accordionPanel.toggleClass('is-hidden');
            $this.toggleClass('is-expanded');
        });

    };

    init();

})();
