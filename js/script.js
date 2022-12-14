window.addEventListener('DOMContentLoaded', () => {
	// Tabs

	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items')

	function hideTabContent() {
		tabsContent.forEach((item) => {
			item.classList.add('hide')
			item.classList.remove('show', 'fade')
		})

		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active')
		})
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade')
		tabsContent[i].classList.remove('hide')
		tabs[i].classList.add('tabheader__item_active')
	}

	hideTabContent()
	showTabContent()

	tabsParent.addEventListener('click', (event) => {
		const target = event.target

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent()
					showTabContent(i)
				}
			})
		}
	})

	// Timer

	const deadline = '2022-09-30'

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24)

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000)

		function updateClock() {
			const t = getTimeRemaining(endtime)

			days.innerHTML = t.days
			hours.innerHTML = t.hours
			minutes.innerHTML = t.minutes
			seconds.innerHTML = t.seconds

			if (t.total <= 0) {
				clearInterval(timeInterval)
			}
		}
	}

	setClock('.timer', deadline)

	// modal

	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('[data-close]')

	function showModal() {
		modal.classList.toggle('show')
		document.body.style.overflow = 'hidden'
		clearInterval(modalTimer)
	}

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', showModal)
	})

	modalCloseBtn.addEventListener('click', hideModal)

	function hideModal() {
		modal.classList.toggle('show')
		document.body.style.overflow = ''
	}

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			hideModal()
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			hideModal()
		}
	})

	const modalTimer = setTimeout(showModal, 5000)

	function showModalByscroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight
		) {
			showModal()
			window.removeEventListener('scroll', showModalByscroll)
		}
	}

	window.addEventListener('scroll', showModalByscroll)





	let spn = document.querySelector('.span')
	console.log(spn);
	let images = document.querySelectorAll('.slider .slider-line img');
	let sliderLine = document.querySelector('.slider .slider-line');
	let count = 0;
	let width;
	
	function init() {
	
		 width = document.querySelector('.slider').offsetWidth;
		 sliderLine.style.width = width * images.length + 'px';
		 images.forEach(item => {
			  item.style.width = width + 'px';
			  item.style.height = 'auto';
		 });
		 rollSlider();
	}
	
	init();
	window.addEventListener('resize', init);
	
	document.querySelector('.offer__slider-next').addEventListener('click', function () {
		 count++;
		console.log(count);
		 if (count >= images.length) {
			  count = 0;
				
		 }
		 rollSlider();
		});
		
		document.querySelector('.offer__slider-prev ').addEventListener('click', function () {
		 count--
		
		 if (count < 0) {
			  count = images.length - 1;
		 }
		 rollSlider();
	});
	
	function rollSlider() {
		 sliderLine.style.transform = 'translate(-' + count * width + 'px)';
	
		}
	let value = 0 

		document.querySelector('.offer__slider-next').onclick = () =>{
		  value ++ 		
		  current.innerHTML = value
	
		}

		document.querySelector('.offer__slider-prev ').onclick = () =>{
			value --		
			current.innerHTML = value
	 
		 }
	 










	// ????????

	let genBtns = document.querySelectorAll('#gender .calculating__choose-item ')
	let actBtns = document.querySelectorAll('[data-act]')
	let height = document.querySelector('#height')
	let weight = document.querySelector('#weight')
	let age = document.querySelector('#age')
	let result = document.querySelector('#result')
	


	let user = {
		gender: "woman"
	}

	genBtns.forEach(btn => {
		btn.onclick = () => {
			genBtns.forEach(a => a.classList.remove('calculating__choose-item_active'));

			btn.classList.add('calculating__choose-item_active')

			let gen = btn.getAttribute('data-gen')

			user.gender = gen

			console.log(user);
		}
	})


	height.onkeyup = () => {
		user.height = height.value
	}
	weight.onkeyup = () => {
		user.weight = weight.value
	}
	age.onkeyup = () => {
		user.age = age.value
	}

	actBtns.forEach(btn =>  {
		btn.onclick = () => {
			actBtns.forEach(a => a.classList.remove('calculating__choose-item_active'));

			btn.classList.add('calculating__choose-item_active')


			let {gender, weight, age, height} = user
			let act = +btn.getAttribute('data-act')
			if(gender === 'woman') {
				let res =  655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);

				res = res * act

				result.innerHTML = Math.round(res)
			} else {
				let res =  66.5  + (13.75 * weight) + (5.003 * height) - (6.775 * age);

				res = res * act

				result.innerHTML = Math.round(res)
			}
		}
	})





})







