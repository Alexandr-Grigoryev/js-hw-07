let counterValueRef = document.querySelector('#value');

const decrementBtnRef = document.querySelector('[data-action="decrement"]');

const incrementBtnRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const onDecrementBtnClick = () => {
    counterValueRef.textContent = counterValue -= 1;
};

decrementBtnRef.addEventListener('click', onDecrementBtnClick);

const onIncrementBtnClick = () => {
    counterValueRef.textContent = counterValue += 1;
};

incrementBtnRef.addEventListener('click', onIncrementBtnClick);
