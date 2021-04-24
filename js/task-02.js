const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsContainerEl = document.querySelector('#ingredients');
// console.log(ingredientsContainerEl);

const makeIngredients = options => {
    return options.map(option => {
        const liEl = document.createElement('li');

        liEl.textContent = option;

        return liEl;
    });
};

const elements = makeIngredients(ingredients);
ingredientsContainerEl.append(...elements);
