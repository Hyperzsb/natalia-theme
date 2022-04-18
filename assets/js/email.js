import {getScriptParameter, addOnloadFunction} from "./utils.js"

/* Functions for the dark mode */

// Enable EmailJS
function enableEmailJS() {
    let serviceID = getScriptParameter("email-script", "serviceID");
    let templateID = getScriptParameter("email-script", "templateID")
    let contactForm = document.getElementById('contact-form');
    if (contactForm != null) {
        contactForm.addEventListener("submit", function (ev) {
            ev.preventDefault();
            this.contact_number.value = Math.random() * 100000 | 0;
            emailjs.sendForm(serviceID, templateID, this)
                .then(function () {
                    const resultModal = new bootstrap.Modal(document.getElementById('contact-result-modal'));
                    if (resultModal != null) {
                        document.getElementById("contact-result-modal-title").innerText = "Succeeded!"
                        document.getElementById("contact-result-modal-body").innerText = "Send message successfully! Please do not send the same message repeatedly.";
                    }
                    resultModal.show();
                    document.getElementById("contact-form-reset").click();
                }, function (error) {
                    const resultModal = new bootstrap.Modal(document.getElementById('contact-result-modal'));
                    if (resultModal != null) {
                        document.getElementById("contact-result-modal-title").innerText = "Failed!"
                        document.getElementById("contact-result-modal-body").innerText = "Send message unsuccessfully! Please try again later. Error: " + error.text;
                    }
                    resultModal.show();
                    document.getElementById("contact-form-reset").click();
                });
        })
    }
}

addOnloadFunction(function () {
    enableEmailJS();
});