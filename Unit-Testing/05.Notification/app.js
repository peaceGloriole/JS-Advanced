function notify(message) {
  const hiddenDiv = document.getElementById(`notification`);
  
  hiddenDiv.textContent = message;
  hiddenDiv.style.display = `block`;

  hiddenDiv.addEventListener(`click`, hideDiv);
  
  function hideDiv() {
    hiddenDiv.style.display = `none`;
  }
}