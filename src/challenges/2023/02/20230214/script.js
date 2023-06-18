const video = document.getElementById("video");
const controls = document.getElementById("video-controls");
const play = document.getElementById("play");
const mute = document.getElementById("mute");
const fullscreen = document.getElementById("fullscreen");
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');

const supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-supported", "false");

// If Javascript is disabled, use browser's controls
video.controls = false;
controls.setAttribute("data-visible", "true");

video.addEventListener('loadedmetadata', () => {
	progress.setAttribute('max', video.duration);
	let minutes = Math.floor(video.duration / 60);
    let seconds = Math.floor(video.duration - (minutes * 60));
	console.log(`${minutes}:${seconds}`);
});

play.onclick = () => {
	if(video.paused) {
		video.play();
	} else {
		video.pause();
	}

	toggleState(play, 'true', 'false');
}

mute.onclick = () => {
	toggleState(mute, 'true', 'false');
}

fullscreen.onclick = () => {
	toggleState(fullscreen, 'true', 'false');
}

const toggleState = (element, one, two) => {
	element.setAttribute('data-state', element.getAttribute('data-state') === one ? two : one);
};