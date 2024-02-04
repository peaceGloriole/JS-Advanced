function addItem() {
    let textField = document.getElementById(`newItemText`);
    let inputField = document.getElementById(`newItemValue`);


    let textValue = textField.value;
    let inputValue = inputField.value;

    let option = document.createElement(`option`);
    option.textContent = textValue;
    option.value = inputValue;

    let selectMenu = document.getElementById(`menu`);
    selectMenu.appendChild(option);

    textField.value = ``;
    inputField.value = ``;
}