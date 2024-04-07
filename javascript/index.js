//singapore
function updateTime() {
  let singaporeDateElement = document.querySelector("#singapore p");
  singaporeDateElement.innerHTML = moment().format("MMMM Do YYYY");

  let singaporeTime = moment().tz("Asia/Singapore");
  let singaporeTimeElement = document.querySelector("#singapore .city-time");
  singaporeTimeElement.innerHTML = `${singaporeTime.format(
    "h:mm:ss [<small>] A [</small>]"
  )}`;

  //saigon

  let saigonDateElement = document.querySelector("#saigon p");
  saigonDateElement.innerHTML = moment().format("MMMM Do YYYY");

  let saigonTime = moment().tz("Asia/saigon");
  let saigonTimeElement = document.querySelector("#saigon .city-time");
  saigonTimeElement.innerHTML = `${saigonTime.format(
    "h:mm:ss [<small>] A [</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);
