// opens burger
function navToggle() {
	var links = document.getElementById("navUl");
	links.classList.toggle("_active");
	document.getElementById("html").classList.toggle("overflow-hidden");
	document.getElementById("body").classList.toggle("overflow-hidden");
}
//closes burger for  nav links
function hideBurger() {
	document.getElementById("navUl").classList.remove("_active");
	document.getElementById("html").classList.remove("overflow-hidden");
	document.getElementById("body").classList.remove("overflow-hidden");
}

$(".owl-carousel").owlCarousel({
	lazyLoad: true,
	loop: true,
	margin: 10,
	responsive: {
		0: {
			items: 1.2,
			nav: false,
		},
		600: {
			items: 1.5,
			nav: false,
		},
		768: {
			items: 2.2,
			nav: false,
		},
	},
});

/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".accordion__item");

// 1. Selecionar cada item
accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector(".accordion__header");

	// 2. Seleccionar cada click del header
	accordionHeader.addEventListener("click", () => {
		// 7. Crear la variable
		const openItem = document.querySelector(".accordion-open");

		// 5. Llamar a la funcion toggle item
		toggleItem(item);

		// 8. Validar si existe la clase
		if (openItem && openItem !== item) {
			toggleItem(openItem);
		}
	});
});

// 3. Crear una funcion tipo constante
const toggleItem = (item) => {
	// 3.1 Crear la variable
	const accordionContent = item.querySelector(".accordion__content");

	// 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
	if (item.classList.contains("accordion-open")) {
		accordionContent.removeAttribute("style");
		item.classList.remove("accordion-open");
	} else {
		// 4. Agregar el height maximo del content
		accordionContent.style.height = accordionContent.scrollHeight + "px";
		item.classList.add("accordion-open");
	}
};

// modal window

const popUp = document.getElementById("popUp");
function popup() {
	document.getElementById("navUl").classList.remove("_active");
	document.getElementById("html").classList.add("overflow-hidden");
	document.getElementById("body").classList.add("overflow-hidden");
	popUp.classList.add("active");
	return false;
}
// чтобы закрывалось окно при нажатии на черное
popUp.addEventListener("click", function () {
	popUp.classList.remove("active");
	document.getElementById("html").classList.remove("overflow-hidden");
	document.getElementById("body").classList.remove("overflow-hidden");
});
const closePopUp = document.getElementById("closePopUp");
closePopUp.addEventListener("click", () => {
	popUp.classList.remove("active");
	document.getElementById("html").classList.remove("overflow-hidden");
	document.getElementById("body").classList.remove("overflow-hidden");
});

popUp
	.querySelector(".pop-up__body")
	.addEventListener("click", function (event) {
		event.stopPropagation();
	});

// конец модального окна

// аккордеон футера

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}
