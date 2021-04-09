const displayNum = document.querySelector('displayNumber');
const previousNum = document.querySelector('.previousNumber');
const currentNum = document.querySelector('.currentNumber');
const allClear = document.querySelector('.all-clear');
const clear = document.querySelector('.clear');
const keys = document.querySelectorAll('.key');
const ops = document.querySelectorAll('.ops');
const evaluation = document.querySelector('.evaluation');

let previousValue;
let currentValue = currentNum.textContent;

// all clear button
allClear.addEventListener('click', () => {
	currentValue = '';
	previousNum.textContent = currentValue;
	currentNum.textContent = currentValue;
});

//clear button
clear.addEventListener('click', clearHandler);

function clearHandler() {
	const res = currentValue.split('');
	res.pop();
	currentValue = res.join('');
	currentNum.innerHTML = currentValue;
}

// key button
keys.forEach((key) => {
	key.addEventListener('click', putKeyValue);
});

function putKeyValue(e) {
	const res = currentValue.split('');
	res.push(e.target.innerHTML);
	currentValue = res.join('');
	currentNum.innerHTML = currentValue;
}

// evaluation
evaluation.addEventListener('click', () => {
	let result = eval(currentValue);
	previousNum.textContent = currentValue;
	currentNum.textContent = result;
});
