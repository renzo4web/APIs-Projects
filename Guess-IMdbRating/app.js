const btn = document.getElementById('getMovie');
const container = document.querySelector('.container');
const btnGuess = document.getElementById('guessBtn');
const guessNum = document.getElementById('guessNum');
const guessText = document.getElementById('guessText');
const selectTypeGame = document.getElementById('dropwdown');
const form = document.querySelector('form');
const reset = '';
let ImdbRating;
let pageCount = 1;
let moviesCollection = []
let randomNumbers = 20

const movie = {};

movie.getTop250 = function () {
  const randomTitle = this.randomMovie();
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=7935656617eee5e9e3219add057f26cb&language=en-US&page=${pageCount}`
  )
    .then((response) => response.text())
    .then((result) => {
      g = JSON.parse(result);
      // Copy result to a array 
      if (moviesCollection == "") moviesCollection = [...(g.results)];
      
    
      this.renderCard(
        'https://image.tmdb.org/t/p/w500/' + moviesCollection[randomTitle].backdrop_path,
        moviesCollection[randomTitle].title
        );
        ImdbRating = parseFloat(moviesCollection[randomTitle].vote_average);
        // Remove the movies from the array to avoid repetition
        moviesCollection.splice(randomTitle,1)
        console.log(moviesCollection)
        console.log(pageCount)
      
    })
    .catch((error) => console.log('error', error));
};

movie.randomMovie = function () {
  
  //If the array is changin the random number the same to avoid undefined 
  randomNumbers -= 1 
  //When array is empty change page and reset random number
  if(randomNumbers < 0){
    randomNumbers = moviesCollection.length
    pageCount++
  } 
  return Math.floor(Math.random() * randomNumbers );
};

movie.renderCard = function (img, title) {
  let card =
    '<div class="body-card">' +
    `              <img src=${img} alt="">` +
    `              <h2>${title}</h2>` +
    '          </div>';
  container.insertAdjacentHTML('afterbegin', card);
};



    startGame('TOP250');




// Start Gamee func
function startGame(type) {
  if (type == 'TOP250') {
    console.log('TOP250');
    //Top 250 Movies Guess Ranking
    btn.addEventListener('click', () => {
      container.innerHTML = reset;
      guessNum.value = reset;
      guessText.textContent = reset;
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
    guessNum.value = reset;
  } else if (guess > rating) {
    guessText.textContent = 'Soo High';
    guessNum.value = reset;
  } else {
    guessText.textContent = 'Congrats';
    guessNum.value = reset;
  }
}

console.log(moviesCollection)