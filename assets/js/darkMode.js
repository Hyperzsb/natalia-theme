/* Functions for the dark mode */

// Change the global styles when click the dark mode switch
function enableDarkMode() {
    let darkModeSwitch = document.getElementById("darkModeSwitch");
    let localDarkModeSetting = localStorage.getItem("darkMode");

    let baseUrl = getScriptParameter("dark-mode-script", "baseUrl")
    if (localDarkModeSetting != null) {
        darkModeSwitch.checked = localDarkModeSetting === "true";
        if (localDarkModeSetting === "true") {
            loadStylesheet(baseUrl + "/assets/css/dark.css");
            // removeStylesheet(baseUrl + "/assets/css/light.css");
        }
    }

    darkModeSwitch.addEventListener("click", function () {
        if (darkModeSwitch.checked) {
            loadStylesheet(baseUrl + "/assets/css/dark.css");
            // removeStylesheet(baseUrl + "/assets/css/light.css");
        } else {
            loadStylesheet(baseUrl + "/assets/css/light.css");
            // removeStylesheet(baseUrl + "/assets/css/dark.css");
        }
        localStorage.setItem("darkMode", darkModeSwitch.checked.toString());
    });
}

addOnloadFunction(function () {
    enableDarkMode();
});