import inputSearch from './inputSearch.js';
import slider from './slider.js';
import { renderPhone } from './renderPhone.js';
import navigation from './navigation.js';
import tranggioithieulogin from './tranggioithieulogin.js';
import buyPhone from './buyPhone.js';


let body = document.querySelector('body');
body.onload = () => {
    renderPhone();
    inputSearch();
    slider();

    setTimeout(() => {
        navigation();
        tranggioithieulogin();
        buyPhone()
    }, 100)


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


    // click vào các li thành phần con của ul => vào trang đăng nhập
    let liNavLink = document.querySelectorAll('.sub-item-text');
    liNavLink.forEach((linav) => {
        linav.addEventListener('click', (e) => {
            window.location.href = './login.html';
        })
    })



}



