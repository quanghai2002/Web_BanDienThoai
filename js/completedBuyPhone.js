function completedBuyPhone() {

    // render thông tin mua hàng ra trang thanh toán => thông tin mua hàng lấy từ localsorage completedPhone
    let dataBuyPhone = JSON.parse(localStorage.getItem('completedBuyPhone'));

    if (dataBuyPhone) {

        let codeOrder = document.querySelector('.completed-buy-phone-order-info-id strong');
        if (codeOrder) {
            let order = `${Math.floor(Math.random() * 600000)}ANHQI`;
            codeOrder.innerText = order;
        }

        let nameClient = document.querySelector('.completed-buy-phone-order-info-nameUser strong');
        if (nameClient) {
            nameClient.innerText = dataBuyPhone.nameUser;
        }

        let telephoneClient = document.querySelector('.completed-buy-phone-order-info-telephone strong');
        if (telephoneClient) {
            telephoneClient.innerText = dataBuyPhone.telephoneUser;
        }

        let emailClient = document.querySelector('.completed-buy-phone-order-info-email strong');
        if (emailClient) {
            emailClient.innerText = dataBuyPhone.emailUser;
        }

        let addressClient = document.querySelector('.completed-buy-phone-order-info-addressShop strong');
        if (addressClient) {
            addressClient.innerText = `${dataBuyPhone.shop} - ${dataBuyPhone.addressUser} `;
        }

        let numberBuyPhone = document.querySelector('.completed-buy-phone-order-info-countPhone strong');
        if (numberBuyPhone) {
            numberBuyPhone.innerText = dataBuyPhone.dataPhoneNumber;
        }

        let sumpriceBuyPhone = document.querySelector('.completed-buy-phone-order-info-sumPrice strong');
        if (sumpriceBuyPhone) {
            sumpriceBuyPhone.innerText = dataBuyPhone.dataPhonePrice;
        }

        let dateBuyPhone = document.querySelector('.completed-buy-phone-order-info-date strong');
        if (dateBuyPhone) {
            let d = new Date();

            dateBuyPhone.innerText = `${d.getHours()}:${d.getMinutes()} - ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
        }

        let imgBuyPhone = document.querySelector('.completed-buy-phone-order-item-img img');
        if (imgBuyPhone) {
            imgBuyPhone.src = dataBuyPhone.dataImgPhone;
        }

        let namePhone = document.querySelector('.completed-buy-phone-order-item-namePhone');
        if (namePhone) {
            namePhone.innerText = dataBuyPhone.dataNamePhone;
        }

        let optionPhone = document.querySelector('.completed-buy-phone-order-item-option strong');
        if (optionPhone) {
            optionPhone.innerText = dataBuyPhone.dataOptionPhone;
        }


        let pricePhone2 = document.querySelector('.completed-buy-phone-order-item-option-2');
        if (pricePhone2) {
            pricePhone2.innerText = dataBuyPhone.dataPhonePrice;
        }


        // handle change khi click thanh toán khi nhận hàng => lấy các thông tin mới cập nhật lên localstorage
        let thanhtoanKhinhanhang = document.querySelector('.completed-buy-phone-order-pay-type-item-1');
        if (thanhtoanKhinhanhang) {
            thanhtoanKhinhanhang.addEventListener('click', () => {
                let dataPhoneOld = JSON.parse(localStorage.getItem('completedBuyPhone'));
                let valueCodeOrder = codeOrder.innerText;
                let valueDate = dateBuyPhone.innerText;
                let methodPay = document.querySelector('.completed-buy-phone-order-pay-type-item-1 h3').innerText;
                let newData = {
                    ...dataPhoneOld,
                    dataImgPhone: document.querySelector('.completed-buy-phone-order-item-img img').src,
                    dataNamePhone: document.querySelector('.completed-buy-phone-order-item-namePhone').innerText,
                    codeOrder: valueCodeOrder,
                    dataBuyPhone: valueDate,
                    methodPay

                }



                // update lại dữ liệu khi click thanh toán khi nhận hàng
                localStorage.setItem('completedBuyPhone', JSON.stringify(newData));

                // chuyển đến trang thanh toán khi nhận hàng
                window.location.href = "./thanhtoankhinhanhang.html";
            })
        }


        // handle change khi click thanh toán MOMO => lấy các thông tin mới cập nhật lên localstorage
        let thanhtoanMomo = document.querySelector('.completed-buy-phone-order-pay-type-item-2');
        if (thanhtoanMomo) {
            thanhtoanMomo.addEventListener('click', () => {
                let dataPhoneOld = JSON.parse(localStorage.getItem('completedBuyPhone'));
                let valueCodeOrder = codeOrder.innerText;
                let valueDate = dateBuyPhone.innerText;
                let methodPay = document.querySelector('.completed-buy-phone-order-pay-type-item-2 h3').innerText;
                let newData = {
                    ...dataPhoneOld,
                    codeOrder: valueCodeOrder,
                    dataBuyPhone: valueDate,
                    methodPay

                }

                // update lại dữ liệu khi click thanh toán MOMO
                localStorage.setItem('completedBuyPhone', JSON.stringify(newData));

                // chuyển đến trang thanh toán MoMo
                window.location.href = "./thanhtoanmomo.html";
            })
        }

    }

    // khi click vào btn về trang chủ => về trang chủ => chuyển lại trạng thái check login bằng false
    let btnBack = document.querySelector('.completed-buy-phone-back button');
    if (btnBack) {
        btnBack.addEventListener('click', () => {
            // chuyển checklogin = flase
            let dataOld = JSON.parse(localStorage.getItem('userLogin'));

            let newData = {
                ...dataOld,
                checkLogin: false
            }

            localStorage.setItem('userLogin', JSON.stringify(newData));

            // về trang chủ => xóa removeItem completedBuyPhone trên localStorage
            localStorage.removeItem('completedBuyPhone');
            window.location.href = "./index.html";
        })
    }



    // nếu không ở trang buyPhone.html || completedBuyPhone.html  || thanhtoankhinhanhang.html || thanhtoanmomo.html
    // thì xóa completed buyPhone


    if ((window.location.href.includes('buyPhone.html') === false) && (window.location.href.includes('completedBuyPhone.html') === false) && (window.location.href.includes('thanhtoankhinhanhang.html') === false) && (window.location.href.includes('thanhtoanmomo.html') === false)) {
        localStorage.removeItem('completedBuyPhone');
    }
}


export { completedBuyPhone };