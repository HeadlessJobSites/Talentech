<script>
document.addEventListener('DOMContentLoaded', function() {
    // Get the content of the position-title element
    var positionTitle = document.getElementById('position-title').textContent.trim();
    if (positionTitle) {
        document.title = positionTitle; // Set the page title to the position title
    }
});
</script>
