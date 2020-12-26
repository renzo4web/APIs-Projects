
const img = document.querySelector('.img-box img');
let searchInput = document.getElementById('search-track');
const btnSearch = document.getElementById('btn-search');
const containerCards = document.querySelector('.container');
const containerPlaylist = document.querySelector('.container-playlist');
let btnAddToPlaylist = document.querySelectorAll('.btnPlaylist');
const btnClear = document.querySelector('.p-button--neutral');






const SoundcloundAPI = {
  init : () => {
    SC.initialize({
      client_id: 'cd9be64eeb32d1741c17cb39e41d254d',
    });
  },
  getTrack : (trackToSearch) => {
    SC.get('/tracks', {
      q: trackToSearch,
    }).then(function (tracks) {
      tracks.forEach((track) => {
        SoundcloundAPI.renderTracks(track.artwork_url, track.title);
        btnAddToPlaylist = document.querySelectorAll('.btnPlaylist');
      });
      btnAddToPlaylist.forEach((element, songSelected) => {
        element.addEventListener('focus', (e) => {
          SoundcloundAPI.playTrack(tracks[songSelected].permalink_url);
        });
      });
    });
  },

  renderTracks : (artwork, nameSong) => {
    const card = `<div class="cards"> <div class="p-image--shadowed"><img src="${
      artwork || 'https://picsum.photos/200'
    }" alt="" srcset="" /></div>${`<span class="p-matrix__title">${nameSong}</span>`}<br><button class='btnPlaylist'>Add to Playlist</button></div>`;
    containerCards.insertAdjacentHTML('beforeend', card);
  },


  playTrack : (trackSelected) => {
    SC.oEmbed(trackSelected, {
      auto_play: true,
    }).then(function (embed) {
      //console.log("oEmbed response: ", embed.html);
      containerPlaylist.insertAdjacentHTML('afterbegin', embed.html);
      localStorage.setItem('key', containerPlaylist.innerHTML);
    });
  },

};


function main(){

  btnSearch.addEventListener('click' || 'keyup', (e) => {
    containerCards.innerHTML = "";
    SoundcloundAPI.init();
    let searchTrack = searchInput.value;
    SoundcloundAPI.getTrack(searchTrack);
  });

  document.body.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
      containerCards.innerHTML = "";
      SoundcloundAPI.init();
      let searchTrack = searchInput.value;
      SoundcloundAPI.getTrack(searchTrack);
    }
  });

}

  if (containerPlaylist.innerHTML == '') {
    let songs = localStorage.getItem('key');
    containerPlaylist.innerHTML = songs;
  }

function clearPlaylist(){
  btnClear.addEventListener('click', () => {
    localStorage.clear();
    containerPlaylist.innerHTML = '';
  });

}


main();
clearPlaylist();
