const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  const x = e.clientX;
  const y = e.clientY;
  const leftOffSet = e.target.offsetLeft;
  const topOffSet = e.target.offsetTop;
  const xInside = x - leftOffSet;
  const yInside = y - topOffSet;
  heart.style.left = `${xInside}px`;
  heart.style.top = `${yInside}px`;
  loveMe.appendChild(heart);
  times.innerHTML = ++timesClicked;
  setTimeout(() => heart.remove(), 1000);
};

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    // If the previous clickTime is 0, it means there's no recent click
    clickTime = new Date().getTime(); // Store the current time of the click
  } else {
    // If the previous clickTime is not 0, it means there was a recent click
    if (new Date().getTime() - clickTime < 800) {
      // Check if the time elapsed between the previous click and the current click is less than 800 milliseconds
      createHeart(e); // If it is, trigger the createHeart function to add a heart element
      clickTime = 0; // Reset the clickTime to 0 for the next potential double click
    } else {
      // If the time elapsed is greater than or equal to 800 milliseconds, it's not a double click
      clickTime = new Date().getTime(); // Store the current time for potential future double clicks
    }
  }
});
