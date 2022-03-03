/* Functions for header behavior */
function changeNavbarShadow() {
    let threshold = 10;
    let offset = 10;
    let fromAbove = true;

    return () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let classList = document.getElementById("navbar").classList;
        if (scrollTop > threshold) {
            if (fromAbove) {
                fromAbove = false;
                threshold -= offset;
            }
            if (!classList.contains("custom-navbar-shadow-color"))
                classList.add("custom-navbar-shadow-color");
            if (classList.contains("p-4"))
                //classList.replace("p-4", "p-2");
                classList.remove("p-4")
        } else {
            if (!fromAbove) {
                fromAbove = true;
                threshold += offset;
            }
            if (classList.contains("custom-navbar-shadow-color"))
                classList.remove("custom-navbar-shadow-color");
            if (!classList.contains("p-4"))
                //classList.replace("p-2", "p-4");
                classList.add("p-4")
        }
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

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        let loadingModal = document.getElementById("loading-modal");
        let mainContent = document.getElementById("main-content");
        setTimeout(() => {
            if (loadingModal != null) {
                let degree = 5;
                let interval = setInterval(() => {
                    degree--;
                    loadingModal.style.opacity = String(degree / 5);
                    if (degree === 0) {
                        loadingModal.remove();
                        clearInterval(interval);
                    }
                }, 50);
                mainContent.style.display = "block";
                let degreeContent = 0;
                let intervalContent = setInterval(() => {
                    degreeContent++;
                    mainContent.style.opacity = String(degreeContent / 5);
                    if (degreeContent === 5) {
                        clearInterval(intervalContent);
                    }
                }, 50);
            } else {
                mainContent.style.display = "block";
                mainContent.style.opacity = "1";
            }
        }, () => {
            if (loadingModal != null)
                return 500;
            else
                return 5;
        });
    }
}

window.addEventListener("scroll", _.throttle(changeNavbarShadow(), 100));

/* Load some event listeners */
window.onload = function () {
    changeNavbarTogglerIcon();
}