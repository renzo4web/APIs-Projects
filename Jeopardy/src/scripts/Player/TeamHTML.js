export const loadTeam = (player) => {
  const teamDiv = document.createElement('div');
  const html = `
        <button class="btn-add-point" aria-label="add point">+</button>
        <strong>${player.getName}</strong>
        <strong>Score:${player.getScore}</strong>
        <button class="btn-decrease-point" aria-label="decrease point">-</button>
    `;
  teamDiv.classList.add('team');
  teamDiv.id = player.getId;
  teamDiv.setAttribute('tabindex',player.getIndex);
  teamDiv.insertAdjacentHTML('afterbegin', html);
  return teamDiv;
};
