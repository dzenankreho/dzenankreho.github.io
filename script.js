const modeToggleButton = document.getElementById('mode-toggle');
const mobileModeToggleButton = document.getElementById('mobile-mode-toggle');
const html = document.documentElement;
const menu = document.getElementById("menu");
const header = document.querySelector("header");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function closeMobileMenu(){
    menu.classList.remove("active");
}

function toggleMobileMenu(){
	menu.classList.toggle("active");
}

modeToggleButton.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
});

mobileModeToggleButton.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
});


if (prefersDarkScheme.matches) {
    html.classList.add('dark-mode');
    modeToggleButton.checked = true;
    mobileModeToggleButton.checked = true;
} else {
    html.classList.remove('dark-mode');
    modeToggleButton.checked = false;
    mobileModeToggleButton.checked = false;
}

prefersDarkScheme.addEventListener("change", (e) => {
    if (e.matches) {
        html.classList.add('dark-mode');
        modeToggleButton.checked = true;
        mobileModeToggleButton.checked = true;
    } else {
        html.classList.remove('dark-mode');
        modeToggleButton.checked = false;
        mobileModeToggleButton.checked = false;
    }
});
