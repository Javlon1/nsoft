// Scroll Up Start
document.addEventListener('DOMContentLoaded', function () {
    const scrollUpButton = document.getElementById('scrollUp');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 100;
        if (scrollY > threshold) {
            scrollUpButton.classList.add('visible');
        } else {
            scrollUpButton.classList.remove('visible');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', handleScroll);
    scrollUpButton.addEventListener('click', scrollToTop);
});
// Scroll Up end


//lan start
function selectItem(item, imgSrc) {
    document.getElementById('selectedItemText').innerText = item;
    document.getElementById('selectedItemImage').src = imgSrc;
}
//lan end


// nav start
const menu = document.getElementById("menu");
const navList = document.querySelector(".nav__list");
const navContact = document.querySelector(".nav__contact");
const opacity = document.querySelector(".opacity");

menu.onclick = () => {
    menu.classList.toggle("openmenu");
    navList.classList.toggle("active_nav");
    navContact.classList.toggle("active_nav");
    opacity.classList.toggle("opacity_act");
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
};

opacity.onclick = () => {
    menu.classList.remove("openmenu");
    navList.classList.remove("active_nav");
    navContact.classList.remove("active_nav");
    opacity.classList.remove("opacity_act");
    document.body.style.overflow = 'auto';
};
// nav end