console.log("Hello!");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let courseElement = document.querySelector(".js-course");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.42;
let rateUSD = 4.06;
let rateGBP = 5.15;
let rateCHF = 4.53;
let rateAUD = 2.71;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let rate;

    switch (currency) {
        case "EUR":
            rate = rateEUR;
            break;

        case "USD":
            rate = rateUSD;
            break;

        case "GBP":
            rate = rateGBP;
            break;

        case "CHF":
            rate = rateCHF;
            break;

        case "AUD":
            rate = rateAUD;
            break;
    }

    let result = amount * rate;
    
    courseElement.innerText = `1 ${currency} = ${rate} PLN`;
    resultElement.innerHTML = ` <strong>${result.toFixed(2)}</strong>`;

});
