import { loadHTML } from "../Pages/Home";
import { modalHTML } from "./modal";
import { callAPI, currCharacters } from "../Api/characterApi";



const handleInputSearch = (e) => {
  let value = document.querySelector("input").value;
  const normalizeInput = (str) => {
    return str
      .split(" ")
      .map((letter) => letter.toLowerCase())
      .join(" ");
  };

  const search = (str) => {
    return currCharacters.filter(({ name }) => {
      return normalizeInput(name).includes(normalizeInput(str));
    });
  };
  loadHTML(search(value));
};

const modal = {
  title: document.querySelector("#info-modal-label"),
  body: document.querySelector(".modal-body"),
};

let page = 1;

export const initEvents = async () => {
  document.querySelector("form").addEventListener("input", handleInputSearch);

  document.querySelector("#btn-more").addEventListener("click", async () => {
    page++;
    let charactersData = await callAPI({ next: page });
    loadHTML(charactersData, { add: true });
  });

  document.querySelector(".root").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      const clickedCharacter = currCharacters.find(
        (el) => el.id == e.target.dataset.id
      );
      modal.title.textContent = clickedCharacter.name;
      modal.body.innerHTML = modalHTML(clickedCharacter);
    }
  });
};
