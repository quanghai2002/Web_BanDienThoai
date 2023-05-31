import inputSearch from './inputSearch.js';
import slider from './slider.js';


// inpu inputSearch
inputSearch();
slider();


let upTop = document.querySelector('.up-top');
// click up top page
window.onscroll = (function () {
    // console.log(window.scrollY);
    if (window.scrollY > 133) {
        upTop.classList.add('up-top-active');

        upTop.onclick = (e) => {

            document.documentElement.scrollTop = 0;
        }

    }
    else {
        upTop.classList.remove('up-top-active');
    }
});





