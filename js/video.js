document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('videoContainer');
    const playButton = document.getElementById('playButton');
    const videoIframe = document.getElementById('videoIframe');
  
    playButton.addEventListener('click', function() {
      videoIframe.src = "https://rutube.ru/play/embed/5b8160fb29edfb3b8043f0e462671d44";
      videoContainer.classList.add('active');
    });
  });