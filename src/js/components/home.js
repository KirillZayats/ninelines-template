import DOM from '../domHelper';
import {initObserver} from '../modules/observer';

const classHiddenUp = 'hidden-up';
const classHiddenRight = 'hidden-right';
const classHiddenLeft = 'hidden-left';
const blockUps = DOM.searchAll('.block-text--visible');
const blockRights = DOM.searchAll('.title--visible');
const blockLefts = DOM.searchAll('.block-left--visible');

const initHome = () => {
	blockUps.forEach((element) => {
		let observer = initObserver(DOM.removeClassByArray, [element, classHiddenUp]);
		observer.observe(element);
	});

	blockRights.forEach((element) => {
		let observer = initObserver(DOM.removeClassByArray, [element, classHiddenRight]);
		observer.observe(element);
	});

	blockLefts.forEach((element) => {
		let observer = initObserver(DOM.removeClassByArray, [element, classHiddenLeft]);
		observer.observe(element);
	});
};

export {
	initHome,
};
