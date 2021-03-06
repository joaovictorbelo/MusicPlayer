import secToMin from "./sec_to_min.js";

function reset_song(song) {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const audio = document.getElementById('current-song');
    const play = document.querySelector('#play>img');

    title.innerHTML = song.name;
    author.innerHTML = song.author;
    audio.src = song.src;

    audio.onloadedmetadata = function() {
        this.play();
        play.src = './assets/images/pause.png';
        duration.value = audio.duration;
        duration.innerHTML = secToMin(audio.duration);
    }
    
}

export default reset_song;