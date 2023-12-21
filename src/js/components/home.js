import DOM from '../domHelper';
import {initObserver} from '../modules/observer';

const classHiddenUp = 'hidden-up';
const classHiddenRight = 'hidden-right';
const resumeBlockText = DOM.searchAll('.block-text--visible');
const resumeTitle = DOM.searchAll('.title--visible');

resumeBlockText.forEach((element) => {
	let observer = initObserver(classHiddenUp, element);
	observer.observe(element);
});

resumeTitle.forEach((element) => {
	let observer = initObserver(classHiddenRight, element);
	observer.observe(element);
});
