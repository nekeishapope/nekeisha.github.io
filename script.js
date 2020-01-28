

let event = document.getElementsByClassName('event-pic')
let time = 3000;
let image = [];
let i;
let menu;
let iconMenu;

    image[0] = 'image/coding-events4.jpg';
    image[1] = 'image/coding-events.jpg';
    image[2] = 'image/coding-events2.jpg';
    image[3] = 'image/coding-events3.jpg';

    let eventSlider = () =>{
        document.slide.src = image[i];
        if(i < image.length -1)
        {
            i++;
        }else{
            i = 0;
        }
        setTimeout("eventSlider()", time);
}
window.onload=eventSlider;

//MENU

menu = document.querySelectorAll(".dropdown");
iconMenu = document.getElementsByClassName("icon");
iconMenu.addEventListener("click", function(){
menu.style.display="block";
});

/*
function menu(){
    menu = document.querySelectorAll("button");
    if(menu.className === "nav-list"){
        menu.className += " responsive";
    }else{
        menu.className = "nav-list";
    }
}menu.style.display="block";
*/
