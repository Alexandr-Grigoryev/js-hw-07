const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    inputRef.classList.add('valid', 'invalid');
    if (inputRef.value.length === Number(inputRef.dataset.length))
        inputRef.classList.replace('invalid', 'valid');
    else inputRef.classList.replace('valid', 'invalid');
}

// function onInputBlur(event) {
//     inputRef.classList.add('valid', 'invalid');
//     if (inputRef.value.length === Number(inputRef.dataset.length))
//         inputRef.style.borderColor = '#4caf50';
//     else inputRef.style.borderColor = '#f44336';
// }
