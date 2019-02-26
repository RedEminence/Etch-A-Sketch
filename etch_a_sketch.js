const field = document.querySelector('.field');
const getNewSketch = document.querySelector('#getNewSketch');
getNewSketch.addEventListener('click', createField);



function createField(userInput) {
	reset(document.querySelectorAll('.square'));
	userInput = prompt('Hom much the field should be?');
	if (userInput > 100) {
		alert('Hey! Pick a smaller number, you do not wanna break the game, do you?')
	} else {
	for (let rows = 0; rows < userInput; rows++) {
		for (let columns = 0; columns < userInput; columns++) {
			let square = document.createElement('div');
			square.classList.add('square');
			field.appendChild(square);
			square.style.width = 960 / userInput + 'px';
			square.style.height = 960 / userInput + 'px';
	}}
	const squares = document.querySelectorAll('.square');
	squares.forEach((square) => {
		function paint() {
			square.classList.add('square-painted');
		};
		square.addEventListener('mouseover', paint);
	});
}};

//Function to delete all divs thus resetting, after initializing a new game
const reset = (elements) => [...elements].forEach(el => el.remove());





