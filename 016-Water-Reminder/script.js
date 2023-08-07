const smallCups = document.querySelectorAll(".cup-small")
const percentage = document.getElementById("percentage");
const liters = document.getElementById("liters");
const remained = document.getElementById("remained");

const updateBigCup = () => {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;
    if(fullCups===0){
        percentage.style.height = 0;
        percentage.style.visibility="hidden";
    }else{
        percentage.style.visibility="visible";
        percentage.style.height = `${fullCups/totalCups*330}px`;
        percentage.innerText = `${(fullCups/totalCups*100)}%`;
    }
    if(fullCups===totalCups){
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    }
    else{
        remained.style.visibility = "visible";
        remained.innerText =  `${2 - (250*fullCups)/1000}L`;
    }
}

const highLightCups = (index) => {
    if(index===7 && smallCups[index].classList.contains("full")) index--;
    if(smallCups[index].classList.contains("full") && !smallCups[index].classList.contains("full")){
        index--;
    } 
    smallCups.forEach((cup,index2)=>{
        if(index2<=index) cup.classList.add("full");
        else cup.classList.remove("full");
    })
    updateBigCup();    
}

smallCups.forEach((cup,index)=>{
    cup.addEventListener('click',()=>highLightCups(index));
})

updateBigCup();