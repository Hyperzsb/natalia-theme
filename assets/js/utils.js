/* Utilities functions */

const getScriptParameter = function (id, param) {
    let script = document.getElementById(id);
    return script.getAttribute(param);
}

const loadStylesheet = function (href) {
    let head = document.getElementsByTagName("head")[0];
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    head.appendChild(link);
}

const removeStylesheet = function (href) {
    let head = document.getElementsByTagName("head")[0];
    for (let i = 0; i < head.children.length; i++)
        if (head.children.item(i).tagName === "LINK" && head.children[i].getAttribute("href") === href) {
            head.removeChild(head.children.item(i));
        }
}

const addOnloadFunction = function (func) {
    const oldOnload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnload();
            func();
        };
    }
}

export {
    getScriptParameter,
    loadStylesheet,
    removeStylesheet,
    addOnloadFunction
}
