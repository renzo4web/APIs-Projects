import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

const btn = document.getElementById('getMovie');
const container = document.querySelector('#root');
const btnGuess = document.getElementById('guessBtn');
const guessNum = document.getElementById('guessNum');
const guessText = document.getElementById('guessText');
const reset = '';
let ImdbRating;
let pageCount = 1;
let moviesCollection = [];
let randomNumbers = 20;

const movie = {};

movie.getTop250 = function () {
  const randomTitle = this.randomMovie();
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=7935656617eee5e9e3219add057f26cb&language=en-US&page=${pageCount}`
  )
    .then((response) => response.text())
    .then((result) => {
      let g = JSON.parse(result);
      // Copy result to a array 
      if (moviesCollection == "") moviesCollection = [...(g.results)];
      
      


      this.renderCard(
        'https://image.tmdb.org/t/p/w500/' + moviesCollection[randomTitle].backdrop_path,
        moviesCollection[randomTitle].title,moviesCollection[randomTitle].overview,
        moviesCollection[randomTitle].release_date
        );
        ImdbRating = parseFloat(moviesCollection[randomTitle].vote_average);
        // Remove the movies from the array to avoid repetition
        moviesCollection.splice(randomTitle,1);
        console.log(moviesCollection);
        console.log(pageCount);
      
    })
    .catch((error) => guessText.textContent ='Try Again');
};

movie.randomMovie = function () {
  
  //If the array is changin the random number the same to avoid undefined 
  randomNumbers -= 1 ;
  //When array is empty change page and reset random number
  if(randomNumbers < 0){
    randomNumbers = moviesCollection.length;
    pageCount++;
  } 
  return Math.floor(Math.random() * randomNumbers );
};

movie.renderCard = function (img, title,overview,year) {
  let card =
    `
    <div class="py-3 sm:max-w-xl sm:mx-auto">
      <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
        <div class="h-48 overflow-visible w-1/2">
            <img class="h-full object-cover rounded-3xl shadow-lg" src="${img}" alt="">
        </div>
        <div class="flex flex-col w-1/2 space-y-4">
          <div class="flex justify-between items-start">
            <h2 class="text-3xl font-bold">${title}</h2>
          </div>
          <div>
            <div class="text-sm text-gray-400">Movie</div>
            <div class="text-lg text-gray-800">${year.split('-')[0]}</div>
          </div>
            <p class="movie-overview p-2 text-gray-400 max-h-40 overflow-y-hidden">${overview}</p>
        </div>
  
      </div>
    </div>
    
  `;
  container.innerHTML= card;
};



startGame('TOP250');
movie.getTop250();




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
         
    });
    btnGuess.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('clicked');
      console.log(Math.round(ImdbRating), parseInt(guessNum.value));
      guess(Math.round(ImdbRating), parseInt(guessNum.value));
    });
  } else {
    console.log('GUESS SCORE');
  }
}



function guess(rating, guess) {

  let result = '';

  if (rating > guess) {
    result = 'Low Score';
    guessNum.value = reset;
  } else if (guess > rating) {
    result = 'Soo High';
    guessNum.value = reset;
  } else {
    result = '🎉 Congrats 🎊';
    movie.getTop250();
    guessNum.value = reset;
  }

  guessText.innerHTML = result;

  setTimeout(()=> guessText.innerHTML = '',800);

}
