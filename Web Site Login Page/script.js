const showHide = document.querySelectorAll(".pw-hide"); // Changed querySelector to querySelectorAll

const formOpnButton = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form-container");
const formCloseButton = document.querySelector(".form-close");
const signUpButton = document.querySelector("#signup"); // Keep this as is
const loginButton = document.querySelector("#login"); // Keep this as is

formOpnButton.addEventListener("click", () => home.classList.add("show"));
formCloseButton.addEventListener("click", () => home.classList.remove("show"));

showHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon
                .classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});