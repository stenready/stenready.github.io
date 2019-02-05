
var buttons = document.querySelector('.btn-container');
var res = document.querySelector('.res');

function calc(buttons) {

	this.plus = (a, b) => {
		res.innerHTML = a + b;
	};

	this.min = (a, b) => {
		res.innerHTML = a - b;
	};

	this.mn = (a, b) => {
		res.innerHTML = a * b;
	};

	this.del = (a, b) => {
		
		if( isNaN(a / b ) ) {
			res.innerHTML = 0;
		}else{
			res.innerHTML = a / b;
		}
		
	};

	var self = this;

	buttons.onclick = (e) => {
		var target = e.target;
		var action = target.getAttribute('data-action');

		var a = +document.querySelector('.number-1').value;
		var b = +document.querySelector('.number-2').value;

		if(action) self[action](a, b);
	}


}
new calc(buttons);
