{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.42;
        const rateUSD = 4.06;
        const rateGBP = 5.15;
        const rateCHF = 4.53;
        const rateAUD = 2.71;

        switch (currency) {
            case "EUR":
                return amount * rateEUR;

            case "USD":
                return amount * rateUSD;

            case "GBP":
                return amount * rateGBP;

            case "CHF":
                return amount * rateCHF;

            case "AUD":
                return amount * rateAUD;
        }
    }

    const calculateRate = (currency) => {
        const rateEUR = 4.42;
        const rateUSD = 4.06;
        const rateGBP = 5.15;
        const rateCHF = 4.53;
        const rateAUD = 2.71;

        switch (currency) {
            case "EUR":
                return rateEUR;

            case "USD":
                return rateUSD;

            case "GBP":
                return rateGBP;

            case "CHF":
                return rateCHF;

            case "AUD":
                return rateAUD;
        }
    }

    const updateResultText = (result, currency, rate) => {
        const courseElement = document.querySelector(".js-course");
        const resultElement = document.querySelector(".js-result");
        courseElement.innerText = `1 ${currency} = ${rate} PLN`;
        resultElement.innerHTML = ` <strong>${result.toFixed(2)}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const rate = calculateRate(currency);
        const result = calculateResult(amount, currency);

        updateResultText(result, currency, rate);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}