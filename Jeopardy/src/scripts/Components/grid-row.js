export const cellQuestionHTML = (clue) => {
  const { question, answer, id, value } = clue;

  const html = `
    <div class="cell-group" role='cell' aria-label="${value}" id='cell-${id}'>
        <div class="cell points">
            <div class="cell-inner">${value}</div>
            <div class="front-answer speech-bubble-ds">
                <p>${answer}</p>
            </div>
            <div class="back-question">
              <div class="speech-bubble-ds">
                  <p>${question}</p>
                <div class="speech-bubble-ds__arrow"></div>
              </div>          
            </div>
        </div>
    </div>
    `;

  return html;
};

export const gridRowCategory = (category) => {
  const { title } = category;

  return `
    <div class="cell cell-categories">
            <h3>${title}</h3>
    </div>
    `;
};
