document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch job data and update the background
    function updateHeroBackground() {
        const params = new URLSearchParams(window.location.search);
        const jobId = parseInt(params.get('rmjob') || params.get('jobId'));  // Handles both 'rmjob' and 'jobId'

        // Assuming jobs data is an array obtained from your API; adjust the fetch URL as needed
        fetch('path_to_your_feed.json')  // Replace with the actual path to your job feed data
            .then(response => response.json())
            .then(jobs => {
                const job = jobs.find(job => job.ad_id === jobId);
                if (job && job.image_link) {
                    setHeroBackgroundImage(job.image_link);
                } else {
                    setHeroBackgroundVideo(); // Can be omitted if video is the default
                }
            })
            .catch(error => console.error('Failed to load job data:', error));
    }

    function setHeroBackgroundImage(imageUrl) {
        // Remove the video element
        var videoElement = document.querySelector('.hero-video');
        if (videoElement) {
            videoElement.parentNode.removeChild(videoElement);
        }

        // Set the image as background
        var heroSection = document.querySelector('.hero-section');
        heroSection.style.backgroundImage = 'url(' + imageUrl + ')';
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
    }

    function setHeroBackgroundVideo() {
        // Ensure the video is properly set up if it's not the default or needs to be reset
        var heroSection = document.querySelector('.hero-section');
        if (!document.querySelector('.hero-video')) {
            var video = document.createElement('video');
            video.setAttribute('playsinline', 'playsinline');
            video.setAttribute('autoplay', 'autoplay');
            video.setAttribute('muted', 'muted');
            video.setAttribute('loop', 'loop');
            video.classList.add('hero-video');

            var source = document.createElement('source');
            source.setAttribute('src', '/Compressed-3.mp4');
            source.setAttribute('type', 'video/mp4');

            video.appendChild(source);
            heroSection.appendChild(video);
        }
    }

    // Call the function to update the background
    updateHeroBackground();
});
