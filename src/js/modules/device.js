const getDeviceType = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	const isMobile =
		/mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
			userAgent,
		);

	if (isMobile) {
		return 'mobile';
	}

	return 'desktop';
};

let typeDevice = getDeviceType();

export {
	typeDevice,
};
