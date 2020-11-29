function initialize_songs(songs, current_index) {

    const covers = document.querySelector('.covers');

    covers.textContent = '';
    
    let i;

    for (i = 0; i < current_index; i+=1) {
        const song = document.createElement('div');
        song.classList = 'before cover';
        song.id = `${i}`;
        song.style.backgroundImage = `url('${songs[i].cover}')`;
        covers.appendChild(song);
    }

    if (i === current_index) {
        const song = document.createElement('div');
        song.classList = 'current cover';
        song.id = `${i}`;
        song.style.backgroundImage = `url('${songs[i].cover}')`;
        covers.appendChild(song);

        const audio = document.getElementById('current-song');
        audio.src = songs[current_index].src;
    }

    for (i = songs.length - 1; i > current_index; i-=1) {
        const song = document.createElement('div');
        song.classList = 'after cover';
        song.id = `${i}`;
        song.style.backgroundImage = `url('${songs[i].cover}')`;
        covers.appendChild(song);
    }
}

export default initialize_songs;