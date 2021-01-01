const btn = document.getElementById('getMovie');
const container = document.querySelector('.container');
const btnGuess = document.getElementById('guessBtn');
const guessNum = document.getElementById('guessNum');
const guessText = document.getElementById('guessText');
const selectTypeGame = document.getElementById('dropwdown');
const form = document.querySelector('form');
let gameSelected;
let ImdbRating;

const movie = {};

movie.getTop250 = function () {
  const randomTitle = this.randomMovie();
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=7935656617eee5e9e3219add057f26cb&language=en-US&page=1'
  )
    .then((response) => response.text())
    .then((result) => {
      let g = JSON.parse(result);
      console.log(g.results);
      this.renderCard(
        'https://image.tmdb.org/t/p/w500/' + g.results[randomTitle].poster_path,
        g.results[randomTitle].original_title
      );
        ImdbRating = parseFloat(g.results[randomTitle].vote_average);
    })
    .catch((error) => console.log('error', error));
};


movie.randomMovie = function () {
  return Math.floor(Math.random() * 20);
};

movie.renderCard = function (img, title) {
  let card =
    '<div class="body-card">' +
    `              <img src=${img} alt="">` +
    `              <h2>${title}</h2>` +
    '          </div>';
  container.insertAdjacentHTML('afterbegin', card);
};

// Form Validation and start
form.addEventListener('input', () => {
  gameSelected = selectTypeGame.value;
  form

  if (gameSelected == 1) {
   
    startGame("TOP250")
  } else if(gameSelected == 2){
   
    startGame("GUESS RANKING")
  }
 

});




// Start Gamee func
function startGame(type) {
  if (type == 'TOP250') {
    console.log('TOP250');
    //Top 250 Movies Guess Ranking
    btn.addEventListener('click', () => {
      container.innerHTML = '';
      guessNum.value = 0;
      movie.getTop250();

      //Guess Send
      btnGuess.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(Math.round(ImdbRating), parseInt(guessNum.value));
        guess(Math.round(ImdbRating), parseInt(guessNum.value));
      });
    });
  } else {
    console.log('GUESS SCORE');
  }
}



function guess(rating, guess) {
  if (rating > guess) {
    guessText.textContent = 'Low Rating';
  } else if (guess > rating) {
    guessText.textContent = 'Soo High';
  } else {
    guessText.textContent = 'Congrats';
  }
}
