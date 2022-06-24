
let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if (CURRENT_NUMBER.innerHTML == 0) {
        document.getElementById('currentNumber').style.color = 'yellow';
    }
    else if (CURRENT_NUMBER.innerHTML >= 1) {
        document.getElementById('currentNumber').style.color = 'blue';
    }
    else {
        document.getElementById('currentNumber').style.color = 'orange';
    }

}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if (CURRENT_NUMBER.innerHTML == 0) {
        document.getElementById('currentNumber').style.color = 'yellow';
    }
    else if (CURRENT_NUMBER.innerHTML >= 1) {
        document.getElementById('currentNumber').style.color = 'blue';
    }
    else {
        document.getElementById('currentNumber').style.color = 'orange';
    }
}



