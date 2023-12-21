import DOM from '../domHelper';
import {sideBarInput, body} from './burgerMenu';

const listNav = DOM.searchAll('.header__link');
const navLines = DOM.searchAll('.header__line');
const nameActiveLine = 'header__line--active';

const getIndexByIdData = (elements, attr, value) => {
	let item;
	for (let index = 0; index < elements.length; index++) {
		if (DOM.getAttr(elements[index], attr) === value) {
			item = value;
			index = elements.length - 1;
		}
	}

	return item;
};

const initClass = (elements, value, id) => {
	for (let index = 0; index < elements.length; index++) {
		if (+id === index) {
			DOM.addClass(elements[index], value);
		} else {
			DOM.removeClass(elements[index], value);
		}
	}
};

const clickElementBar = (element) => {
	element.addEventListener('click', () => {
		DOM.removeClass(body, 'no-scroll');
		sideBarInput.checked = false;
		let id = getIndexByIdData(navLines, 'data-id', DOM.getAttr(element, 'data-link'));
		initClass(navLines, nameActiveLine, id);
	});
};

listNav.forEach((element) => {
	clickElementBar(element);
});
