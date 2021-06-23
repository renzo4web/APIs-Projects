import { callAPI} from "./Api/characterApi";
import { loadHTML } from "./Pages/Home";
import { initEvents } from "./Components/Components";

export async function init() {
  try {
    const charactersData = await callAPI();
    loadHTML(charactersData);
    initEvents();
  } catch (e) {
    console.warn(e);
  }
}
