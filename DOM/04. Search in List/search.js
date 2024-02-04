function search() {
   let inputRef = document.getElementById(`searchText`);
   let btn = document.querySelector(`button`);
   let resultRef = document.getElementById(`result`);
   let townList = Array.from(document.getElementById(`towns`));
   let searchText = inputRef.value;
   
   let matches = 0;
   
   btn.addEventListener(`click`, clickHandler);

   function clickHandler() {
      for (let town of townList) {
         
      }
   }
}
