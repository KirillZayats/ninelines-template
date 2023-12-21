import DOM from '../domHelper';

const sideBarInput = DOM.searchById('checked');
const body = DOM.search('html');
sideBarInput.addEventListener('click', () => {
	DOM.toggleScroll(body);
});

window.addEventListener('resize', () => {
	if (window.innerWidth > 1024) {
		sideBarInput.checked = false;
		DOM.removeClass(body, 'no-scroll');
	}
});

export {
	sideBarInput, body,
};
