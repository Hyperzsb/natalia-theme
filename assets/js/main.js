/* Functions for header behavior */
function changeNavbarShadow() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let classList = document.getElementById("navbar").classList;
    if (scrollTop >= 10) {
        if (!classList.contains("custom-navbar-shadow-color"))
            classList.add("custom-navbar-shadow-color");
        if (classList.contains("p-4"))
            //classList.replace("p-4", "p-2");
            classList.remove("p-4")
    } else {
        if (classList.contains("custom-navbar-shadow-color"))
            classList.remove("custom-navbar-shadow-color");
        if (!classList.contains("p-4"))
            //classList.replace("p-2", "p-4");
            classList.add("p-4")
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

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        let loadingModal = document.getElementById("loading-modal");
        if (loadingModal != null) {
            let degree = 5;
            let interval = setInterval(function () {
                degree--;
                loadingModal.style.opacity = String(degree / 5);
                if (degree === 0) {
                    loadingModal.style.display = "none";
                    clearInterval(interval);
                }
            }, 50);
        }
        let mainContent = document.getElementById("main-content");
        mainContent.style.display = "block";
        let degree = 0;
        let interval = setInterval(function () {
            degree++;
            mainContent.style.opacity = String(degree / 5);
            if (degree === 5) {
                clearInterval(interval);
            }
        }, 50);
    }
}

window.addEventListener("scroll", changeNavbarShadow);

/* Load some event listeners */
window.onload = function () {
    changeNavbarTogglerIcon();
}