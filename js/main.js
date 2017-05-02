var vidyaList;
loadVideos();


document.getElementById('videonames')
            .addEventListener('click', videoPlayButtonHandler);

document.querySelector('video')
            .addEventListener('ended', playNextVideo);

document.getElementById('slowdown')
            .addEventListener('click', slowDown);
document.getElementById('speedup')
            .addEventListener('click', speedUp);
