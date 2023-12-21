import DOM from '../domHelper';
import {initObserver} from '../modules/observer';

const classHiddenLeft = 'hidder-image__left';
const classHiddenRight = 'hidder-image__right';
const images = DOM.searchAll('.image--visible');

images.forEach((element, key) => {
	let observer;
	if (key === 0) {
		observer = initObserver(DOM.removeClassByArray, [element, classHiddenLeft]);
	} else {
		observer = initObserver(DOM.removeClassByArray, [element, classHiddenRight]);
	}
	observer.observe(element);
});
