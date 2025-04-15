var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.load(); // reload the video with new settings

});
// Play
document.querySelector("#play").addEventListener("click", function () {
    video.play();
    document.querySelector("#volume").innerText = video.volume * 100 + "%";
    console.log("Play Video");
});

// Pause
document.querySelector("#pause").addEventListener("click", function () {
    video.pause();
    console.log("Pause Video");
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate *= 0.9;
    console.log("New speed:", video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate /= 0.9;
    console.log("New speed:", video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log("Current time:", video.currentTime);
});

// Mute/Unmute
document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        this.innerText = "Mute";
    } else {
        video.muted = true;
        this.innerText = "Unmute";
    }
});

// Volume Slider
document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    document.querySelector("#volume").innerText = video.volume * 100 + "%";
});

// Add oldSchool class
document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
});

// Remove oldSchool class
document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

