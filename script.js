const modeToggleButton = document.getElementById('mode-toggle');
const html = document.documentElement;
const menu = document.getElementById("menu");
const header = document.querySelector("header");

function closeMobileMenu(){
    menu.classList.remove("active");
}


function toggleMobileMenu(){
	menu.classList.toggle("active");
}


if (html.classList.contains('dark-mode')) {
    modeToggleButton.checked = true;
} else {
    modeToggleButton.checked = false;
}

modeToggleButton.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
});


// function debounce(func, wait) {
//     let timeout;
//     return function (...args) {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func.apply(this, args), wait);
//     };
// }

// window.addEventListener("scroll", debounce(() => {
//     if (window.matchMedia("(max-width: 1100px)")) {
//         if (window.scrollY === 0) {
//             header.style.position = "absolute";
//           } else {
//             header.style.position = "sticky";
//           }
//     } else {
//         header.style.position = "sticky";
//     }
// }, 10));


// function getScrollPercent() {
//     var h = document.documentElement, 
//         b = document.body,
//         st = 'scrollTop',
//         sh = 'scrollHeight';
//     return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
// }

// function changeCss () {
//     var navElement = document.querySelector("nav");
//     this.scrollY > 500 ? navElement.style.opacity = .8 : navElement.style.opacity = 1;
//   }

// window.addEventListener("scroll", () => {
//     if (getScrollPercent() == 0) {

//     } else {

//     }
// }, false);