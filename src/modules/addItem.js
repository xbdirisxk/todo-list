const todoItems = document.querySelector('.items-list');
const textField = document.querySelector('.todo-list > .add-item > input');
const addButton = document.querySelector('.todo-list > .add-item > button');

addButton.addEventListener('click', () => {
	createItem();
});

function createItem() {
	let div = document.createElement('div');
	div.classList.add('item');
	// checkbox
	let checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	let text = document.createElement('span');
	text.textContent = textField.value;
	div.append(checkbox);
	div.append(text);

	todoItems.append(div);
	text.textContent = '';
}
