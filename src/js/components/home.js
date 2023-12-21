import DOM from '../domHelper';
import {initObserver} from '../modules/observer';

const classHiddenUp = 'hidden-up';
const classHiddenRight = 'hidden-right';
const classHiddenLeft = 'hidden-left';
const blockUps = DOM.searchAll('.block-text--visible');
const blockRights = DOM.searchAll('.title--visible');
const blockLefts = DOM.searchAll('.block-left--visible');

blockUps.forEach((element) => {
	let observer = initObserver(classHiddenUp, element);
	observer.observe(element);
});

blockRights.forEach((element) => {
	let observer = initObserver(classHiddenRight, element);
	observer.observe(element);
});

blockLefts.forEach((element) => {
	let observer = initObserver(classHiddenLeft, element);
	observer.observe(element);
});
