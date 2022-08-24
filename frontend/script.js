const displayField = function () {
  return /*html*/ `
  <section id="current-image">
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
  );
  console.log(response);
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
