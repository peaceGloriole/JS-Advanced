function solve() {
  let text = document.getElementById(`text`).value;
  let convention = document.getElementById(`naming-convention`).value;
  let resultRef = document.getElementById(`result`);

  text = text.toLowerCase();
  let result = ``;
  let textArr = text.split(` `);

  if (convention === 'Camel Case') {
    result = textArr.shift();
    textArr.forEach(word => {
      result += word[0].toUpperCase() + word.substring(1);
    })
  } else if (convention === `Pascal Case`) {
    textArr.forEach(word => {
      result += word[0].toUpperCase() + word.substring(1);
    })
  } else {
    result = `Error!`;
  }
  resultRef.textContent = result;
}