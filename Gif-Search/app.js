const resetParameters = '';
const btn = document.getElementById('btnSearch');
const search = document.getElementById('search-bar');
const btnSticker = document.getElementById('btnSticker');
const containerElements = document.querySelector('.container');
let searchTerm;
let dataObj;
const requestGif = (value, limit) => {
  return `https://api.giphy.com/v1/gifs/search?api_key=HB8j9ueVLLGSDxluNsxHngc6yLnbry7i&q=${value}&limit=${limit}&offset=0&rating=g&lang=en`;
};
const requestSticker = (value, limit) => {
  return `https://api.giphy.com/v1/stickers/search?api_key=HB8j9ueVLLGSDxluNsxHngc6yLnbry7i&q=${value}&limit=${limit}&offset=0&rating=g&lang=en`;
};

searchGif();
searchSticker();

function searchGif() {
  btn.addEventListener('click', () => {
    containerElements.innerHTML = resetParameters;
    searchTerm = search.value;
    callAJAX(requestGif(searchTerm, 50));
    search.value = resetParameters;
  });
}

function searchSticker() {
  btnSticker.addEventListener('click', () => {
    containerElements.innerHTML = resetParameters;
    searchTerm = search.value;
    callAJAX(requestSticker(searchTerm, 50));
    search.value = resetParameters;
  });
}
function createElement(elmentToDisplay, alt) {
  containerElements.insertAdjacentHTML(
    'afterbegin',
    `<img src='${elmentToDisplay}' alt='${alt}' onclick="clickToCopy(this)" />`
  );
}
function displayGifOrSticker(dataObj, limit) {
  for (let i = 0; i < limit; i++) {
    createElement(dataObj[i].images.downsized.url, dataObj[i].title);
  }
}
function clickToCopy(url) {
  let copyUrl = url.src;
  navigator.clipboard.writeText(copyUrl);
  alert(url.alt + 'copied');
  console.log(copyUrl);
}
function callAJAX(url) {
  let GyphyAJAXCall = new XMLHttpRequest();
  GyphyAJAXCall.open('GET', url);
  GyphyAJAXCall.send();
  GyphyAJAXCall.addEventListener('load', (e) => {
    dataObj = JSON.parse(e.target.response).data;
    displayGifOrSticker(dataObj, 50);
  });
}
