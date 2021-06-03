const calculatorOutput = document.querySelector('.calculator__output');
const clearBtn = document.querySelector('.clear__btn');

const percentageBtn = document.querySelector('.percentage__btn ');
const divideBtn = document.querySelector('.divide__btn');
const multiplyBtn = document.querySelector('.multiply__btn');
const minusBtn = document.querySelector('.minus__btn');
const plusBtn = document.querySelector('.plus__btn');
const equalsBtn = document.querySelector('.equals__btn');

const btns = document.querySelectorAll('.number__btn');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];

let sum = [];



// ADD HTML
btns.forEach(btn => {
  btn.addEventListener('click', () => {
      numbers.forEach(element => {
          if (element == btn.dataset.number) {
          calculatorOutput.innerHTML += element;
          } 
      });
  });
});

// CLEAR OUTPUT FUNCTION
clearBtn.addEventListener('click', () => {
  const clear = () => {
    calculatorOutput.innerHTML ='';
    sum = [];
  }
  clear();
});

//divide function
divideBtn.addEventListener('click', () => {
sum = `${calculatorOutput.innerHTML}/`;
calculatorOutput.innerHTML=  '';
});

// multiply
multiplyBtn.addEventListener('click', () => {
  sum = `${calculatorOutput.innerHTML}*`;
  calculatorOutput.innerHTML = '';
});

// add
plusBtn.addEventListener('click',() => {
  sum = `${calculatorOutput.innerHTML}+`;
  calculatorOutput.innerHTML ='';
});

// minus
minusBtn.addEventListener('click', () => {
  sum = `${calculatorOutput.innerHTML}-`;
  calculatorOutput.innerHTML = '';
});

// percentage
percentageBtn.addEventListener('click',() => {
  sum = `${calculatorOutput.innerHTML/1000}`;
  calculatorOutput.innerHTML = '';
});

// EQUALS FUNCTION
equalsBtn.addEventListener('click', () => {
  sum +=  `${calculatorOutput.innerHTML}`; 
  const finalSumString = eval(sum) + '';
   const finalSumFormat = finalSumString.substring(0,5);
  calculatorOutput.innerHTML = finalSumFormat; 
});
