import Swiper from 'swiper/bundle';

function swiper() {
    const swiper = new Swiper('.swiper', {

        spaceBetween: 30,

        slidesPerView: "auto",
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
    
        // Navigation arrows
        //navigation: {
        //nextEl: '.swiper-button-next',
        //prevEl: '.swiper-button-prev',
        //}

    });
}
export default swiper