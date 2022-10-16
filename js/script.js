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
    },
    {
        id: 2,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWN5EUXdBtZM4IPuFFSUTNSr2ul4Sy6iZM1g&usqp=CAU",
        audioSrc: "https://pwdown.com/110792/01. I Am A Disco Dancer.mp3",
        title: "I Am A Disco Dancer - Bappi Lahiri / Alisha Chinai",
        duration: "07:49",
    },
    {
        id: 3,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_kSEuKPN22CZYI9yKWECQCpsVfhuxMa_trCCPrIXNPGRerAZmlgVVNQQlpeDaBqSnZQ&usqp=CAU",
        audioSrc: "https://pwdown.com/9302/05 Bhagwan Hai Kahan Re Tu - PK (Sonu Nigam)  - 190Kbps.mp3",
        title: "Bhagwan Hai Kahan Re Tu - Sonu Nigam",
        duration: "05:11",
    },
    {
        id: 4,
        imageSrc: "https://i.ytimg.com/vi/R2HQGNuIY-Y/maxresdefault.jpg",
        audioSrc: "https://pwdown.com/12308/02 Yeh Dosti Hum Nahin (Happy Versio - Sholay 320Kbps.mp3",
        title: "Yeh Dosti Hum Nahin Todenge - Kishore Kumar",
        duration: "05:21"
    },
    {
        id: 5,
        imageSrc: "https://i.ytimg.com/vi/eWNqzgPr6S0/maxresdefault.jpg",
        audioSrc: "https://pwdown.com/113355/01. Mera Rang De Basanti Chola.mp3",
        title: "Mera Rang De Basanti Chola - Udit Narayan",
        duration: "04:37",
        download: "https://pwdown.com/113355/01.%20Mera%20Rang%20De%20Basanti%20Chola.mp3"
    },
    {
        id: 6,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPonlBsFrAybKqAAMEohg2oQgcOTHNR6Ylg&usqp=CAU",
        audioSrc: "https://pwdown.com/112988/03. Bum Bum Bole.mp3",
        title: "Bum Bum Bole - Shaan",
        duration: "05:33",
    },
    {
        id: 7,
        imageSrc: "https://www.hinditracks.in/wp-content/uploads/2014/01/Holi-Ke-Din-Lyrics.jpg",
        audioSrc: "https://pwdown.com/12308/05 Holi Ke Din - Sholay 320Kbps.mp3",
        title: "Holi Ke Din - Lata Mangeshkar / Kishore Kumar",
        duration: "05:42"
    },
    {
        id: 8,
        imageSrc: "https://i.scdn.co/image/ab67616d0000b273261cc572f6df52bfd2ad5743",
        audioSrc: "https://cdn.pagalworld.us/songs/new/192/06 - Pardesi Pardesi - RH (1996).mp3",
        title: "Pardesi Pardesi - Alka Yagnik / Udit Narayan",
        duration: "08:18"
    },
    {
        id: 9,
        imageSrc: "https://c-fa.cdn.smule.com/rs-s80/arr/5d/3a/58a00447-27d6-4fe4-9f74-52222985c4fe.jpg",
        audioSrc: "https://pwdown.com/14044/Sara Zamana - Amitabh Bachchan - old.mp3",
        title: "Sara Zamana - Kishore Kumar / Rajesh Roshan",
        duration: "04:26"
    },
    {
        id: 10,
        imageSrc: "https://i.scdn.co/image/ab67616d0000b27387949e581897a3ac4814840e",
        audioSrc: "https://pwdown.com/14654/Paisa Yeh Paisa - Old Original.mp3",
        title: "Paisa Yeh Paisa - Kishore Kumar / Laxmikant Pyarelal",
        duration: "05:07"
    },
    {
        id: 11,
        imageSrc: "https://i.ytimg.com/vi/JI4_bSQ8560/mqdefault.jpg",
        audioSrc: "https://pwdown.com/12513/Sandese Aate Hain - Border.mp3",
        title: "Sandese Aate Hain - Sonu Nigam / Roop Kumar Rathod",
        duration: "10:25"
    },
    {
        id: 12,
        imageSrc: "https://i.ytimg.com/vi/i1zuhY6hZvw/maxresdefault.jpg",
        audioSrc: "https://pwdown.com/113632/Aanewala Pal Janewala Hai - LoFi.mp3",
        title: "Aanewala Pal Janewala Hai - Kishore Kumar",
        duration: "03:26"
    },
    {
        id: 13,
        imageSrc: "https://static.toiimg.com/photo/msid-71106480/71106480.jpg?167245",
        audioSrc: "https://pwdown.com/12283/06 Tujhe Dekha To - DDLJ 320Kbps.mp3",
        title: "Tujhe Dekha Toh Yeh Jana Sanam - Lata Mangeshkar / Kumar Sanu",
        duration: "06:41"
    },
    {
        id: 14,
        imageSrc: "https://i.ytimg.com/vi/UIvpNrP4WQs/maxresdefault.jpg",
        audioSrc: "https://pwdown.com/11394/Chalo Bulawa Aaya Hai Mata Ne - 320Kbps.mp3",
        title: "Chalo Bulawa Aaya Hai Mata Ne Bulaya Hai - Asha Bhosle / Laxmikant Pyarelal",
        duration: "08:34"
    },
    {
        id: 15,
        imageSrc: "https://i.ytimg.com/vi/3ouPNT7PWQU/mqdefault.jpg",
        audioSrc: "https://pwdown.com/12513/Watan Walo - Indian.mp3",
        title: "Watan Walo Watan Na Bech Dena -  Anand Raj Anand / Roopkumar Rathod",
        duration: "06:40"
    },
    {
        id: 16,
        imageSrc: "https://www.khaskhabar.com/s3-storage/khaskhabar/khaskhabarimages/img500/1471958620-khaskhabar.jpg",
        audioSrc: "https://pwdown.com/8436/My Name Is Lakhan (Ram Lakhan) - Original 320Kbps.mp3",
        title: "My Name is Lakhan - Anuradha Paudwal / Laxmikant Pyarelal",
        duration: "07:10"
    },
    {
        id: 17,
        imageSrc: "https://i.ytimg.com/vi/_UGwE05eti0/maxresdefault.jpg",
        audioSrc: "https://pwdown.com/12514/Meri Shaan Tiranga Hai - Tiranga.mp3",
        title: "Meri Shaan Tiranga Hai - Mohammad Aziz / Laxmikant Pyarelal",
        duration: "04:28"
    },
    {
        id: 18,
        imageSrc: "https://i.ytimg.com/vi/_bOHNz6lH6Y/hqdefault.jpg",
        audioSrc: "https://cdn.pagalworld.us/songs/bollywood/Lagaan 2001 - O Mitwa Sun Mitwa.mp3",
        title: "O Mitwa Sun Mitwa - Alka Yagnik / Udit Narayan",
        duration: "06:47"
    },
    {
        id: 19,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilW0VZ4tKro_l27JMF1WmwaywZUvPD2OlvSRbKqb8UUmaLwvo_fqCNbZ1H7kMJ84zQnI&usqp=CAU",
        audioSrc: "https://pwdown.com/12514/Aye Watan Aye Watan - Shaheed.mp3",
        title: "Aye Watan Aye Watan - Mohammad Rafi",
        duration: "03:35"
    },
    {
        id: 20,
        imageSrc: "https://c-fa.cdn.smule.com/rs-s38/arr/57/9d/eaf303d9-2650-4956-bb3b-93f3e1256171.jpg",
        audioSrc: "https://cdn.pagalworld.us/songs/new/128/08 - Ladki Badi Anjaani Hai - PagalSongs.com.mp3",
        title: "Ladki Badi Anjani Hai - Alka Yagnik / Kumar Sanu",
        duration: "06:21"
    },
    {
        id: 21,
        imageSrc: "https://timesofindia.indiatimes.com/photo/61258897.cms",
        audioSrc: "https://cdn.pagalworld.us/songs/bollywood/KMG 2003 - Koi Mil Gaya.mp3",
        title: "Koi Mil Gaya - Alka Yagnik / Udit Narayan",
        duration: "7:14"
    },
    {
        id: 22,
        imageSrc: "https://1.bp.blogspot.com/-DqpncAM7qBw/WIDDJtb0yLI/AAAAAAAADTQ/UqaGqwNlDAcJPqBua0ZA2PYoPoDcVTb-ACLcB/w1200-h630-p-k-no-nu/Kadam%2BKadam%2BBadhaye%2BJa%252C%2BKhushi%2BKe%2BGeet%2BGaye%2BJa%2BNetaji%2BSubhas%2BChandra%2BBose%2BThe%2BForgotten%2BHero%2B%25282005%2529.jpg",
        audioSrc: "https://pwdown.com/111626/06. Ekla Cholo Re.mp3",
        title: "Ekla Cholo Re - Sonu Nigam / Nachiketa Chakraborty",
        duration: "05:13"
    },
    {
        id: 23,
        imageSrc: "https://i.scdn.co/image/ab67616d0000b273d2be316742edcc853ea55141",
        audioSrc: "https://cdn.pagalworld.us/songs/bollywood/Fanaa 2006 - Chand Sifarish.mp3",
        title: "Chand Sifarish - Shaan / Kailash Kher",
        duration: "05:21"
    },
    {
        id: 24,
        imageSrc: "https://sldhnecdnems05.cdnsrv.jio.com/c.saavncdn.com/890/Imtihan-Hindi-1974-500x500.jpg",
        audioSrc: "https://cdn.pagalworld.us/songs/old/Imtihan-Ruk Jaana Nahin.mp3",
        title: "Ruk Jana Nahin - Laxmikant Pyarelal",
        duration: "06:41",
    },
    {
        id: 25,
        imageSrc: "https://c-fa.cdn.smule.com/rs-s77/arr/e1/28/eb173a83-4a78-4bcb-bec9-c56b65743aa5_1024.jpg",
        audioSrc: "https://cdn.pagalworld.us/songs/bollywood/Fanaa 2006 - Chanda Chamke.mp3",
        title: "Chanda Chamke - Mahalakshmi Iyer / Babul Supriyo",
        duration: "03:49",
    },
    {
        id: 26,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rY5PX1dqFZg5sQyT5jcG5HDchZ0y7j7Wuw&usqp=CAU",
        audioSrc: "https://cdn.pagalworld.us/songs/bollywood/OSO 2007 - Deewangi Deewangi.mp3",
        title: "Deewangi Deewangi - Shaan",
        duration: "05:54",
    },
    {
        id: 27,
        imageSrc: "https://cdn.quotesgram.com/img/68/8/1569531603-omshantiom_18_10x7.jpg",
        audioSrc: "https://cdn.pagalworld.us/songs/bollywood/OSO 2007 - Om Shanti Om - Medley Mix.mp3",
        title: "Om Shanti Om - Shreya Ghosal / Shaan",
        duration: "06:08",
    },
    {
        id: 28,
        imageSrc: "https://i.ytimg.com/vi/2liZ16dgBgg/maxresdefault.jpg",
        audioSrc: "https://cdn.pagalworld.us/songs/bollywood/Sarfarosh1999 - Zindagi Maut Na Ban.mp3",
        title: "Zindagi Maut Na Ban Jaye - Sonu Nigam / Roopkumar Rathod",
        duration: "06:19",
    },
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
        window.open(song.audioSrc, "_self");
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
