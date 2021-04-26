import {callAPI} from "./Api/characterApi";
import {loadHTML} from "./Pages/Home";
import {initEvents} from "./Components/Components";

export let currCharacters = '';

export async function init() {
    try {
        const charactersData = await callAPI();
        loadHTML(charactersData);
        currCharacters = charactersData;
        initEvents();
    } catch (e) {
        console.warn(e);
    }
}