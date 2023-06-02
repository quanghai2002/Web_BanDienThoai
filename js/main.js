import inputSearch from './inputSearch.js';
import slider from './slider.js';
import { renderPhone } from './renderPhone.js';
import navigation from './navigation.js';

let body = document.querySelector('body');
body.onload = () => {
    renderPhone();
    inputSearch();
    slider();
    // navigation();


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


    // handle change khi clik vào sản phẩm mua hàng
    setTimeout(() => {
        let btnPhone = document.querySelectorAll('.container-product');
        btnPhone.forEach((phone) => {
            phone.onclick = () => {
                let checkLogin = JSON.parse(localStorage.getItem('userLogin')).checkLogin;
                console.log(checkLogin);
                if (!checkLogin) {
                    if (confirm('Bạn cần đăng nhập để mua hàng của shop QUANG HẢI! Bạn muốn đăng nhập luôn chứ !')) {
                        window.location.href = './login.html';
                    }
                }
                else {
                    alert('Bạn đã đăng nhập giờ là chuyển vào trang mua sản phẩm này');
                }
            }
        })
    }, 1000)


    // khi click vào slider => đăng nhập
    let btnSilder = document.querySelectorAll('.slide-img');
    btnSilder.forEach((slider) => {

        slider.onclick = (e) => {
            window.location.href = './login.html';
        }
    })


}



