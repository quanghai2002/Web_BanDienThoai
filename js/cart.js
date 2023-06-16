function cart() {

    // localStorage.removeItem('dataCarts')


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

                    let dataPhoneCart =
                    {
                        imgPhone,
                        namePhone,
                        pricePhone,
                        optionPhone
                    }

                    // xử lý khi click => thêm vào giỏ hàng => nếu trùng tên trên db thì ko cho vào , nếu check trong data chưa có thì cho thêm vào db
                    let dataCart = JSON.parse(localStorage.getItem('dataCarts'));
                    if (dataCart) {

                        // nếu đã có dữ liệu rồi => tìm xem trên data cũ đã có thông tin sản phẩm đang click chưa
                        // nếu có rồi không thêm vào nữa
                        let findCheck = dataCart.find((cartItem) => {
                            return cartItem.namePhone.trim().toUpperCase() === dataPhoneCart.namePhone.trim().toUpperCase();
                        })

                        if (findCheck) {
                            // nễu đã có thì thôi không thêm nữa
                        }
                        //nếu chưa có => thì thêm mới vào
                        else {
                            let newDataCart = [
                                ...dataCart,
                                dataPhoneCart
                            ]
                            console.log(newDataCart);
                            localStorage.setItem('dataCarts', JSON.stringify(newDataCart));

                        }
                    }
                    // lần đầu clik vào mà nếu chưa có db thì tạo db mới và lưu vào dataCart
                    else {

                        // lưu dữ liệu lên local storage
                        localStorage.setItem('dataCarts', JSON.stringify([dataPhoneCart]));

                    }


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

            // khi click vào giỏ hàng => số lượng sản phẩm trên giỏ hàng hiện thị bằng số lượng trong db
            let dataCart = JSON.parse(localStorage.getItem('dataCarts'));
            if (dataCart) {
                let btnCartNumber = document.querySelector('.header-cart .header-cart-total');
                if (btnCartNumber) {
                    btnCartNumber.innerText = dataCart.length;
                }
            }

            // khi click vào giỏ hàng => tạo ra hiệu ứng cho sản phẩm bay vào
            let animationCart = document.querySelector('.add-cart-icon-completed');
            if (animationCart) {
                animationCart.style.display = 'block';
                setTimeout(() => {
                    animationCart.style.display = 'none';
                }, 3000)
            }

        })
    }

    // render dữ liệu ra màn hình cart => mặc định khi click vào thì giỏ hàng có sản phẩm min ===1
    let dataCartOld = JSON.parse(localStorage.getItem('dataCarts'));
    let ulRendeCart = document.querySelector('.header-cart-value');

    if (dataCartOld) {

        function renderCart() {

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
        }
        renderCart();

        // sau khi render xong => xử lý khi click vào tất cả các nút => tăng hoặc giảm thì giá tăng hoặc giảm theo đó

        let btnPlusOptions = document.querySelectorAll('.cart-value-number-option-right');


        // giá sản phẩm của 1 chiệc điện thoại
        let pricePhone = document.querySelectorAll('.header-cart-value-price strong');


        if (pricePhone) {


            if (btnPlusOptions) {
                Array.from(btnPlusOptions).forEach((btnPlusOption, index) => {


                    let pricePhoneValue = pricePhone[index].innerText.trim();
                    // chuyển giá thành số để tính toán

                    let pricePhoneNumber = pricePhoneValue.slice(0, pricePhoneValue.length - 1).trim();
                    let priceNew = Number.parseFloat(pricePhoneNumber.split(',').join(''));

                    // click vào nút tăng sản phẩm => giá tháy đổi theo
                    btnPlusOption.addEventListener('click', () => {
                        let inputValueOption = document.querySelectorAll('.cart-value-number-option-input');

                        let valueInputOld = Number.parseInt(inputValueOption[index].value);
                        valueInputOld++;
                        inputValueOption[index].value = valueInputOld;

                        // xử lý lấy số lượng * với giá 1 chiếc điện thoại => render lại ra màn hình
                        let price = (priceNew * valueInputOld).toString();

                        // xử lý tách thành dấu phẩy, in lại ra màn hình render price
                        if (price.length === 6) {
                            pricePhone[index].innerText = `${price[0]}${price[1]}${price[2]},${price[3]}${price[4]}${price[5]} đ`;
                        }
                        if (price.length === 7) {
                            pricePhone[index].innerText = `${price[0]},${price[1]}${price[2]}${price[3]},${price[4]}${price[5]}${price[6]} đ`;
                        }
                        if (price.length === 8) {
                            pricePhone[index].innerText = `${price[0]}${price[1]},${price[2]}${price[3]}${price[4]},${price[5]}${price[6]}${price[7]} đ`;
                        }
                        if (price.length === 9) {
                            pricePhone[index].innerText = `${price[0]}${price[1]}${price[2]},${price[3]}${price[4]}${price[5]},${price[6]}${price[7]}${price[8]} đ`;
                        }
                        if (price.length === 10) {
                            pricePhone[index].innerText = `${price[0]},${price[1]}${price[2]}${price[3]},${price[4]}${price[5]}${price[6]},${price[7]}${price[8]}${price[9]} đ`;
                        }
                        if (price.length === 10) {
                            pricePhone[index].innerText = `${price[0]},${price[1]}${price[2]}${price[3]},${price[4]}${price[5]}${price[6]},${price[7]}${price[8]}${price[9]} đ`;
                        }
                        if (price.length === 11) {
                            pricePhone[index].innerText = `${price[0]}${price[1]},${price[2]}${price[3]}${price[4]},${price[5]}${price[6]}${price[7]},${price[8]}${price[9]}${price[10]} đ`;
                        }
                        if (price.length === 12) {
                            pricePhone[index].innerText = `${price[0]}${price[1]}${price[2]},${price[3]}${price[4]}${price[5]},${price[6]}${price[7]}${price[8]},${price[9]}${price[10]}${price[11]} đ`;
                        }

                        // khi click tăng => sẽ thay đổi tổng giá trị => và tổng thanh toán
                        let sumGiatri = document.querySelector('.cart-value-info-phone .sumPrice');
                        let sumThanhToan = document.querySelector('.cart-value-info-phone .sumPrice-buy');
                        if (sumGiatri) {

                            // lấy hết các price hiện tại
                            let prices = document.querySelectorAll('.header-cart-value-price strong');
                            let sum = 0;
                            prices.forEach((price) => {
                                let priceNumber = Number.parseFloat(price.innerText.slice(0, price.innerText.length - 1).trim().split(',').join(''));
                                sum += priceNumber;
                            })

                            let priceString = sum.toString();

                            // xử lý render ra màn hình tống giá trị bằng chữ 
                            if (priceString.length === 6) {
                                sumGiatri.innerText = `${priceString[0]}${priceString[1]}${priceString[2]},${priceString[3]}${priceString[4]}${priceString[5]} đ`;
                            }
                            if (priceString.length === 7) {
                                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]} đ`;
                            }
                            if (priceString.length === 8) {
                                sumGiatri.innerText = `${priceString[0]}${priceString[1]},${priceString[2]}${priceString[3]}${priceString[4]},${priceString[5]}${priceString[6]}${priceString[7]} đ`;
                            }
                            if (priceString.length === 9) {
                                sumGiatri.innerText = `${priceString[0]}${priceString[1]}${priceString[2]},${priceString[3]}${priceString[4]}${priceString[5]},${priceString[6]}${priceString[7]}${priceString[8]} đ`;
                            }
                            if (priceString.length === 10) {
                                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]},${priceString[7]}${priceString[8]}${priceString[9]} đ`;
                            }
                            if (priceString.length === 10) {
                                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]},${priceString[7]}${priceString[8]}${priceString[9]} đ`;
                            }
                            if (priceString.length === 11) {
                                sumGiatri.innerText = `${priceString[0]}${priceString[1]},${priceString[2]}${priceString[3]}${priceString[4]},${priceString[5]}${priceString[6]}${priceString[7]},${priceString[8]}${priceString[9]}${priceString[10]} đ`;
                            }
                            if (priceString.length === 12) {
                                sumGiatri.innerText = `${priceString[0]}${priceString[1]}${priceString[2]},${priceString[3]}${priceString[4]}${priceString[5]},${priceString[6]}${priceString[7]}${priceString[8]},${priceString[9]}${priceString[10]}${priceString[11]} đ`;
                            }
                            if (priceString.length === 13) {
                                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]},${priceString[7]}${priceString[8]}${priceString[9]},${priceString[10]}${priceString[11]}${priceString[12]} đ`;
                            }

                            // tông thanh toán === tổng giá trị
                            if (sumThanhToan) {
                                sumThanhToan.innerText = sumGiatri.innerText;
                            }
                        }
                    })
                })
            }

            // xử lý khi click vào nút dấu trừ giảm đi sản phẩm
            let btnMinuses = document.querySelectorAll('.cart-value-number-option-left');
            if (btnMinuses) {

                btnMinuses.forEach((btnMinus, index) => {

                    // giá mặc định của 1 chiếc điện thoại theo index
                    let pricePhoneValue = pricePhone[index].innerText.trim();
                    // chuyển giá thành số để tính toán

                    let pricePhoneNumber = pricePhoneValue.slice(0, pricePhoneValue.length - 1).trim();
                    let priceNew = Number.parseFloat(pricePhoneNumber.split(',').join(''));
                    // khi click minus => ô input giảm đi 1 
                    btnMinus.addEventListener('click', () => {
                        let inputValueOption = document.querySelectorAll('.cart-value-number-option-input');


                        let valueInputOld = Number.parseInt(inputValueOption[index].value);

                        let valueInputNew = --valueInputOld;
                        if (valueInputNew <= 1) {
                            inputValueOption[index].value = 1;
                        }
                        else {

                            inputValueOption[index].value = valueInputNew;

                        }
                        // giá của 1 chiếc điện thoại  priceNew;
                        // lấy giá của điện thoại hiện tại
                        let priceNow = document.querySelectorAll('.header-cart-value-price strong');


                        // xử lý chuyển đổi giá hiện tại => thành số
                        let priceSlice = Number.parseFloat(priceNow[index].innerText.slice(0, priceNow[index].innerText.length - 1).trim().split(',').join(''));

                        // khi click minus => lấy giá hiện tại - giá của 1 chiếc điện thoại gốc
                        let price = (priceSlice - priceNew).toString();

                        // xử lý tách thành dấu phẩy, in lại ra màn hình render price
                        if (price.length === 6) {
                            pricePhone[index].innerText = `${price[0]}${price[1]}${price[2]},${price[3]}${price[4]}${price[5]} đ`;
                        }
                        if (price.length === 7) {
                            pricePhone[index].innerText = `${price[0]},${price[1]}${price[2]}${price[3]},${price[4]}${price[5]}${price[6]} đ`;
                        }
                        if (price.length === 8) {
                            pricePhone[index].innerText = `${price[0]}${price[1]},${price[2]}${price[3]}${price[4]},${price[5]}${price[6]}${price[7]} đ`;
                        }
                        if (price.length === 9) {
                            pricePhone[index].innerText = `${price[0]}${price[1]}${price[2]},${price[3]}${price[4]}${price[5]},${price[6]}${price[7]}${price[8]} đ`;
                        }
                        if (price.length === 10) {
                            pricePhone[index].innerText = `${price[0]},${price[1]}${price[2]}${price[3]},${price[4]}${price[5]}${price[6]},${price[7]}${price[8]}${price[9]} đ`;
                        }
                        if (price.length === 10) {
                            pricePhone[index].innerText = `${price[0]},${price[1]}${price[2]}${price[3]},${price[4]}${price[5]}${price[6]},${price[7]}${price[8]}${price[9]} đ`;
                        }
                        if (price.length === 11) {
                            pricePhone[index].innerText = `${price[0]}${price[1]},${price[2]}${price[3]}${price[4]},${price[5]}${price[6]}${price[7]},${price[8]}${price[9]}${price[10]} đ`;
                        }
                        if (price.length === 12) {
                            pricePhone[index].innerText = `${price[0]}${price[1]}${price[2]},${price[3]}${price[4]}${price[5]},${price[6]}${price[7]}${price[8]},${price[9]}${price[10]}${price[11]} đ`;
                        }


                        // khi click giảm => sẽ thay đổi tổng giá trị => và tổng thanh toán
                        let sumGiatri = document.querySelector('.cart-value-info-phone .sumPrice');
                        let sumThanhToan = document.querySelector('.cart-value-info-phone .sumPrice-buy');

                        if (sumGiatri) {

                            // lấy hết các price hiện tại
                            let prices = document.querySelectorAll('.header-cart-value-price strong');
                            let sum = 0;
                            prices.forEach((price) => {
                                let priceNumber = Number.parseFloat(price.innerText.slice(0, price.innerText.length - 1).trim().split(',').join(''));
                                sum += priceNumber;
                            })

                            let priceString = sum.toString();

                            // xử lý render ra màn hình tống giá trị bằng chữ 
                            if (priceString.length === 6) {
                                sumGiatri.innerText = `${priceString[0]}${priceString[1]}${priceString[2]},${priceString[3]}${priceString[4]}${priceString[5]} đ`;
                            }
                            if (priceString.length === 7) {
                                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]} đ`;
                            }
                            if (priceString.length === 8) {
                                sumGiatri.innerText = `${priceString[0]}${priceString[1]},${priceString[2]}${priceString[3]}${priceString[4]},${priceString[5]}${priceString[6]}${priceString[7]} đ`;
                            }
                            if (priceString.length === 9) {
                                sumGiatri.innerText = `${priceString[0]}${priceString[1]}${priceString[2]},${priceString[3]}${priceString[4]}${priceString[5]},${priceString[6]}${priceString[7]}${priceString[8]} đ`;
                            }
                            if (priceString.length === 10) {
                                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]},${priceString[7]}${priceString[8]}${priceString[9]} đ`;
                            }
                            if (priceString.length === 10) {
                                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]},${priceString[7]}${priceString[8]}${priceString[9]} đ`;
                            }
                            if (priceString.length === 11) {
                                sumGiatri.innerText = `${priceString[0]}${priceString[1]},${priceString[2]}${priceString[3]}${priceString[4]},${priceString[5]}${priceString[6]}${priceString[7]},${priceString[8]}${priceString[9]}${priceString[10]} đ`;
                            }
                            if (priceString.length === 12) {
                                sumGiatri.innerText = `${priceString[0]}${priceString[1]}${priceString[2]},${priceString[3]}${priceString[4]}${priceString[5]},${priceString[6]}${priceString[7]}${priceString[8]},${priceString[9]}${priceString[10]}${priceString[11]} đ`;
                            }
                            if (priceString.length === 13) {
                                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]},${priceString[7]}${priceString[8]}${priceString[9]},${priceString[10]}${priceString[11]}${priceString[12]} đ`;
                            }

                            // tông thanh toán === tổng giá trị
                            if (sumThanhToan) {
                                sumThanhToan.innerText = sumGiatri.innerText;
                            }
                        }

                    })
                })

            }
        }


        // mặc định ban đầu => tổng giá trị và tổng thanh toán => bằng giá mặc đinh => khi chưa click tăng or giảm
        let sumGiatri = document.querySelector('.cart-value-info-phone .sumPrice');
        let sumThanhToan = document.querySelector('.cart-value-info-phone .sumPrice-buy');

        if (sumGiatri) {

            // lấy hết các price hiện tại
            let prices = document.querySelectorAll('.header-cart-value-price strong');
            let sum = 0;
            prices.forEach((price) => {
                let priceNumber = Number.parseFloat(price.innerText.slice(0, price.innerText.length - 1).trim().split(',').join(''));
                sum += priceNumber;
            })

            let priceString = sum.toString();

            // xử lý render ra màn hình tống giá trị bằng chữ 
            if (priceString.length === 6) {
                sumGiatri.innerText = `${priceString[0]}${priceString[1]}${priceString[2]},${priceString[3]}${priceString[4]}${priceString[5]} đ`;
            }
            if (priceString.length === 7) {
                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]} đ`;
            }
            if (priceString.length === 8) {
                sumGiatri.innerText = `${priceString[0]}${priceString[1]},${priceString[2]}${priceString[3]}${priceString[4]},${priceString[5]}${priceString[6]}${priceString[7]} đ`;
            }
            if (priceString.length === 9) {
                sumGiatri.innerText = `${priceString[0]}${priceString[1]}${priceString[2]},${priceString[3]}${priceString[4]}${priceString[5]},${priceString[6]}${priceString[7]}${priceString[8]} đ`;
            }
            if (priceString.length === 10) {
                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]},${priceString[7]}${priceString[8]}${priceString[9]} đ`;
            }
            if (priceString.length === 10) {
                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]},${priceString[7]}${priceString[8]}${priceString[9]} đ`;
            }
            if (priceString.length === 11) {
                sumGiatri.innerText = `${priceString[0]}${priceString[1]},${priceString[2]}${priceString[3]}${priceString[4]},${priceString[5]}${priceString[6]}${priceString[7]},${priceString[8]}${priceString[9]}${priceString[10]} đ`;
            }
            if (priceString.length === 12) {
                sumGiatri.innerText = `${priceString[0]}${priceString[1]}${priceString[2]},${priceString[3]}${priceString[4]}${priceString[5]},${priceString[6]}${priceString[7]}${priceString[8]},${priceString[9]}${priceString[10]}${priceString[11]} đ`;
            }
            if (priceString.length === 13) {
                sumGiatri.innerText = `${priceString[0]},${priceString[1]}${priceString[2]}${priceString[3]},${priceString[4]}${priceString[5]}${priceString[6]},${priceString[7]}${priceString[8]}${priceString[9]},${priceString[10]}${priceString[11]}${priceString[12]} đ`;
            }

            // tông thanh toán === tổng giá trị
            if (sumThanhToan) {
                sumThanhToan.innerText = sumGiatri.innerText;
            }
        }


        // xử lý khi click vào dấu xóa 1 sản phẩm trong giỏ hàng => xóa đi và render lại
        let clearPhoneCarts = document.querySelectorAll('.cart-value-clear-icon');
        clearPhoneCarts.forEach((clearPhone) => {
            clearPhone.addEventListener('click', (e) => {
                let index = Number.parseInt((e.target.parentElement).getAttribute('data-index-cart'));
                console.log(index);
                dataCartOld.splice(index, 1);

                localStorage.setItem('dataCarts', JSON.stringify(dataCartOld));
                renderCart();
                window.location.reload();

                // nếu như xóa hết sản phẩm => length ===0 chuyển về trang giỏ hàng rỗng
                if (dataCartOld.length === 0) {
                    window.location.href = "./cartNull.html";
                }
            })
        })


        // mặc định vào giỏ hàng => số lượng sản phẩm trên giỏ hàng hiện thị bằng số =>lượng trong db
        let dataCart = JSON.parse(localStorage.getItem('dataCarts'));
        if (dataCart) {
            let btnCartNumber = document.querySelector('.header-cart .header-cart-total');
            if (btnCartNumber) {
                btnCartNumber.innerText = dataCart.length;
            }
        }
    }
    // nếu khong có dataCart => thì lập tức số liệu trên giỏ hàng ===0
    else {
        let btnCartNumber = document.querySelector('.header-cart .header-cart-total');
        if (btnCartNumber) {
            btnCartNumber.innerText = 0;
        }
    }

    // khi click vào nút giỏ hàng trên thanh header => check nếu dữ liệu có sản phẩm => vào trang giỏ hàng => ko thì vào trang giỏ hàng null
    let btnCart = document.querySelector('.header-cart');
    if (btnCart) {
        btnCart.addEventListener('click', () => {
            let dataCart = JSON.parse(localStorage.getItem('dataCarts'));
            if (dataCart) {

                console.log(dataCart.length);

                // nếu data.length === 0 => ko có hàng => chuyển trang cart null
                if (dataCart.length === 0) {
                    window.location.href = "./cartNull.html";
                }


                if (dataCart.length > 0) {
                    window.location.href = "./cartValue.html";

                }
            }
            if (Boolean(dataCart) === false) {
                // nếu không có dữ liệu data cart =>chuyển về giỏ hàng rỗng
                window.location.href = "./cartNull.html";
                // số liệu sản phẩm => lập tức bằng 0
                let btnCartNumber = document.querySelector('.header-cart .header-cart-total');
                if (btnCartNumber) {
                    btnCartNumber.innerText = 0;
                }
            }


        })
    }


    // check nếu check login => đăng xuất => xóa thông tin lưu sản phẩm giỏ hàng đi => số liệu trên giỏ hàng ===0
    let chekcLogins = JSON.parse(localStorage.getItem('userLogin'));
    if (chekcLogins) {
        if (chekcLogins.checkLogin) {
            // bằng true đang đăng nhập => không làm gì
        }
        else {
            // bằng false => xóa dữ liệu đi
            localStorage.removeItem('dataCarts');
            // số liệu sản phẩm => lập tức bằng 0
            let btnCartNumber = document.querySelector('.header-cart .header-cart-total');
            if (btnCartNumber) {
                btnCartNumber.innerText = 0;
            }

        }
    }

    // xử lý form khi người dùng chọn vào
    // các fomr inputs
    // khi click vào nút Tiến hành đặt hàng => trong trang cart value
    let btnDatHangCart = document.querySelector('.btn-cart-input');

    if (btnDatHangCart) {
        // khi click vào sản phẩm đặt hàng => check các thông tin input ở trên bắt buộc phải nhập
        btnDatHangCart.addEventListener('click', () => {

            // thông tin userName nhập
            let userNameInput = document.querySelector('.info-name-cart-input');
            let valueUserNameInput = userNameInput.value;

            // thông tin số điện thoại user nhập vào => check nhập đúng số điện thoại VN
            let telePhoneUser = document.querySelector('.info-phone-cart-input');
            let telePhoneValue = telePhoneUser.value;
            let checkPhoneVN = (/^(0|\+84)\d{9,9}$/).test(telePhoneValue); //regex check kiểm tra đúng là số điện thoại VN hay không

            // thông tin => và check nhập đúng email
            let emailInput = document.querySelector('.info-email-cart-input');
            let checkEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(emailInput.value);

            // thông tin address user chọn => check phải chọn địa chỉ
            let addressUser = document.querySelector('.info-address-cart-input').value;

            // thông tin tên shop
            let nameShop = document.querySelector('.info-shop-cart-input').value;

            // thông tin ghi chú
            let noteUser = document.querySelector('.info-textarea-cart-input').value;



            // thông báo check validate hiện ra nếu 1 trong các trường chưa nhập dữ liệu 
            let checkUserName = document.querySelectorAll('.span-check-cart');


            // check từng trường hợp 1 nếu nhập đúng thì cho qua => không hiển thị cảnh báo
            // user name
            if (valueUserNameInput === '') {
                checkUserName[0].style.display = 'block';

            }
            else {
                checkUserName[0].style.display = 'none';
            }

            // số điện thoại
            if (checkPhoneVN === false) {
                checkUserName[1].style.display = 'block';

            }
            else {
                checkUserName[1].style.display = 'none';
            }

            // email
            if (checkEmail === false) {
                checkUserName[2].style.display = 'block';

            }
            else {
                checkUserName[2].style.display = 'none';
            }

            // tỉnh/thành phố
            if (addressUser === '') {
                checkUserName[3].style.display = 'block';

            }
            else {
                checkUserName[3].style.display = 'none';
            }
            // cửa hàng
            if (nameShop === '') {
                checkUserName[4].style.display = 'block';

            }
            else {
                checkUserName[4].style.display = 'none';
            }

            // ghi chú
            if (noteUser === '') {
                checkUserName[5].style.display = 'block';

            }
            else {
                checkUserName[5].style.display = 'none';
            }

            // lấy tổng giá tiền cuer tất cả sản phẩm
            let sumPricePhone = document.querySelector('.sumPrice-buy');
            // nếu tất cả các trường input đều đã nhập dữ liệu => gửi dữ liệu đi
            if (!(valueUserNameInput === '') && checkPhoneVN === true && checkEmail === true && !(addressUser === '') && !(nameShop === '') && !(noteUser === '') && sumPricePhone) {
                console.log('dữ liệu nhập đủ');
                // mã đơn hàng
                let codeBuyCart = `${Math.floor(Math.random() * 10000)}IAH2K2`;

                // ngày đặt hàng
                let d = new Date();
                let date = `${d.getHours()}:${d.getMinutes()} ngày ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

                // xử lý lấy dữ liệu -> lưu lại => để chuẩn bị render ra trang thanh toán khi có giỏ hàng
                let nameUser = valueUserNameInput.trim();
                let phoneUser = telePhoneValue.trim();
                let emailUser = emailInput.value.trim();
                let address = addressUser.trim();
                let nameshop = nameShop.trim();
                let note = noteUser.trim();

                // lấy tổng số lượng sản phẩm đặt hàng => cộng tất cả các số lượng lại
                let sumNumberPhone = 0;
                let numberPhone = document.querySelectorAll('.cart-value-number-option-input');
                Array.from(numberPhone).forEach((phone) => {
                    sumNumberPhone += Number.parseInt(phone.value);
                })

                // lấy tổng giá tiền cua tất cả sản phẩm
                let sumPrice = sumPricePhone.innerText;

                // lấy thông tin của tất cả sản phẩm => chi tiết từng cái
                let cartDetail = document.querySelectorAll('.header-cart-value-list');
                let phoneDetail = Array.from(cartDetail).map((phone) => {

                    let imgPhone = phone.querySelector('.header-cart-value-img img').src;
                    let namePhone = phone.querySelector('.header-cart-value-name').innerText.trim();
                    let option = phone.querySelector('.header-cart-value-option strong').innerText.trim();
                    let pricePhone = phone.querySelector('.header-cart-value-price strong').innerText.trim();
                    let numberPhone = phone.querySelector('.cart-value-number-option-input').value.trim();
                    return {
                        imgPhone,
                        namePhone,
                        option,
                        pricePhone,
                        numberPhone
                    }
                })

                // gộp tất cả thông tin kia vào dữ liệu => lưu lên localstorage
                let dataCartDatHang = {
                    codeBuyCart,
                    date,
                    nameUser,
                    phoneUser,
                    emailUser,
                    address,
                    nameshop,
                    note,
                    sumNumberPhone,
                    sumPrice,
                    phoneDetail
                }
                // lưu lên db
                localStorage.setItem('cartCompleted', JSON.stringify(dataCartDatHang));
                // chuyển đến trang completed buy phone cart
                window.location.href = "./completedBuyPhoneCart.html";

            }
            else {
                console.log('dữ liệu nhập thiếu')
                // dữ liệu nhập thiếu ko có hành động gì

            }

        })




        // khi oninput // focus input => ẩn thông báo cảnh báo đi
        let checkUserName = document.querySelectorAll('.span-check-cart');
        let inputChange = document.querySelectorAll('.input-change');

        Array.from(inputChange).forEach((input, index) => {
            input.addEventListener('input', () => {
                checkUserName[index].style.display = 'none';
            })
            input.addEventListener('focus', () => {
                checkUserName[index].style.display = 'none';
            })
        })


        // check inputName khi blur => ra ngoài => check xem đúng chưa

        // user name
        // thông tin userName nhập
        let userNameInput = document.querySelector('.info-name-cart-input');

        userNameInput.addEventListener('blur', () => {

            let valueUserNameInput = userNameInput.value;
            if (valueUserNameInput === '') {
                checkUserName[0].style.display = 'block';

            }
            else {
                checkUserName[0].style.display = 'none';
            }
        })


        // thông tin số điện thoại user nhập vào => check nhập đúng số điện thoại VN
        let telePhoneUser = document.querySelector('.info-phone-cart-input');
        telePhoneUser.addEventListener('blur', () => {
            let telePhoneValue = telePhoneUser.value;
            let checkPhoneVN = (/^(0|\+84)\d{9,9}$/).test(telePhoneValue); //regex check kiểm tra đúng là số điện thoại VN hay không
            if (checkPhoneVN) {
                checkUserName[1].style.display = 'none';

            }
            else {
                checkUserName[1].style.display = 'block';
            }
        })

        // thông tin email => check nhập đúng email  VN ko
        let emailInput = document.querySelector('.info-email-cart-input');
        emailInput.addEventListener('blur', () => {
            // thông tin => và check nhập đúng email
            let emailInputValue = emailInput.value;
            let checkEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(emailInputValue);
            if (checkEmail) {
                checkUserName[2].style.display = 'none';

            }
            else {
                checkUserName[2].style.display = 'block';
            }
        })

        // thông tin address user chọn => check phải chọn địa chỉ
        let addressUser = document.querySelector('.info-address-cart-input');
        addressUser.addEventListener('focus', () => {
            checkUserName[3].style.display = 'none';
        })
        addressUser.addEventListener('blur', () => {
            let value = addressUser.value;
            if (value === '') {
                checkUserName[3].style.display = 'block';
            }
            else {
                checkUserName[3].style.display = 'none';
            }
        })

        // thông tin shop
        // thông tin tên shop


        // thông tin shop
        let nameShop = document.querySelector('.info-shop-cart-input');
        nameShop.addEventListener('focus', () => {
            checkUserName[4].style.display = 'none';
        })
        nameShop.addEventListener('blur', () => {
            let value = nameShop.value;
            if (value === '') {

                checkUserName[4].style.display = 'block';
            }
            else {
                checkUserName[4].style.display = 'none';
            }
        })

        // thông tin ghi chú
        let noteUser = document.querySelector('.info-textarea-cart-input');
        noteUser.addEventListener('focus', () => {
            checkUserName[5].style.display = 'none';
        })
        noteUser.addEventListener('blur', () => {
            let value = noteUser.value;
            if (value === '') {

                checkUserName[5].style.display = 'block';
            }
            else {
                checkUserName[5].style.display = 'none';
            }
        })


    }





}

export { cart }