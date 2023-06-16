import inputSearch from './inputSearch.js';
import slider from './slider.js';
import { renderPhone } from './renderPhone.js';
import navigation from './navigation.js';
import tranggioithieulogin from './tranggioithieulogin.js';
import buyPhone from './buyPhone.js';
import renderPhoneKhiBuy from './renderPhoneKhiBuy.js';
import buyPhoneClickChange from './buyPhoneClickChange.js'
import { completedBuyPhone } from './completedBuyPhone.js';
import thanhtoan from "./thanhtoan.js";
import { cart } from './cart.js';
import addProduct from './addProduct.js';
import deleteProduct from './deleteProduct.js';
import changeProduct from './changeProduct.js';
import completedBuyPhoneCart from './completedBuyPhoneCart.js';


let body = document.querySelector('body');
body.onload = () => {
    renderPhone();
    inputSearch();
    slider();

    setTimeout(() => {
        navigation();
        tranggioithieulogin();
        buyPhone();
        renderPhoneKhiBuy();
        buyPhoneClickChange();
        completedBuyPhone();
        thanhtoan();
        cart();
        addProduct();
        deleteProduct();
        changeProduct();
        completedBuyPhoneCart();
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

    // khi click vào slider => đăng nhập
    let btnSilder = document.querySelectorAll('.slide-img');

    if (btnSilder) {

        btnSilder.forEach((slider) => {

            slider.onclick = (e) => {
                window.location.href = './login.html';
            }
        })
    }

    // kiểm tra xem đã đăng kí chưa
    let checkRegister = localStorage.getItem('register');

    if (Boolean(checkRegister)) {
        localStorage.setItem('checkRegister', true);
    }
    else {
        localStorage.setItem('checkRegister', false);
    }


}



