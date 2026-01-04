console.log("Hello Weather");

const div = document.querySelector("#container");
const form = document.querySelector("#form");
const input = document.querySelector("#input");

const apiKey = "5acecd6b69634fa7a2984031260301";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}&aqi=no`
  )
    .then((res) => res.json())
    .then((res) => {
      const weatherHTML = `
        <div class="divBorder">
          <h2>${res.location.name}, ${res.location.country}</h2>
          <img src="${res.current.condition.icon}" alt="">
          <h1>${res.current.temp_c}°C</h1>
        </div>
      `;

      // 🔥 Add new search on TOP, keep last search below
      div.innerHTML = weatherHTML + div.innerHTML;

      input.value = "";
    })
    .catch((err) => console.log(err));
});
