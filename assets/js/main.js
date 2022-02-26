/* Functions for header behavior */
function changeNavbarShadow() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let classList = document.getElementById("navbar").classList;
    if (scrollTop >= 10) {
        if (!classList.contains("custom-navbar-shadow-color"))
            classList.add("custom-navbar-shadow-color");
        if (classList.contains("p-4"))
            classList.replace("p-4", "p-2");
    } else {
        if (classList.contains("custom-navbar-shadow-color"))
            classList.remove("custom-navbar-shadow-color");
        if (classList.contains("p-2"))
            classList.replace("p-2", "p-4");
    }
}

function changeNavbarTogglerIcon() {
    document.getElementById("navbar-toggler").addEventListener("click", function () {
        let classList = this.firstElementChild.classList;
        if (classList.contains("bi-arrows-expand"))
            classList.replace("bi-arrows-expand", "bi-arrows-collapse");
        else
            classList.replace("bi-arrows-collapse", "bi-arrows-expand");
    })
}

window.addEventListener("scroll", changeNavbarShadow);

/* Load some event listeners */
window.onload = function () {
    changeNavbarTogglerIcon();
}