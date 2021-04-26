

export const CardHTML = (character) => {

    const {
        name,
        status,
        species,
        type,
        gender,
        image
    } = character;


    const html = `
        <div class="card">
            <img  src="${image}" alt="${name}">
            <section class="card__content">
                <h4 class="card__title">${name}</h4>
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
             </div> 
                
    `;

    return html;

};