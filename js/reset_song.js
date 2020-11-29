function reset_song(song) {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const audio = document.getElementById('current-song');

    title.innerHTML = song.name;
    author.innerHTML = song.author;
    audio.src = song.src;
}

export default reset_song;