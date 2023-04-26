let timerdisplay=document.querySelector('.timerdisplay');
let stopbtn=document.getElementById('stopbtn');
let startbtn=document.getElementById('startbtn');
let resetbtn=document.getElementById('resetbtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

startbtn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
   timerId = setInterval(starttimer,1);
});

stopbtn.addEventListener('click',function(){
    clearInterval(timerId);
});

resetbtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerdisplay.innerHTML = `00:00:00`;
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

















































