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

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n// 🐸 Показать пароль 🐸\ndocument.addEventListener('DOMContentLoaded', function () {\n\tdocument.querySelectorAll('.password-button').forEach(button => {\n\t\tbutton.addEventListener('click', function () {\n\t\t\tconst container = this.closest('.form-group, .input-group') || this.parentNode;\n\t\t\tconst input = container.querySelector('input');\n\t\t\tif (input) {\n\t\t\t\tconst isPassword = input.type === 'password';\n\t\t\t\tinput.type = isPassword ? 'text' : 'password';\n\t\t\t\tthis.classList.toggle('active', isPassword);\n\t\t\t}\n\t\t});\n\t});\n});\n\n// 🐸 Чекбокс 🐸\ndocument.addEventListener('DOMContentLoaded', () => {\n\t// Находим все чекбоксы, которые нужно обрабатывать\n\tconst checkboxes = document.querySelectorAll('.checkbox input[type=\"checkbox\"]');\n\n\t// Функция для обработки изменения состояния чекбокса\n\tconst handleCheckboxChange = (checkbox) => {\n\t\tconst label = checkbox.closest('label.checkbox');\n\t\t// Добавляем или удаляем класс active в зависимости от состояния чекбокса\n\t\tlabel.classList.toggle('active', checkbox.checked);\n\t};\n\n\t// Назначаем обработчик события change для каждого чекбокса\n\tcheckboxes.forEach(checkbox => {\n\t\tcheckbox.addEventListener('change', () => handleCheckboxChange(checkbox));\n\n\t\t// Инициализируем состояние при загрузке страницы\n\t\thandleCheckboxChange(checkbox);\n\t});\n});\n\n// 🐸 Радио 🐸\ndocument.addEventListener('DOMContentLoaded', () => {\n\tconst radios = document.querySelectorAll('.radio');\n\n\tconst handleRadioChange = (changedRadio) => {\n\t\tconst name = changedRadio.name;\n\n\t\t// Находим все радио-кнопки с таким же именем\n\t\tdocument.querySelectorAll(`.radio[name=\"${name}\"]`).forEach(radio => {\n\t\t\tconst label = radio.closest('label.checkbox');\n\t\t\t// Добавляем active только к измененной радио-кнопке, если она checked\n\t\t\tlabel.classList.toggle('active', radio === changedRadio && radio.checked);\n\t\t});\n\t};\n\n\tradios.forEach(radio => {\n\t\tradio.addEventListener('change', () => handleRadioChange(radio));\n\n\t\t// Инициализация состояния\n\t\tif (radio.checked) handleRadioChange(radio);\n\t});\n});\n\n// 🐸 Чекбокс - активация кнопки 🐸\ndocument.addEventListener('DOMContentLoaded', () => {\n\tconst checkbox = document.querySelector('.accept');\n\tconst submitBtn = document.querySelector('.btn.login__form__login');\n\n\tif (checkbox && submitBtn) {\n\t\tcheckbox.addEventListener('change', () => {\n\t\t\tsubmitBtn.disabled = !checkbox.checked;\n\t\t\tsubmitBtn.classList.remove('disabled');\n\t\t});\n\n\t\t// Инициализация состояния\n\t\tsubmitBtn.disabled = !checkbox.checked;\n\t}\n});\n\n// 🐸 Логин - активация кнопки при введении кода 🐸\ndocument.addEventListener('DOMContentLoaded', () => {\n\tconst codeInput = document.querySelector('.login-code');\n\tconst continueLink = document.querySelector('a.btn.login__form__login');\n\n\t//Поменять число lenght на нужное, если надо ограничить количество символов\n\tif (codeInput && continueLink) {\n\t\tconst updateButtonState = () => {\n\t\t\tcontinueLink.classList.toggle('disabled', codeInput.value.trim().length === 0);\n\t\t};\n\n\t\tcodeInput.addEventListener('input', updateButtonState);\n\t\tcodeInput.addEventListener('change', updateButtonState);\n\n\t\t// Инициализация состояния\n\t\tupdateButtonState();\n\t}\n});\n\n// 🐸 Очищение поля input 🐸\ndocument.addEventListener('DOMContentLoaded', () => {\n\tdocument.querySelectorAll('.delete-button').forEach(deleteBtn => {\n\t\tdeleteBtn.addEventListener('click', (e) => {\n\t\t\tconst input = e.currentTarget.closest('label').querySelector('.login-code');\n\n\t\t\tif (input) {\n\t\t\t\tinput.value = '';\n\t\t\t\tinput.focus();\n\t\t\t\tinput.dispatchEvent(new Event('input', { bubbles: true }));\n\n\t\t\t\t// Добавляем анимацию (опционально)\n\t\t\t\tdeleteBtn.classList.add('clicked');\n\t\t\t\tsetTimeout(() => deleteBtn.classList.remove('clicked'), 200);\n\t\t\t}\n\t\t});\n\t});\n});\n\n// 🐸 Parallax giveaway 🐸\ndocument.addEventListener('DOMContentLoaded', () => {\n\tconst fig1 = document.querySelector('.giveaway-fig1');\n\tconst fig2 = document.querySelector('.giveaway-fig2');\n\n\tlet mouseX = 0;\n\tlet mouseY = 0;\n\tlet scrollY = window.scrollY;\n\n\tconst centerX = window.innerWidth / 2;\n\tconst centerY = window.innerHeight / 2;\n\n\tfunction updateTransforms() {\n\t\tconst offsetX = (mouseX - centerX) / centerX;\n\t\tconst offsetY = (mouseY - centerY) / centerY;\n\n\t\tconst move1X = offsetX * 10;\n\t\tconst move1Y = offsetY * 20 - scrollY * 0.3; // вверх при скролле\n\t\tconst move2X = offsetX * 20;\n\t\tconst move2Y = offsetY * 40 - scrollY * 0.6;\n\n\t\tfig1.style.transform = `translate(${move1X}px, ${move1Y}px)`;\n\t\tfig2.style.transform = `translate(${move2X}px, ${move2Y}px)`;\n\t}\n\n\tdocument.addEventListener('mousemove', (e) => {\n\t\tmouseX = e.clientX;\n\t\tmouseY = e.clientY;\n\t\tupdateTransforms();\n\t});\n\n\tdocument.addEventListener('scroll', () => {\n\t\tscrollY = window.scrollY;\n\t\tupdateTransforms();\n\t});\n});\n\n\n// 🐸 Sliders 🐸\nconst swiper1 = new Swiper('.giveaway-entries__wrapper', {\n\t// Default parameters\n\tslidesPerView: 'auto',\n\tspaceBetween: 10,\n})\n\n// 🐸 Footer мобильное меню 🐸\ndocument.addEventListener('DOMContentLoaded', () => {\n\tconst menuTitle = document.querySelector('.main-footer__menu-title');\n\tconst menu = document.querySelector('.main-footer__menu');\n\n\tmenuTitle.addEventListener('click', () => {\n\t\tmenuTitle.classList.toggle('active');\n\t\tmenu.classList.toggle('disable');\n\t});\n});\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\tconst menuProfile = document.querySelector('.main-menu__auth');\n\n\tmenuProfile.addEventListener('click', () => {\n\t\tmenuProfile.classList.toggle('active');\n\n\t});\n});\n\n\n//# sourceURL=webpack://gulp-2022/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;