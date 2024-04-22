const quantityOfItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${quantityOfItems.length}`);

quantityOfItems.forEach(element => {
    const itemTitle = element.querySelector('h2');
    console.log(`Category: ${itemTitle.textContent}`);

    const quantityOfListElements = element.querySelectorAll('li');
    console.log(`Elements: ${quantityOfListElements.length}`);
});