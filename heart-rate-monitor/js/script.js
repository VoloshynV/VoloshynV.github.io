/*jshint esversion: 6 */
// use strict
var slider = tns({
		container: '.carousel__inner',
		items: 1,
		slideBy: 'page',
		controls: false,
		nav: false,
		center: true
});
document.querySelector('.next').onclick = function () {
		slider.goTo('next');
	};
document.querySelector('.prev').onclick = function () {
		slider.goTo('prev');
	};

	
const list = document.querySelectorAll(".catalog-item__list");
const link = document.querySelectorAll(".catalog-item__link");

link.forEach(function (btn, idx) {
	btn.addEventListener('click', function (event) {
		event.preventDefault();
		if (list[idx].classList.contains('catalog-item__list_active')) {
			list[idx].classList.remove('catalog-item__list_active');
			btn.innerHTML = 'ПОДРОБНЕЕ';
		}else{
            list[idx].classList.add('catalog-item__list_active');
			btn.innerHTML = 'назад'.toUpperCase();
        }
	});
});


const catalogTabs = document.querySelectorAll('.catalog__tab');
const catalogContents = document.querySelectorAll('.catalog__content');

catalogTabs.forEach(function (btn, idx) {
	btn.addEventListener('click', function (event) {
		event.preventDefault();
        for (let i = 0; i < catalogTabs.length; i++) {
            catalogTabs[i].classList.remove('catalog__tab_active');
            catalogContents[i].classList.remove('catalog__content_active'); 
        }
        btn.classList.add('catalog__tab_active');
        catalogContents[idx].classList.add('catalog__content_active');
    });
});

// Modal -

const btnConsultationEl = document.querySelectorAll('[data-modal="consultation"]');
const modalEl = document.querySelector('.modal');
const consultationEl = document.querySelector('#consultation');
const orderEl = document.querySelector('#order');
const thnxEl = document.querySelector('#thnx');
const closeEl = document.querySelectorAll('.close');
const btnCatalogItemEl = document.querySelectorAll('.catalog-item__btn');
const catalogItemEl = document.querySelectorAll('.catalog-item .catalog-item__subtitle');

btnConsultationEl.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalEl.classList.add("modal_active");
        consultationEl.classList.add("modal-item_active");
    });
});

btnCatalogItemEl.forEach((element, idx) => {
    element.addEventListener('click', () => {
        const subTitleEl = orderEl.querySelector('.modal__subtitle');
        subTitleEl.textContent = catalogItemEl[idx].textContent;
        modalEl.classList.add("modal_active");
        orderEl.classList.add("modal-item_active");
    });
});
closeEl.forEach(element => {
    element.addEventListener('click', () => {
        consultationEl.classList.remove("modal-item_active");
        orderEl.classList.remove("modal-item_active");
        thnxEl.classList.remove("modal-item_active");
        modalEl.classList.remove("modal_active");
    });
});