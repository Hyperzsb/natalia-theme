/* Utilities functions */

function getScriptParameter(id, param) {
    let script = document.getElementById(id);
    return script.getAttribute(param);
}

function loadStylesheet(href) {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    head.appendChild(link);
}

function removeStylesheet(href) {
    let head = document.getElementsByTagName('head')[0];
    for (let i = 0; i < head.children.length; i++)
        if (head.children[i].tagName === 'LINK' && head.children[i].getAttribute('href') === href)
            head.removeChild(head.children[i]);
}

function addOnloadFunction(func) {
    const oldOnload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnload();
            func();
        }
    }
}