import secToMin from "./sec_to_min.js";

const bar = document.querySelector('#bar');
const time = document.querySelector('#time');
const duration = document.querySelector('#duration');

const handler = {
    update: function(audio) {
        bar.value = audio.currentTime? (audio.currentTime/duration.value) : 0;
        time.innerHTML = secToMin(audio.currentTime);

        return duration.value - audio.currentTime;
    }
}

export default handler;