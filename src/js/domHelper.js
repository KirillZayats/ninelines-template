export default class DOM {
	static create = (tagName) => {
		return document.createElement(tagName);
	};

	static attr = (element, nameAttr, valueAttr) => {
		element.setAttribute(nameAttr, valueAttr);
	};

	static getAttr = (element, nameAttr) => {
		return element.getAttribute(nameAttr);
	};

	static html = (element, value) => {
		element.innerHTML = value;
	};

	static getInnerHTML = (element) => {
		return element.innerHTML;
	};

	static htmlClear = (element) => {
		element.innerHTML = ' ';
	};

	static search = (selector) => {
		return document.querySelector(selector);
	};

	static searchById = (selector) => {
		return document.getElementById(selector);
	};

	static searchAll = (selector) => {
		return document.querySelectorAll(selector);
	};

	static addClass = (element, className) => {
		element.classList.add(className);
	};

	static removeClass = (element, className) => {
		element.classList.remove(className);
	};

	static removeClassByArray = (args) => {
		DOM.removeClass(args[0], args[1]);
	};

	static toggleByArray = (args) => {
		args[0].classList.toggle(args[1]);
	};

	static toggle = (element, classList) => {
		element.classList.toggle(classList);
	};

	static toggleScroll = (element) => {
		element.classList.toggle('no-scroll');
	};

	static hasClass = (element, className) => {
		return element.classList.contains(className);
	};

	static append = (element, newElement, beforeElement) => {
		if (beforeElement) {
			element.insertBefore(newElement, beforeElement);
		} else {
			element.appendChild(newElement);
		}
	};

	static on = (element, eventName, funcName) => {
		element.addEventListener(eventName, funcName);
	};
}
