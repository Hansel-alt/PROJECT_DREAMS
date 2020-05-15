//Main page
async function getNovel() {
  try {
    let response = await fetch("https://api.jikan.moe/v3/top/manga/1/novels");
    let result = await response.json();
    displayNovel(result);
  } catch (e) {
    console.log(e);
  }
}
getNovel();

function displayNovel(result) {
  let list = document.getElementById("novel").innerHTML;
  let i = 0;
  for (i = 0; i < 15; i++) {
    list += `<ul style="list-style-type: none;"><li><img src="${result.top[i].image_url}" height="120" width="100" ><a class="collection-item" style="text-decoration: none;" href="#" onclick='displayManga("${result.top[i].title}")'>${result.top[i].title}</a></li></ul>`;
  }
  document.getElementById("novel").innerHTML = list;
}

async function getTop() {
  try {
    let response = await fetch("https://api.jikan.moe/v3/top/manga/1/manga");
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
  for (i = 0; i < 15; i++) {
    list += `<ul style="list-style-type: none;"><li><img src="${result.top[i].image_url}" height="120" width="100"><a class="collection-item" style="text-decoration: none;" href="#" onclick='displayManga("${result.top[i].title}")'>${result.top[i].title}</a></li></ul>`;
  }
  document.getElementById("top").innerHTML = list;
}

async function getShot() {
  try {
    let response = await fetch("https://api.jikan.moe/v3/top/manga/1/oneshots");
    let result = await response.json();
    displayShot(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
getShot();

function displayShot(result) {
  let list = document.getElementById("oneshot").innerHTML;
  let i = 0;
  for (i = 0; i < 25; i++) {
    list += `<div class="w3-container">
    <div class="w3-card-4">
        <a class="mylinklist" href="${result.top[i].url}" target="_blank"><img src="${result.top[i].image_url}"></a>
    <div class="w3-container w3-center">
        <a class="collection-item" style="text-decoration: none;" href="#" onclick='displayAnime("${result.top[i].title}")'><span class="card-title">${result.top[i].title}</span></a>
        </div>
    </div></div>`;
  }
  document.getElementById("oneshot").innerHTML = list;
}

async function getPopular() {
  try {
    let response = await fetch(
      "https://api.jikan.moe/v3/top/manga/1/bypopularity"
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
  for (i = 0; i < 25; i++) {
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

function displayManga(manga) {
  getManga(manga);
}

async function getManga(mangaName) {
  let url =
    "https://api.jikan.moe/v3/search/manga?q=" + encodeURIComponent(mangaName);
  var manga;
  url += mangaName;
  try {
    let response = await fetch(url);
    let info = await response.json();

    for (let i = 0; i < info.results.length; i++) {
      if (info.results[i].title == mangaName) {
        document.getElementById(
          "result"
        ).innerHTML = `<img src="${info.results[i].image_url}"> 
                <li> </br> ${info.results[i].title}</li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li> </br> Type: ${info.results[i].type}</li>`;
        if (info.results[i].publishing == true) {
          document.getElementById(
            "result"
          ).innerHTML += `<li>Status: Pulbishing</li>`;
        } else {
          document.getElementById(
            "result"
          ).innerHTML += `<li>Status: Completed</li>`;
          document.getElementById(
            "result"
          ).innerHTML += `<li>Chapters: ${info.results[i].chapters}</li>`;
        }
        document.getElementById(
          "result"
        ).innerHTML += `<li>MymangaList Score: ${info.results[i].score}</li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li><p style="text-align: left;">Synopsis: </br> ${info.results[i].synopsis}</p></li>`;
        document.getElementById(
          "result"
        ).innerHTML += `<li><a class="mylinklist" style="text-decoration: none;" href="${info.results[i].url}" target="_blank"> Get More </a></li>`;
      }
    }
  } catch (e) {
    console.log(e);
  }
}

