import DOM from '../domHelper';

{
	const scrollUp = document.querySelector('.scroll-up');
	const classActive = 'scroll-up--active';
	const textScroll = document.querySelector('.scroll-up__text');
	const arrow = document.querySelector('.scroll-up__arrow');
	const progressBar = document.querySelector('.indicator-bar');
	const totalLength = (progressBar.getTotalLength() + 1).toFixed(0);
	const blockHide = 'scroll-up__block--hide';
	let winScroll;
	let height;
	let scrolled;
	let interval;

	progressBar.style.strokeDasharray = totalLength;
	progressBar.style.strokeDashoffset = totalLength - 1;

	const changeContentIndicator = (scrolledValue, offSet) => {
		DOM.html(textScroll, `${scrolledValue >= 1 ? scrolledValue : 1}%`);
		if (+offSet === 0) {
			DOM.addClass(textScroll, blockHide);
			DOM.removeClass(arrow, blockHide);
		} else {
			DOM.removeClass(textScroll, blockHide);
			DOM.addClass(arrow, blockHide);
		}
	};

	const createInterval = (timeThis) => {
		if (winScroll < 200) {
			DOM.removeClass(scrollUp, classActive);
		} else {
			interval = setInterval(() => {
				DOM.removeClass(scrollUp, classActive);
			}, timeThis * 1500);
		}
	};

	const removeScroll = () => {
		DOM.addClass(scrollUp, classActive);
		clearInterval(interval);
		createInterval(1);
	};

	const scrollIndicator = () => {
		winScroll = document.documentElement.scrollTop;
		height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		scrolled = (winScroll / height * 100).toFixed(0);
		let offSet = totalLength - totalLength * scrolled / 100;
		progressBar.style.strokeDashoffset =
			+offSet === +totalLength ? offSet - 1 : offSet;

		changeContentIndicator(scrolled, offSet);
	};
	scrollIndicator();
	window.addEventListener('scroll', () => {
		scrollIndicator();
		removeScroll();
	});
	scrollUp.addEventListener('mouseover', () => {
		clearInterval(interval);
		DOM.addClass(scrollUp, classActive);
	});
	scrollUp.addEventListener('mouseout', () => {
		removeScroll();
	});
	scrollUp.addEventListener('click', () => {
		window.scrollTo(0, 0);
		removeScroll();
	});
}
