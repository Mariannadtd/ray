
const hamburger = document.querySelector("#hamburger");
    popup = document.querySelector("#popup");
    body = document.body;

hamburger.addEventListener("click", hamburgerHandler);

function hamburgerHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamburger.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}