let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let nav = document.querySelector("nav");

function openHamburger(){
    if(nav.style.display === "flex"){
        nav.style.display = "none";
        close.style.display = "none"
        hamburger.style.display = "flex"
    }else{
        nav.style.display = "flex",
        close.style.display = "flex",
        hamburger.style.display = "none"
    }
}

hamburger.addEventListener("click", openHamburger);
close.addEventListener("click", openHamburger)