export default function completedBuyPhoneCart() {

    // render dữ liệu từ cartCompleted => khi ấn vào nút TIẾN HÀNG ĐẶT HÀNG bên cartValue
    let dataPhoneCart = JSON.parse(localStorage.getItem('cartCompleted'));

    if (dataPhoneCart) {

        // render các thông tin ra màn hình
        // code buyPhone cart
        let codeBuyPhoneCart = document.querySelector('.buy-phone-cart-id strong');
        if (codeBuyPhoneCart) {
            codeBuyPhoneCart.innerText = dataPhoneCart.codeBuyCart;
        }

        // nameClient
        let nameClient = document.querySelector('.buy-phone-cart-nameUser strong');
        if (nameClient) {
            nameClient.innerText = dataPhoneCart.nameUser;
        }
        // telephoneClient
        let telephoneClient = document.querySelector('.buy-phone-cart-telephone strong');
        if (telephoneClient) {
            telephoneClient.innerText = dataPhoneCart.phoneUser;
        }

        // emailClient
        let emailClient = document.querySelector('.buy-phone-cart-email strong');
        if (emailClient) {
            emailClient.innerText = dataPhoneCart.emailUser;
        }

        // addressClient
        let addressClient = document.querySelector('.buy-phone-cart-addressShop strong');
        if (addressClient) {
            addressClient.innerText = `${dataPhoneCart.nameshop} - ${dataPhoneCart.address}`;
        }

        // sumNumberPhoneClient
        let sumNumberPhoneClient = document.querySelector('.buy-phone-cart-count-Sum-Phone strong');
        if (sumNumberPhoneClient) {
            sumNumberPhoneClient.innerText = dataPhoneCart.sumNumberPhone;
        }
        // sumPricePhoneClient
        let sumPricePhoneClient = document.querySelector('.buy-phone-cart-sumPrice strong');
        if (sumPricePhoneClient) {
            sumPricePhoneClient.innerText = dataPhoneCart.sumPrice;
        }
        // dateClient
        let dateClient = document.querySelector('.buy-phone-cart-info-date strong');
        if (dateClient) {
            dateClient.innerText = dataPhoneCart.date;
        }

        // render thông tin của từng sản phẩm trong giỏ hàng => ra các li => trang thanh toán
        let ulBuyPhoneCart = document.querySelector('.buy-phone-cart-ul');
        if (ulBuyPhoneCart) {
            let detailPhone = dataPhoneCart.phoneDetail;

            let html = detailPhone.map((phone) => {

                return `
                  <li class="buy-phone-cart-li">
                <div class="completed-buy-phone-order-item-img buy-phone-cart-li-img">
                  <img src="${phone.imgPhone}" alt="anh" />
                </div>

                <div class="completed-buy-phone-order-item-content buy-phone-cart-li-item">
                  <p class="completed-buy-phone-order-item-namePhone buy-phone-cart-li-name">${phone.namePhone}</p>
                  <p class="completed-buy-phone-order-item-option buy-phone-cart-li-option">Phiên bản: <strong>${phone.option}</strong></p>
                  <p class="completed-buy-phone-order-item-option buy-phone-cart-li-number-phone">Số lượng: <strong>${phone.numberPhone}</strong></p>
                  <p class="completed-buy-phone-order-item-option">
                    Giá tiền: <strong class="completed-buy-phone-order-item-option-2 buy-phone-cart-li-option-price">${phone.pricePhone}</strong>
                  </p>
                </div>
              </li>

                `
            })

            // innerHTML vào dom Ul
            ulBuyPhoneCart.innerHTML = html.join('');

        }

        // khi click vào nút THANH TOÁN KHI NHẬN HÀNG => trong CompletedBuyPhoneCart  => chuyển page thanh toán khi nhận hàng buy phone cart
        let btnCartThanhToanNhanHang = document.querySelector('.cart-thanh-toan-nhan-hang');
        if (btnCartThanhToanNhanHang) {
            btnCartThanhToanNhanHang.addEventListener('click', () => {
                window.location.href = "./thanhtoankhinhanhangCart.html";
            })
        }

        // khi click vào nút THANH TOÁN MOMO => trong CompletedBuyPhoneCart  => chuyển page thanh toán MOMO
        let btnCartThanhMomo = document.querySelector('.cart-thanh-toan-mo-mo');
        if (btnCartThanhMomo) {
            btnCartThanhMomo.addEventListener('click', () => {
                window.location.href = "./thanhtoanmomoCart.html";
            })
        }



        // render giữ liệu ra màn hình THANH TOAN KHI NHAN HANG cart

        let codeOrderPhoneCart = document.querySelector('.header-text-cart-nhanhang strong');
        if (codeOrderPhoneCart) {
            codeOrderPhoneCart.innerText = dataPhoneCart.codeBuyCart;
        }


        let nameUser = document.querySelector('.nameClient-cart-nhanhang strong');
        if (nameUser) {
            nameUser.innerText = dataPhoneCart.nameUser;
        }

        let addressUser = document.querySelector('.addressClient-cart-nhanhang strong');
        if (addressUser) {
            addressUser.innerText = `${dataPhoneCart.nameshop} - ${dataPhoneCart.address}`;
        }

        let phoneUser = document.querySelector('.phoneClient-cart-nhanhang strong');
        if (phoneUser) {
            phoneUser.innerText = dataPhoneCart.phoneUser;
        }

        let emailUser = document.querySelector('.emailClient-cart-nhanhang strong');
        if (emailUser) {
            emailUser.innerText = dataPhoneCart.emailUser;
        }

        let notelUser = document.querySelector('.noteClient-cart-nhanhang strong');
        if (notelUser) {
            notelUser.innerText = dataPhoneCart.note;
        }

        let datelUser = document.querySelector('.date-cart-nhanhang strong');
        if (datelUser) {
            datelUser.innerText = dataPhoneCart.date;
        }

        // render thông tin của các điện thoại trong giỏ hàng => ra màn hình => thanh toán khi nhận hàng
        let ulCartThanhToanNhanHang = document.querySelector('.ul-cart-nhanhang');
        if (ulCartThanhToanNhanHang) {
            let detailPhoneCart = dataPhoneCart.phoneDetail;

            let html = detailPhoneCart.map((phone) => {

                return `
                   <li class="li-cart-nhanhang">
                <div class="infomation-phone-item-text cart-value-buy cart-value-buy-1 infomation-phone-item-text-1">
                  <strong>${phone.namePhone}</strong>
                </div>

                <div class="infomation-phone-item-text cart-value-buy cart-value-buy-3 infomation-phone-item-text-2">
                  <strong>${phone.option}</strong>
                </div>

                <div class="infomation-phone-item-text cart-value-buy cart-value-buy-4 infomation-phone-item-text-3">
                  <strong>${phone.numberPhone}</strong>
                </div>

                <div class="infomation-phone-item-text cart-value-buy cart-value-buy-2 infomation-phone-item-text-4">
                  <strong>${phone.pricePhone}</strong>
                </div>
              </li>

                `
            })

            // innerHTML vào dom Ul
            ulCartThanhToanNhanHang.innerHTML = html.join('');

        }

        // render tổng tiền
        let sumPrice = document.querySelector('.sum-price-cart-nhanhang p');
        if (sumPrice) {
            sumPrice.innerText = dataPhoneCart.sumPrice;
        }
        let sumPrice2 = document.querySelector('.sum-price-cart-nhanhang2 p');
        if (sumPrice2) {
            sumPrice2.innerText = dataPhoneCart.sumPrice;
        }




        // render giữ liệu ra màn hình THANH TOAN MOMO cart

        let codeOrderPhoneCartMomo = document.querySelector('.cart-buyPhone-id-momo strong');
        if (codeOrderPhoneCartMomo) {
            codeOrderPhoneCartMomo.innerText = dataPhoneCart.codeBuyCart;
        }


        let nameUserMomo = document.querySelector('.cart-buyPhone-info-momo-nameUser strong');
        if (nameUserMomo) {
            nameUserMomo.innerText = dataPhoneCart.nameUser;
        }

        let addressUserMomo = document.querySelector('.cart-buyPhoneinfo-momo-addressShop strong');
        if (addressUserMomo) {
            addressUserMomo.innerText = `${dataPhoneCart.nameshop} - ${dataPhoneCart.address}`;
        }

        let phoneUserMomo = document.querySelector('.cart-buyPhone-info-momo-telephone strong');
        if (phoneUserMomo) {
            phoneUserMomo.innerText = dataPhoneCart.phoneUser;
        }

        let emailUserMomo = document.querySelector('.cart-buyPhone-info-momo-email strong');
        if (emailUserMomo) {
            emailUserMomo.innerText = dataPhoneCart.emailUser;
        }



        let datelUserMomo = document.querySelector('.cart-buyPhone-info-momo-date strong');
        if (datelUserMomo) {
            datelUserMomo.innerText = dataPhoneCart.date;
        }

        let sumNumberPhoneMomo = document.querySelector('.cart-buyPhoneinfo-momo-countPhone strong');
        if (sumNumberPhoneMomo) {
            sumNumberPhoneMomo.innerText = dataPhoneCart.sumNumberPhone;
        }

        let sumPriceMomo = document.querySelector('.cart-buyPhone-info-momo-sumPrice strong');
        if (sumPriceMomo) {
            sumPriceMomo.innerText = dataPhoneCart.sumPrice;
        }

        let sumPriceMomo2 = document.querySelector('.sumPrice-MOMO-Cart');
        if (sumPriceMomo2) {
            sumPriceMomo2.innerText = dataPhoneCart.sumPrice;
        }


        // render thông tin của từng sản phẩm trong giỏ hàng => ra các li => TRANG THANH TOÁN MOMO
        let ulBuyPhoneCartMomo = document.querySelector('.ul-cart-thanhtoan-momo');
        if (ulBuyPhoneCartMomo) {
            let detailPhoneMomo = dataPhoneCart.phoneDetail;

            let html = detailPhoneMomo.map((phone) => {

                return `
                  <li class="buy-phone-cart-li">
                <div class="completed-buy-phone-order-item-img buy-phone-cart-li-img">
                  <img src="${phone.imgPhone}" alt="anh" />
                </div>

                <div class="completed-buy-phone-order-item-content buy-phone-cart-li-item">
                  <p class="completed-buy-phone-order-item-namePhone buy-phone-cart-li-name">${phone.namePhone}</p>
                  <p class="completed-buy-phone-order-item-option buy-phone-cart-li-option">Phiên bản: <strong>${phone.option}</strong></p>
                  <p class="completed-buy-phone-order-item-option buy-phone-cart-li-number-phone">Số lượng: <strong>${phone.numberPhone}</strong></p>
                  <p class="completed-buy-phone-order-item-option">
                    Giá tiền: <strong class="completed-buy-phone-order-item-option-2 buy-phone-cart-li-option-price">${phone.pricePhone}</strong>
                  </p>
                </div>
              </li>

                `
            })

            // innerHTML vào dom Ul
            ulBuyPhoneCartMomo.innerHTML = html.join('');

        }

        // làm time đếm ngược 15p ra màn hình
        let d = new Date('2002-04-16');
        let seconds = 900;
        let idInterver = setInterval(() => {
            seconds--;
            d.setSeconds(seconds);
            d.setMinutes(Math.floor(seconds / 60));


            if (seconds === 0) {
                seconds = 900;
            }
            let date = `${d.getMinutes()}:${d.getSeconds()}`;

            // render ra màn hình
            let dateOldMomo = document.querySelector('.pay-cart-momo .pay-momo strong');
            if (dateOldMomo) {
                dateOldMomo.innerText = date;
            }
        }, 1000)
    }
}
