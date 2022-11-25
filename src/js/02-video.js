import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


async function openCurrentTime() {
    const currentTimeJson = window.localStorage.getItem("videoplayer-current-time")
    const currentTime = JSON.parse(currentTimeJson)

    const seconds = await player.setCurrentTime(currentTime.seconds)
    console.log(seconds)
}

window.onload = function () {
    openCurrentTime()

}
    

player.on("timeupdate", throttle((data) => saveCurrentTime(data),1000)) 

function saveCurrentTime(data) {
    // console.log(data.seconds)
    window.localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
}
