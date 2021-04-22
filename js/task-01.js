// setInterval(() => {
//     document.title = new Date();
// }, 1000);

// const categories = document.getElementById('categories');
// console.log(categories);

// const item = document.getElementsByClassName('item');
// console.log(item);
// console.log(item.length);

const itemRef = document.querySelectorAll('.item');
// console.log(itemRef);

const num = itemRef.length;
const categoriesNum = `В списке ${num} категории.`;
console.log(categoriesNum);

for (const item of itemRef) {
    const categoriesRef = item.querySelector('h2');
    // console.log(categoriRef);
    // console.log(item);
    console.log(`Категория: ${categoriesRef.textContent}`);

    const elemNumRef = item.querySelectorAll('li');
    console.log(`Количество элементов: ${elemNumRef.length}`);

    for (const elem of elemNumRef) {
        console.log(elem.textContent);
    }
}

// const children = [...itemRef.children];
// console.log(children);
