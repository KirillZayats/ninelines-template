import DOM from '../domHelper';
{
	const sideBarInput = DOM.searchById('checked');
	const listNav = DOM.searchAll('.header__link');
	const body = DOM.search('html');
	sideBarInput.addEventListener('click', () => {
		DOM.toggleScroll(body);
	});

	const clickElementBar = (element) => {
		element.addEventListener('click', () => {
			DOM.removeClass(body, 'no-scroll');
			sideBarInput.checked = false;
		});
	};

	listNav.forEach((element) => {
		clickElementBar(element);
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > 1024) {
			sideBarInput.checked = false;
			DOM.removeClass(body, 'no-scroll');
		}
	});
}
