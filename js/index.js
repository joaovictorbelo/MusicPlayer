import initialize_songs from "./initialize_songs.js";

class Song {
    constructor(name, author, fileName) {
        this.name = name;
        this.author = author;
        this.src = `../assets/songs/${fileName}.mp3`;
        this.cover = `../assets/images/${fileName}.jpg`;
    }
}

const songs = [];

const current_index = 0;

songs.push(new Song('Sprouts of Time', 'Angra', 'TempleOfShadows'));
songs.push(new Song('Live and Let Die', 'Guns and Roses', 'UseYourIllusion'));
songs.push(new Song('Resistence', 'Muse', 'Resistence'));

initialize_songs(songs, current_index);