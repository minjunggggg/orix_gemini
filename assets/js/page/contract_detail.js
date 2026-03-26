var ContractDetail = (function () {
    'use strict';

    var $contractContainer;

    var init = function (container) {
        $contractContainer = $(container);
        bindEvents();
    };

    var bindEvents = function () {
        // Handle "정비서비스" checkboxes
        $contractContainer.on('click', '.service-options input[type="checkbox"]', function () {
            var $this = $(this);
            // If this checkbox is already checked, uncheck it. Otherwise, check it and uncheck others.
            if ($this.is(':checked')) {
                $contractContainer.find('.service-options input[type="checkbox"]').not($this).prop('checked', false);
            }
        });

        // Handle "계약운행거리" checkboxes
        $contractContainer.on('click', '.drive-options input[type="checkbox"]', function () {
            var $this = $(this);
            // If this checkbox is already checked, uncheck it. Otherwise, check it and uncheck others.
            if ($this.is(':checked')) {
                $contractContainer.find('.drive-options input[type="checkbox"]').not($this).prop('checked', false);
            }
        });
    };

    return {
        init: init
    };
})();

$(document).ready(function() {
    ContractDetail.init('.document-container');
});
