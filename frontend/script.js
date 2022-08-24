const displayField = function () {
  return /*html*/ `
  <div class="img-field">
  <img class="daily-img" src="" alt="">
  </div>
  <div class="text-field">
  <p class="text">hello</p>
  </div>
  `;
};

async function fetchApod() {
  const key = '4hrbRcDLDQtmrglPbHKC4ZYeZdrPL2jTbuBBDuC1';
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${key}`
  );
  console.log(response);
  let data = response.json();
  console.log(data);
}

const root = document.querySelector('#root');
root.insertAdjacentHTML('beforeend', displayField());
