//Main page
async function getUpcoming() {
  try {
    let response = await fetch("https://api.jikan.moe/v3/top/anime/1/upcoming");
    let result = await response.json();
    displayUpcoming(result);
  } catch (e) {
    console.log(e);
  }
}
getUpcoming();

function displayUpcoming(result) {
  let list = document.getElementById("upcoming").innerHTML;
  let i = 0;
  for (i = 0; i < 10; i++) {
    list += `<ul style="list-style-type: none;"><li><img src="${result.top[i].image_url}" height="120" width="100"><a class="collection-item" style="text-decoration: none;" href="#" onclick='displayAnime("${result.top[i].title}")'>${result.top[i].title}</a></li></ul>`;
  }
  document.getElementById("upcoming").innerHTML = list;
}

async function getTop() {
  try {
    let response = await fetch("https://api.jikan.moe/v3/top/anime/1");
    let result = await response.json();
    displayTop(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
getTop();

function displayTop(result) {
  let list = document.getElementById("top").innerHTML;
  let i = 0;
  for (i = 0; i < 10; i++) {
    list += `<ul style="list-style-type: none;"><li>
    <img src="${result.top[i].image_url}" height="120" width="100"><a class="collection-item" style="text-decoration: none;" href="#" onclick='displayAnime("${result.top[i].title}")'>${result.top[i].title}</a></li></ul>`;
  }
  document.getElementById("top").innerHTML = list;
}

async function getAiring() {
  try {
    let response = await fetch("https://api.jikan.moe/v3/top/anime/1/airing");
    let result = await response.json();
    displayAiring(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
getAiring();

function displayAiring(result) {
  let list = document.getElementById("airing").innerHTML;
  let i = 0;
  for (i = 0; i < 20; i++) {
    list += `<div class="w3-container">
        <div class="w3-card-4">
            <a class="mylinklist" href="${result.top[i].url}" target="_blank"><img src="${result.top[i].image_url}"></a>
        <div class="w3-container w3-center">
            <a class="collection-item" style="text-decoration: none;" href="#" onclick='displayAnime("${result.top[i].title}")'><span class="card-title">${result.top[i].title}</span></a>
            </div>
        </div></div>`;
  }
  document.getElementById("airing").innerHTML = list;
}

async function getPopular() {
  try {
    let response = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    );
    let result = await response.json();
    displayPopular(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
getPopular();

function displayPopular(result) {
  let list = document.getElementById("popular").innerHTML;
  let i = 0;
  for (i = 0; i < 20; i++) {
    list += `<div class="w3-container">
    <div class="w3-card-4">
        <a class="mylinklist" href="${result.top[i].url}" target="_blank"><img src="${result.top[i].image_url}"></a>
    <div class="w3-container w3-center">
        <a class="collection-item" style="text-decoration: none;" href="#" onclick='displayAnime("${result.top[i].title}")'><span class="card-title">${result.top[i].title}</span></a>
        </div>
    </div></div>`;
  }
  document.getElementById("popular").innerHTML = list;
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
        ).innerHTML = `<img src="${info.results[i].image_url}" height="300" width="300"> 
                <li> ${info.results[i].title}</li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li>Type: ${info.results[i].type}</li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li>Rated: ${info.results[i].rated}</li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li>Episodes: ${info.results[i].episodes}</li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li>MyAnimeList Score: ${info.results[i].score}</li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li><p style="text-align: left;">Synopsis: </br> ${info.results[i].synopsis}</p></li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li><a style="text-decoration: none;" class="mylinklist" href="${info.results[i].url}" target="_blank"> Get More </a></li>`;
      }
    }
  } catch (e) {
    console.log(e);
  }
}
