import { loadTeam } from '../Player/TeamHTML';
import { Team } from '../Player/Team';
import { cellQuestionHTML, gridRowCategory } from './grid-row';
let gameBoard = {};
let numsOfTeam = 0;
let teams = [];
const teamsContainer = document.querySelector('.teams');

const handleClickCell = (e) => {
  const [cell] = e.currentTarget.children;
  const [, , , answer, , question] = e.currentTarget.children[0].childNodes;

  gameBoard = {
    currentCell: cell,
    question,
    answer,
    grid: document.querySelector('.grid'),
  };
  displayCells(true);
  window.addEventListener('keydown', handleKey);
};

const handleKey = (key) => {
  if (key.code === 'Escape') {
    displayCells(false);
    return;
  }
  gameBoard.answer.classList.add('show-answer');
};

export const initEvents = () => {
  const cells = document.querySelectorAll('.cell-group');
  cells.forEach((cell) => cell.addEventListener('click', handleClickCell));
};

const handleClickAddTeam = () => {
  numsOfTeam++;
  console.log(numsOfTeam);
  const newTeam = new Team(numsOfTeam);
  teams.push(newTeam);
  teamsContainer.appendChild(loadTeam(newTeam));
  initEventTeamsBtns();
};

export const initEventAddTeam = () => {
  const btnAddTeam = document.querySelector('.btn-add-team');
  btnAddTeam.addEventListener('click', handleClickAddTeam);
};

const handleBtn = (e) => {
  const { tabIndex } = e.target.parentElement;
  const btn = e.target;
  if (btn.matches('.btn-add-point')) {
    teams[tabIndex].addPoint();
    return;
  }
  teams[tabIndex].decreasePoint();
};

export const initEventTeamsBtns = () => {
  const btns = teamsContainer.querySelectorAll('button');
  btns.forEach((btn) => btn.addEventListener('click', handleBtn));
};

export const generateCategoryRow = (categories) => {
  const rowCategoriesContainer = document.querySelector('.row-categories');

  const html = categories.map(gridRowCategory);

  rowCategoriesContainer.insertAdjacentHTML('afterbegin', html);
};

export const generateQuestionRow = (clues) => {
  const lengthRow = 5;
  let rowHTML = [];
  for (let i = 0; i < lengthRow; i++) {
    rowHTML.push(cellQuestionHTML(clues[i]));
  }
  const row = document.createElement('div');
  row.className = 'grid-row grid-row-questions';
  row.insertAdjacentHTML('afterbegin', rowHTML.join(''));
  return row;
};

const displayCells = (display) => {
  if (display) {
    gameBoard.currentCell.classList.add('open');
    gameBoard.grid.classList.add('freeze');
    return;
  }
  gameBoard.currentCell.classList.remove('open');
  gameBoard.grid.classList.remove('freeze');
  gameBoard.answer.classList.remove('show-answer');
};
