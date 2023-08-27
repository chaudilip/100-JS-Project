const resultElement  = document.getElementById("result");
const lengthElement = document.getElementById("length");

const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numbersElement = document.getElementById("numbers");
const symbolElement = document.getElementById("symbols");
const generateElement = document.getElementById("generate");
const clipboardElement = document.getElementById("clipboard");

const getRandomLower = ()=>{
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getRandomUpper = ()=>{
   return  String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}

const getRandomNumber = ()=>{
    return   String.fromCharCode(Math.floor(Math.random() * 26) +48);
}

const getRandomSymbol = ()=>{
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() ) * symbols.length];
}

const randomFunctions = {
    upper:getRandomUpper,
    lower:getRandomLower,
    number:getRandomNumber,
    symbol:getRandomSymbol
}

const createNotification = (message) => {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = message;
    document.body.appendChild(notif);
    setTimeout(()=> notif.remove(),3000);
}

clipboardElement.addEventListener("click",()=>{
    const password = resultElement.innerText;
    if(!password) return;
    const textArea = document.createElement("textarea");
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    createNotification("Password Copied to Clipboard");
})

generateElement.addEventListener("click",()=>{
    const length = +lengthElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolElement.checked;
    resultElement.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length);
})

const generatePassword = (lower,upper,number,symbol,length) => {
    let generatedPassword = "";
    const typeCount = lower + upper + number + symbol;
    const typeArr = [{lower},{upper},{number},{symbol}].filter((item)=>Object.values(item)[0]);
    if(typeCount===0) return "";
    for(let i=0; i<length; i+=typeCount){
        typeArr.forEach((type)=>{
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunctions[funcName]();
        })
    }
    const finalPassword =  generatedPassword.slice(0,length);
    return finalPassword;
}

