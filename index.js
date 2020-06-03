//result
let text = document.getElementById('text')
let text2 = document.getElementById('text2')

//numbers

const zero = document.getElementById('0')
const one = document.getElementById('1')
const two = document.getElementById('2')
const tree = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')

//sign

const dot = document.getElementById('.')
const add = document.getElementById('+')
const subt = document.getElementById('-')
const mult = document.getElementById('*')
const div = document.getElementById('/')
const equal = document.getElementById('=')
const c = document.getElementById('C')

//listeners
one.addEventListener('click', function() {addNumber(1)})
two.addEventListener('click', function() {addNumber(2)})
tree.addEventListener('click', function() {addNumber(3)})
four.addEventListener('click', function() {addNumber(4)})
five.addEventListener('click', function() {addNumber(5)})
six.addEventListener('click', function() {addNumber(6)})
seven.addEventListener('click', function() {addNumber(7)})
eight.addEventListener('click', function() {addNumber(8)})
nine.addEventListener('click', function() {addNumber(9)})
zero.addEventListener('click', function() {addNumber(0)})


dot.addEventListener('click', function() {addNumber('.')})
add.addEventListener('click', function() {operations('+')})
subt.addEventListener('click', function() {operations('-')})
mult.addEventListener('click', function() {operations('*')})
div.addEventListener('click', function() {operations('/')})
equal.addEventListener('click', function() {endOperation('=')})
c.addEventListener('click', function () {
    text.textContent = '0'
    text2.textContent = ''
    lastOperation = ''
    ingress = 0
    result= 0
    flag = false
} )

//equal.addEventListener('click', result(text.textContent))
//functions
const LIMIT = 17
let lastOperation = ''
let result = 0
let ingress = 0
let flag = false

function pushNumber (num) {
    text.textContent = text.textContent + num
}
function newIngress (){
    if(text2.textContent !== 0 && flag==false){
        text.textContent = ''
    }
}
function addNumber (num) {
    newIngress()
    if(limitIngress() == false){
        if (num === '.') {
            if (text.textContent.includes('.')) {
            } else {
                pushNumber(num)
            }
        }
        else if (num === 0) {
            if (flag == false) {
                pushNumber(num)
            }
            if (text.textContent != 0) {
                pushNumber(num)
            }
        } else {
            if (text.textContent == 0) {
                text.textContent = ''
            }
            pushNumber(num)
        }
    }
    flag = true
}
function limitIngress() {
    var i = false
    if (text.textContent.length >= LIMIT-1){
        i = true
    }
    return i
}
function remplace () {
    var aux = ''
    var i = compareLength()
    if(i > 0){
        let array = text2.textContent
        i += 3
        for (i ; i < array.length ; i++){
            aux = aux + array[i]
        }
        aux = '...' + aux
        text2.textContent = aux
    }
}
function compareLength () {
    var i = 0
    if (text2.textContent.length>=LIMIT){
        i = text2.textContent.length - LIMIT
    }
    return i
}
function operations (sign) {
    ingress = parseFloat(text.textContent)
    if(text2.textContent === '') {
        lastOperation = sign
        result = ingress
        copyText()
    } else {
        if (flag === true){
            backgroudOperation()
            lastOperation = sign
            copyText()
        }else{
            console.log(false)
            lastOperation = sign
            verifyingLastEntryAndChange()
        }
        remplaceTextForResult()
    }
    remplace()
    flag = false
}
function remplaceTextForResult (){
    text.textContent = result
}
function copyText(){
    text2.textContent = text2.textContent + ingress + lastOperation
}
function backgroudOperation () {
    if (flag === true) {
        switch (lastOperation) {
            case ('+'): result = parseFloat(result) + parseFloat(ingress)
                break
            case ('-'): result = parseFloat(result) - parseFloat(ingress)
                break
            case ('*'): result = parseFloat(result) * parseFloat(ingress)
                break
            case ('/'): result = parseFloat(result) / parseFloat(ingress)
                break
        }
    }
}

function verifyingLastEntryAndChange() {
    let length = text2.textContent.length
    let lastDigit = text2.textContent.charAt(length - 1)
    if(lastDigit === lastOperation) {
    }else {
        let aux = ''
        for(let i=0;i<length; i++) {
            if (i !== length - 1){
                aux = aux + text2.textContent[i]
            }else{
                aux = aux + lastOperation
            }
            
        }
        text2.textContent = aux
    }
}

function endOperation () {
    if(text2.textContent != ''){
        ingress = text.textContent
    }
    text2.textContent = ''
    backgroudOperation()
    remplaceTextForResult()
}
