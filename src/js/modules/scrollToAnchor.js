// import header from '../components/header';
import helpers from '../helpers';

/**
* Модуль "Плавный переход к якорю"
*/
const init = () => {
	helpers.$document.on('click.anchor', '.js-to-anchor', (event) => {
		event.preventDefault();
		event.stopPropagation();

		const id = $(event.currentTarget).attr('href');
		const speed = $(event.currentTarget).data('speed') || 500;
		const offset = helpers.$header.css('position') === 'fixed' || helpers.$header.css('position') === 'absolute' ? -helpers.$header.outerHeight(true) : 0;
		helpers.scrollTo($(id), speed, offset);
	});
};

const destroy = () => {
	helpers.$document.off('.anchor');
};

export default {
	init,
	destroy,
};
