import DOM from '../domHelper';

{
	const scrollUp = document.querySelector('.scroll-up');
	const textScroll = document.querySelector('.scroll-up__text');
	const arrow = document.querySelector('.scroll-up__arrow');
	const progressBar = document.querySelector('.indicator-bar');
	const totalLength = (progressBar.getTotalLength() + 1).toFixed(0);
	const blockHide = 'scroll-up__block--hide';
	let winScroll;
	let height;
	let scrolled;

	progressBar.style.strokeDasharray = totalLength;
	progressBar.style.strokeDashoffset = totalLength - 1;

	const scrollIndicator = () => {
		winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		scrolled = (winScroll / height * 100).toFixed(0);
		let offSet = totalLength - totalLength * scrolled / 100;
		progressBar.style.strokeDashoffset =
			+offSet === +totalLength ? offSet - 1 : offSet;

		DOM.html(textScroll, `${scrolled >= 1 ? scrolled : 1}%`);
		if (+offSet === 0) {
			DOM.addClass(textScroll, blockHide);
			DOM.removeClass(arrow, blockHide);
		} else {
			DOM.removeClass(textScroll, blockHide);
			DOM.addClass(arrow, blockHide);
		}
	};
	scrollIndicator();
	window.addEventListener('scroll', () => {
		scrollIndicator();
	});
	scrollUp.addEventListener('click', () => {
		window.scrollTo(0, 0);
	});
}
