import initialize_songs from "./initialize_songs.js";
import controls from "./controls.js";

let current_index = 0;

initialize_songs(current_index);

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');


next.addEventListener('click', function() {
    controls.next(current_index);
    current_index += 1;
});
prev.addEventListener('click', function() {
    controls.prev(current_index);
    current_index -= 1;
});
