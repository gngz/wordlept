console.log("%cMade with ❤️ and ☕ by DiogoPassos.pt", "font-family:system-ui;font-size:4rem");

let keys = document.querySelectorAll('.key');

function isLetter(text) {
    return text.length === 1 && text.match(/[A-Z]/i);
}

function processKey(keycode) {
    if(typeof keycode != "string") return;

    keycode = keycode.toUpperCase()

    if(keycode === "ENTER") {
        console.log("enter pressed!");
        return;
    }

    if(keycode === "BACKSPACE") {
        console.log("backspace pressed!");
        return;
    }
    
    if(isLetter(keycode)) {
        console.log(keycode);
        return;
    }
}

function handleKeyClick(event) {
    let keyElement = event.target;
    let key = keyElement.getAttribute("key");
    processKey(key);
}


function initialize() {
    keys.forEach(key => {
        key.addEventListener("click", handleKeyClick, false);
    })
    
    document.addEventListener("keydown", (event) => {
        processKey(event.key);
    })
}


function toggleOverlay(element) {
    let sectionId = element.getAttribute("overlay-section");

    section = document.getElementById(sectionId);

    if(!section.classList.contains("overlay-open")) {
        section.classList.add("overlay-open");
        animate(section, "slidein");
    } else {
        animate(section, "slideout").then(() => {
            section.classList.remove("overlay-open");
        });
    }
}

function animate(element, animationClass) {

    return new Promise((resolve, _) => {
        element.classList.add(animationClass);
        element.addEventListener("animationend", () => {
            element.classList.remove(animationClass);
            resolve();
        }, {once: true});
    })
    
}

(function () {
    initialize();    
})();