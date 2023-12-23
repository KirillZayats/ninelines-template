import DOM from '../domHelper';
import {scrollLocomotive} from '../modules/locomotive';
import {isStatusModal} from './share';

const sideBarInput = DOM.searchById('checked');
const body = DOM.search('html');
sideBarInput.addEventListener('click', () => {
	DOM.toggleScroll(body);
	if (scrollLocomotive) {
		scrollLocomotive.stop();
	}
});

window.addEventListener('resize', () => {
	if (window.innerWidth > 1024 && !isStatusModal) {
		sideBarInput.checked = false;
		DOM.removeClass(body, 'no-scroll');
		if (scrollLocomotive) {
			scrollLocomotive.start();
		}
	}
});

export {
	sideBarInput, body,
};
