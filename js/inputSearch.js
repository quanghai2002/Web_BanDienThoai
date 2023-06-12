function inputSearch() {


    setTimeout(() => {
        let inputHeader = document.querySelector('.heading-content-search-input');
        let popupSeach = document.querySelector('.input-search-phone');

        let ulSearch = document.querySelector('.input-search-phone-item');

        let btnSearch = document.querySelector('.heading-content-search-wrap-icon');
        let dataPhone = JSON.parse(localStorage.getItem('phone'));
        if (inputHeader) {

            let body = document.querySelector('body');


            if (popupSeach) {

                inputHeader.oninput = (e) => {
                    popupSeach.style.display = 'block';
                    body.style.overflowY = 'hidden';
                    document.querySelector('.overlay').style.display = 'block';
                    // filter dữ liệu từ người dùng nhập vào với database 
                    let valueInputUser = e.target.value.toUpperCase();

                    let filterPhone = dataPhone.filter((data) => {
                        return data.namePhone.toUpperCase().includes(valueInputUser);
                    })



                    // render sản phẩm phù hợp với người dùng ra màn hình
                    let html = filterPhone.map((phone) => {
                        return `
                             
                               <li class="input-search-phone-list">
                                  <div class="input-search-phone-img">
                                    <img src=${phone.imgPhone} alt="anh" />
                                  </div>
                                  <div class="input-search-phone-info">
                                    <p class="name">${phone.namePhone}</p>
                                    <strong class="price">${phone.priceOld} </strong>
                                    </div>
                                </li>
                             `
                    })


                    if (ulSearch) {

                        ulSearch.innerHTML = html.join('');


                    }
                    // inner HTML vào dom

                    // handle change khi clik vào các sản phẩm hiện ra khi tìm kiếm => sẽ đến trang thanh toán của nó


                    function changePhone() {


                        let phonesClickes = document.querySelectorAll('.input-search-phone-item .input-search-phone-list');

                        // muốn chuyển đến trang thanh toán => cần cập nhật lại dữ liệu => infoBuyphone + PricePhoneBuy
                        Array.from(phonesClickes).forEach((phoneClick) => {

                            phoneClick.addEventListener('click', function (e) {


                                // check xem đã đăng nhập chưa => nếu đăng nhập mới cho mua hàng

                                let checkLogin = JSON.parse(localStorage.getItem('userLogin'));

                                if (checkLogin) { // nếu như có userLogin => check trạng thái xem đang đăng nhập || đăng xuất

                                    if (checkLogin.checkLogin === true) { // đã đăng nhập thành công => mới cho chọn sản phẩm => để mua hàng
                                        let imgPhone = this.querySelector('.input-search-phone-img img').src;
                                        let namePhone = this.querySelector('.input-search-phone-info .name').innerText;
                                        let price = this.querySelector('.input-search-phone-info .price').innerText;

                                        if (imgPhone && namePhone && price) {

                                            // dữ liệu price buyphone
                                            let data = {
                                                imgPhone,
                                                locationActive: 0,
                                                namePhone,
                                                optionGB: "64G",
                                                price

                                            }
                                            // dữ liệu info buyPhone
                                            let data2 = {
                                                imgPhone,
                                                namePhone,
                                                pricePhone: price
                                            }

                                            localStorage.setItem('infoBuyPhone', JSON.stringify(data2));
                                            localStorage.setItem('pricePhoneBuy', JSON.stringify(data));
                                            window.location.href = "./buyPhone.html";
                                        }

                                    }
                                    // trạng thái đăng xuất => bắt đăng nhập nhập lại
                                    else {
                                        if (confirm('Bạn vui lòng đăng nhập để mua sản phẩm nhé!')) {
                                            window.location.href = "./login.html";
                                        }
                                    }

                                }

                                // nếu localstorage không có userLogin => ko cho mua => bắt vào trang đăng nhập
                                else {
                                    if (confirm('Bạn vui lòng đăng nhập để mua sản phẩm nhé!')) {
                                        window.location.href = "./login.html";
                                    }
                                }


                            })


                        })
                    }
                    changePhone()
                }
            }




            // nếu như name input mà quá dài thêm ...
            let namePhoneInput = document.querySelector('.input-search-phone-info .name');
            if (namePhoneInput) {
                let lengNamePhone = namePhoneInput.innerText.length;

                if (lengNamePhone >= 147) {
                    namePhoneInput.innerText = `${namePhoneInput.innerText.slice(0, 147)}...`
                }

            }

            if (popupSeach) {

                popupSeach.addEventListener('click', (e) => {
                    e.stopPropagation();
                    popupSeach.style.display = 'block';
                    document.querySelector('.overlay').style.display = 'block';
                    body.style.overflowY = 'hidden';
                })


                // }
                // click vào bên ngoài đóng popup => remove overlays
                window.addEventListener('click', (e) => {
                    popupSeach.style.display = 'none';
                    document.querySelector('.overlay').style.display = 'none';
                    body.style.overflowY = 'auto';
                })


                // click nút tìm kiếm ko đóng popup
                btnSearch.addEventListener('click', (e) => {
                    e.stopPropagation();
                    popupSeach.style.display = 'block';
                    document.querySelector('.overlay').style.display = 'block';
                    body.style.overflowY = 'hidden';

                    // click nút tìm kiếm => chọn sản phẩm => chuyển đến trang thanh toán
                    setTimeout(() => {






                        let phonesClickes = document.querySelectorAll('.input-search-phone-item .input-search-phone-list');

                        // muốn chuyển đến trang thanh toán => cần cập nhật lại dữ liệu => infoBuyphone + PricePhoneBuy
                        Array.from(phonesClickes).forEach((phoneClick) => {

                            phoneClick.addEventListener('click', function (e) {


                                // check xem đã đăng nhập chưa => nếu đăng nhập mới cho mua hàng

                                let checkLogin = JSON.parse(localStorage.getItem('userLogin'));

                                if (checkLogin) {// nếu như có userLogin => check trạng thái xem đang đăng nhập || đăng xuất

                                    if (checkLogin.checkLogin === true) {// đã đăng nhập thành công => mới cho chọn sản phẩm => để mua hàng

                                        let imgPhone = this.querySelector('.input-search-phone-img img').src;
                                        let namePhone = this.querySelector('.input-search-phone-info .name').innerText;
                                        let price = this.querySelector('.input-search-phone-info .price').innerText;
                                        console.log(1)
                                        if (imgPhone && namePhone && price) {

                                            // dữ liệu price buyphone
                                            let data = {
                                                imgPhone,
                                                locationActive: 0,
                                                namePhone,
                                                optionGB: "64G",
                                                price

                                            }
                                            // dữ liệu info buyPhone
                                            let data2 = {
                                                imgPhone,
                                                namePhone,
                                                pricePhone: price
                                            }

                                            localStorage.setItem('infoBuyPhone', JSON.stringify(data2));
                                            localStorage.setItem('pricePhoneBuy', JSON.stringify(data));
                                            window.location.href = "./buyPhone.html";
                                        }

                                    }
                                    else { // checkLogin === false => đã đăng xuất => bắt phải đăng nhập mới cho mua hàng
                                        if (confirm('Bạn vui lòng đăng nhập để mua sản phẩm nhé!')) {
                                            window.location.href = "./login.html";
                                        }
                                    }

                                }

                                // nếu localstorage không có userLogin => ko cho mua => bắt vào trang đăng nhập
                                else {
                                    if (confirm('Bạn vui lòng đăng nhập để mua sản phẩm nhé!')) {
                                        window.location.href = "./login.html";
                                    }
                                }

                            })


                        })
                    }, 100)

                })


                // khi click vào ô search trên ô tìm kiếm => check xem dữ liệu vừa nhập có không => nếu ko có hiển thị ra => ko tìm thấy
                if (btnSearch) {
                    btnSearch.addEventListener('click', () => {

                        let valueInputSearchUser = inputHeader.value;

                        // ko nhập gì khi ấn tìm kiếm => báo phải nhập dữ liệu vào ô tìm kiếm
                        if (valueInputSearchUser === '') {

                            if (popupSeach) {

                                popupSeach.style.display = 'block';
                            }

                            if (ulSearch) {

                                ulSearch.innerHTML = `
                              <div class="not-data">
                                <h2> Vui lòng nhập thông tin tìm kiếm !</h2>
                              </div> 
                            `
                                // và focus vào ô input
                                inputHeader.focus();
                            }
                        }

                        // nếu có thì render dữ liệu nhập => thì in ra màn hình popup
                        else {

                            // lọc dữ liệu từ người dùng nhập vào so với data
                            let newData = dataPhone.filter((phone) => {
                                return phone.namePhone.toUpperCase().includes(valueInputSearchUser.toUpperCase());
                            })


                            // nếu tìm kiếm không thấy hiển thị ra tìm kiếm là không có
                            if (newData.length === 0) { // =0 là ko tìm thấy => render ra màn hình  ko tìm thấy sản phẩm => hiện overlay ra => focus vào ô input => cho nguwowid dùng dễ nhập lại


                                if (popupSeach) {

                                    popupSeach.style.display = 'block';
                                }

                                if (ulSearch) {

                                    ulSearch.innerHTML = `
                                 <div class="not-data">
                                  <h2>KHÔNG TÌM THẤY SẢN PHẨM ! VUI LÒNG NHẬP ĐÚNG SẢN PHẨM :))</h2>
                                 </div> 
                                 `
                                    inputHeader.focus();
                                }
                            }
                            else {

                                // nếu newData.length >0 => tìm thấy sản phẩm => render ra màn hình => tìm kiếm
                                let html = newData.map((item) => {
                                    return `
                                    <li class="input-search-phone-list">
                                  <div class="input-search-phone-img">
                                    <img src=${item.imgPhone} alt="anh" />
                                  </div>
                                  <div class="input-search-phone-info">
                                    <p class="name">${item.namePhone}</p>
                                    <strong class="price">${item.priceNew} </strong>
                                    </div>
                                </li>
                                
                                `
                                })
                                // inenrHTML ra màn hình thôi
                                inputHeader.focus();
                                if (popupSeach) {

                                    popupSeach.style.display = 'block';
                                }
                                if (ulSearch) {

                                    ulSearch.innerHTML = html.join(' ');
                                }

                            }
                        }

                    })
                }


            }




        }
    }, 600)
}

export default inputSearch;