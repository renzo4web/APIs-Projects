const btn = document.getElementById('getMovie');
const container = document.querySelector('.container');
const btnGuess = document.getElementById('guessBtn');
const guessNum = document.getElementById('guessNum');
const guessText = document.getElementById('guessText');
let ImdbRating;
const movie = {};

movie.getTop250 = function () {
  const randomTitle = this.randomMovie();
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  fetch('./moviePupolar.json')
    .then((response) => response.text())
    .then((result) => {
      let g = JSON.parse(result);
      console.log(g.items[randomTitle]);
      this.renderCard(
        g.items[randomTitle].image,
        g.items[randomTitle].fullTitle
      );
      ImdbRating = parseFloat(g.items[randomTitle].imDbRating);
    })
    .catch((error) => console.log('error', error));
};

movie.randomMovie = function () {
  return Math.floor(Math.random() * 99);
};

movie.renderCard = function (img, title) {
  let card =
    '<div class="body-card">' +
    `              <img src=${img} alt="">` +
    `              <h2>${title}</h2>` +
    '          </div>';
  container.insertAdjacentHTML('afterbegin', card);
};

btn.addEventListener('click', () => {
  container.innerHTML = '';
  movie.getTop250();
});
btnGuess.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(Math.round(ImdbRating), parseInt(guessNum.value));
  guess(Math.round(ImdbRating), parseInt(guessNum.value));
});

function guess(rating, guess) {
  if (rating > guess) {
    guessText.textContent = 'Low Rating';
  } else if (guess > rating) {
    guessText.textContent = 'Soo High';
  } else {
    guessText.textContent = 'Congrats';
  }
}
