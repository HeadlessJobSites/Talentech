    // Function to dynamically set the URLs for social media sharing
    function setSocialMediaShareUrls() {
        var facebookShareLink = document.getElementById('facebook-share-link');
        var twitterShareLink = document.getElementById('twitter-share-link');
        var linkedinShareLink = document.getElementById('linkedin-share-link');
        var currentUrl = encodeURIComponent(window.location.href);

        facebookShareLink.href = 'https://www.facebook.com/sharer/sharer.php?u=' + currentUrl;
        twitterShareLink.href = 'https://twitter.com/intent/tweet?url=' + currentUrl;
        linkedinShareLink.href = 'https://www.linkedin.com/shareArticle?url=' + currentUrl;
    }

    // Call the function to set social media share URLs
    setSocialMediaShareUrls();
