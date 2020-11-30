import reset_song from "./reset_song.js";
import songs from "./songs.js";

const handler = {
    next: function(current_index) {
            const current_song = document.getElementById(`${current_index}`);
            const next_song = document.getElementById(`${current_index + 1}`);
            current_song.classList = 'before cover';
            current_song.style.zIndex = current_song.id;
            next_song.classList = 'current cover';
            next_song.style.zIndex = songs.length;
            reset_song(songs[current_index + 1]);
    },

    prev: function(current_index) {
            const current_song = document.getElementById(`${current_index}`);
            const prev_song = document.getElementById(`${current_index - 1}`);
            current_song.classList = 'after cover';
            current_song.style.zIndex = songs.length - current_song.id;
            prev_song.classList = 'current cover';
            prev_song.style.zIndex = songs.length;
            reset_song(songs[current_index - 1]);
    },

    play: function() {
        const audio = document.querySelector('#current-song');
        const play = document.querySelector('#play>img');
        if (audio.paused){
            audio.play();
            play.src = './assets/images/pause.png';
        } else {
            audio.pause();
            play.src = './assets/images/play.png';
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