function playNextVideo(){
  //figure out which video is playing
  var videoElement = document.querySelector("video");
  var videoSrc = videoElement.src;
  //get rid of the videos/ in the beginning of the src
  var videoFileName = videoSrc.split("/");
  videoFileName = videoFileName[videoFileName.length-1];
  //figure out which video is next
  var currentIndex = vidyaList.indexOf(videoFileName);
  var nextIndex = (currentIndex+1) % vidyaList.length;
  //change the src of the <video> element
  videoElement.src = 'videos/'+ vidyaList[nextIndex];
  //play the next video when the file loads
  videoElement.addEventListener('loadeddata', function(){
    videoElement.play();
  });
}
