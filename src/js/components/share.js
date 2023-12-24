import DOM from '../domHelper';
import html2canvas from 'html2canvas';
import {scrollLocomotive} from '../modules/locomotive';

const shareBg = DOM.search('.share-bg');
const shareField = DOM.search('.share-field');
const share = DOM.search('.share');
const header = DOM.search('.header');
const resumeMainBlock = DOM.search('.resume__main-info');
const imageAboutMe = DOM.search('.about__image');

const shareButtons = DOM.searchAll('.icon-social');
const repostButton = DOM.search('.share-content__button');

const classActiveShareBg = 'share-bg--active';
const classActiveShareField = 'share-field--active';
const classLowIndex = 'low-index';
let validSocial = 0;
let isStatusModal = false;

const setLowIndex = () => {
	DOM.toggle(header, classLowIndex);
	DOM.toggle(resumeMainBlock, classLowIndex);
	DOM.toggle(imageAboutMe, classLowIndex);
};

const toggleModal = () => {
	DOM.toggle(shareBg, classActiveShareBg);
	DOM.toggle(shareField, classActiveShareField);
	DOM.toggleScroll(DOM.search('html'));
};

const toggleShare = () => {
	if (isStatusModal) {
		isStatusModal = false;
		if (scrollLocomotive) {
			scrollLocomotive.start();
		}
		toggleModal();
		setTimeout(() => {
			setLowIndex();
		}, 500);
	} else {
		isStatusModal = true;
		if (scrollLocomotive) {
			scrollLocomotive.stop();
		}
		setLowIndex();
		setTimeout(() => {
			toggleModal();
		}, 100);
	}
};

const getValidSocial = (index) => {
	validSocial = Math.floor(index / 2);
};

const shareFacebook = (valueName, valueDescription) => {
	return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
		window.location.href,
	)}&quote=${encodeURIComponent(valueName)}
    &description=${encodeURIComponent(valueDescription)}`;
};

const shareVk = (valueName, valueDescription) => {
	return `https://vk.com/share.php?url=${encodeURIComponent(
		window.location.href,
	)}&title=${encodeURIComponent(valueName)}&description=${encodeURIComponent(
		valueDescription,
	)}`;
};

const shareTg = (valueName, valueDescription) => {
	return `https://telegram.me/share/url?url=${encodeURIComponent(
		window.location.href,
	)}&text=${encodeURIComponent(
		`Имя: ${valueName}, Должность: ${valueDescription}`,
	)}`;
};

const shareContent = () => {
	const valueName = DOM.getInnerHTML(DOM.search('.share-content__title--name'));
	const valueDescription = DOM.getInnerHTML(
		DOM.search('.share-content__title--position'),
	);
	let shareUrl;
	switch (validSocial) {
		case 0:
			shareUrl = shareFacebook(valueName, valueDescription);
			break;
		case 1:
			shareUrl = shareVk(valueName, valueDescription);
			break;
		case 2:
			shareUrl = shareTg(valueName, valueDescription);
			break;
		default:
			break;
	}
	window.open(shareUrl, '_blank');
};

const setImageMeta = (selector, valueImage) => {
	const meta = DOM.searchById(selector);
	DOM.attr(meta, 'content', valueImage);
};

// функция для получения изображения через html2canvas
const shareDynamicContent = () => {
	const dynamicContent = DOM.searchById('share-dynamic');
	html2canvas(dynamicContent).then((canvas) => {
		const valueImage = canvas.toDataURL('image/png'); // url полученой картинки
		setImageMeta('metaOg', valueImage);
		setImageMeta('metaTwitter', valueImage);
		shareContent();
	});
};

const initEventsShare = () => {
	repostButton.addEventListener('click', () => {
		shareDynamicContent();
		toggleShare();
	});

	shareButtons.forEach((element, index) => {
		element.addEventListener('click', () => {
			getValidSocial(index);
			toggleShare();
		});
	});

	share.addEventListener('click', (event) => {
		event.stopPropagation();
	});

	shareField.addEventListener('click', () => {
		toggleShare();
	});
};

initEventsShare();

export {
	isStatusModal,
};
