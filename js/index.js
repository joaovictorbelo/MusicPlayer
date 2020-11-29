import initialize_songs from "./initialize_songs.js";
import controls from "./controls.js";

let current_index = 0;

initialize_songs(current_index);

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const play = document.querySelector('#play');
const f10 = document.querySelector('#f10');
const r10 = document.querySelector('#r10');
const time = document.querySelector('#time');
const duration = document.querySelector('#duration')
const audio = document.querySelector('#current-song');


next.addEventListener('click', function() {
    controls.next(current_index);
    current_index += 1;
});

prev.addEventListener('click', function() {
    controls.prev(current_index);
    current_index -= 1;
});

play.addEventListener('click', function() {
    controls.play();
});

f10.addEventListener('click', function() {
    controls.forward();
});

r10.addEventListener('click', function() {
    controls.backward();
});

audio.addEventListener('timeupdate', function() {
    time.innerHTML = audio.currentTime;
})

audio.onloadedmetadata = function() {
    this.play();
    duration.innerHTML = audio.duration;
}
