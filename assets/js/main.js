/* Functions for the header's behavior */

// Display and hide the shadow of the navbar when scrolling
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

// Add the event listener of "scroll" to window object
window.addEventListener("scroll", _.throttle(changeNavbarShadow(), 100));

// Change the icon of the toggler of the navbar when in mobile mode.
function changeNavbarTogglerIcon() {
    document.getElementById("navbar-toggler").addEventListener("click", function () {
        let classList = this.firstElementChild.classList;
        if (classList.contains("bi-arrows-expand"))
            classList.replace("bi-arrows-expand", "bi-arrows-collapse");
        else
            classList.replace("bi-arrows-collapse", "bi-arrows-expand");
    })
}

/* Functions for the modal's behavior */
// Show and hide the modal and the main content
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

/* Functions for the contents' behavior rendered from Markdown */

// Change the "click" event's behavior of links
function smoothScroll() {
    let tocContainer = document.getElementById("toc");
    if (tocContainer) {
        let links = tocContainer.getElementsByTagName("a");
        for (let link of links) {
            link.addEventListener("click", function (ev) {
                window.scrollTo({
                    top: (document.getElementById(link.attributes["href"].value.substr(1)).offsetTop - 100),
                    behavior: "smooth"
                });
                ev.preventDefault();
            })
        }
    }
    let markdownContainer = document.getElementById("markdown");
    if (markdownContainer) {
        let raw_links = markdownContainer.getElementsByTagName("a");
        let links = [];
        for (let raw_link of raw_links)
            if (raw_link.attributes["href"].value[0] === "#") {
                links.push(raw_link);
            }
        for (let link of links) {
            link.addEventListener("click", function (ev) {
                window.scrollTo({
                    top: (document.getElementById(link.attributes["href"].value.substr(1)).offsetTop - 100),
                    behavior: "smooth"
                });
                ev.preventDefault();
            })
        }
    }
}

/* Load some event listeners */
window.onload = function () {
    changeNavbarTogglerIcon();
    smoothScroll();
}