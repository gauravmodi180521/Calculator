let prevNumber='';
let calcOperator='';
let currentNumber='0';

const inputNumber = (number) =>{
    if (currentNumber==='0')
    {
        currentNumber = number;
    }
    else
    {
        currentNumber+=number;
    }
}

const inputOperator = (operator) =>{
    if(calcOperator === '')
    {
        prevNumber=currentNumber;
    }
    calcOperator=operator;
    currentNumber='0';
}
const clearall = document.querySelector(".all-clear");
clearall.addEventListener("click",()=>{
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = ()=>{
    prevNumber=''
    currentNumber='0'
    calcOperator=''
}

const calculate=() => {
    let result=''
    switch(calcOperator)
    {
        case '+':
            result=parseFloat(prevNumber)+parseFloat(currentNumber)
            break
        case '-':
            result=prevNumber-currentNumber
            break
        case '*':
            result=prevNumber*currentNumber
            break
        case '/':
            result=prevNumber/currentNumber
            break
        default:
            break
    }
    currentNumber=result
    calcOperator=''
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});

const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click",(e)=>{
        inputOperator(e.target.value);
    })
})

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click",()=>{
    calculate()
    updateScreen(currentNumber)
})


const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value=number;
}

const decimal =document.querySelector(".decimal")
decimal.addEventListener("click",(e)=>{
    inputDecimal(e.target.value)
    updateScreen(currentNumber)
})

const inputDecimal=()=>{
    if(currentNumber.includes('.'))
    {
        return
    }
    currentNumber+='.'
}