const searchInput = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");
const temperaturePara = document.getElementById("temperature");
const countryPara = document.querySelector(".country");
const cityPara = document.querySelector(".city");

searchButton.addEventListener("click", () => {
  let place = searchInput.value;
  let fetchInput = `http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=6fc7cb1dbd7015b387d3ead3e4fcd889`;
  callAPI(fetchInput);
});

async function callAPI(fetchInput) {
  try {
    const response = await fetch(fetchInput, { mode: "cors" });

    const responseData = await response.json();
    console.log(responseData);

    const temperature = responseData.main.temp;
    temperaturePara.innerHTML = temperature + " F";

    let country = responseData.sys.country;
    countryPara.textContent = country;

    let city = responseData.name;
    cityPara.textContent = city;
  } catch (error) {
    alert("City not found, try again");
  }
}
