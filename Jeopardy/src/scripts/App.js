import {
  generateCategoryRow,
  generateQuestionRow,
  initEvents,
  initEventAddTeam,
} from './Components/Components';
import { getCategoriesAPI, getQuestions } from './Api/jeopardyApi';

export async function init() {
  try {
    const categoriesIds = await getCategoriesAPI();
    generateCategoryRow(categoriesIds);
    const questions = await getQuestions(categoriesIds);
    const rows = questions.map(generateQuestionRow);
    rows.forEach((row) => {
      document
        .querySelector('.grid-primary')
        .insertAdjacentElement('beforeend', row);
    });

    initEventAddTeam();
    initEvents();
  } catch (e) {
    console.warn(e);
  }
}
