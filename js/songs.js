class Song {
    constructor(name, author, albumName, fileName) {
        this.name = name;
        this.author = author;
        this.src = `./assets/songs/${fileName}.mp3`;
        this.cover = `./assets/images/${albumName}.jpg`;
    }
}

const songs = [];

songs.push(new Song('Sprouts of Time', 'Angra', 'TempleOfShadows', 'SproutsOfTime'));
songs.push(new Song('Live and Let Die', 'Guns and Roses', 'UseYourIllusion'));
songs.push(new Song('Resistence', 'Muse', 'Resistence'));

export default songs;
