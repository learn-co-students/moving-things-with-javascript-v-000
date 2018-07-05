const app = "I don't do much.";
var dodger = document.getElementById('dodger');

function colorDodger() {
	dodger.style.backgroundColor = "#000000";
}

function moveDodgerRight() {
	var leftNumbers = dodger.style.left.replace('px', '');
	var left = parseInt(leftNumbers, 10);
	dodger.style.left = `${left + 10}px`;
}

function moveDodgerLeft() {
	var leftNumbers = dodger.style.left.replace('px', '');
	var left = parseInt(leftNumbers, 10);
	if (left > 0) {
		dodger.style.left = `${left - 10}px`;
	}
}

document.addEventListener('keydown', function (e) {
	if (e.which === 39) {
		moveDodgerRight();
	}
});

document.addEventListener('keydown', function (e) {
	if (e.which === 37) {
		moveDodgerLeft();
	}
});

function clickDodger() {
	dodger.on('click', function () {
		colorDodger();
	});
}

// $(document).ready(function(){
//   colorDodger();
//   moveDodgerLeft();    
//   moveDodgerLeft();
//   clickDodger();
// });

