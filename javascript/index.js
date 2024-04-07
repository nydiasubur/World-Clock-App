//singapore
function updateTime() {
  let singaporeDateElement = document.querySelector("#singapore p");
  singaporeDateElement.innerHTML = moment().format("MMMM Do YYYY");
  if (singaporeDateElement) {
    let singaporeTime = moment().tz("Asia/Singapore");
    let singaporeTimeElement = document.querySelector("#singapore .city-time");
    singaporeTimeElement.innerHTML = `${singaporeTime.format(
      "h:mm:ss [<small>] A [</small>]"
    )}`;
  }

  //saigon

  let saigonDateElement = document.querySelector("#saigon p");
  saigonDateElement.innerHTML = moment().format("MMMM Do YYYY");
  if (saigonDateElement) {
    let saigonTime = moment().tz("Asia/saigon");
    let saigonTimeElement = document.querySelector("#saigon .city-time");
    saigonTimeElement.innerHTML = `${saigonTime.format(
      "h:mm:ss [<small>] A [</small>]"
    )}`;
  }
}
updateTime();
setInterval(updateTime, 1000);

function displaySelectedCityTime(event) {
  let citySelected = event.target.value;
  let citySelectedFormated = citySelected.replace("_", " ").split("/");

  if (citySelectedFormated.length > 1) {
    citySelectedFormated = citySelectedFormated[1];
  } else {
    citySelectedFormated = citySelectedFormated[0];
  }

  let cityDate = moment().tz(citySelected).format("MMMM Do YYYY");
  let cityTime = moment().tz(citySelected);

  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = ` 
        <div class="city" id="singapore">
            <div class="city-date">
                <h2>${citySelectedFormated}</h2>
                <p>${cityDate}</p>
                </div>
            <div class="city-time">${cityTime.format(
              "h:mm:ss [<small>] A [</small>]"
            )}</div>
        </div>`;
}

let cityDropdownElement = document.querySelector("#city-dropdown");
cityDropdownElement.addEventListener("change", displaySelectedCityTime);
