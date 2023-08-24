window.addEventListener('scroll', function () {
    let stickyNavbar = document.querySelector('#navbar');
    stickyNavbar.classList.toggle('sticky', window.scrollY > 200);
});

let mobileMenu = document.querySelector('.main-menu');
console.log(mobileMenu);
let humburgure = document.querySelector('.mobile-menu');
humburgure.addEventListener('click', () => {
    mobileMenu.classList.toggle('berhor');
});
$('#bar1').barfiller();
$('#bar2').barfiller();

$('.RecentPostWraper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 791,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
new VenoBox({
    selector: '.VideoLink',
});

$('.testimonialWraper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

new VenoBox({
    selector: '.gallery_item',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane',
});

// aos
AOS.init({
    delay: 0,
    duration: 1000,
    easing: 'ease',
});
