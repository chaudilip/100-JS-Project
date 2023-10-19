const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endgameElement = document.getElementById("end-game-container");
const settingsButton = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words for game
const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];

let randomWord;
let time = 10;
let score = 0;

let difficulty = localStorage.getItem("difficulty") != null ? localStorage.getItem("difficulty") : "medium";

const timeInterval = setInterval(updateTime,1000); 

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom(){
    randomWord = getRandomWord();
    word.innerText = randomWord;
}

function updateTime(){
    time--;
    timeElement.innerText = time + "s";
    if(time === 0){
        clearInterval(timeInterval);
        gameOver();
    }
}

function updateScore(){
    score++;
    scoreElement.innerText = score;
}

function gameOver(){
    endgameElement.innerHTML  = `
    <h1>Time ran out</h1>
    <p>Your final score : ${score}</p>
    <button onClick="history.go(0)">Play Again!</button>
    `;
    endgameElement.style.display = "flex";
}

text.addEventListener("input",(e)=>{
    const insertedText = e.target.value;
    if(insertedText === randomWord){
        e.target.value = "";
        addWordToDom();
        updateScore();
        if(difficulty ==="hard") time += 2;
        else if(difficulty === "medium") time += 3;
        else time += 5;
        updateTime();
    }
})

settingsButton.addEventListener("click",()=>{
    settings.classList.toggle("hide");
})

settingsForm.addEventListener("change",(e)=>{
    difficulty = e.target.value;
    localStorage.setItem("difficulty",difficulty);
})

difficultySelect.value = difficulty;
addWordToDom();
text.focus();