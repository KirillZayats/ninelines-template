import DOM from '../domHelper';
import {body} from './burgerMenu';

const rocket = DOM.search('.preloader__image');
const containerRocket = DOM.search('.preloader');
const picture = DOM.searchAll('picture');
const classActive = 'preloader--active';
const getCoefficient = () => {
	return window.innerWidth / window.innerHeight;
};
let widthRocket = rocket.width;
let coefficiendTop = 3;
let coefficiendLeft = coefficiendTop * getCoefficient();
let stepLeft = -widthRocket;
let stepTop = -widthRocket;
let countLoading = 0;

const moveRocket = (lengthArray) => {
	let position = rocket.getBoundingClientRect();
	if (position.top > -rocket.width) {
		coefficiendLeft += countLoading ** 5 * getCoefficient() / lengthArray;
		coefficiendTop += countLoading ** 5 / lengthArray;
		stepLeft += coefficiendLeft;
		stepTop += coefficiendTop;
		rocket.style.bottom = `${stepTop}px`;
		rocket.style.left = `${stepLeft}px`;
		requestAnimationFrame(moveRocket);
	} else {
		DOM.removeClass(containerRocket, classActive);
		DOM.toggleScroll(body);
	}
};

window.addEventListener('load', () => {
	const images = [];
	picture.forEach((element) => {
		element = element.querySelector('img');
		if (element) {
			images.push(element);
		}
	});

	DOM.toggleScroll(body);
	moveRocket(images.length);

	let startTime = widthRocket >= 500 ? 100 : 150;
	let time = startTime;
	images.forEach((element, index) => {
		if (element.complete) {
			time += startTime / ((index + 1) / images.length);
			setTimeout(() => {
				countLoading++;
			}, time);
		} else {
			element.onload = () => {
				time += startTime / ((index + 1) / images.length);
				setTimeout(() => {
					countLoading++;
				}, time);
			};
		}
	});
});
