/* Utilities functions */

const getScriptParameter = function (id, param) {
    let script = document.getElementById(id);
    return script.getAttribute(param);
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
    addOnloadFunction
}
