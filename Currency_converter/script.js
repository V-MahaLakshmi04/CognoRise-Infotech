function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
  
    // Static exchange rates for demonstration purposes
    const exchangeRates = {
      usd: {
        eur: 0.9376,
        inr: 83.4348,
      },
      eur: {
        usd: 1.0666,
        inr: 88.9903,
      },
      inr: {
        usd: .012,
        eur: .0112,
      },
    };
  
    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
  }
  