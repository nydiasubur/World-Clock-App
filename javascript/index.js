//singapore
function updateTime() {
  let singaporeDateElement = document.querySelector("#singapore p");

  if (singaporeDateElement) {
    singaporeDateElement.innerHTML = moment().format("MMMM Do YYYY");
    let singaporeTime = moment().tz("Asia/Singapore");
    let singaporeTimeElement = document.querySelector("#singapore .city-time");
    singaporeTimeElement.innerHTML = `${singaporeTime.format(
      "h:mm:ss [<small>] A [</small>]"
    )}`;
  }

  //saigon

  let saigonDateElement = document.querySelector("#saigon p");

  if (saigonDateElement) {
    saigonDateElement.innerHTML = moment().format("MMMM Do YYYY");
    let saigonTime = moment().tz("Asia/saigon");
    let saigonTimeElement = document.querySelector("#saigon .city-time");
    saigonTimeElement.innerHTML = `${saigonTime.format(
      "h:mm:ss [<small>] A [</small>]"
    )}`;
  }
  //hongkong
  let hongkongDateElement = document.querySelector("#hongkong p");

  if (hongkongDateElement) {
    hongkongDateElement.innerHTML = moment().format("MMMM Do YYYY");
    let hongkongTime = moment().tz("Hongkong");
    let hongkongTimeElement = document.querySelector("#hongkong .city-time");
    hongkongTimeElement.innerHTML = `${hongkongTime.format(
      "h:mm:ss [<small>] A [</small>]"
    )}`;
  }
}

function displaySelectedCityTime(event) {
  let citySelected = event.target.value;
  if (citySelected === "current") {
    citySelected = moment.tz.guess();
  }
  console.log(citySelected);
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
        <div class="city">
            <div class="city-date">
                <h2>${citySelectedFormated}</h2>
                <p>${cityDate}</p>
            </div>
            <div class="city-time">${cityTime.format(
              "h:mm:ss [<small>] A [</small>]"
            )}</div>
        </div>`;
  let homepageElement = document.querySelector("#homepage");
  homepageElement.innerHTML = `<a href="">🏠 Homepage</a>`;
}
updateTime();
setInterval(updateTime, 1000);
let cityDropdownElement = document.querySelector("#city-dropdown");
cityDropdownElement.addEventListener("change", displaySelectedCityTime);
let homepageElement = document.querySelector("#homepage");
homepageElement.addEventListener("click", updateTime);
