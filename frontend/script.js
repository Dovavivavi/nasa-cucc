const displayField = function () {
  return /*html*/ `
  <section id="current-image">
    <div class="menu-field">
      <button class="hat">hatra</button>
      <input type="date" class="date-picker">
      <button class="gallery-btn">Gallery</button>  
      <button class="">elore</button>
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
root.insertAdjacentHTML('beforeend', fetchApod());

async function fetchApod() {
  let key = '4hrbRcDLDQtmrglPbHKC4ZYeZdrPL2jTbuBBDuC1';
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${key}`
    // https://api.nasa.gov/planetary/apod?date=2022-08-12&api_key=${key}
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

const galleryButton = document.querySelector('.gallery-btn');
galleryButton.addEventListener('click');

// let date = null;
// const dateField = document.querySelector('.date-picker');
// function dateChange() {
//   dateValue = dateField.value;
//   date = dateValue;
// }

// dateField.addEventListener('input', dateChange());
// console.log(dateChange());
// console.log(date);

const datePicker = document.querySelector('.date-picker');

datePicker.addEventListener('change', (event) => {
  const result = event.String();
  console.log(result);
});
