function getPin() {
    const pin = generatePin()
    const pinString = pin + ''

    if (pinString.length === 4) {
        return pin
    } else {
        return getPin()
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000)

    return random
}

document.getElementById('generate-pin').addEventListener('click', () => {
    const pin = getPin()

    // display pin field
    const displayPin = document.getElementById('display-pin')
    displayPin.value = pin
})

document.getElementById('calculator').addEventListener('click', (e) => {
    const num = e.target.innerText
    const typedNumberField = document.getElementById('typed-numbers')
    const prevTypedNum = typedNumberField.value

    if (isNaN(num)) {
        if (num === 'C') {
            typedNumberField.value = ''
        }
        else if (num === '<') {
            const digits = prevTypedNum.split('')
            digits.pop()
            const remainingDigits = digits.join('')
            typedNumberField.value = remainingDigits
        }
    } else {
        const newTypedNum = prevTypedNum + num
        typedNumberField.value = newTypedNum
    }
})

document.getElementById('verify-pin').addEventListener('click', () => {
    const displayPinField = document.getElementById('display-pin')
    const currPin = displayPinField.value

    const typedNumberField = document.getElementById('typed-numbers')
    const typedNum = typedNumberField.value

    const success = document.getElementById('pin-success')
    const failed = document.getElementById('pin-failed')

    if (currPin === typedNum) {
        success.style.display = 'block'
        failed.style.display = 'none'
    } else {
        failed.style.display = 'block'
        success.style.display = 'none'
    }
})