const container = document.getElementById('container');
const text = document.getElementById("text");

const totalTime = 19000;
const breathTime = 4000;
const holdTime = 7000;

function breatheAnimation(){
    text.innerText = "Breath In!";
    container.className = "container grow";
    setTimeout(()=>{
        text.innerText = "Hold";
        setTimeout(()=>{
            text.innerText = "Breath Out!";
            container.className = "container shrink";
        },holdTime);
    },breathTime)
}

setInterval(breatheAnimation,totalTime);
breatheAnimation();