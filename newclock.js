let timerdisplay=document.querySelector('.timerdisplay');
let stopbtn=document.getElementById('stopbtn');
let startbtn=document.getElementById('startbtn');
let resetbtn=document.getElementById('resetbtn');

var mili = 00;
var msec = 00;
var secs = 00;
var mins = 00;
var myInterval;

startbtn.addEventListener('click', function(){
    myInterval = setInterval(timerFunction, 1000);
})
stopbtn.addEventListener('click', function(){
    clearInterval(myInterval); 
})
resetbtn.addEventListener('click', function(){
    clearInterval(myInterval);
    timerdisplay.innerHTML = `00:00:00`;
    mili = 00;
    msec = 00;
    secs = 00;
    mins = 00;
})


function timerFunction()
{
    // console.log(mili);
    msec = msec+1;
    if (msec == 60) {
        secs++;
        msec = 0;
    }
    if (secs == 60) {
        mins++;
        secs = 0;
    }

    if (msec < 10) {
        timerdisplay.innerHTML = mins+':'+secs+':0'+ msec;
    } else {
            timerdisplay.innerHTML = mins+':'+secs+':'+ msec;
        }
    timerdisplay.innerHTML = mins+':'+secs+':'+ msec;
}