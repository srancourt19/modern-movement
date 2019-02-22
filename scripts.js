var playButton = document.querySelector('.play')
var video = document.querySelector('video')
var intervalRewind

playButton.addEventListener('click', playVideo)

function playVideo() {
	video.play()
}

