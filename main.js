const inputField = document.getElementById('inputField');
const keyboard = document.getElementById('keyboard');

const keys = [
['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

keys.forEach(row => {
const rowDiv = document.createElement('div');
rowDiv.className = 'row';

row.forEach(key => {
const button = document.createElement('button');
button.className = 'button';
button.textContent = key;
button.addEventListener('click', () => {
inputField.value += key;
});

rowDiv.appendChild(button);
});

keyboard.appendChild(rowDiv);
});

document.addEventListener('keydown', e => {
const key = e.key;

if (/[a-zA-Z0-9]/.test(key)) {
inputField.value += key;
highlightKey(key);
} else if (key === 'Backspace') {
e.preventDefault(); 
inputField.value = inputField.value.slice(0, -1);
highlightBackspaceButton();
}
});

document.addEventListener('keyup', e => {
const key = e.key;

if (/[a-zA-Z0-9]/.test(key)) {
removeHighlightKey(key);
} else if (key === 'Backspace') {
removeHighlightBackspaceButton();
}
});

function highlightKey(key) {
const buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i++) {
if (buttons[i].textContent.toLowerCase() === key.toLowerCase()) {
buttons[i].classList.add('active');
break;
}
}
}

function removeHighlightKey(key) {
const buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i++) {
if (buttons[i].textContent.toLowerCase() === key.toLowerCase()) {
buttons[i].classList.remove('active');
break;
}
}
}

const backspaceButton = document.createElement('button');
backspaceButton.className = 'button';
backspaceButton.textContent = 'Backspace';

backspaceButton.addEventListener('click', () => {
inputField.value = inputField.value.slice(0, -1);
});

keyboard.appendChild(backspaceButton);

document.addEventListener('keydown', e => {
const key = e.key;

if (key === 'Backspace') {
e.preventDefault(); // Prevent browser back navigation
highlightBackspaceButton();
}
});

document.addEventListener('keyup', e => {
const key = e.key;

if (key === 'Backspace') {
removeHighlightBackspaceButton();
}
});

function highlightBackspaceButton() {
backspaceButton.classList.add('active');
}

function removeHighlightBackspaceButton() {
backspaceButton.classList.remove('active');
}