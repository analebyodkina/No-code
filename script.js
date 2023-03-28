function navToggle() {
	var links = document.getElementById('navUl');
	links.classList.toggle("_active");
}


$('.owl-carousel').owlCarousel({
    items:2.2,
    lazyLoad:true,
    loop:true,
    margin:10
});


/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item')

// 1. Selecionar cada item
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion__header')

    // 2. Seleccionar cada click del header
    accordionHeader.addEventListener('click', () =>{
        // 7. Crear la variable
        const openItem = document.querySelector('.accordion-open')

        // 5. Llamar a la funcion toggle item
        toggleItem(item)

        // 8. Validar si existe la clase
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Crear una funcion tipo constante
const toggleItem = (item) =>{
    // 3.1 Crear la variable
    const accordionContent = item.querySelector('.accordion__content')

    // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        // 4. Agregar el height maximo del content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}


// ПОП-АП

const openPopUp = document.getElementById('openPopUp');
const popUp = document.getElementById('popUp')

openPopUp.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active'); 
  // чтобы закрывалось окно при нажатии на черное
  popUp.addEventListener('click', function(){
    popUp.classList.remove('active');   
  }) 
  const closePopUp = document.getElementById('closePopUp');
  closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
  } )
})

popUp.querySelector('.pop-up__body').addEventListener('click', function(event){  
  event.stopPropagation();
})

// конец ПОП-АПА

// футер

const footerItems = document.querySelectorAll('.bottom__col')

// 1. Selecionar cada item
footerItems.forEach((item) =>{
    const footerHeader = item.querySelector('.col__title')

    // 2. Seleccionar cada click del header
    footerHeader.addEventListener('click', () =>{
        // 7. Crear la variable
        const openItem = document.querySelector('.footer-open')

        // 5. Llamar a la funcion toggle item
        toggleFooterItem(item)

        // 8. Validar si existe la clase
        if(openItem && openItem!== item){
          toggleFooterItem(openItem)
        }
    })
})

// 3. Crear una funcion tipo constante
const toggleFooterItem = (item) =>{
    // 3.1 Crear la variable
    const footerContent = item.querySelector('.col__ul')

    // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
    if(item.classList.contains('footer-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('footer-open')
    }else{
        // 4. Agregar el height maximo del content
        footerContent.style.height = footerContent.scrollHeight + 'px'
        item.classList.add('footer-open')
    }
}

