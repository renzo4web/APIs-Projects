import {currCharacters} from "../App";
import {loadHTML} from "../Pages/Home";

const handleInputSearch = (e) => {

    let value = document.querySelector('input').value;
    const normalizeInput = (str) => {
        return str.split(' ').map(letter => letter.toLowerCase()).join(' ');
    };

    const search = (str) => {
        return currCharacters.filter(({name}) => {
            return normalizeInput(name).includes(normalizeInput(str));
        });
    };
    loadHTML(search(value));
};

export const initEvents = () => {
    document.querySelector('form').addEventListener('input', handleInputSearch);
};
