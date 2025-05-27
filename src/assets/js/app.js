
// 🐸 Показать пароль 🐸
document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.password-button').forEach(button => {
		button.addEventListener('click', function () {
			const container = this.closest('.form-group, .input-group') || this.parentNode;
			const input = container.querySelector('input');
			if (input) {
				const isPassword = input.type === 'password';
				input.type = isPassword ? 'text' : 'password';
				this.classList.toggle('active', isPassword);
			}
		});
	});
});

// 🐸 Чекбокс 🐸
document.addEventListener('DOMContentLoaded', () => {
	// Находим все чекбоксы, которые нужно обрабатывать
	const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');

	// Функция для обработки изменения состояния чекбокса
	const handleCheckboxChange = (checkbox) => {
		const label = checkbox.closest('label.checkbox');
		// Добавляем или удаляем класс active в зависимости от состояния чекбокса
		label.classList.toggle('active', checkbox.checked);
	};

	// Назначаем обработчик события change для каждого чекбокса
	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', () => handleCheckboxChange(checkbox));

		// Инициализируем состояние при загрузке страницы
		handleCheckboxChange(checkbox);
	});
});

// 🐸 Радио 🐸
document.addEventListener('DOMContentLoaded', () => {
	const radios = document.querySelectorAll('.radio');

	const handleRadioChange = (changedRadio) => {
		const name = changedRadio.name;

		// Находим все радио-кнопки с таким же именем
		document.querySelectorAll(`.radio[name="${name}"]`).forEach(radio => {
			const label = radio.closest('label.checkbox');
			// Добавляем active только к измененной радио-кнопке, если она checked
			label.classList.toggle('active', radio === changedRadio && radio.checked);
		});
	};

	radios.forEach(radio => {
		radio.addEventListener('change', () => handleRadioChange(radio));

		// Инициализация состояния
		if (radio.checked) handleRadioChange(radio);
	});
});

// 🐸 Чекбокс - активация кнопки 🐸
document.addEventListener('DOMContentLoaded', () => {
	const checkbox = document.querySelector('.accept');
	const submitBtn = document.querySelector('.btn.login__form__login');

	if (checkbox && submitBtn) {
		checkbox.addEventListener('change', () => {
			submitBtn.disabled = !checkbox.checked;
			submitBtn.classList.remove('disabled');
		});

		// Инициализация состояния
		submitBtn.disabled = !checkbox.checked;
	}
});

// 🐸 Логин - активация кнопки при введении кода 🐸
document.addEventListener('DOMContentLoaded', () => {
	const codeInput = document.querySelector('.login-code');
	const continueLink = document.querySelector('.btn.login__form__login');

	//Поменять число lenght на нужное, если надо ограничить количество символов
	if (codeInput && continueLink) {
		const updateButtonState = () => {
			continueLink.classList.toggle('disabled', codeInput.value.trim().length === 0);
		};

		codeInput.addEventListener('input', updateButtonState);
		codeInput.addEventListener('change', updateButtonState);

		// Инициализация состояния
		updateButtonState();
	}
});

// 🐸 Очищение поля input 🐸
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.delete-button').forEach(deleteBtn => {
		deleteBtn.addEventListener('click', (e) => {
			const input = e.currentTarget.closest('label').querySelector('.login-code');

			if (input) {
				input.value = '';
				input.focus();
				input.dispatchEvent(new Event('input', { bubbles: true }));

				// Добавляем анимацию (опционально)
				deleteBtn.classList.add('clicked');
				setTimeout(() => deleteBtn.classList.remove('clicked'), 200);
			}
		});
	});
});

// 🐸 Parallax giveaway 🐸
document.addEventListener('DOMContentLoaded', () => {
	const fig1 = document.querySelector('.giveaway-fig1');
	const fig2 = document.querySelector('.giveaway-fig2');

	let mouseX = 0;
	let mouseY = 0;
	let scrollY = window.scrollY;

	const centerX = window.innerWidth / 2;
	const centerY = window.innerHeight / 2;

	function updateTransforms() {
		const offsetX = (mouseX - centerX) / centerX;
		const offsetY = (mouseY - centerY) / centerY;

		const move1X = offsetX * 10;
		const move1Y = offsetY * 20 - scrollY * 0.3; // вверх при скролле
		const move2X = offsetX * 20;
		const move2Y = offsetY * 40 - scrollY * 0.6;

		fig1.style.transform = `translate(${move1X}px, ${move1Y}px)`;
		fig2.style.transform = `translate(${move2X}px, ${move2Y}px)`;
	}

	document.addEventListener('mousemove', (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
		updateTransforms();
	});

	document.addEventListener('scroll', () => {
		scrollY = window.scrollY;
		updateTransforms();
	});
});


// 🐸 Sliders 🐸
const swiper1 = new Swiper('.giveaway-entries__wrapper', {
	// Default parameters
	slidesPerView: 'auto',
	spaceBetween: 10,
})

if ($(window).width() < 980) {
	const swiper2 = new Swiper('.dashboard__menu', {
		// Default parameters
		slidesPerView: 'auto',
		spaceBetween: 10,
	})
}
// 🐸 Footer мобильное меню 🐸
document.addEventListener('DOMContentLoaded', () => {
	const menuTitle = document.querySelector('.main-footer__menu-title');
	const menu = document.querySelector('.main-footer__menu');

	menuTitle.addEventListener('click', () => {
		menuTitle.classList.toggle('active');
		menu.classList.toggle('disable');
	});
});

// 🐸 Menu auth dropdown 🐸
document.addEventListener('DOMContentLoaded', () => {
	const menuProfile = document.querySelector('.main-menu__auth');

	menuProfile.addEventListener('click', () => {
		menuProfile.classList.toggle('active');

	});
});

// 🐸 Mobile menu fade 🐸
$('.main-menu__trigger').click(function () {
	$('.main-menu').toggleClass('active');
	if ($('.main-menu').hasClass('active')) {
		$('body').addClass('hidden-body')
	} else {
		$('body').removeClass('hidden-body')
	}
})

// 🐸 Tabs 🐸
$('.tab-selector a').click(function (e) {
	e.preventDefault();

	$('.tab-selector a').removeClass('active');
	$('.tab-content').removeClass('active');

	$(this).addClass('active');
	$($(this).attr('href')).addClass('active');
})


document.addEventListener("DOMContentLoaded", function () {
	const inputWrappers = document.querySelectorAll('.white-input');

	inputWrappers.forEach(wrapper => {
		const inputField = wrapper.querySelector('input');

		function updateActiveClass() {
			if (inputField.value.trim() !== '') {
				wrapper.classList.add('active');
			} else {
				wrapper.classList.remove('active');
			}
		}

		// Проверка при загрузке
		updateActiveClass();

		// Обработчики событий
		inputField.addEventListener('input', updateActiveClass);
		inputField.addEventListener('blur', updateActiveClass);
	});
});


// 🐸 FAQ 🐸
$('.faq__show').click(function () {
	$(this).parents('.faq__item').toggleClass('active');
	$(this).siblings('.faq__hide').slideToggle(100)
})