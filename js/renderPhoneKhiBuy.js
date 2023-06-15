

export default function renderPhoneKhiBuy() {
    setTimeout(() => {

        // lấy thông tin phone người dùng click
        let infoPhoneClick = JSON.parse(localStorage.getItem('infoBuyPhone'));
        if (infoPhoneClick) {


            // danh sách các phone trên hệ thống
            let optionsGB = JSON.parse(localStorage.getItem('phone'));

            // tìm kiếm đúng phone trên hệ thống => theo tên phone người dùng click

            let dataPhoneRender = optionsGB.find((phone) => {

                return phone.namePhone.toUpperCase().trim() === infoPhoneClick.namePhone.toUpperCase().trim();

            })

            if (dataPhoneRender) {


                // thông tin phone mà người dùng click vào 
                let imgPhone = dataPhoneRender.imgPhone;

                let namePhone = dataPhoneRender.namePhone;
                let pricePhone = dataPhoneRender.priceOld;
                let optionPhone = dataPhoneRender.optionPhone;

                let wrapOptionGB = document.querySelector('.buy-phone-product-option-phone');




                // thêm các thông tin phone mà người dùng click ra màn hình mua
                let titlePhone = document.querySelector('.buy-phone-name');
                if (titlePhone) {
                    titlePhone.innerText = namePhone;
                }

                let wrapImgPhone = document.querySelector('.buy-phone-product-img img');
                if (wrapImgPhone) {
                    wrapImgPhone.src = imgPhone;
                }

                let pricePhoneNew = document.querySelector('.buy-phone-product-info-price-new');
                if (pricePhoneNew) {
                    pricePhoneNew.innerText = pricePhone;

                }

                // render các option GB của phone => ra màn hình

                let html = optionPhone.map((option, index) => {
                    return `
             <li class="buy-phone-product-option-phone-list"  setActive = ${index}>

           <span class= "buy-phone-product-option-phone-GB" >
                     ${option.nameOption} 
                 <i class="fa-solid fa-check buy-phone-product-option-phone-icon-check"></i>
           </span >

            <span class="buy-phone-product-option-phone-price">
                ${option.priceOption}
            </span>

                  </li >
            `
                })


                if (wrapOptionGB) {
                    wrapOptionGB.innerHTML = html.join('');
                    let liOption = document.querySelectorAll('.buy-phone-product-option-phone-list');

                    // nếu check có thông tin Option active trước thì lưu lại như cũ => nếu không thì active mặc định là cái đầu tiên;
                    let checkOptionActive = localStorage.getItem('pricePhoneBuy');
                    if (checkOptionActive) {
                        let active = JSON.parse(localStorage.getItem('pricePhoneBuy')).locationActive;
                        let pricePhoneLocation = JSON.parse(localStorage.getItem('pricePhoneBuy')).price;

                        if (active >= liOption.length) {
                            liOption[0].classList.add('buy-phone-product-option-phone-list-active');
                            pricePhoneNew.innerText = pricePhone;
                            // và cập nhật lại giá sản phẩm

                        } else {

                            liOption[active].classList.add('buy-phone-product-option-phone-list-active');
                            pricePhoneNew.innerText = pricePhoneLocation;
                        }
                    }
                    else {
                        liOption[0].classList.add('buy-phone-product-option-phone-list-active');
                        pricePhoneNew.innerText = pricePhone;

                        // mặc đinh nếu ko có pricePhoneBuy trước đó trên locastorage thì set vị trí mặc định + giá ban đầu
                        localStorage.setItem('pricePhoneBuy', JSON.stringify({
                            locationActive: 0,
                            optionGB: optionPhone[0].nameOption,
                            namePhone: namePhone,
                            imgPhone: imgPhone,
                            price: pricePhone,
                        }));

                    }


                    // khi click đổi active và load lại giá bán
                    Array.from(liOption).forEach((phoneOption, index) => {
                        phoneOption.addEventListener('click', (e) => {

                            // khi click tìm thằng active trước đó và xóa đi.
                            let optionActive = document.querySelector('.buy-phone-product-option-phone-list-active');
                            optionActive.classList.remove('buy-phone-product-option-phone-list-active');

                            // sau khi xóa thêm active vào phone click hiện tại
                            phoneOption.classList.add('buy-phone-product-option-phone-list-active');

                            // lấy ra giá mới của option và load lại giá ban đầu trên tiêu đề giá bán
                            let priceOption = phoneOption.querySelector('.buy-phone-product-option-phone-price').innerText;

                            //lấy ra option mới được chọn
                            let optionPhoneNew = phoneOption.querySelector('.buy-phone-product-option-phone-GB').innerText;


                            pricePhoneNew.innerText = priceOption;


                            //  khi click vào các option active => sau đó lưu thông tin giá khi đã chọn option lên localstorage 

                            let pricePhoneClick = pricePhoneNew.innerText;

                            localStorage.setItem('pricePhoneBuy', JSON.stringify({
                                price: pricePhoneClick,
                                locationActive: index,
                                optionGB: optionPhoneNew,
                                namePhone: namePhone,
                                imgPhone: imgPhone

                            }));



                        })
                    })
                }
            }
        }



        // nếu không KHÔNG ở trang hiện tại => xóa key pricePhoneBuy trên locasorage đi

        // setInterval(() => {




        // nếu không ở trang hiện tại => xóa key pricePhoneBuy

        if (window.location.href.includes('buyPhone.html') === false) {

            // không phải ở trang hiện tại

            localStorage.removeItem('pricePhoneBuy');


        }

        // }, 300)
    }, 100)

}