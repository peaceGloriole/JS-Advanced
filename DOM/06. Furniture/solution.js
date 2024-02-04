function solve() {
  const [inputTextRef, resultTextRef] = document.querySelectorAll(`textarea`);
  const [genBtnRef, buyBtnRef] = document.querySelectorAll  (`button`);
  const tableRef = document.querySelector(`tbody`); 

  genBtnRef.addEventListener(`click`, generateClick);
  buyBtnRef.addEventListener(`click`, buyClick);

  function generateClick(e) {
    let data = JSON.parse(inputTextRef.value);

    for (let item of data) {
      createAndAppend(item);
    }
  }

  function createAndAppend(item) {
    const tr = document.createElement(`tr`);
    tr.innerHTML += creataDataTable(`<img src=${item.img}>`);
    tr.innerHTML += creataDataTable(`<p>${item.name}</p>`);
    tr.innerHTML += creataDataTable(`<p>${item.price}</p>`);
    tr.innerHTML += creataDataTable(`<p>${item.decFactor}</p>`);
    tr.innerHTML += creataDataTable(`<input type="checkbox">`);
    tableRef.appendChild(tr);
  }

  function creataDataTable(item) {
    return `<td>${item}</td>`
  }

  function buyClick() {
    let name = [];
    let totalPrice = 0;
    let sumDecFactor = 0;
    let checkBoxValid = document.querySelectorAll(`input[type="checkbox"]:checked`);

      for (let checkbox of checkBoxValid) {
        let [imgRef, nameRef, priceRef, decRef] = Array.from(checkbox.parentElement.parentElement.children);
        let nameValue = nameRef.textContent;
        let priceValue = Number(priceRef.textContent);
        let decFacValue = Number(decRef.textContent);

        name.push(nameValue);
        totalPrice += priceValue;
        sumDecFactor += decFacValue;
      }

      // if (name.length <= 0) {
      //   return resultTextRef.value = `No items added!`;
      // }

      let result = resultTextRef;
      result = `Bought furniture: ${name.join(`, `)}\n`;
      result += `Total price: ${totalPrice.toFixed(2)}\n`;
      result += `Average decoration factor: ${sumDecFactor / name.length}`; 
      resultTextRef.value = result;
  }
}