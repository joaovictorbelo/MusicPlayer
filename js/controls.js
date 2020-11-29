import reset_song from "./reset_song.js";
import songs from "./songs.js";

const handler = {
    next: function(current_index) {
        if(current_index != songs.length -1){
            const current_song = document.getElementById(`${current_index}`);
            const next_song = document.getElementById(`${current_index + 1}`);
            current_song.classList = 'before cover';
            next_song.classList = 'current cover';
            reset_song(songs[current_index + 1]);
        } 
    },

    prev: function(current_index) {
        if(current_index != 0){
            const current_song = document.getElementById(`${current_index}`);
            const prev_song = document.getElementById(`${current_index - 1}`);
            current_song.classList = 'after cover';
            prev_song.classList = 'current cover';
            reset_song(songs[current_index - 1]);
        }
    },

    play: function() {
        const audio = document.querySelector('#current-song');
        if (audio.paused){
            audio.play();
        } else {
            audio.pause();
        }
    },

    forward: function() {
        const audio = document.querySelector('#current-song');
        audio.currentTime += 10;
    },

    backward: function() {
        const audio = document.querySelector('#current-song');
        audio.currentTime -= 10;
    } 
}

export default handler;