export default function thanhtoan() {


    // thanh toán khi nhân hàng

    // lấy dữ liệu về
    let data = JSON.parse(localStorage.getItem('completedBuyPhone'));
    console.log(data);

    if (data) {
        let codeOrder = document.querySelector('.header-text strong');
        if (codeOrder) {
            codeOrder.innerText = data.codeOrder;
        }

        let check = document.querySelector('.name strong')


        if (check) {
            let name = document.querySelectorAll('.name strong');
            name[0].innerText = data.nameUser;
            name[1].innerText = data.methodPay;
            name[2].innerText = `${data.shop} - ${data.addressUser}`;
            name[3].innerText = data.telephoneUser;
            name[4].innerText = data.emailUser;
            name[5].innerText = data.noteUser;
            name[6].innerText = data.dataBuyPhone;
        }

        let checkPhone = document.querySelector('.infomation-phone-item-text strong');
        if (checkPhone) {
            let phone = document.querySelectorAll('.infomation-phone-item-text strong');
            phone[0].innerText = data.dataNamePhone;
            phone[1].innerText = data.dataOptionPhone;
            phone[2].innerText = data.dataPhoneNumber;
            phone[3].innerText = data.dataPhonePrice;
        }

        let checkPrice = document.querySelector('.infomation-price-completed-item-text p');
        if (checkPrice) {
            let price = document.querySelectorAll('.infomation-price-completed-item-text p');
            price[0].innerText = data.dataPhonePrice;
            price[2].innerText = data.dataPhonePrice;

        }

    }

}