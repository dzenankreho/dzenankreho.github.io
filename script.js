const modeToggleButton = document.getElementById('mode-toggle');
const mobileModeToggleButton = document.getElementById('mobile-mode-toggle');
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

mobileModeToggleButton.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
});
