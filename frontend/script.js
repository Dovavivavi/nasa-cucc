const displayField = function () {
  return /*html*/ `
  <section id="current-image">
    <div class="menu-field">
    <input type="text" class="date-picker">
    <button class="" onclick="dateSearch()">Search</button>
    <button class="gallery-btn">Gallery</button>  
    </div>
    <div class="img-container">
      <div class="img"></div>
    </div>
    <div class="text-container">
      <p class="text"></p>
    </div>
  </section>
  `;
};

const root = document.querySelector('#root');
root.insertAdjacentHTML('beforeend', displayField());
fetchApod();

async function fetchApod() {
  let key = '4hrbRcDLDQtmrglPbHKC4ZYeZdrPL2jTbuBBDuC1';
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${key}`
  );
  let data = await response.json();
  console.log(data);
  useData(data);
}

let fetchDate = null;

async function fetchApodAgain() {
  let key = '4hrbRcDLDQtmrglPbHKC4ZYeZdrPL2jTbuBBDuC1';
  let date = fetchDate;
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${key}`
  );
  let data = await response.json();
  console.log(data);
  useData(data);
}

function useData(data) {
  document.querySelector('.text').innerHTML += data.explanation;
  document.querySelector(
    '.img'
  ).innerHTML += `<img class="nasa-img" src="${data.url}">`;
}
const inputField = document.querySelector('.date-picker');

function dateSearch() {
  const page = document.querySelector('#current-image');
  let currentDate = inputField.value;
  fetchDate = currentDate;
  page.remove();
  root.insertAdjacentHTML('beforeend', displayField());
  fetchApodAgain();
}
