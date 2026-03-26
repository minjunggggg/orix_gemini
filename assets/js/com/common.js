'use strict';

var UI = (function () {
    return {
        init: function () {
            console.log('UI initialized');
        }
    };
})();

$(document).ready(function() {
    UI.init();
});
