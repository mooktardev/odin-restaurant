/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactPaneDiv: () => (/* binding */ contactPaneDiv),\n/* harmony export */   homePaneDiv: () => (/* binding */ homePaneDiv),\n/* harmony export */   menuPaneDiv: () => (/* binding */ menuPaneDiv)\n/* harmony export */ });\n// DATA\r\nconst data = {\r\n    'menu': [\r\n        {\r\n            src: './img/food-1.jpg',\r\n            name: 'Food 1',\r\n            text: \"Sans les des épais des lâche désire. Éclairs immobilités subi tempete les et, coups récifs j'ai bleuités ne.\",\r\n            price: \"11.99\"\r\n        },\r\n        {\r\n            src: './img/food-2.jpg',\r\n            name: 'Food 2',\r\n            text: \"Ô mal robuste s'abreuve trôner faite elle parfaite autour regarde, renversée soucieux couronne» et encadré.\",\r\n            price: \"11.99\"\r\n        },\r\n        {\r\n            src: './img/food-3.jpg',\r\n            name: 'Food 3',\r\n            text: \"Keseruen hol scouuo mezuul yg eggen buol ualmun ez kegulm thekunched, en kyul leg ygoz o wegh, ualallal.\",\r\n            price: \"11.99\"\r\n        },\r\n        {\r\n            src: './img/food-4.jpeg',\r\n            name: 'Food 4',\r\n            text: \"La same al bestoj tiom verdaj li ke kion gxiavoje nutrajxo. Estas cxiam post pafadon li kun al,.\",\r\n            price: \"11.99\"\r\n        },\r\n        {\r\n            src: './img/food-5.jpg',\r\n            name: 'Food 5',\r\n            text: \"Of i surely gileadtell mien i with is. Grave this that pallas felt aptly, oer there one it.\",\r\n            price: \"11.99\"\r\n        },\r\n        {\r\n            src: './img/food-6.jpeg',\r\n            name: 'Food 6',\r\n            text: \"Superstition bade wandered none scarce stalked to. Bower of sister a for his riot. But feere to his.\",\r\n            price: \"11.99\"\r\n        },\r\n    ],\r\n    'contact': [\r\n        {\r\n            href: \"tel:+237699001110\",\r\n            icon: \"phone\",\r\n            text: \"(+237) 699 001 110\"\r\n        },\r\n        {\r\n            href: \"mailto:support@restaurant.com\",\r\n            icon: \"envelope\",\r\n            text: \"support@restaurant.com\"\r\n        },\r\n        {\r\n            href: \"#\",\r\n            icon: \"map\",\r\n            text: \"Domayo Avenue, Maroua - Cameroon\"\r\n        }\r\n    ],\r\n    'opendays': [\r\n        {\r\n            text: \"Monday : 08am - 10pm\"\r\n        },\r\n        {\r\n            text: \"Tuesday : 08am - 10pm\"\r\n        },\r\n        {\r\n            text: \"Wednesday : 08am - 10pm\"\r\n        },\r\n        {\r\n            text: \"Thursday : 08am - 10pm\"\r\n        },\r\n        {\r\n            text: \"Friday : 08am - 10pm\"\r\n        },\r\n        {\r\n            text: \"Saturday : 08am - 10pm\"\r\n        },\r\n        {\r\n            text: \"Sunday : 08am - 10pm\"\r\n        },\r\n    ]\r\n}\r\n/* \r\n    TAB PANE\r\n*/\r\nconst tabPaneDiv = (paneId, active, labeledby) => {\r\n    const tabPane = document.createElement('div');\r\n    // Set attricutes\r\n    tabPane.classList.add('tab-pane')\r\n    if (active && !tabPane.classList.contains('active')) {\r\n        tabPane.classList.add('active')\r\n    }\r\n    tabPane.setAttribute('id', paneId)\r\n    tabPane.setAttribute('role', 'tabpanel')\r\n    tabPane.setAttribute('aria-labeledby', labeledby)\r\n    // Add elements\r\n    // tabPane.append(containerDiv)\r\n    return tabPane\r\n}\r\n/* \r\n    CONTAINER \r\n*/\r\nconst containerDiv = () => {\r\n    const div = document.createElement('div')\r\n    div.classList.add('container')\r\n    return div\r\n}\r\n/* \r\n    SECTION HEADER \r\n*/\r\nconst sectionHeaderDiv = (title) => {\r\n    const section = document.createElement('div')\r\n    const header = document.createElement('h2')\r\n    section.classList.add('section-header')\r\n    header.innerHTML = title\r\n    section.append(header)\r\n    return section\r\n}\r\n/* \r\n    HOME PANE\r\n*/\r\nconst homePaneDiv = () => {\r\n    const pane = tabPaneDiv('home-pane', true, 'home-tab')\r\n    const container = containerDiv()\r\n    // Content\r\n    const homeContent = document.createElement('div');\r\n    const homeTitle = document.createElement('h2')\r\n    const homeText = document.createElement('p')\r\n    const homeButton = document.createElement('button')\r\n    homeContent.classList.add('home-content')\r\n    homeTitle.classList.add('home-title')\r\n    homeText.classList.add('home-text')\r\n    homeButton.classList.add('home-btn')\r\n    homeTitle.innerHTML = `<span>Welcome</span><br>Taste and savor our <span>best</span> dishes`\r\n    homeText.innerHTML = \"Et anglais flots dans bateau verte, infusé j'ai confiture savez-vous poussifs gouffres me d'incroyables les, et de verte nos cataractant.\"\r\n    homeButton.innerHTML = \"Read more\"\r\n    // Illustration\r\n    const homeIllustration = document.createElement('div')\r\n    const homeImage = document.createElement('img')\r\n    homeIllustration.classList.add('home-illustration')\r\n    homeImage.setAttribute('src', \"./img/illustration.png\")\r\n    homeImage.setAttribute('alt', 'Restaurant')\r\n    // \r\n    homeContent.append(homeTitle, homeText, homeButton)\r\n    homeIllustration.appendChild(homeImage)\r\n    pane.append(homeContent, homeIllustration)\r\n    container.append(pane)\r\n    return container\r\n}\r\n/* \r\n    MENU LIST\r\n*/\r\nconst menuListDiv = (items) => {\r\n    const menuList = document.createElement('div')\r\n    menuList.classList.add('menu-list')\r\n    for (let item of items) {\r\n        // const menuItem = menuItemDiv(item)\r\n        menuList.append(menuItemDiv(item))\r\n    }\r\n    return menuList\r\n}\r\n/* \r\n    MENU ITEM\r\n*/\r\nconst menuItemDiv = ({src, name, text, price}) => {\r\n    const menuItem = document.createElement('div')\r\n    const menuImage = document.createElement('img')\r\n    const menuInfo = document.createElement('div')\r\n    const menuName = document.createElement('h4')\r\n    const menuText = document.createElement('p')\r\n    const menuPrice = document.createElement('span')\r\n    menuItem.classList.add('menu-item')\r\n    menuImage.setAttribute('src', src)\r\n    menuImage.setAttribute('alt', name)\r\n    menuImage.classList.add('menu-image')\r\n    menuInfo.classList.add('menu-info')\r\n    menuName.classList.add('menu-name')\r\n    menuName.innerHTML = name\r\n    menuText.classList.add('menu-text')\r\n    menuText.innerHTML = text\r\n    menuPrice.classList.add('menu-price')\r\n    menuPrice.innerHTML = `$${price}`\r\n    menuInfo.append(menuName, menuText, menuPrice)\r\n    menuItem.append(menuImage, menuInfo)\r\n    return menuItem\r\n}\r\n/* \r\n    MENU PANE\r\n*/\r\nconst menuPaneDiv = () => {\r\n    const pane = tabPaneDiv('menu-pane', false, 'menu-tab')\r\n    const container = containerDiv()\r\n    const header = sectionHeaderDiv('Menu')\r\n    const list = menuListDiv(data.menu)\r\n    pane.append(header, list)\r\n    container.append(pane)\r\n    return container\r\n}\r\n/* \r\n    CONTACT LIST\r\n*/\r\nconst contactListDiv = (items) => {\r\n    const contactList = document.createElement('ul')\r\n    contactList.classList.add('contact-list')\r\n    // Contacts List items\r\n    for (let item of items) {\r\n        const contact = contactItemDiv(item)\r\n        contactList.append(contact)\r\n    }\r\n    return contactList\r\n}\r\n/* \r\n    CONTACT ITEM\r\n*/\r\nconst contactItemDiv = ({href, icon, text}) => {\r\n    const contactItem = document.createElement('li');\r\n    const link = document.createElement('a')\r\n    contactItem.classList.add('contact-item')\r\n    link.classList.add('contact-link')\r\n    link.href = href\r\n    link.innerHTML = `<i class=\"fa-solid fa-${icon}\"></i>\r\n    <span>${text}</span>`\r\n    if (href) {\r\n        contactItem.append(link)\r\n    } else {\r\n        contactItem.innerHTML = `<i class=\"fa-solid fa-calendar-check\"></i>\r\n        <span>${text}</span>`\r\n    }\r\n    return contactItem\r\n}\r\n/* \r\n    CONTACT PANE\r\n*/\r\nconst contactPaneDiv = () => {\r\n    const pane = tabPaneDiv('contact-pane', '', 'contact-tab')\r\n    const container = containerDiv()\r\n    const contactContent = document.createElement('div')\r\n    const contactHours = document.createElement('div')\r\n    const contactContentHeader = sectionHeaderDiv('Contact Us')\r\n    const contactHoursHeader = sectionHeaderDiv('Open Hours')\r\n    const contactContentList = contactListDiv(data.contact)\r\n    const contactHoursList = contactListDiv(data.opendays)\r\n    contactContent.classList.add('contact-content')\r\n    contactHours.classList.add('contact-opendays')\r\n    contactContent.append(contactContentHeader, contactContentList)\r\n    contactHours.append(contactHoursHeader, contactHoursList)\r\n    pane.append(contactContent, contactHours)\r\n    container.append(pane)\r\n    return container\r\n}\r\n/* \r\n    EXPORT PANES\r\n*/\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\r\n\r\n// Switch\r\nconst tabItems = document.querySelectorAll(\".tab-item\");\r\nconst tabContent = document.getElementById(\"tab-content\");\r\n\r\n// Clear tab content\r\nconst clearTabContent = () => (tabContent.innerHTML = \"\");\r\n\r\n// panes object\r\nconst panesDiv = {\r\n  \"home-tab\": (0,_content__WEBPACK_IMPORTED_MODULE_0__.homePaneDiv)(),\r\n  \"menu-tab\": (0,_content__WEBPACK_IMPORTED_MODULE_0__.menuPaneDiv)(),\r\n  \"contact-tab\": (0,_content__WEBPACK_IMPORTED_MODULE_0__.contactPaneDiv)(),\r\n};\r\n\r\n// Set active class on nav tab\r\nconst switchActiveNav = (id) => {\r\n  tabItems.forEach(item => {\r\n    item.classList.remove('active')\r\n    if (item.id == id) {\r\n        item.classList.add('active');\r\n    }\r\n    })\r\n};\r\n\r\n// Switch tab content\r\ntabItems.forEach((tab) => {\r\n  tab.onclick = (e) => {\r\n    const id = e.target.id;\r\n    switchActiveNav(id)\r\n    clearTabContent();\r\n    tabContent.append(panesDiv[id]);\r\n  };\r\n});\r\n\r\n// WINDOWS LOADED\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n  clearTabContent();\r\n  tabContent.append((0,_content__WEBPACK_IMPORTED_MODULE_0__.homePaneDiv)());\r\n});\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;