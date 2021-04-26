import { CardHTML } from '../Components/grid-row';

export const loadHTML = (categories, clues) => {
  const root = document.querySelector('.root');
  root.innerHTML = '';
  const cards = characters.map((character) => CardHTML(character)).join('');
  root.insertAdjacentHTML('afterbegin', cards);
};
