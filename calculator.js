//result
let text = document.getElementById('text')
let text2 = document.getElementById('text2')
let sign = document.getElementById('sign')

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

var ingress = 0
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
equal.addEventListener('click', function() {operations('=')})
c.addEventListener('click', function () {operations('C')})




//equal.addEventListener('click', result(text.textContent))
//functions
const LIMIT = 17
var flag = 0
function addNumber (num) {

    if(text.textContent!=0 && (flag == 0 || flag ==3)){
        console.log('rayos')
        if(flag == 3){

            console.log('inner2')
            text2.innerHTML = ''
            flag = 0

        };
        if(!text.textContent.includes('.') && num != '.'){
            console.log('inner3')
            linkString(num)
        }
        else{
            console.log('inner 4')
            linkString(num)
         }
    }
    else if(flag == 1){
        console.log('uwu')
        text.innerHTML = ''
        linkString(num)
        flag = 0
 
    }
    else{
        console.log('else')
        if(sign.textContent == ''){
            text2.innerHTML = ''
        }
        if(num == '.'){
            console.log('else1')
            text.innerHTML = text.textContent + num
        }else if (text.textContent!=num && text.textContent != 0){
            console.log('else2')
            text.innerHTML = text.textContent + num}
        else if(num== 0){
            console.log('else3')
            text.innerHTML = num
        }else if(text.textContent=='0.'){
            text.innerHTML = text.textContent + num
        }else if(text.textContent == 0 && num != 0){
            console.log('o.o')
            
            text.innerHTML = num
        }
    }

}
function enableDisableButton(num,state){
    document.getElementById(num).disabled=state
}
const linkString = (num) => text.textContent.length <= LIMIT ?
    text.innerHTML = text.textContent + num: console.log('limit')

function activationSignAndCopy(operator){
    flag = 1
    if(text2.textContent == ''){
        
        text2.innerHTML = text.textContent
    }
    sign.innerHTML = operator
}

function operations(operator){
    switch(operator){
        case '=':
            resolve()
            flag = 3
            break
        case 'C':
            text.innerHTML = '0'
            text2.innerHTML = ''
            sign.innerHTML = ''
            flag = 1
            break
        default:
            if(sign.innerHTML == ''){
                activationSignAndCopy(operator)}
            else{
                console.log('e.e')
                
                resolve()
                text.innerHTML = text2.textContent
                sign.innerHTML = operator
            }
    }
}

function resolve (){
    let num1 = parseFloat(text.textContent)
    let num2 = parseFloat(text2.textContent)
    flag = 1
    switch(sign.textContent){
        case '+':
            text2.innerHTML = num2 + num1
            break
        case '-':
            text2.innerHTML = num2 - num1
            break
        case '*':
            text2.innerHTML = num2 * num1
            break
        case '/':
            text2.innerHTML = num2 / num1
            break
    }
    text.innerHTML = ''
    sign.innerHTML = ''

}
