const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById("profile-img");
const name = document.getElementById('name');
const date = document.getElementById('date');
const today = new Date();

const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]

const animate_bgs = document.querySelectorAll('.animated-bg');
const animate_bgs_texts = document.querySelectorAll(".animated-bg-text");

const getDate = () => {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1610751399547-46ad575447cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />';
    title.innerHTML = "Lorem inpusim dolor is lorem";
    excerpt.innerHTML =     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
    profile_img.innerHTML =    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
    name.innerHTML = "John Doe";
    date.innerHTML = `${
        monthNames[today.getMonth()]
    } ${today.getDate()}, ${today.getFullYear()}`;
    animate_bgs.forEach((background)=>{
        background.classList.remove('animated-bg');
    });
    animate_bgs_texts.forEach((background)=>{
        background.classList.remove("animated-bg-text");
    })
}

setTimeout(getDate,2500);