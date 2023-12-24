import DOM from '../domHelper';
import {initObserver} from '../modules/observer';
import {sideBarInput, body} from './burgerMenu';

const listNav = DOM.searchAll('.header__link');
const navLines = DOM.searchAll('.header__line');
const nameActiveLine = 'header__line--active';

const listMainBlocks = [
	DOM.searchById('resume-part'),
	// DOM.searchById('about-part'),
	// DOM.searchById('skills-part'),
];

const getHeightHeader = () => {
	let width = window.innerWidth;
	if (width >= 1800) {
		return 122;
	} else if (width >= 1440) {
		return 134;
	} else if (width > 1024) {
		return 74;
	}

	return -50;
};

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

const initClass = (args) => {
	for (let index = 0; index < args[0].length; index++) {
		if (+args[2] === index) {
			DOM.addClass(args[0][index], args[1]);
		} else {
			DOM.removeClass(args[0][index], args[1]);
		}
	}
};

const clickElementBar = (element) => {
	element.addEventListener('click', () => {
		DOM.removeClass(body, 'no-scroll');
		sideBarInput.checked = false;
		let id = getIndexByIdData(
			navLines,
			'data-id',
			DOM.getAttr(element, 'data-link'),
		);
		initClass([navLines, nameActiveLine, id]);
	});
};

listNav.forEach((element) => {
	clickElementBar(element);
});

listMainBlocks.forEach((element, index) => {
	let observer = initObserver(
		initClass,
		[navLines, nameActiveLine, index],
		0.5,
		false,
	);
	observer.observe(element);
});

export {
	getHeightHeader,
};
