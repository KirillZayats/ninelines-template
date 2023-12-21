import DOM from '../domHelper';
const initObserver = (nameClass, element) => {
	return new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					DOM.removeClass(element, nameClass);
					observer.unobserve(entry.target);
				}
			});
		},
		{threshold: 0.5},
	);
};
export {initObserver};
