let timerdisplay=document.querySelector('.timerdisplay');
let stopbtn=document.getElementById('stopbtn');
let startbtn=document.getElementById('startbtn');
let resetbtn=document.getElementById('resetbtn');

let msec = 00;
let secs = 00;
let mins = 00;

startbtn.addEventListener('click', function(){
    setInterval(() => {
        
    }, interval);
    timerdisplay.innerHTML = mins+':'+secs+':'+ msec;
})