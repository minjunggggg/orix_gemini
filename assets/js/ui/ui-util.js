$(document).ready(function() {
    // Initialize Input components
    $('.js-input-component').each(function () {
        if (typeof Input !== 'undefined' && Input.init) {
            Input.init(this);
        }
    });

    // Example: Initialize other components here
    // $('.jsTab').each(function () {
    //     if (typeof Tabs !== 'undefined' && Tabs.init) {
    //         Tabs.init(this);
    //     }
    // });
});
