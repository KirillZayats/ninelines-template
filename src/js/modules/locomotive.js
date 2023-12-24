import LocomotiveScroll from 'locomotive-scroll';
import {removeScroll, scrollIndicator} from '../components/scrollIndicator';
import {initObserverUpdate} from './observer';
import DOM from '../domHelper';

let scrollLocomotive;
let isResize = window.innerWidth > 1024;
const header = DOM.search('.header');

const initEvents = () => {
	scrollLocomotive.on('scroll', (object) => {
		scrollIndicator(object.scroll.y);
		removeScroll();
		header.style.transform = `translate3d(0, ${object.scroll.y}px, 0)`;
	});
};

const initScroll = () => {
	scrollLocomotive = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		multiplier: 0.6,
		lerp: 0.1,
		reloadOnContextChange: true,
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
	}
});

export {
	scrollLocomotive, initScroll,
};
