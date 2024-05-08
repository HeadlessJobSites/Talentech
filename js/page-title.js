$(document).ready(function() {
    // Check if the position-title element has content
    var positionTitle = $('#position-title').text().trim();
    if (positionTitle) {
        document.title = positionTitle; // Set the page title to the position title
    }
});
