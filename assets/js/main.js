import {addOnloadFunction} from "./utils.js"

/* Functions for the loading modal */

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
            if (loadingModal != null) {
                return 500;
            } else {
                return 5;
            }
        });
    }
}

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
            if (!classList.contains("custom-navbar-border")) {
                classList.add("custom-navbar-border");
            }
        } else {
            if (!fromAbove) {
                fromAbove = true;
                threshold += offset;
            }
            if (classList.contains("custom-navbar-border")) {
                classList.remove("custom-navbar-border");
            }
        }
    };
}

// Add the event listener of "scroll" to window object
window.addEventListener("scroll", _.throttle(changeNavbarShadow(), 100));

// Display and update the progress bar of the article
function updateProgressBar() {
    let progressBar = document.getElementById("article-progress-bar");
    if (progressBar) {
        let scrollHeight = document.documentElement.scrollHeight;
        let widowHeight = window.screen.height;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let progress = (scrollTop / (scrollHeight - widowHeight) * 100).toFixed(2);
        if (progress <= 100) {
            progressBar.style.width = progress.toString() + "%";
        } else {
            progressBar.style.width = "100%";
        }
    }
}

// Add the event listener of "scroll" to window object
window.addEventListener("scroll", _.throttle(updateProgressBar, 100));

// Change the icon of the toggler of the navbar when in mobile mode.
function changeNavbarTogglerIcon() {
    document.getElementById("navbar-toggler").addEventListener("click", function () {
        let classList = this.firstElementChild.classList;
        if (classList.contains("bi-arrows-expand")) {
            classList.replace("bi-arrows-expand", "bi-arrows-collapse");
        } else {
            classList.replace("bi-arrows-collapse", "bi-arrows-expand");
        }
    });
}

/* Functions for the contents' behavior rendered from Markdown */

// Change the "click" event's behavior of links
function enableSmoothScrollOfLinksInMarkdown() {
    let header = document.getElementsByTagName("header").item(0);
    let tocContainer = document.getElementById("toc");
    if (tocContainer) {
        let links = tocContainer.getElementsByTagName("a");
        for (let link of links) {
            link.addEventListener("click", function (ev) {
                window.scrollTo({
                    top: (document.getElementById(decodeURI(link.attributes["href"].value.slice(1))).offsetTop - header.offsetHeight),
                    behavior: "smooth"
                });
                ev.preventDefault();
            });
        }
    }
    let markdownContainer = document.getElementById("markdown");
    if (markdownContainer) {
        let rawLinks = markdownContainer.getElementsByTagName("a");
        let links = [];
        for (let rawLink of rawLinks) {
            if (rawLink.attributes["href"].value[0] === "#") {
                links.push(rawLink);
            }
        }
        for (let link of links) {
            link.addEventListener("click", function (ev) {
                window.scrollTo({
                    top: (document.getElementById(decodeURI(link.attributes["href"].value.slice(1))).offsetTop - header.offsetHeight),
                    behavior: "smooth"
                });
                ev.preventDefault();
            });
        }
    }
}

// Add titles to links in the toc
function addTitlesToHeadingsInToc() {
    let tocContainer = document.getElementById("toc");
    if (tocContainer) {
        let links = tocContainer.getElementsByTagName("a");
        for (let link of links) {
            link.title = link.textContent;
        }
    }
}

// Make the headings in the toc synchronous with the contents
function enableSyncOfHeadingsInToc() {
    let tocContainer = document.getElementById("toc")
    if (tocContainer) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let links = tocContainer.getElementsByTagName("a");
        let index = 0;
        for (let i = links.length - 1; i >= 0; i--) {
            index = i;
            let headingTop = document.getElementById(decodeURI(links.item(i).attributes["href"].value.slice(1))).offsetTop;
            if (headingTop <= scrollTop + 100) {
                break;
            }
        }
        for (let i = 0; i < links.length; i++) {
            if (index === i) {
                if (!links.item(i).classList.contains("current-heading")) {
                    links.item(i).classList.add("current-heading");
                }
            } else {
                if (links.item(i).classList.contains("current-heading")) {
                    links.item(i).classList.remove("current-heading");
                }
            }
        }
    }
}

// Add the event listener of "scroll" to window object
window.addEventListener("scroll", _.throttle(enableSyncOfHeadingsInToc, 100));

addOnloadFunction(function () {
    changeNavbarTogglerIcon();
    addTitlesToHeadingsInToc();
    enableSmoothScrollOfLinksInMarkdown();
});
