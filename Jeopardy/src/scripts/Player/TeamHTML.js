export const loadTeam = (player) => {
  const teamDiv = document.createElement('div');


  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  const html = `
        <button class="btn-add-point" aria-label="add point">+</button>
        <strong style='color:${randomHexColorCode()}'>${player.getName}</strong>
        <strong class='score-${player.getId}'>Score:${player.getScore}</strong>
        <button class="btn-decrease-point" aria-label="decrease point">-</button>
    `;
  teamDiv.classList.add('team');
  teamDiv.id = player.getId;
  teamDiv.setAttribute('tabindex',player.getIndex);
  teamDiv.insertAdjacentHTML('afterbegin', html);
  return teamDiv;
};
