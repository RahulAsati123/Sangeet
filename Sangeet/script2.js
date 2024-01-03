
const pageType = document.body.dataset.pageType;
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [];

if (pageType === 'top-trending') {
    // Load first 10 songs for Top Trending
    songs = [
        
       
        { songName: "Tu Hai Kahan - AUR", filePath: "songs/12.mp3", coverPath: "covers/12.jpg" },
        { songName: "Apna Bana Le - Arijit Singh", filePath: "songs/12.mp3", coverPath: "covers/13.jpg" },
        { songName: "Satranga - Arijit Singh", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" },
        { songName: "With You - AP Dhillon", filePath: "songs/15.mp3", coverPath: "covers/15.jpg" },
        { songName: "One Love - Shubh", filePath: "songs/16.mp3", coverPath: "covers/16.jpg" },
        { songName: "No Time To Die - Billie Eilish", filePath: "songs/17.mp3", coverPath: "covers/17.jpg" },
        { songName: "Choo Lo - The Local Train", filePath: "songs/18.mp3", coverPath: "covers/18.jpg" },
        { songName: "No Lie - Dua Lipa", filePath: "songs/19.mp3", coverPath: "covers/19.jpg" },
        { songName: "I Want It That Way - Backstreet Boys ", filePath: "songs/20.mp3", coverPath: "covers/20.jpg" },
        { songName: "Starboy - The Weeknd", filePath: "songs/21.mp3", coverPath: "covers/21.jpg" },
        { songName: "Gul - Anuv Jain", filePath: "songs/22.mp3", coverPath: "covers/22.jpg" },
        { songName: "Night Changes - One Direction", filePath: "songs/23.mp3", coverPath: "covers/23.jpg" },
      
        { songName: "Apna Bana Le - Arijit Singh", filePath: "songs/12.mp3", coverPath: "covers/13.jpg" },
        { songName: "Satranga - Arijit Singh", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" },
        { songName: "With You - AP Dhillon", filePath: "songs/15.mp3", coverPath: "covers/15.jpg" },
        { songName: "One Love - Shubh", filePath: "songs/16.mp3", coverPath: "covers/16.jpg" },
        { songName: "No Time To Die - Billie Eilish", filePath: "songs/17.mp3", coverPath: "covers/17.jpg" },
        { songName: "Choo Lo - The Local Train", filePath: "songs/18.mp3", coverPath: "covers/18.jpg" },
        { songName: "No Lie - Dua Lipa", filePath: "songs/19.mp3", coverPath: "covers/19.jpg" },
        { songName: "I Want It That Way - Backstreet Boys ", filePath: "songs/20.mp3", coverPath: "covers/20.jpg" },
        { songName: "Starboy - The Weeknd", filePath: "songs/21.mp3", coverPath: "covers/21.jpg" },
        { songName: "Gul - Anuv Jain", filePath: "songs/22.mp3", coverPath: "covers/22.jpg" },
        { songName: "Night Changes - One Direction", filePath: "songs/23.mp3", coverPath: "covers/23.jpg" }
        

        // First 10 songs for Top Trending
    ];
} else if (pageType === 'rahul-favourites') {
    // Load next 10 songs for Rahul's Favourites
    songs = [
        { songName: "Husn - Anuv Jain", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
        { songName: "In The Stars - Benson Boone", filePath: "songs/12.mp3", coverPath: "covers/2.jpg" },
        { songName: "Pehle Bhi Me - Vishal Mishra", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
        { songName: "Alag Aasmaan - Anuv Jain", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
        { songName: "Noor-E-Khuda - Shankar Ehsaan Loy", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
        { songName: "Viva La Vida - Coldplay", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
        { songName: "High Hopes - Panic At The Disco", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
        { songName: "Flowers - Miley Cyrus", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
        { songName: "Kinna Sona - Sunil Kamath", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
        { songName: "Coastline - Hollow Coves", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },
        { songName: "Love the way you Lie - Eminem", filePath: "songs/11.mp3", coverPath: "covers/11.png" }
        // { songName: "One Last Time - Ariana Grande", filePath: "songs/24.mp3", coverPath: "covers/24.jpg" }

        // Next 10 songs for Rahul's Favourites
    ];
}



songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

const playSong = (index) => {
    audioElement.src = songs[index].filePath;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
};

// Handle play/pause click
// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
