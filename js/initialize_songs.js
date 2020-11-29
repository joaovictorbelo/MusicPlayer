function initialize_songs(songs, current_index) {

    const covers = document.querySelector('.covers');

    covers.textContent = '';
    
    let i;

    for (i = 0; i < current_index; i+=1) {
        const song = document.createElement('div');
        song.classList = 'before cover';
        song.style.backgroundImage = `url('${songs[i].cover}')`;
        song.style.zIndex = i+1;
        covers.appendChild(song);
    }

    if (i === current_index) {
        const song = document.createElement('div');
        song.classList = 'current cover';
        song.style.backgroundImage = `url('${songs[i].cover}')`;
        song.style.zIndex = songs.length + 1;
        covers.appendChild(song);
    }

    for (i = songs.length - 1; i > current_index; i-=1) {
        const song = document.createElement('div');
        song.classList = 'after cover';
        song.style.backgroundImage = `url('${songs[i].cover}')`;
        song.style.zIndex = songs.length - i;
        covers.appendChild(song);
    }
}

export default initialize_songs;