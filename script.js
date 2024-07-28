const audio= document.getElementsByClassName('audio')[0];
const playbtn =document.getElementsByClassName('play-button')[0];
const playpic=document.getElementsByClassName('play-svg')[0];
const pausepic=document.getElementsByClassName('pause-svg')[0];
const backbtn=document.getElementsByClassName('back-button')[0];
const forwardbtn=document.getElementsByClassName('forward-button')[0];
const Title= document.getElementsByClassName('title')[0];
const artist=document.getElementsByClassName('artist')[0];
let songs=[
    {Title:'song1',
     Artist:'artist1',
     Song:'IELTS13-Tests1-4CD1Track_01',   
    },
    {Title:'song2',
        Artist:'artist2',
        Song:'IELTS13-Tests1-4CD1Track_02',   
    },
    {Title:'song3',
        Artist:'artist3',
        Song:'IELTS13-Tests1-4CD1Track_03',   
    },
];
let i=0;
let playtoggle= true;
function play(){
    audio.play();
    playtoggle = false;
    pausepic.style.display = "block";
    playpic.style.display = "none";
}
function pause(){
    audio.pause();
    playtoggle= true;
    playpic.style.display = "block";
    pausepic.style.display = "none";  
}
function direct(){
if (playtoggle == true)
    play();
else
    pause();
}
function for_back_btn(i){
Title.innerHTML=songs[i].Title;
artist.innerHTML=songs[i].Artist;
// audio.src=songs[i].Song.mp3;
audio.src=`music/${songs[i].Song}.mp3`;
direct();
}
function back(){
    if(i<0) 
       { i=0;}
    else
        {i--;}
    for_back_btn(i);
}
function forw(){
    if(i>2) 
        { i=2;}
     else
         {i++;}
    for_back_btn(i);
}