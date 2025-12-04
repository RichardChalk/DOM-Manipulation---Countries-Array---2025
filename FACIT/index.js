// Use the countries array to display all the countries.

// OLD!!!!!
// const countriesAPI = "https://restcountries.com/v2/all";
const countriesAPI = "https://restcountries.com/v3.1/all?fields=name";

let totalCountries = 0;

const showCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    data = await response.json();
    totalCountries = data.length;
    showNumberOfCountries(totalCountries);
    showData(data);
  } catch (error) {
    console.log(error);
  }
};

function showData(data) {
  let countryContainer = document.createElement("div");
  countryContainer.className = "country-container";
  document.body.appendChild(countryContainer);

  data.forEach((country) => {
    const countryText = document.createElement("div");
    // OLD!!!!!
    // countryText.textContent = `${country.name}`;
    countryText.textContent = country.name.common; // v3-format
    countryText.className = "country-text";
    countryContainer.appendChild(countryText);
  });
}

function showTitle() {
  let title = document.createElement("div");
  title.textContent = "World Countries List";
  title.style.fontSize = "40px";
  title.style.textAlign = "center";
  title.style.fontWeight = "bold";
  title.style.marginTop = "40px";
  document.body.appendChild(title);
}

function showNumberOfCountries(totalCountries) {
  let numberOfCountries = document.createElement("div");
  numberOfCountries.textContent = `Total number of countries: ${totalCountries}`;
  numberOfCountries.style.fontSize = "30px";
  numberOfCountries.style.textAlign = "center";
  numberOfCountries.style.fontWeight = "bold";
  numberOfCountries.style.marginTop = "10px";
  document.body.appendChild(numberOfCountries);
}

showTitle();
showCountries();
