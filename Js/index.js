AOS.init();
// Navbar js
let LinkHome = document.getElementById('line-home');
let LinkAbout = document.getElementById('line-about');
let LinkGallary = document.getElementById('line-gallary');
let LinkContact = document.getElementById('line-contact');
function LineHome() {
  LinkHome.style.width = '100%'
  LinkAbout.style.width = '0%'
  LinkGallary.style.width = '0%'
  LinkContact.style.width = '0%'

}
function LineAbout() {
  LinkHome.style.width = '0%'
  LinkAbout.style.width = '100%'
  LinkGallary.style.width = '0%'
  LinkContact.style.width = '0%'

}
function LineGallary() {
  LinkHome.style.width = '0%'
  LinkAbout.style.width = '0%'
  LinkGallary.style.width = '100%'
  LinkContact.style.width = '0%'

}
function LineContact() {
  LinkHome.style.width = '0%'
  LinkAbout.style.width = '0%'
  LinkGallary.style.width = '0%'
  LinkContact.style.width = '100%'

}
// Up To Top Button

let BtnUp = document.getElementById('up-to-top')
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    BtnUp.style.display = "block";
  } else {
    BtnUp.style.display = "none";
  }
}
function up() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Swiper Library
let swiper = new Swiper(".mySwiper", {
  slidesPerGroup: 3,
  speed: 700,
  loop: true,
  autoplay: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});