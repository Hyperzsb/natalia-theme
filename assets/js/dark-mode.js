import {addOnloadFunction} from "./utils.js"

/* Functions for the dark mode */

// Change the global styles when click the dark mode switch
function enableDarkMode() {
    let colorSchemeSwitch = document.getElementById("color-scheme-switcher");

    let theme = "light";
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
    }

    if (localStorage.getItem("color-scheme")) {
        theme = localStorage.getItem("color-scheme");
    }

    document.documentElement.setAttribute("data-theme", theme);

    if (document.documentElement.getAttribute("data-theme") === "light") {
        if (colorSchemeSwitch.getElementsByTagName("i").item(0).classList.contains("bi-moon-fill")) {
            colorSchemeSwitch.getElementsByTagName("i").item(0).classList.remove("bi-moon-fill");
        }
        if (!colorSchemeSwitch.getElementsByTagName("i").item(0).classList.contains("bi-sun-fill")) {
            colorSchemeSwitch.getElementsByTagName("i").item(0).classList.add("bi-sun-fill");
        }
    } else {
        if (colorSchemeSwitch.getElementsByTagName("i").item(0).classList.contains("bi-sun-fill")) {
            colorSchemeSwitch.getElementsByTagName("i").item(0).classList.remove("bi-sun-fill");
        }
        if (!colorSchemeSwitch.getElementsByTagName("i").item(0).classList.contains("bi-moon-fill")) {
            colorSchemeSwitch.getElementsByTagName("i").item(0).classList.add("bi-moon-fill");
        }
    }

    colorSchemeSwitch.addEventListener("click", function () {
        if (document.documentElement.getAttribute("data-theme") === "light") {
            colorSchemeSwitch.getElementsByTagName("i").item(0).classList.replace("bi-sun-fill", "bi-moon-fill");
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("color-scheme", "dark");
        } else {
            colorSchemeSwitch.getElementsByTagName("i").item(0).classList.replace("bi-moon-fill", "bi-sun-fill");
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("color-scheme", "light");
        }
    });
}

addOnloadFunction(function () {
    enableDarkMode();
});