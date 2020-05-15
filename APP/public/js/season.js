async function getSummer() {
  try {
    let response = await fetch("https://api.jikan.moe/v3/season/2020/summer");
    let result = await response.json();
    displaySummer(result);
  } catch (e) {
    console.log(e);
  }
}
getSummer();

function displaySummer(result) {
  let list = document.getElementById("summer").innerHTML;
  let i = 0;
  for (i = 0; i < 40; i++) {
    list += `<div class="w3-container">
    <div class="w3-card-4">
        <a class="mylinklist" href="${result.anime[i].url}" target="_blank"><img src="${result.anime[i].image_url}"></a>
    <div class="w3-container w3-center">
        <a class="collection-item" style="text-decoration: none;" href="#" onclick='displayAnime("${result.anime[i].title}")'><span class="card-title">${result.anime[i].title}</span></a>
        </div>
    </div></div>`;
  }
  document.getElementById("summer").innerHTML = list;
}

async function getSpring() {
  try {
    let response = await fetch("https://api.jikan.moe/v3/season/2020/spring");
    let result = await response.json();
    displaySpring(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
getSpring();

function displaySpring(result) {
  let list = document.getElementById("spring").innerHTML;
  let i = 0;
  for (i = 0; i < 40; i++) {
    list += `<div class="w3-container">
    <div class="w3-card-4">
        <a class="mylinklist" href="${result.anime[i].url}" target="_blank"><img src="${result.anime[i].image_url}"></a>
    <div class="w3-container w3-center">
        <a class="collection-item" style="text-decoration: none;" href="#" onclick='displayAnime("${result.anime[i].title}")'><span class="card-title">${result.anime[i].title}</span></a>
        </div>
    </div></div>`;
  }
  document.getElementById("spring").innerHTML = list;
}

async function getWinter() {
  try {
    let response = await fetch("https://api.jikan.moe/v3/season/2020/winter");
    let result = await response.json();
    displayWinter(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
getWinter();

function displayWinter(result) {
  let list = document.getElementById("winter").innerHTML;
  let i = 0;
  for (i = 0; i < 40; i++) {
    list += `<div class="w3-container">
    <div class="w3-card-4">
        <a class="mylinklist" href="${result.anime[i].url}" target="_blank"><img src="${result.anime[i].image_url}"></a>
    <div class="w3-container w3-center">
        <a class="collection-item" style="text-decoration: none;" href="#" onclick='displayAnime("${result.anime[i].title}")'><span class="card-title">${result.anime[i].title}</span></a>
        </div>
    </div></div>`;
  }
  document.getElementById("winter").innerHTML = list;
}

async function getFall() {
  try {
    let response = await fetch("https://api.jikan.moe/v3/season/2020/fall");
    let result = await response.json();
    displayFall(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
getFall();

function displayFall(result) {
  let list = document.getElementById("fall").innerHTML;
  let i = 0;
  for (i = 0; i < 20; i++) {
    list += `<div class="w3-container">
    <div class="w3-card-4">
        <a class="mylinklist" href="${result.anime[i].url}" target="_blank"><img src="${result.anime[i].image_url}"></a>
    <div class="w3-container w3-center">
        <a class="collection-item" style="text-decoration: none;" href="#" onclick='displayAnime("${result.anime[i].title}")'><span class="card-title">${result.anime[i].title}</span></a>
        </div>
    </div></div>`;
  }
  document.getElementById("fall").innerHTML = list;
}

function displayAnime(anime) {
  getAnime(anime);
}

async function getAnime(animeName) {
  let url =
    "https://api.jikan.moe/v3/search/anime?q=" + encodeURIComponent(animeName);
  var anime;
  url += animeName;
  try {
    let response = await fetch(url);
    let info = await response.json();

    for (let i = 0; i < info.results.length; i++) {
      if (info.results[i].title == animeName) {
        document.getElementById(
          "result"
        ).innerHTML = `<img src="${info.results[i].image_url}"> 
                <li> ${info.results[i].title}</li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li>Type: ${info.results[i].type}</li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li>Rated: ${info.results[i].rated}</li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li>Air Date: ${info.results[i].start_date}</li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li><p>Synopsis: </br> ${info.results[i].synopsis}</p></li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li><a class="mylinklist" style="text-decoration: none;" href="${info.results[i].url}" target="_blank"> Get More </a></li>`;
      }
    }
  } catch (e) {
    console.log(e);
  }
}

//Search Page
