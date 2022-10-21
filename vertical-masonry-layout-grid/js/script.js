const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
	menuToggle.classList.toggle('clicked');
	nav.classList.toggle('slide');
});

const column1 = document.querySelector('.column.column-1');
const column2 = document.querySelector('.column.column-2');
const column3 = document.querySelector('.column.column-3');
function image() {
	const figureEl = document.createElement('figure');
	const imageEl = document.createElement('img');
	const width = Math.ceil(Math.random() * 1000) + 600;
	const height = Math.ceil(Math.random() * 1000) + 600;
	// console.log(`width: ${width}, height: ${height}`);

	imageEl.setAttribute('src', `https://source.unsplash.com/${width}x${height}`);
	imageEl.setAttribute('loading', 'lazy');
	imageEl.setAttribute('alt', 'unsplash-image');
	figureEl.appendChild(imageEl);

	return figureEl;
}

for (let i = 0; i < 100; i++) {
	column1.appendChild(image());
	column2.appendChild(image());
	column3.appendChild(image());
}
