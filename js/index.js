import initialize_songs from "./initialize_songs.js";
import reset_song from "./reset_song.js";

class Song {
    constructor(name, author, albumName, fileName) {
        this.name = name;
        this.author = author;
        this.src = `../assets/songs/${fileName}.mp3`;
        this.cover = `../assets/images/${albumName}.jpg`;
    }
}

const songs = [];

let current_index = 0;

songs.push(new Song('Sprouts of Time', 'Angra', 'TempleOfShadows', 'SproutsOfTime'));
songs.push(new Song('Live and Let Die', 'Guns and Roses', 'UseYourIllusion'));
songs.push(new Song('Resistence', 'Muse', 'Resistence'));

initialize_songs(songs, current_index);

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

next.addEventListener('click', () => {
    
    if(current_index != songs.length -1){
        const current_song = document.getElementById(`${current_index}`);
        current_song.classList = 'before cover';

        const next_song = document.getElementById(`${current_index + 1}`);
        next_song.classList = 'current cover';

        current_index += 1;

        reset_song(songs[current_index]);
    }
});

prev.addEventListener('click', () => {
    
    if(current_index != 0){

        const current_song = document.getElementById(`${current_index}`);
        current_song.classList = 'after cover';

        const prev_song = document.getElementById(`${current_index - 1}`);
        prev_song.classList = 'current cover';

        current_index -= 1;

        reset_song(songs[current_index]);
    }
});