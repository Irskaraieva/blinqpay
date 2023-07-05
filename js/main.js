// burger menu open-close
const burger = document.getElementById('burger');
const productsNav = document.getElementById('productsNav');
const developersNav = document.getElementById('developersNav');
const companyNav = document.getElementById('companyNav');
const pricingNav = document.getElementById('pricingNav');
const supportNav = document.getElementById('supportNav');
const signInNav = document.getElementById('signInNav');

burger.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
});

const closeNav = () => {
    document.querySelector('nav').classList.remove('open');
}

productsNav.addEventListener('click', () => {
    closeNav();
});

developersNav.addEventListener('click', () => {
    closeNav();
});

companyNav.addEventListener('click', () => {
    closeNav();
});

pricingNav.addEventListener('click', () => {
    closeNav();
});

supportNav.addEventListener('click', () => {
    closeNav();
});

signInNav.addEventListener('click', () => {
    closeNav();
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");    
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "inline-flex";
    dots[slideIndex - 1].className += " active";

}

// footer lists

const servises = document.getElementById('servises');
const products = document.getElementById('products');
const company = document.getElementById('company');

const showServ = document.getElementById('servArrowDown');
const showProd = document.getElementById('prodArrowDown');
const showComp = document.getElementById('compArrowDown');

// show servises
const showServList = function () {
    servises.classList.toggle('visible-list');
    showServ.classList.toggle('arrow-up');
}

showServ.addEventListener('click', (e) => {
    e.stopPropagation();
    showServList();
})

document.documentElement.addEventListener('click', () => {
    if (servises.classList.contains('visible-list')) {
        showServList();
    }
})

//show products
const showProdList = function () {
    products.classList.toggle('visible-list');
    showProd.classList.toggle('arrow-up');
}

showProd.addEventListener('click', (e) => {
    e.stopPropagation();
    showProdList();
})

document.documentElement.addEventListener('click', () => {
    if (products.classList.contains('visible-list')) {
        showProdList();
    }
})

// show company
const showCompList = function () {
    company.classList.toggle('visible-list');
    showComp.classList.toggle('arrow-up');
}

showComp.addEventListener('click', (e) => {
    e.stopPropagation();
    showCompList();
})

document.documentElement.addEventListener('click', () => {
    if (company.classList.contains('visible-list')) {
        showCompList();
    }
})

// Back to Top
/*const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});*/