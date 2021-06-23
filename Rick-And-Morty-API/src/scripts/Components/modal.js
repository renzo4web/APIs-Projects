export const modalHTML = (character) => {
  const {
    name,
    status,
    species,
    type,
    gender,
    image,
    location,
    origin,
    episode,
  } = character;

  return `<img  src="${image}" alt="${name}">
    <section class="card__content">
        <div class="card__stat">
            <span>Status</span> <span>${status}</span>
        </div>
        <div class="card__stat">
            <span>Species</span><span>${species}</span>
        </div>
        <div class="card__stat">
            <span>type</span> <span>${type}</span>
        </div>
        <div class="card__stat">
            <span>gender</span> <span>${gender}</span>
        </div>
        <div class="card__stat">
            <span>Episodes</span> <span>${episode.length}</span>
        </div>
        <div class="card__stat">
            <span>Location</span> <span>${location.name}</span>
        </div>
        <div class="card__stat">
            <span>Origin</span> <span>${origin.name}</span>
        </div>

        <a href="https://rickandmorty.fandom.com/wiki/${name.split(' ').join('_')}">If this information is not enough</a>
    `;
};
