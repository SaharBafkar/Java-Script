let $ = document

const firstValue = $.querySelector('.C')
const secondValue = $.querySelector('.F')
const converter = $.querySelector('#converter')
const result = $.querySelector('.result')
const convertButton = $.querySelector('.convertButton')
const resetButton = $.querySelector('.resetButton')
const changeButton = $.querySelector('.changeButton')

function convert () {
    console.log('Convert')
}

function reset () {
    console.log('Reset')
}

function swap () {
    console.log('Change')
}

convertButton.addEventListener('click', convert)
resetButton.addEventListener('click', reset)
changeButton.addEventListener('click', swap)