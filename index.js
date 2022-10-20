const searchInput = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");
const temperaturePara = document.getElementById("temperature");
let place = "";
let fetchInput = ""; 

searchButton.addEventListener("click", () => {
    place = searchInput.value;
    fetchInput = `http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=6fc7cb1dbd7015b387d3ead3e4fcd889`;
    callAPI();
})



async function callAPI(){
    const response = await fetch(fetchInput, {mode: "cors"});

    const responseData = await response.json();
    console.log(responseData);

    const temperature = await responseData.main.temp;
    temperaturePara.innerHTML = temperature + " F";
}



