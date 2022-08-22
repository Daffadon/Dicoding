// console.log("Selamat Anda berhasil menggunakan JavaScipt pada website")
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false
}

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber
}
function clearCalculator() {
    calculator.displayNumber = '0'
    calculator.operator = null
    calculator.firstNumber = null
    calculator.isWaitForSecondNumber = false
}
function inputDigit(digit) {
    if (calculator.displayNumber == 0) {
        calculator.displayNumber = digit
    } else {
        calculator.displayNumber += digit
    }
}
const inverseNumber = () => {
    if (calculator.displayNumber == 0) {
        return
    }
    calculator.displayNumber *= -1
}
function handleOperator(operator) {
    if (!calculator.isWaitForSecondNumber) {
        calculator.operator = operator
        calculator.firstNumber = calculator.displayNumber
        calculator.isWaitForSecondNumber = true

        calculator.displayNumber = '0';
    } else {
        alert("Operator sudah ditentukan")
    }
}
function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert('belum menentukan Operator')
        return
    }
    let result = 0
    if (calculator.operator === '+') {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber)
    } else {
        result = calculator.firstNumber - calculator.displayNumber
    }
    const history = {
        firstNumber: calculator.firstNumber,
        operator: calculator.operator,
        secondNumber: calculator.displayNumber,
        result: result
    }
    putHistory(history)
    calculator.displayNumber = result
    renderHistory()
}

const buttons = document.querySelectorAll('.button')

for (const item of buttons) {
    item.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('clear')) {
            clearCalculator()
            updateDisplay()
            return
        }
        if (target.classList.contains('negative')) {
            inverseNumber()
            updateDisplay()
            return
        }
        if (target.classList.contains('equals')) {
            performCalculation()
            updateDisplay()
            return
        }
        if (target.classList.contains('operator')) {
            handleOperator(target.innerText)
            updateDisplay()
            return
        }
        inputDigit(target.innerText)
        updateDisplay()
    })
}
