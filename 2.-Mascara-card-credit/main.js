const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

const maskNUmber = "####-####-####-####";
const maskDate = "##/##";
const maskCVV = "###";

let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

inputCard.addEventListener("keydown", (e) => {
    if (e.key == "Tab") {
        return; 
    }

    e.preventDefault();
    handleInput(maskNUmber, e.key, cardNumber);
    inputCard.value = cardNumber.join("");

});

function handleInput(mask, key, arr) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (key === "Bac")
}