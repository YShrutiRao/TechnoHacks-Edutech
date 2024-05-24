document.addEventListener('DOMContentLoaded', function() {
    const fromCurrency = document.getElementById('from_currency');
    const toCurrency = document.getElementById('to_currency');
    const inputCurrency = document.getElementById('input_currency');
    const outputCurrency = document.getElementById('output_currency');
    const convertButton = document.getElementById('convert');

    const currencyList = ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'SGD', 'JPY', 'CNY'];

    currencyList.forEach(currency => {
        const optionFrom = document.createElement('option');
        optionFrom.value = currency;
        optionFrom.textContent = currency;
        fromCurrency.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = currency;
        optionTo.textContent = currency;
        toCurrency.appendChild(optionTo);
    });

    convertButton.addEventListener('click', function() {
        const fromValue = fromCurrency.value;
        const toValue = toCurrency.value;
        const amount = inputCurrency.value;

        if (fromValue && toValue && amount) {
            getExchangeRate(fromValue, toValue, amount);
        } else {
            alert('Please select both currencies and enter an amount');
        }
    });

    function getExchangeRate(from, to, amount) {
        const apiKey = '0ce6d04ab4d38b13250c87cb';
        const url = `https://v6.exchangerate-api.com/v6/0ce6d04ab4d38b13250c87cb/latest/USD`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const rate = data.conversion_rates[to];
                const convertedAmount = (amount * rate).toFixed(2);
                outputCurrency.value = `${convertedAmount}`;
            })
            .catch(error => {
                console.error('Error fetching the exchange rate:', error);
                alert('Error fetching the exchange rate. Please try again later.');
            });
    }
});
