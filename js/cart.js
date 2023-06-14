function cart() {



    // khi click vào nút thêm giỏ hàng hiện modal mini => xem giỏ hàng thành công
    let btnAddCart = document.querySelector('.buy-phone-product-action-add-cart');

    let popUpCart = document.querySelector('.modal-popop-add-cart');


    if (btnAddCart) {
        btnAddCart.addEventListener('click', () => {

            // check xem đã đăng nhập chưa => nếu chưa ko cho thêm vào giỏ hàng
            let checkLogin = JSON.parse(localStorage.getItem('userLogin'));
            if (checkLogin) {
                if (checkLogin.checkLogin) {

                    // hiển thị lên popup => thêm vào giỏ hàng thành công
                    if (popUpCart) {
                        popUpCart.style.display = 'block';

                        setTimeout(() => {
                            popUpCart.style.display = 'none';
                        }, 10000)
                    }



                    // khi click vào giỏ hàng lấy các thông tin sản phẩm hiện tại, tên,img, option,price => lưu lại localstorage
                    let imgPhone = document.querySelector('.buy-phone-product-img img').src;
                    let namePhone = document.querySelector('.buy-phone-name').innerText;
                    let pricePhone = document.querySelector('.buy-phone-product-info-price-new').innerText;
                    let optionPhone = document.querySelector('.buy-phone-product-option-phone-list-active .buy-phone-product-option-phone-GB').innerText;

                    let dataPhoneCart = [
                        {
                            imgPhone,
                            namePhone,
                            pricePhone,
                            optionPhone
                        }
                    ]
                    // lưu dữ liệu lên local storage
                    localStorage.setItem('dataCarts', JSON.stringify(dataPhoneCart));

                    // lưu 1 thông tin check rart === true
                    localStorage.setItem('checkCartValue', true);

                    // khi popup hiện lên => khi click vào nút xem giỏ hàng và thanh toán => chuyển đến trang giỏ hàng =>render dữ liệu ra
                    let btnPayNow = document.querySelector('.modal-popop-add-cart button');
                    if (btnPayNow) {
                        btnPayNow.onclick = () => {

                            // chuyển đến trang giỏ hàng
                            window.location.href = "./cartValue.html";
                        }
                    }


                }
                // nếu không yêu cầu đăng nhập trước đã
                else {
                    if (confirm('Bạn chưa đăng nhập! Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng')) {
                        window.location.href = "./login.html";
                    }
                }
            }
            else {
                if (confirm('Bạn chưa đăng nhập! Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng')) {
                    window.location.href = "./login.html";
                }
            }


        })
    }
    // render dữ liệu ra màn hình cart => mặc định khi click vào thì giỏ hàng có sản phẩm min ===1
    let dataCartOld = JSON.parse(localStorage.getItem('dataCarts'));
    let ulRendeCart = document.querySelector('.header-cart-value');

    if (dataCartOld) {

        if (ulRendeCart) {

            let html = dataCartOld.map((cart, index) => {
                return `
                    <li class="header-cart-value-list" data-index-cart=${index}>
                        <div class="header-cart-value-img" >
                  <img src="${cart.imgPhone}" alt="cart" />
                </div>
                <p class="header-cart-value-name">${cart.namePhone}</p>
                <p class="header-cart-value-option">
                  <span>Phiên bản</span>
                  <strong>${cart.optionPhone}</strong>
                </p>
                <p class="header-cart-value-price">
                  <span>Giá sản phẩm</span>
                  <strong>${cart.pricePhone}</strong>
                </p>
                <div class="buy-phone-click-wrap-info-price-number cart-value-number">
                  <h2 class="buy-phone-click-wrap-info-price-number-text cart-value-number-text">Số lượng:</h2>
                  <div class="buy-phone-click-wrap-info-price-number-option cart-value-number-option">
                    <i class="fa-solid fa-minus buy-phone-click-wrap-info-price-number-option-btn btn-left cart-value-number-option-left"></i>
                    <input type="text" min="1" value="1" class="buy-phone-click-wrap-info-price-number-option-input cart-value-number-option-input" />
                    <i class="fa-solid fa-plus buy-phone-click-wrap-info-price-number-option-btn btn-right cart-value-number-option-right"></i>
                  </div>
                </div>
                <i class="fa-solid fa-minus cart-value-clear-icon"></i>
              </li>
                        `
            })

            ulRendeCart.innerHTML = html.join('');
        }

        // sau khi render xong => xử lý khi click tăng hoặc giảm thì giá tăng hoặc giảm theo đó
        let inputValueOption = document.querySelector('.cart-value-number-option-input');

        let btnPlusOption = document.querySelector('.cart-value-number-option-right');


        // giá sản phẩm của 1 chiệc điện thoại
        let pricePhone = document.querySelector('.header-cart-value-price strong');
        let pricePhoneValue = pricePhone.innerText.trim();
        // chuyển giá thành số để tính toán
        console.log(pricePhoneValue);
        let pricePhoneNumber = pricePhoneValue.slice(0, pricePhoneValue.length - 1).trim();
        let priceNew = Number.parseFloat(pricePhoneNumber.split(',').join(''));


        // click vào nút tăng sản phẩm => giá tháy đổi theo
        if (btnPlusOption) {

            let valueInputOld = Number.parseInt(inputValueOption.value);
            btnPlusOption.addEventListener('click', () => {
                valueInputOld++;
                inputValueOption.value = valueInputOld;

                // xử lý lấy số lượng * với giá 1 chiếc điện thoại => render lại ra màn hình
                let price = (priceNew * valueInputOld).toString();

                // xử lý tách thành dấu phẩy, in lại ra màn hình render price
                console.log(price);
                console.log(price[0]);

                if (price.length === 6) {
                    pricePhone.innerText = `${price[0]}${price[1]}${price[2]},${price[3]}${price[4]}${price[5]} đ`;
                }
                if (price.length === 7) {
                    pricePhone.innerText = `${price[0]},${price[1]}${price[2]}${price[3]},${price[4]}${price[5]}${price[6]} đ`;
                }
                if (price.length === 8) {
                    pricePhone.innerText = `${price[0]}${price[1]},${price[2]}${price[3]}${price[4]},${price[5]}${price[6]}${price[7]} đ`;
                }
                if (price.length === 9) {
                    pricePhone.innerText = `${price[0]}${price[1]}${price[2]},${price[3]}${price[4]}${price[5]},${price[6]}${price[7]}${price[8]} đ`;
                }
                if (price.length === 10) {
                    pricePhone.innerText = `${price[0]},${price[1]}${price[2]}${price[3]},${price[4]}${price[5]}${price[6]},${price[7]}${price[8]}${price[9]} đ`;
                }
                if (price.length === 10) {
                    pricePhone.innerText = `${price[0]},${price[1]}${price[2]}${price[3]},${price[4]}${price[5]}${price[6]},${price[7]}${price[8]}${price[9]} đ`;
                }
                if (price.length === 11) {
                    pricePhone.innerText = `${price[0]}${price[1]},${price[2]}${price[3]}${price[4]},${price[5]}${price[6]}${price[7]},${price[8]}${price[9]}${price[10]} đ`;
                }
                if (price.length === 12) {
                    pricePhone.innerText = `${price[0]}${price[1]}${price[2]},${price[3]}${price[4]}${price[5]},${price[6]}${price[7]}${price[8]},${price[9]}${price[10]}${price[11]} đ`;
                }

            })
        }

    }

    /*
    <li class="header-cart-value-list">
                <div class="header-cart-value-img">
                  <img src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12pro.png" alt="cart" />
                </div>
                <p class="header-cart-value-name">Redmi Note 12 Pro (8GB/256GB) - Chính hãng</p>
                <p class="header-cart-value-option">
                  <span>Phiên bản</span>
                  <strong>64G</strong>
                </p>
                <p class="header-cart-value-price">
                  <span>Giá sản phẩm</span>
                  <strong>100,000,000 ₫</strong>
                </p>
                <div class="buy-phone-click-wrap-info-price-number cart-value-number">
                  <h2 class="buy-phone-click-wrap-info-price-number-text cart-value-number-text">Số lượng:</h2>
                  <div class="buy-phone-click-wrap-info-price-number-option cart-value-number-option">
                    <i class="fa-solid fa-minus buy-phone-click-wrap-info-price-number-option-btn btn-left cart-value-number-option-left"></i>
                    <input type="text" min="1" value="1" class="buy-phone-click-wrap-info-price-number-option-input cart-value-number-option-input" />
                    <i class="fa-solid fa-plus buy-phone-click-wrap-info-price-number-option-btn btn-right cart-value-number-option-right"></i>
                  </div>
                </div>
                <i class="fa-solid fa-minus cart-value-clear-icon"></i>
              </li>

    */
}

export { cart }