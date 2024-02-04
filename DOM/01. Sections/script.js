function create(words) {
   const ref = document.getElementById(`content`);

   for (let word of words) {
      let divEl = document.createElement(`div`);
      let pEl = document.createElement(`p`);
      
      pEl.textContent = word;
      pEl.style.display = `none`;
      
      divEl.addEventListener(`click`, clickHandler);

      divEl.appendChild(pEl);
      ref.appendChild(divEl);
   }

   function clickHandler(event) {
      const target = event.currentTarget
      target.children[0].style.display = target.children[0].style.display === `none` ? `block` : `none`;
   }
}