import reset_song from "./reset_song.js";
import songs from "./songs.js";

function initialize_songs(current_index) {

    const covers = document.querySelector('.covers');
    const total = songs.lenght;

    covers.textContent = '';
    
    let i;

    for (i = 0; i < current_index; i+=1) {
        const song = document.createElement('div');
        song.classList = 'before cover';
        song.id = `${i}`;
        song.style.backgroundImage = `url('${songs[i].cover}')`;
        song.style.zIndex = i;
        covers.appendChild(song);
    }

    if (i === current_index) {
        const song = document.createElement('div');
        song.classList = 'current cover';
        song.id = `${i}`;
        song.style.backgroundImage = `url('${songs[i].cover}')`;
        song.style.zIndex = total+1;
        covers.appendChild(song);

        reset_song(songs[i]);
    }

    for (i = songs.length - 1; i > current_index; i-=1) {
        const song = document.createElement('div');
        song.classList = 'after cover';
        song.id = `${i}`;
        song.style.backgroundImage = `url('${songs[i].cover}')`;
        song.style.zIndex = total - i;
        covers.appendChild(song);
    }
}

export default initialize_songs;