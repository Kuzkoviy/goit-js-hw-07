const inputValue = document.getElementById('name-input');
const outputValue = document.getElementById('name-output');

inputValue.addEventListener('input', (event) => {
    const trimmedValue = event.currentTarget.value.trim();

    if(trimmedValue === '') {
        outputValue.textContent = 'Anonymous';
    } else {
        outputValue.textContent = trimmedValue;
    }
});