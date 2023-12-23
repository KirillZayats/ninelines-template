import DOM from '../domHelper';
import {scrollLocomotive} from './locomotive';

const initObserver = (callback, args, threshold, isStatus = true) => {
	return new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					callback(args);
					if (isStatus) {
						observer.unobserve(entry.target);
					}
				}
			});
		},
		{threshold},
	);
};

const initObserverUpdate = () => {
	new ResizeObserver(() => scrollLocomotive && scrollLocomotive.update()).observe(DOM.search('[data-scroll-container]'));
};

export {initObserver, initObserverUpdate};
