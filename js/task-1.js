'use strict';

const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);



categoryItems.forEach(item => {
	const categoryTitle = item.querySelector('h2').textContent;
	const itemElements = item.querySelectorAll('li');

	console.log(`Category: ${categoryTitle}`);
	console.log(`Elements: ${itemElements.length}`);
});