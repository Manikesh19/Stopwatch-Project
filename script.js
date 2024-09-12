
const display = document.getElementById("display");//reference to the display id
let timer=null;//timer holds the id of setInterval so we can keep track of it and stopit if we need to
let startTime=0;
let elapsedTime=0;
let isRunning=false;//if stopwatch is running we flip it to be true  and false to stop it

function start() {

    if(!isRunning) {
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        console.log(timer);
        isRunning= true;
    }
}

function stop() {

    if(isRunning) {
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isRunning=false;
    }
}

function reset() {
    clearInterval(timer);
    timer=null;
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    display.textContent="00:00:00:00";
}

function update() {

    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;

    let hours=Math.floor(elapsedTime / (1000* 60* 60));
    let minutes=Math.floor(elapsedTime / (1000 * 60) %60);
    let seconds=Math.floor(elapsedTime / 1000 % 60);
    let milliseconds=Math.floor(elapsedTime % 1000 / 10);

    //we will convert hours,minutes,seconds and milliseconds to string to add a padding of 0 when they are of one digit
    hours = String(hours).padStart(2,"0");
    minutes= String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");

    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`; //accessing text content of the display
}
 