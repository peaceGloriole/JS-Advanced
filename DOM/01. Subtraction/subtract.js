function subtract() {
    let firstNumRef = document.getElementById(`firstNumber`).value;
    let secondNumRef = document.getElementById(`secondNumber`).value;
    
    let sum = Number(firstNumRef) - Number(secondNumRef);
    document.getElementById(`result`).textContent = sum;
}