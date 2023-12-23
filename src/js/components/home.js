import DOM from '../domHelper';
import {initObserver} from '../modules/observer';

const classHiddenUp = 'hidden-up';
const classHiddenRight = 'hidden-right';
const classHiddenLeft = 'hidden-left';
const classHiddenImageLeft = 'hidder-image__left';
const classHiddenImageRight = 'hidder-image__right';
const blockUps = DOM.searchAll('.block-text--visible');
const blockRights = DOM.searchAll('.title--visible');
const blockLefts = DOM.searchAll('.block-left--visible');
const images = DOM.searchAll('.image--visible');
const standartThreshold = 0.5;
const badThreshold = 0.1;

const initHome = () => {
	blockUps.forEach((element) => {
		let observer = initObserver(DOM.removeClassByArray, [element, classHiddenUp], standartThreshold);
		observer.observe(element);
	});

	blockRights.forEach((element) => {
		let observer = initObserver(DOM.removeClassByArray, [element, classHiddenRight], standartThreshold);
		observer.observe(element);
	});

	blockLefts.forEach((element) => {
		let observer = initObserver(DOM.removeClassByArray, [element, classHiddenLeft], standartThreshold);
		observer.observe(element);
	});

	images.forEach((element, key) => {
		let observer;
		if (key === 0) {
			observer = initObserver(DOM.removeClassByArray, [element, classHiddenImageLeft], badThreshold);
		} else {
			observer = initObserver(DOM.removeClassByArray, [element, classHiddenImageRight], badThreshold);
		}
		observer.observe(element);
	});
};

export {
	initHome,
};
