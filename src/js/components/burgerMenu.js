import DOM from '../domHelper';
import {isStatusModal} from './share';

const sideBarInput = DOM.searchById('checked');
const body = DOM.search('html');
sideBarInput.addEventListener('click', () => {
	DOM.toggleScroll(body);
});

window.addEventListener('resize', () => {
	if (window.innerWidth > 1024 && !isStatusModal) {
		sideBarInput.checked = false;
		DOM.removeClass(body, 'no-scroll');
	}
});

export {
	sideBarInput, body,
};
