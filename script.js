"use strict"

let items = document.querySelectorAll(".accordion__item");

items.forEach(elem => {
	elem.addEventListener('click', (e) => {
		items.forEach(elem => {elem.classList.remove('active')});
		
		elem.classList.add('active');
	})
	
})