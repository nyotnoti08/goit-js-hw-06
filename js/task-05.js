const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value.trim() || 'Anonymous';
});

//Added trim() method so it will ignore spaces and will still diplay 'Anonymous' whenever the user inputs an empty space