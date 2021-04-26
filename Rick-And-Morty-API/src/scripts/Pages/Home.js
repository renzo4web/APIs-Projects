import {CardHTML} from "../Components/CardSingleCharacter";

export const loadHTML = (characters) => {
    const root = document.querySelector('.root');
    root.innerHTML = '';
    const cards = characters.map(character => CardHTML(character)).join('');
    root.insertAdjacentHTML('afterbegin', cards);
};