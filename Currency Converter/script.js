const baseAmountInput = document.getElementById("baseAmount");
const baseCurrencySelect = document.getElementById("baseCurrency");
const quotedAmountInput = document.getElementById("quoteAmount");
const quotedCurrencySelect = document.getElementById("quotedCurrency");

let currencies = [];
let baseCurrency = null;
let quotedCurrency = null;
let rates = null;

// Function to fetch currency data and populate a dropdown
async function fetchAndPopulateCurrency() {
  let url = "countries.json";
  try {
    let response = await fetch(url);
    let data = await response.json();
    currencies = data;
    let template = "";
    data.forEach((item) => {
      template += `<option value="${item.name}">${item.name} (${item.currency})</option>`;
    });
  
    baseCurrencySelect.innerHTML = template;
    quotedCurrencySelect.innerHTML = template;
  
    // Initial conversion
    initializeConversion();
  }
  catch(e) {
    let errorMessage = `The rate for ${baseCurrencySelect.value} to ${quotedCurrencySelect.value} is not available right now. Please try again later`;

    displayErrorMessage(errorMessage);
  }
}

function initializeConversion() {
  baseAmountInput.value = 1;
  baseCurrencySelect.value = "United Kingdom";
  baseCurrency = updateSelectedCurrency(baseCurrencySelect.value);
  quotedCurrencySelect.value = "United States";
  quotedCurrency = updateSelectedCurrency(quotedCurrencySelect.value);

  getRates();
}

// Function to perform currency conversion
async function getRates() {
  const baseAmount = parseFloat(baseAmountInput.value);
  baseCurrency = updateSelectedCurrency(baseCurrencySelect.value);
  const apiUrl = `https://www.floatrates.com/daily/${baseCurrency}.json`;
  try {
    let response = await fetch(apiUrl);
    data = await response.json();
    rates = data;
    convertCurrency("base");
  }
  catch(e) {
    let errorMessage = `The rate for this currency pair is unavailable right now. Please try again later`;
    
    displayErrorMessage(errorMessage);

  }
  
}

function convertCurrency(selectType) {
  quotedCurrency = updateSelectedCurrency(quotedCurrencySelect.value);

  if (quotedCurrency == null || quotedCurrency == "") return;

  try {
    let fx = rates[quotedCurrency.toLowerCase()];
    if (selectType == "base") {
      if (baseAmountInput.value < parseInt(0) || baseAmountInput.value > parseInt(5000000)) {
        // alert ("Please enter a number between 0 and 5000000")
        errorMessage ="Please enter a number between 0 and 5000000"
        displayErrorMessage(errorMessage);
        quotedAmountInput.value = 0;
     } 
     else{
       let quotedRate = baseAmountInput.value * fx.rate;
      quotedAmountInput.value = quotedRate.toFixed(2);
     }
     
    } else {
      let baseRate = quotedAmountInput.value / fx.rate;
      baseAmountInput.value = baseRate.toFixed(2);
    }
    displayRates(fx);
  }
  catch(e) {
    let errorMessage = "An error occured during conversion."
    displayErrorMessage(errorMessage);
  }
  
}

function displayRates(fx) {
  document.getElementById(
    "conversionRateValue"
  ).innerText = `1 ${baseCurrency} = ${fx.rate.toFixed(2)} ${quotedCurrency}`;
  let date = fx.date;
  date = new Date(date)
    .toLocaleString("en-US", { timeZone: "Europe/London" })
    .toLocaleUpperCase();
  document.getElementById(
    "conversionRateTime"
  ).innerText = `Last Updated: ${date}`;
}

function updateSelectedCurrency(countryName) {
  let country = currencies.find((item) => item.name == countryName);
  return country.currency;
}

function displayErrorMessage(message) {
  document.getElementById("error").innerText = message;
  document.getElementById("error").style.visibility = "visible";

  setTimeout(() => {
    document.getElementById("error").style.visibility = "hidden";
  }, 5000);
}

// Fetch currency list
fetchAndPopulateCurrency();

// Add event listeners for real-time updates
baseAmountInput.addEventListener("input", () => convertCurrency("base"));
baseCurrencySelect.addEventListener("change", getRates);
quotedAmountInput.addEventListener("input", () => convertCurrency("quote"));
quotedCurrencySelect.addEventListener("change", () => convertCurrency("base"));
