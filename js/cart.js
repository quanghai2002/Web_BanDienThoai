function cart() {

    // mặc định gán giỏ hàng bằng 0 => điều kiện check bằng 0
    // localStorage.setItem('checkCart', JSON.stringify({
    //     check: false,
    //     value: 0
    // })
    // )

    // nếu click vào giỏ hàng => check xem điều kiện check Cart === false => thì link đến giỏ hàng trống 
    let checkCart = JSON.parse(localStorage.getItem('checkCart'));

    // nút click vào giỏ hàng
    let btnCart = document.querySelector('.header-cart');



    if (btnCart) {
        // nếu check cart = flase => chuyển đến => trang giỏ hàng trống
        btnCart.addEventListener('click', () => {

            if (checkCart.check === false) {
                window.location.href = './cartNull.html';
            }
        })

    }



    // khi click vào giỏ hàng hiện modal mini => xem giỏ hàng thành công
    let btnAddCart = document.querySelector('.buy-phone-product-action-add-cart');

    let popUpCart = document.querySelector('.modal-popop-add-cart');
    let cart = JSON.parse(localStorage.getItem('checkCart'));

    let value = 0;
    if (btnAddCart) {
        btnAddCart.addEventListener('click', () => {
            if (popUpCart) {
                popUpCart.style.display = 'block';

                setTimeout(() => {
                    popUpCart.style.display = 'none';
                }, 10000)
            }

            // khi click vào btn Add cart => số lượng tăng lên 1; => lấy thông tin sản phẩm => và check lại checkCart = true

            // lấy thông tin về sản phẩm render ra màn hình thêm giỏ hàng
            let dataNamePhone = document.querySelector('.buy-phone-name').innerText;
            let dataImgPhone = document.querySelector('.buy-phone-product-img img').src;
            let dataOptionPhone = document.querySelector('.buy-phone-product-option-phone-GB').innerText;
            let dataPhonePrice = document.querySelector('.buy-phone-product-info-price-new').innerText;


            let newDataCart = {
                ...cart,
                check: true,
                value: ++value,
                dataNamePhone,
                dataImgPhone,
                dataOptionPhone,
                dataPhonePrice

            }
            localStorage.setItem('checkCart', JSON.stringify(newDataCart));


            // khi click vào xem giỏ hàng và thanh toán ngay => chuyển đến trang giỏ hàng có sản phẩm => render ra trang đó
            let xemgiohang = document.querySelector('.modal-popop-add-cart button');
            if (xemgiohang) {
                xemgiohang.addEventListener('click', () => {
                    window.location.href = "./cartValue.html";
                })
            }



        })
    }
    // render ra trang giỏ hàng có sản phẩm => khi click vào thanh xem giỏ hàng và thanh toán ngay
    let cartUpdate = JSON.parse(localStorage.getItem('checkCart'));


    let imgPhone = document.querySelector('.header-cart-value-img img');
    if (imgPhone) {
        imgPhone.src = cartUpdate.dataImgPhone;
    }

    let namePhone = document.querySelector('.header-cart-value-name');
    if (namePhone) {
        namePhone.innerText = cartUpdate.dataNamePhone;
    }

    let optionPhone = document.querySelector('.header-cart-value-option strong');
    if (optionPhone) {
        optionPhone.innerText = cartUpdate.dataOptionPhone;
    }
    let pricePhone = document.querySelector('.header-cart-value-price strong');
    if (pricePhone) {
        pricePhone.innerText = cartUpdate.dataPhonePrice;
    }


    // sau đó update lại trên local storage pricePhoneBuy => để chuyển đến trang mua sản phẩm



    // khi click mua ngay trong giỏ hàng => chuyển đến trang 
    let dathangngay = document.querySelector('.header-cart-value-buy');
    console.log(dathangngay);




    let btnDatHang = document.querySelector('.buy-phone-btn');

    if (btnDatHang) {
        btnDatHang.addEventListener('click', () => {
            // thông tin userName nhập


            let userNameInput = document.querySelector('.info-name-input');
            let valueUserNameInput = userNameInput.value;

            // thông tin số điện thoại user nhập vào => check nhập đúng số điện thoại VN
            let telePhoneUser = document.querySelector('.info-number-phone-input');
            let telePhoneValue = telePhoneUser.value;
            let checkPhoneVN = (/^(0|\+84)\d{9,9}$/).test(telePhoneValue); //regex check kiểm tra đúng là số điện thoại VN hay không

            // thông tin => và check nhập đúng email
            let emailInput = document.querySelector('.info-number-phone-mail-input');
            let checkEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(emailInput.value);

            // thông tin address user chọn => check phải chọn địa chỉ
            let addressUser = document.querySelector('.info-address-select').value;

            // thông tin tên shop
            let nameShop = document.querySelector('.info-address-shop').value;

            // thông tin ghi chú
            let noteUser = document.querySelector('#textarea').value;



            // thồn báo check validate hiện ra nếu 1 trong các trường chưa nhập dữ liệu 
            let checkUserName = document.querySelectorAll('.input-checkVaildate');


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


            // nếu tất cả các trường input đều đã nhập dữ liệu => gửi dữ liệu đi
            if (!(valueUserNameInput === '') && checkPhoneVN === true && checkEmail === true && !(addressUser === '') && !(nameShop === '') && !(noteUser === '')) {
                console.log('dữ liệu nhập đủ');
                let pricePhoneCurrent = document.querySelector('.header-cart-value-price strong').innerText;
                let numberBuyPhone = 1;
                let dataOptionPhone = document.querySelector('.header-cart-value-option strong').innerText;
                let imgPhone = document.querySelector('.header-cart-value-img img').src;
                let dataNamePhone = document.querySelector('.header-cart-value-name').innerText;

                let dataOld = JSON.parse(localStorage.getItem('completedBuyPhone'));


                let newData = {
                    ...dataOld,
                    dataPhonePrice: pricePhoneCurrent,
                    dataPhoneNumber: numberBuyPhone,
                    dataOptionPhone,
                    dataImgPhone: imgPhone,
                    dataNamePhone,
                    nameUser: valueUserNameInput,
                    telephoneUser: telePhoneValue,
                    emailUser: emailInput.value,
                    addressUser: addressUser,
                    shop: nameShop,
                    noteUser: noteUser

                }
                saveData(newData);
                console.log(newData);
                // sau khi lưu dữ liệu và thông tin nhập đã đủ hết => chuyển sang trang completed buy phone
                window.location.href = "./completedBuyPhone.html";

            }
            else {
                console.log('dữ liệu nhập thiếu')
                // dữ liệu nhập thiếu ko có hành động gì

            }
        })

        // khi oninput // focus input => ẩn thông báo cảnh báo đi
        let checkUserName = document.querySelectorAll('.input-checkVaildate');
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
        let userNameInput = document.querySelector('.info-name-input');
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
        let telePhoneUser = document.querySelector('.info-number-phone-input');
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

        // thông tin số điện thoại user nhập vào => check nhập đúng số điện thoại VN
        let emailInput = document.querySelector('.info-number-phone-mail-input');
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
        let addressUser = document.querySelector('.info-address-select');
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
        let nameShop = document.querySelector('.info-address-shop');
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
        let noteUser = document.querySelector('#textarea');
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
    // xử lý lưu thông tin => lên localstorage => để hoàn thành thanh toán 
    function saveData(data) {
        localStorage.setItem('completedBuyPhone', JSON.stringify(data))
    }
}




export { cart };