document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calc-form');
    const hiddenDisplay = document.getElementById('hidden-display');
    const display = document.getElementById('display');

    document.addEventListener('keydown', function (e) {
        const validKeys = '0123456789.+-*/';
        if (validKeys.includes(e.key)) {
            e.preventDefault();
            hiddenDisplay.value += e.key;
            display.textContent = hiddenDisplay.value;
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'button';
            input.value = '=';
            form.appendChild(input);
            form.submit();
        } else if (e.key === 'Backspace') {
            e.preventDefault();
            hiddenDisplay.value = hiddenDisplay.value.slice(0, -1);
            display.textContent = hiddenDisplay.value;
        } else if (e.key.toLowerCase() === 'c') {
            e.preventDefault();
            hiddenDisplay.value = '';
            display.textContent = '';
        }
    });
});
