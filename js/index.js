import initialize_songs from "./initialize_songs.js";
import controls from "./controls.js";
import progress_bar from "./progress_bar.js";
import songs from "./songs.js";

let current_index = 0;

initialize_songs(current_index);

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const play = document.querySelector('#play');
const f10 = document.querySelector('#f10');
const r10 = document.querySelector('#r10');
const audio = document.querySelector('#current-song');
const bar = document.getElementById('bar');

next.addEventListener('click', function() {
    if(current_index != songs.length -1){
        controls.next(current_index);
        current_index += 1;
    }
});

prev.addEventListener('click', function() {
    if(current_index != 0){
        controls.prev(current_index);
        current_index -= 1;
    }
});

play.addEventListener('click', function() {
    controls.play();
});

f10.addEventListener('click', function() {
    controls.skipTo(audio.currentTime + 10);
});

r10.addEventListener('click', function() {
    controls.skipTo(audio.currentTime - 10);
});

audio.addEventListener('timeupdate', function() {
    const autoskip = progress_bar.update(audio);
    if(autoskip == 0){
        next.click();
    }
});

bar.addEventListener('input', function() {
    audio.pause();
    controls.skipTo((bar.value*audio.duration)/10);
    controls.play();
});