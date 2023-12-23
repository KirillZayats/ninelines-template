// import header from '../components/header';
import {getHeightHeader} from '../components/listNav';
import helpers from '../helpers';
import {scrollLocomotive} from './locomotive';

/**
 * Модуль "Плавный переход к якорю"
 */
const init = () => {
	helpers.$document.on('click.anchor', '.js-to-anchor', (event) => {
		event.preventDefault();
		event.stopPropagation();
		const id = $(event.currentTarget).attr('href');
		if (window.innerWidth <= 1024) {
			const speed = $(event.currentTarget).data('speed') || 500;
			let offset =
				helpers.$header.css('position') === 'fixed' ||
				helpers.$header.css('position') === 'absolute'
					? -helpers.$header.outerHeight(true)
					: 0;
			offset -= getHeightHeader();
			helpers.scrollTo($(id), speed, offset);
		} else if (scrollLocomotive) {
			scrollLocomotive.scrollTo(id, {
				offset: -getHeightHeader(),
			});
		}
	});
};

const destroy = () => {
	helpers.$document.off('.anchor');
};

export default {
	init,
	destroy,
};
