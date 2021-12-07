const todoItems = document.querySelector('.items-list');

const textField = document.querySelector('.add-item > #add-field');
const addButton = document.querySelector('.todo-board > .add-item > button');

addButton.addEventListener('click', () => {
	createItem();
});

textField.addEventListener('keyup', (event) => {
	if (event.key === 'Enter') createItem();
});

function createItem() {
	const div = document.createElement('div');
	div.classList.add('item');
	// checkbox
	const checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	// todo text
	const text = document.createElement('span');
	text.textContent = textField.value;
	div.append(checkbox);
	div.append(text);

	todoItems.append(div);
}
