function loadVideos(){
  fetch('videos/list.json', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function(res){
    return res.json();
  })
  .then(function(resJson){
    console.log(resJson);
    vidyaList = resJson.videoList;
    var videoNamesContainer = document.getElementById('videonames');
    var videoNameElements = '';
    //["FiveLittleMonkeys.mp4", "HotDog.mp4", "pajaroCarpintero.mp4","SolSolecito.mp4"]
    vidyaList.forEach(function(videoName){
      videoNameElements += buildVideoButton(videoName);
    });
    videoNamesContainer.innerHTML = videoNameElements;
  });
}

//five.little.monkeys.mp4
//["five", "little", "monkeys", "mp4"]
function buildVideoButton(videoName){
  var videoName1 = videoName.split('.');
  videoName1.splice(videoName1.length-1, 1);
  videoName1 = videoName1.join('');
  return `<button class="video-load-btn" video-src="videos/${videoName}">
            ${videoName1}
          </button>`;
}
