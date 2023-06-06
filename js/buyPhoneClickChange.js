export default function buyPhoneClickChange() {

    // khi click mua ngay điện thoại => hiện thị modal để thanh toán sản phẩm

    let btnBuyPhoneNow = document.querySelector('.buy-phone-product-action-buy');

    let modalBuyPhone = document.querySelector('.buy-phone-click-overlay');


    if (btnBuyPhoneNow && modalBuyPhone) {
        btnBuyPhoneNow.addEventListener('click', () => {
            modalBuyPhone.style.display = 'flex';

            //mỗi khi click vào mua ngay => render các thông tin user đã chọn => ra màn hình modal

            // mỗi khi click sẽ load lại thông tin trên localstorage =>lấy thông tin pricePhoneBuy => render ra màn hình
            let dataPhoneClick = JSON.parse(localStorage.getItem('pricePhoneBuy'));
            if (dataPhoneClick) {
                let imgPhone = dataPhoneClick.imgPhone;
                let namePhone = dataPhoneClick.namePhone;
                let pricePhone = dataPhoneClick.price;
                let optionPhone = dataPhoneClick.optionGB;


                // render các thông tin user chọn => ra màn hình modal
                let imgPhoneOld = document.querySelector('.buy-phone-click-img');
                if (imgPhoneOld) {
                    imgPhoneOld.src = imgPhone;
                }

                let namePhoneOld = document.querySelector('.buy-phone-click-img-info-title');
                if (namePhoneOld) {
                    namePhoneOld.innerText = namePhone;
                }


                let optionPhoneOld = document.querySelector('.buy-phone-click-img-info-option-text2');
                if (optionPhoneOld) {

                    optionPhoneOld.innerText = optionPhone;
                }

                let pricePhoneOld = document.querySelector('.buy-phone-click-img-info-price');
                if (pricePhoneOld) {
                    pricePhoneOld.innerText = pricePhone;
                }

            }
        })

        // handleChange khi click vào tăng số lượng or giảm thì giá sẽ thay đổi 
        let btnGiam = document.querySelector('.btn-left');
        let btnTang = document.querySelector('.btn-right');

        let input = document.querySelector('.buy-phone-click-wrap-info-price-number-option-input');
        let valueInput = Number.parseInt(input.value);

        if (btnTang) {
            btnTang.addEventListener('click', () => {
                valueInput++;
                input.value = valueInput;

                // render lại giá của phone khi chọn số lượng



                // lấy giá điện thoại mặc đinh của 1 chiếc
                let dataPhoneClick = JSON.parse(localStorage.getItem('pricePhoneBuy'));
                let pricePhoneData = dataPhoneClick.price;

                // xử lý loại bỏ từ đ cuối cùng và tách ra [] từ các dâu , => sau đó gộp thành 1 chuỗi mới;
                let priceOld = pricePhoneData.trim().slice(0, pricePhoneData.length - 1).split(',');
                let priceNew = '';
                priceOld.forEach((price) => {
                    priceNew += price;
                })

                let pricePhoneNumber = Number.parseFloat(priceNew);
                let pricePhoneNumberNew = (pricePhoneNumber * valueInput).toString();

                let pricePhoneLength = pricePhoneNumberNew.length;
                // nếu độ dài price sau khi tính = 8,.... chữ số => chục chiệu thì tách 00,000,000 đ
                let price0 = pricePhoneNumberNew[0];
                let price1 = pricePhoneNumberNew[1];
                let price2 = pricePhoneNumberNew[2];
                let price3 = pricePhoneNumberNew[3];
                let price4 = pricePhoneNumberNew[4];
                let price5 = pricePhoneNumberNew[5];
                let price6 = pricePhoneNumberNew[6];
                let price7 = pricePhoneNumberNew[7];
                let price8 = pricePhoneNumberNew[8];
                let price9 = pricePhoneNumberNew[9];
                let price10 = pricePhoneNumberNew[10];
                let price11 = pricePhoneNumberNew[11];
                let price12 = pricePhoneNumberNew[12];
                let price13 = pricePhoneNumberNew[13];


                let pricePhone = document.querySelector('.buy-phone-click-img-info-price');
                if (pricePhoneLength === 5) {
                    pricePhone.innerText = (`${price0}${price1},${price2}${price3}${price4}đ`);
                }
                if (pricePhoneLength === 6) {
                    pricePhone.innerText = (`${price0}${price1}${price2},${price3}${price4}${price5}đ`);
                }
                if (pricePhoneLength === 7) {
                    pricePhone.innerText = (`${price0},${price1}${price2}${price3},${price4}${price5}${price6} đ`);
                }
                if (pricePhoneLength === 8) {
                    pricePhone.innerText = (`${price0}${price1},${price2}${price3}${price4},${price5}${price6}${price7} đ`);
                }
                if (pricePhoneLength === 9) {
                    pricePhone.innerText = (`${price0}${price1}${price2},${price3}${price4}${price5},${price6}${price7}${price8} đ`);
                }
                if (pricePhoneLength === 10) {
                    pricePhone.innerText = (`${price0},${price1}${price2}${price3},${price4}${price5}${price6},${price7}${price8}${price9} đ`);
                }
                if (pricePhoneLength === 11) {
                    pricePhone.innerText = (`${price0}${price1},${price2}${price3}${price4},${price5}${price6}${price7},${price8}${price9}${price10} đ`);
                }
                if (pricePhoneLength === 12) {
                    pricePhone.innerText = (`${price0}${price1}${price2},${price3}${price4}${price5},${price6}${price7}${price8},${price9}${price10}${price11}  đ`);
                }
                if (pricePhoneLength === 13) {
                    pricePhone.innerText = (`${price0},${price1}${price2}${price3},${price4}${price5}${price6},${price7}${price8}${price9},${price10}${price11}${price12} đ`);
                }

                // xử lý để lưu giá hiện tại của sản phẩm sau khi đã chỉnh sửa và số lượng sản phẩm đặt hàng
                let dataPhonePrice = document.querySelector('.buy-phone-click-img-info-price').innerText.trim();
                let dataPhoneNumber = document.querySelector('.buy-phone-click-wrap-info-price-number-option-input').value.trim();
                let dataImgPhone = document.querySelector('.buy-phone-click-img').src;
                let dataNamePhone = document.querySelector('.buy-phone-click-img-info-title').innerText.trim();
                let dataOptionPhone = document.querySelector('.buy-phone-click-img-info-option-text2').innerText.trim();

                if (dataPhonePrice && dataPhoneNumber && dataImgPhone && dataNamePhone && dataOptionPhone) {

                    let data = {
                        dataPhonePrice,
                        dataPhoneNumber,
                        dataImgPhone,
                        dataNamePhone,
                        dataOptionPhone
                    }
                    saveData(data)
                }



            })


        }



        if (btnGiam) {
            btnGiam.addEventListener('click', () => {
                // nếu giảm mà < 1 => gán mặc định =1
                valueInput--;
                if (valueInput < 1) {
                    valueInput = 1;
                }
                input.value = valueInput;

                // lấy giá của chiếc điệnt thoại hiện tại



                // lấy giá điện thoại mặc đinh của 1 chiếc
                let dataPhoneClick = JSON.parse(localStorage.getItem('pricePhoneBuy'));
                let pricePhoneDataOld = dataPhoneClick.price;


                // xử lý giá điện thoại gốc bỏ chữ đ ở cuôi, tách thành 1 số
                let price1 = pricePhoneDataOld.trim().slice(0, pricePhoneDataOld.length - 1).split(',');
                let price2 = '';
                price1.forEach((price) => {
                    price2 += price;
                })

                let pricePhoneDaSua = Number.parseFloat(price2);

                // Đây là giá hiện tại của phone => xử lý loại bỏ từ đ cuối cùng và tách ra [] từ các dâu , => sau đó gộp thành 1 chuỗi mới;
                let pricePhoneData = document.querySelector('.buy-phone-click-img-info-price').innerText.trim();
                let priceOld = pricePhoneData.trim().slice(0, pricePhoneData.length - 1).split(',');
                let priceNew = '';
                priceOld.forEach((price) => {
                    priceNew += price;
                })


                // khi click giảm 1 lần => giá bằng giá điện thoại hiện tại - giá điện thoại gốc
                let pricePhoneNumber = Number.parseFloat(priceNew);

                // (pricePhoneDaSua) // giá mặc định của 1 chiếc điện thoại
                // (pricePhoneNumber) // giá điện thoại hiện tại sau khi đã tăng số lượng

                let pricePhoneNumberNew = (pricePhoneNumber - pricePhoneDaSua).toString().trim();


                let pricePhoneLength = pricePhoneNumberNew.length;

                // nếu độ dài price sau khi tính = 8,.... chữ số => chục chiệu thì tách 00,000,000 đ
                let price0 = pricePhoneNumberNew[0];
                let price01 = pricePhoneNumberNew[1];
                let price02 = pricePhoneNumberNew[2];
                let price03 = pricePhoneNumberNew[3];
                let price04 = pricePhoneNumberNew[4];
                let price05 = pricePhoneNumberNew[5];
                let price06 = pricePhoneNumberNew[6];
                let price07 = pricePhoneNumberNew[7];
                let price08 = pricePhoneNumberNew[8];
                let price09 = pricePhoneNumberNew[9];
                let price10 = pricePhoneNumberNew[10];
                let price11 = pricePhoneNumberNew[11];
                let price12 = pricePhoneNumberNew[12];
                let price13 = pricePhoneNumberNew[13];

                let pricePhone = document.querySelector('.buy-phone-click-img-info-price');

                // nếu price phone.length === 1 => giá bằng 0 => không xử lý hiển thị ra màn hình
                if (pricePhoneLength === 5) {
                    pricePhone.innerText = (`${price0}${price01},${price02}${price03}${price04} đ`);
                }
                if (pricePhoneLength === 6) {
                    pricePhone.innerText = (`${price0}${price01}${price02},${price03}${price04}${price05} đ`);
                }
                if (pricePhoneLength === 7) {
                    pricePhone.innerText = (`${price0},${price01}${price02}${price03},${price04}${price05}${price06} đ`);
                }
                if (pricePhoneLength === 8) {
                    pricePhone.innerText = (`${price0}${price01},${price02}${price03}${price04},${price05}${price06}${price07} đ`);
                }
                if (pricePhoneLength === 9) {
                    pricePhone.innerText = (`${price0}${price01}${price02},${price03}${price04}${price05},${price06}${price07}${price08} đ`);
                }
                if (pricePhoneLength === 10) {
                    pricePhone.innerText = (`${price0},${price01}${price02}${price03},${price04}${price05}${price06},${price07}${price08}${price09} đ`);
                }
                if (pricePhoneLength === 11) {
                    pricePhone.innerText = (`${price0}${price01},${price02}${price03}${price04},${price05}${price06}${price07},${price08}${price09}${price10} đ`);
                }
                if (pricePhoneLength === 12) {
                    pricePhone.innerText = (`${price0}${price01}${price02},${price03}${price04}${price05},${price06}${price07}${price08},${price09}${price10}${price11}  đ`);
                }
                if (pricePhoneLength === 13) {
                    pricePhone.innerText = (`${price0},${price01}${price02}${price03},${price04}${price05}${price06},${price07}${price08}${price09},${price10}${price11}${price12} đ`);
                }

                // xử lý để lưu giá hiện tại của sản phẩm sau khi đã chỉnh sửa và số lượng sản phẩm đặt hàng
                let dataPhonePrice = document.querySelector('.buy-phone-click-img-info-price').innerText.trim();
                let dataPhoneNumber = document.querySelector('.buy-phone-click-wrap-info-price-number-option-input').value.trim();
                let dataImgPhone = document.querySelector('.buy-phone-click-img').src;
                let dataNamePhone = document.querySelector('.buy-phone-click-img-info-title').innerText.trim();
                let dataOptionPhone = document.querySelector('.buy-phone-click-img-info-option-text2').innerText.trim();

                if (dataPhonePrice && dataPhoneNumber && dataImgPhone && dataNamePhone && dataOptionPhone) {

                    let data = {
                        dataPhonePrice,
                        dataPhoneNumber,
                        dataImgPhone,
                        dataNamePhone,
                        dataOptionPhone
                    }
                    saveData(data)
                }


            })
        }


    }

    // khi clik vào nút x trong modal => thoát khỏi modal
    let btnCloseModal = document.querySelector('.btn-out-page-buy-phone');
    if (btnCloseModal) {
        btnCloseModal.addEventListener('click', () => {
            modalBuyPhone.style.display = 'none';
        })


    }



    // let data = { };
    // xử lý lưu thông tin => lên localstorage => để hoàn thành thanh toán 
    function saveData(data) {
        localStorage.setItem('completedBuyPhone', JSON.stringify(data))
    }
}