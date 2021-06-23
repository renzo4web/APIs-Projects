export const CardHTML = (character) => {
  const { name, status, species, type, gender, image, id } = character;

  const html = `
        <div class="card shadow">
            <img  src="${image}" alt="${name}">
            <h4 class="card__title">${name}</h4>
            <ul class="list-group list-group-flush">
  <li class="list-group-item"><span class='text-primary fw-bold fs-3'>Status</span> <span class='fs-3 text-decoration-underline'>${status}</span></li>
  <li class="list-group-item"><span class='text-primary fw-bold fs-3'>Species</span><span class='fs-3 text-decoration-underline'>${species}</span></li>
  
  ${
    type
      ? `<li class="list-group-item"><span class='text-primary fw-bold fs-3'>type</span> <span class='fs-3 text-decoration-underline'>${type}</span></li>`
      : ""
  }
 
  <li class="list-group-item"><span class='text-primary fw-bold fs-3'>gender</span> <span class='fs-3 text-decoration-underline'>${gender}</span></li>
</ul>



                <button type="button" data-id=${id}  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#info-modal">
               Read More
              </button>
  
             </div> 
                
    `;

  return html;
};
