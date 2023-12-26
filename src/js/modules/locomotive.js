import LocomotiveScroll from 'locomotive-scroll';
import {removeScroll, scrollIndicator} from '../components/scrollIndicator';
import {initObserverUpdate} from './observer';
import DOM from '../domHelper';
import {typeDevice} from './device';

const header = DOM.search('.header');
let scrollLocomotive;
let widthDesktop = 1025;
let isResize = window.innerWidth >= widthDesktop;
let currentY;

const initEvents = () => {
	scrollLocomotive.on('scroll', (object) => {
		currentY = object.scroll.y;
		scrollIndicator(currentY);
		removeScroll();
		switch (typeDevice) {
			case 'desktop':
				header.style.transform = `translate3d(0, ${currentY}px, 0)`;
				break;
			default:
				break;
		}
	});
};

const initScroll = () => {
	scrollLocomotive = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		multiplier: 0.6,
		lerp: 0.06,
		reloadOnContextChange: true,
		repeat: true,
	});
	initEvents();
	initObserverUpdate();
};

window.addEventListener('resize', () => {
	if (window.innerWidth >= widthDesktop) {
		isResize = true;
		if (!scrollLocomotive) {
			initScroll();
		}
	} else if (isResize) {
		isResize = false;
		scrollLocomotive.scrollTo('top');
		window.scrollTo(0, 0);
	}
});

export {scrollLocomotive, initScroll};
