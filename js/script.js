let playList = document.getElementById("play-list");
let thumbnail = document.getElementById("thumbnail");
let audioPlayer = document.getElementById("audioPlayer");
let gif1 = document.getElementById("gif1");
let gif2 = document.getElementById("gif2");
let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let downloadButton = document.getElementById("download-button");
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let progressBar = document.getElementById("progressBar");
let currentTime = 0;

let songs = [
    {
        id: 1,
        imageSrc: "https://1.bp.blogspot.com/-S6wPn6XzLak/XEXB-kBt2FI/AAAAAAAAGkk/QuP9ZIZXnt8P4-Q4CkyrTpujPBTCQZ06ACLcBGAs/s1600/aye_mere_watan_ke_logo_lyrics_in_hindi.jpeg",
        audioSrc: "https://pwdown.com/12514/Aye Mere Watan Ke Logo - Lata.mp3",
        title: "Aye Mere Watan Ke Logo - Lata Mangeshkar",
        duration: "06:23",
        download: "https://pwdown.com/12514/Aye%20Mere%20Watan%20Ke%20Logo%20-%20Lata.mp3"
    },
    {
        id: 2,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWN5EUXdBtZM4IPuFFSUTNSr2ul4Sy6iZM1g&usqp=CAU",
        audioSrc: "https://pwdown.com/110792/01. I Am A Disco Dancer.mp3",
        title: "I Am A Disco Dancer - Bappi Lahiri / Alisha Chinai",
        duration: "07:49",
        download: "https://pwdown.com/110792/01.%20I%20Am%20A%20Disco%20Dancer.mp3"
    },
    {
        id: 3,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_kSEuKPN22CZYI9yKWECQCpsVfhuxMa_trCCPrIXNPGRerAZmlgVVNQQlpeDaBqSnZQ&usqp=CAU",
        audioSrc: "https://pwdown.com/9302/05 Bhagwan Hai Kahan Re Tu - PK (Sonu Nigam)  - 190Kbps.mp3",
        title: "Bhagwan Hai Kahan Re Tu - Sonu Nigam",
        duration: "05:11",
        download: "https://pwdown.com/9302/05%20Bhagwan%20Hai%20Kahan%20Re%20Tu%20-%20PK%20(Sonu%20Nigam)%20%20-%20190Kbps.mp3"
    },
    {
        id: 4,
        imageSrc: "https://i.ytimg.com/vi/eWNqzgPr6S0/maxresdefault.jpg",
        audioSrc: "https://pwdown.com/113355/01. Mera Rang De Basanti Chola.mp3",
        title: "Mera Rang De Basanti Chola - Udit Narayan",
        duration: "04:37",
        download: "https://pwdown.com/113355/01.%20Mera%20Rang%20De%20Basanti%20Chola.mp3"
    },
    {
        id: 5,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPonlBsFrAybKqAAMEohg2oQgcOTHNR6Ylg&usqp=CAU",
        audioSrc: "https://pwdown.com/112988/03. Bum Bum Bole.mp3",
        title: "Bum Bum Bole - Shaan",
        duration: "05:33",
        download: "https://pwdown.com/112988/03.%20Bum%20Bum%20Bole.mp3"
    }
]

//Creating the playlist

function generatePlaylist() {
    let htmlString = "";
    songs.forEach(function (song) {
        let songHtml = `
                <div class="song">
                    <img src="${song.imageSrc}"
                        alt="" class="profile">
                    <marquee behavior="" direction="" class="title">${song.title}</marquee>
                    <div class="duration">${song.duration}</div>
                    <img src="./images/play-button.png" alt="" id="play-pause${song.id}" class="play-pause" onclick="playPauseDownload(${song.id})">
                </div>
        `
        htmlString += songHtml;
    })
    playList.innerHTML = htmlString;
}

generatePlaylist();

function makeAllPlays() {
    songs.forEach(element => {
        document.getElementById("play-pause" + element.id).src = "./images/play-button.png";
        audioPlayer.pause();
    })
}

function pauseSong(song, songid) {
    currentTime = audioPlayer.currentTime;
    audioPlayer.pause();
    gif1.style.opacity = 0;
    gif2.style.opacity = 0;
    progressBar.style.opacity = 0;
    makeAllPlays();
    document.getElementById("play-pause" + songid).addEventListener("click", () => { playSong(song, songid, currentTime) });
}

function playSong(song, songid, currentTime) {
    makeAllPlays();
    document.getElementById("play-pause" + songid).src = "./images/pause-button.png";
    document.getElementById("play-pause" + songid).addEventListener("click", () => { pauseSong(song, songid) });
    thumbnail.src = song.imageSrc;
    audioPlayer.src = song.audioSrc;
    gif1.style.opacity = 1;
    gif2.style.opacity = 1;
    progressBar.style.opacity = 1;
    audioPlayer.currentTime = currentTime;
    audioPlayer.play();
}

//Managing the Play, Pause and Download 
//This function will be called on clicking on the play button on the song card
function playPauseDownload(songid) {
    //This will fetch the song
    let song = songs.find(function (song) {
        return song.id === songid;
    })

    playSong(song, songid, 0);

    // Managing the play button
    playButton.addEventListener("click", () => {
        playSong(song, songid, currentTime);
    })

    // Managing the pause button
    pauseButton.addEventListener("click", () => {
        pauseSong(song, songid);
    })

    // Managing the download button
    downloadButton.addEventListener("click", () => {
        window.open(song.download, "_self");
    })

    //Managing Previous and Next buttons
    previousButton.addEventListener("click", () => { playPauseDownload(songid - 1) });
    nextButton.addEventListener("click", () => { playPauseDownload(songid + 1) });
}


//Managing the progressBar
//The progressbar's value will change according to the audio player
audioPlayer.addEventListener('timeupdate', () => {
    // Update Seekbar
    progressBar.value = parseInt((audioPlayer.currentTime / audioPlayer.duration) * 100);
})

//Managing the audio player according to progress bar
//On changing the progress bar, the audio player's progress bar will also change
progressBar.addEventListener('change', () => {
    audioPlayer.currentTime = progressBar.value * audioPlayer.duration / 100;
})
