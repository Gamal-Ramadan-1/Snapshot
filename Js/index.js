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