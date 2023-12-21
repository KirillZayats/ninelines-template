const initObserver = (callback, args, isStatus = true) => {
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
		{threshold: 0.5},
	);
};
export {initObserver};
