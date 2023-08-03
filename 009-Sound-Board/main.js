const sounds = ["applause","boo","gasp","tada","victory","wrong"];
const buttons = document.getElementById("buttons");

const stopSound = () => {
    sounds.forEach((sound)=>{
        const currentSound = document.getElementById(sound);
        currentSound.pause();
        currentSound.currentTime - 0;
    });
}

sounds.forEach((sound)=>{
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
    btn.addEventListener("click",()=>{
        stopSound();
        document.getElementById(sound).play();
    })
    buttons.appendChild(btn);
})