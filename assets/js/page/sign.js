var SignPage = (function () {
    'use strict';

    var $fileUploadSection;
    var $uploadedFileDisplay;
    var $actualFileInput;
    var $fileNameDisplay;
    var $fileSizeDisplay;

    // Signature Pad Variables
    var canvas, ctx, $signaturePlaceholder, $resetSignatureBtn, $downloadSignatureBtn; // Added $downloadSignatureBtn
    var isDrawing = false;
    var lastX = 0;
    var lastY = 0;

    var handleFileUpload = function() {
        $fileUploadSection.hide();
        $uploadedFileDisplay.show();
    };

    var handleFileDelete = function() {
        $uploadedFileDisplay.hide();
        $fileUploadSection.show();
        $actualFileInput.val(''); // Clear the file input
        $fileNameDisplay.text(''); // Clear displayed file name
        $fileSizeDisplay.text(''); // Clear displayed file size
    };

    var formatFileSize = function(bytes) {
        if (bytes === 0) return '0 Bytes';
        var k = 1024;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    // --- Signature Pad Functions ---
    var draw = function(x, y) {
        if (!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        [lastX, lastY] = [x, y];
    };

    var startDrawing = function(e) {
        isDrawing = true;
        // Hide the placeholder text when drawing starts
        $signaturePlaceholder.hide();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    var drawing = function(e) {
        if (!isDrawing) return;
        draw(e.offsetX, e.offsetY);
    };

    var stopDrawing = function() {
        isDrawing = false;
    };

    var clearCanvas = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Show the placeholder text when canvas is cleared
        $signaturePlaceholder.show();
    };

    // --- Download Signature Function ---
    var downloadSignature = function() {
        if (!canvas.toDataURL) {
            alert('Your browser does not support canvas toDataURL. Please use a modern browser.');
            return;
        }

        var dataURL = canvas.toDataURL('image/png');
        var a = document.createElement('a');
        a.href = dataURL;
        a.download = 'signature.png'; // Filename for the downloaded image
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };


    var init = function () {
        var $modalTabs = $('.modal-tab-item');
        var $modalContents = $('.modal-content');
        $fileUploadSection = $('#file-upload-section');
        $uploadedFileDisplay = $('#uploaded-file-display');
        $actualFileInput = $('#actual-file-input');
        $fileNameDisplay = $uploadedFileDisplay.find('.file-name');
        $fileSizeDisplay = $uploadedFileDisplay.find('.file-size');

        // Initialize Signature Pad elements
        canvas = document.getElementById('signature-canvas');
        ctx = canvas.getContext('2d');
        $signaturePlaceholder = $('#signature-placeholder');
        $resetSignatureBtn = $('.btn-reset-signature');
        $downloadSignatureBtn = $('.btn-download-signature'); // Initialize new button


        // Set canvas dimensions to match CSS for correct drawing
        var $signatureBox = $('.signature-box');
        canvas.width = $signatureBox.width();
        canvas.height = $signatureBox.height();

        // Configure drawing style
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000'; // Black color for signature

        $modalTabs.on('click', function () {
            var $this = $(this);
            var targetTabId = $this.data('tab-id');

            // Remove active class from all tabs and add to the clicked one
            $modalTabs.removeClass('is-active');
            $this.addClass('is-active');

            // Hide all content and show the target one
            $modalContents.hide();
            $('#' + targetTabId + '-content').show();
        });

        // Event listener for file selection button
        $('#upload-stamp-tab-content').on('click', '.file-select-button', function(e) {
            e.preventDefault();
            $actualFileInput.trigger('click');
        });

        // Handle file selection change
        $actualFileInput.on('change', function() {
            if (this.files && this.files[0]) {
                var file = this.files[0];
                $fileNameDisplay.text(file.name);
                $fileSizeDisplay.text(formatFileSize(file.size));
                handleFileUpload();
            }
        });

        // Event listener for file deletion
        $('#upload-stamp-tab-content').on('click', '.edit-actions', function(e) {
            e.preventDefault();
            handleFileDelete();
        });

        // Signature Pad Event Listeners
        $(canvas).on('mousedown', startDrawing);
        $(canvas).on('mousemove', drawing);
        $(canvas).on('mouseup', stopDrawing);
        $(canvas).on('mouseout', stopDrawing); // Stop drawing if mouse leaves canvas

        // Reset Signature Button Event Listener
        $resetSignatureBtn.on('click', clearCanvas);

        // Download Signature Button Event Listener
        $downloadSignatureBtn.on('click', downloadSignature); // Added event listener
    };

    return {
        init: init
    };
})();

$(document).ready(function () {
    SignPage.init();
});