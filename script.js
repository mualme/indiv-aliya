
let counter = 0;

const counterDisplay = document.getElementById("counter");

function updateCounter() {
    counterDisplay.textContent = counter;
}

document.getElementById("increaseBtn").addEventListener("click", function() {
    counter = counter + 1;
    updateCounter();
});

document.getElementById("decreaseBtn").addEventListener("click", function() {
    if (counter > 0) {
        counter = counter - 1;
    }

    updateCounter();
});

document.getElementById("resetBtn").addEventListener("click", function() {
    counter = 0;
    updateCounter();
});


const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", function() {
    preview.textContent = textInput.value;
    charCount.textContent = textInput.value.length;

    if (textInput.value === "") {
        preview.textContent = "Your text will appear here";
    }
});

document.getElementById("clearBtn").addEventListener("click", function() {
    textInput.value = "";
    preview.textContent = "Your text will appear here";
    charCount.textContent = 0;
    textInput.focus();
});


const imageSelect = document.getElementById("imageSelect");
const mainImage = document.getElementById("mainImage");
const imageCaption = document.getElementById("imageCaption");

imageSelect.addEventListener("change", function() {
    if (imageSelect.value === "flower") {
        mainImage.src = "images/flower.jpg";
        imageCaption.textContent = "A pinky flower";
    } else if (imageSelect.value === "cat") {
        mainImage.src = "images/cat.jpg";
        imageCaption.textContent = "A cute cat";
    } else if (imageSelect.value === "mountain") {
        mainImage.src = "images/mountain.jpg";
        imageCaption.textContent = "A tall mountain";
    }
});

const keyboardInput = document.getElementById("keyboardInput");
const keyStatus = document.getElementById("keyStatus");
const keyResult = document.getElementById("keyResult");

keyboardInput.addEventListener("keydown", function(event) {

if (event.key === " ") {
    keyStatus.textContent = "Key pressed: Space";
} else {
    keyStatus.textContent = "Key pressed: " + event.key;
}

    if (event.key === "Enter") {
        event.preventDefault();
        keyResult.textContent = keyboardInput.value;
    }

    if (event.key === "Escape") {
        event.preventDefault();
        keyboardInput.value = "";
        keyResult.textContent = "";
        keyStatus.textContent = "Input cleared";
    }
});

const myCard = document.getElementById("myCard");
const cardInstruction = document.getElementById("cardInstruction");

myCard.addEventListener("mouseenter", function() {
    myCard.classList.add("highlight");
    cardInstruction.textContent = "Mouse is over the card!";
});

myCard.addEventListener("mouseleave", function() {
    myCard.classList.remove("highlight");
    cardInstruction.textContent = "Move your mouse over the card or focus on it using Tab.";
});

myCard.addEventListener("focus", function() {
    myCard.classList.add("highlight");
    cardInstruction.textContent = "The card is focused!";
});

myCard.addEventListener("blur", function() {
    myCard.classList.remove("highlight");
    cardInstruction.textContent = "Move your mouse over the card or focus on it using Tab.";
});