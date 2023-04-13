const themeSwitch = document.getElementById("theme-switch");
const themeIcon = document.getElementById("theme-icon");
const themeMessage = document.getElementById("theme-message");
const contributeLink = document.getElementById("contribute-link");
let darkModeOn = false;


themeSwitch.addEventListener("change", () => {
    if (!darkModeOn) {
        // Update the UI to the dark mode
        updateUIToDark();
    }
    else {
        // Update the UI to the light mode
        updateUIToLight();
    }
    // Update the theme mode applied
    darkModeOn = !darkModeOn;
});


function updateUIToDark() {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    themeMessage.textContent = "Switch Off Dark Mode";
    contributeLink.classList.remove("contribute-link-light-mode");
    contributeLink.classList.add("contribute-link-dark-mode");
    document.querySelector(".card-head").classList.add("dark-theme");
    document.querySelector(".card-body").classList.add("dark-theme");
    document.querySelector(".card-content").classList.add("dark-theme");
    document.querySelector(".card-foot").classList.add("dark-theme");
}

function updateUIToLight() {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    themeMessage.textContent = "Switch On Dark Mode";
    contributeLink.classList.remove("contribute-link-dark-mode");
    contributeLink.classList.add("contribute-link-light-mode");
    document.querySelector(".card-head").classList.remove("dark-theme");
    document.querySelector(".card-body").classList.remove("dark-theme");
    document.querySelector(".card-content").classList.remove("dark-theme");
    document.querySelector(".card-foot").classList.remove("dark-theme");
}