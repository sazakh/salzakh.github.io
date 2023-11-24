const Menbar = document.querySelector(" .menu-bar");
const Mennav = document.querySelector(" .menu-navigation");

Menbar.addEventListener("click", function (){
    Mennav.classList.toggle("menu-active");
}
);
