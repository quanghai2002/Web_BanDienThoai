import inputSearch from './inputSearch.js';
import navigation from './navigation.js';
let body = document.querySelector('body');
body.onload = () => {
    inputSearch();
    navigation();
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
        // khi cuộn trang web 1 tý, ẩn hiện tab navigation
        let navScroll = document.querySelector('.heading-nav');
        if (document.documentElement.scrollTop > 160) {

            Object.assign(navScroll.style, {
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 200,
                width: '100%'

            })
        }
        else {
            Object.assign(navScroll.style, {
                position: '',
                top: 0,
                left: 0,
                zIndex: 20,
                width: '100%'

            })
        }
    });

}
