function subtract() {
    let result = document.getElementById('result');
    let num1 = Number(document.getElementById('firstNumber').value);
    let num2 = Number(document.getElementById('secondNumber').value);

    result.innerHTML = (num1 - num2);
}
