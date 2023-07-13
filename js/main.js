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

const services = document.getElementById('services');
const products = document.getElementById('products');
const company = document.getElementById('company');

const showServ = document.getElementById('servArrowDown');
const showProd = document.getElementById('prodArrowDown');
const showComp = document.getElementById('compArrowDown');

// show services
const showServList = function () {
    services.classList.toggle('visible-list');
    showServ.classList.toggle('arrow-up');
}

showServ.addEventListener('click', (e) => {
    e.stopPropagation();
    showServList();
})

document.documentElement.addEventListener('click', () => {
    if (services.classList.contains('visible-list')) {
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

// animation photo-triangles with scroll

const photoTriangle1 = document.querySelector('.photo-triangles-1');
const photoTriangle2 = document.querySelector('.photo-triangles-2');
const photoTriangle3 = document.querySelector('.photo-triangles-3');
const photoTriangle4 = document.querySelector('.photo-triangles-4');
const photoTriangle5 = document.querySelector('.photo-triangles-5');
const photoCircle1 = document.querySelector('.circle-1');
const photoCircle2 = document.querySelector('.circle-2');
const photoCircle3 = document.querySelector('.circle-3');
const photoCircle4 = document.querySelector('.circle-4');
const photoCircle5 = document.querySelector('.circle-5');
const photoCircleMain = document.querySelector('.main-circle');

const question = document.querySelector('.question');

const arrow1 = document.getElementById('learn-more1');
const arrow2 = document.getElementById('learn-more2');
const arrow3 = document.getElementById('learn-more3');
const arrow4 = document.getElementById('learn-more4');


function checkElementInView(element) {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop - windowHeight <= 0) {
        element.classList.add('appear');
    }
};

window.addEventListener('scroll', () => {
    checkElementInView(photoTriangle1);
    checkElementInView(photoTriangle2);
    checkElementInView(photoTriangle3);
    checkElementInView(photoTriangle4);
    checkElementInView(photoTriangle5);
    checkElementInView(arrow1);
    checkElementInView(arrow2);
    checkElementInView(arrow3);
    checkElementInView(arrow4);
    checkElementInView(photoCircle1);
    checkElementInView(photoCircle2);
    checkElementInView(photoCircle3);
    checkElementInView(photoCircle4);
    checkElementInView(photoCircle5);
    checkElementInView(photoCircleMain);
    checkElementInView(question);
    
})

// Back to Top
/*const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});*/