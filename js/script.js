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
            rate = amount * rateEUR;
            courseElement.innerText = ` 1 ${currency} = ${rateEUR} PLN`;
            break;

        case "USD":
            rate = amount * rateUSD;
            courseElement.innerText = ` 1 ${currency} = ${rateUSD} PLN`;
            break;

        case "GBP":
            rate = amount * rateGBP;
            courseElement.innerText = ` 1 ${currency} = ${rateGBP} PLN`;
            break;

        case "CHF":
            rate = amount * rateCHF;
            courseElement.innerText = ` 1 ${currency} = ${rateCHF} PLN`;
            break;

        case "AUD":
            rate = amount * rateAUD;
            courseElement.innerText = ` 1 ${currency} = ${rateAUD} PLN`;
            break;
    }
    
    resultElement.innerHTML = ` <strong>${rate.toFixed(2)}</strong>`;
});
