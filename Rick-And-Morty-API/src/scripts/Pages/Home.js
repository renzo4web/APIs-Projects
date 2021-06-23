import { CardHTML } from "../Components/CardSingleCharacter";

export const loadHTML = (characters, { add } = {}) => {
  const root = document.querySelector(".root");
  const cards = characters.map((character) => CardHTML(character)).join("");
  if (add) {
    root.innerHTML += cards;
    return;
  }
  root.innerHTML = "";
  root.insertAdjacentHTML("afterbegin", cards);
};
