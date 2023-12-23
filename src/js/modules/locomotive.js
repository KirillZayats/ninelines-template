import LocomotiveScroll from 'locomotive-scroll';
import {removeScroll, scrollIndicator} from '../components/scrollIndicator';
import {initObserverUpdate} from './observer';

let scrollLocomotive;
let isResize = window.innerWidth > 1024;

const initEvents = () => {
	scrollLocomotive.on('scroll', (object) => {
		scrollIndicator(object.scroll.y);
		removeScroll();
	});
};

const initScroll = () => {
	scrollLocomotive = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		scrollFromAnywhere: true,
	});
	initEvents();
	initObserverUpdate();
};

window.addEventListener('resize', () => {
	if (window.innerWidth >= 1025) {
		isResize = true;
		if (!scrollLocomotive) {
			initScroll();
		} else {
			initEvents();
		}
	} else if (isResize) {
		isResize = false;
		scrollLocomotive.scrollTo('top');
		window.scrollTo(0, 0);
		// setTimeout(() => {
		// 	scrollLocomotive && scrollLocomotive.destroy();
		// }, 500);
	}
});

export {
	scrollLocomotive, initScroll,
};
