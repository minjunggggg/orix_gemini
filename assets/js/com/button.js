var Button = (function () {
    'use strict';
    function init() {
        $(".btn-option").on('click', function () {
            $(this).toggleClass('is-selected');
        });
    }
    init();
})();

$(document).ready(function() {
    // Optionally initialize buttons if there's common JS behavior
    // $('.btn-primary').each(function () {
    //     Button.init(this);
    // });
});
