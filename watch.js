let timerdisplay=document.querySelector('.timerdisplay');
let stopbtn=document.getElementById('stopbtn');
let startbtn=document.getElementById('startbtn');
let resetbtn=document.getElementById('resetbtn');

var msec = 00;
var secs = 00;
var mins = 00;

var timerId = null;

startbtn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
   timerId = setInterval(starttimer,10);
});

stopbtn.addEventListener('click',function(){
    clearInterval(timerId);
});

resetbtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerdisplay.innerHTML = `00:00:00`;
    msec = 00;
    secs = 00;
    mins = 00;
    timerId = null;
});

function starttimer(){
    msec++;
    if(msec==100){
        msec=0;
        secs++;
        if(secs==60){
            secs = 0;
            mins++;
        }
    }
    // let msecString;
    // if(msec < 10){
    //     msecString = `0${msec}`;
    // }
    // else{
    //     msecString = msec;
    // }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerdisplay.innerHTML = `${minsString} : ${secsString} : ${msecString} ` ;
   
}

















































