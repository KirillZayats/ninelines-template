import DOM from '../domHelper';
import {initObserver} from '../modules/observer';

const classHiddenLeft = 'hidder-image__left';
const classHiddenRight = 'hidder-image__right';

// const classHiddenRight = 'hidden-right';
const images = DOM.searchAll('.image--visible');

images.forEach((element, key) => {
	let observer;
	if (key === 0) {
		observer = initObserver(classHiddenLeft, element);
	} else {
		observer = initObserver(classHiddenRight, element);
	}
	observer.observe(element);
});
