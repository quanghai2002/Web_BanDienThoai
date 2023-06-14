import { renderPhone } from "./renderPhone.js";
export default function changeProduct() {


    // khi ở trang sửa sản phẩm => click vào sửa sản phẩm => chuyển đến trang sửa sản phẩm

    // đầu tiên render dữ liệu từ locasorage ra màn hình trước => để xem thông tin người dùng muốn xóa sp nào

    let ulChangeProduct = document.querySelector('.change-product-item-1');

    let dataPhone = JSON.parse(localStorage.getItem('phone'));

    function rederChangePhone() {

        if (dataPhone) {
            if (ulChangeProduct) {

                let html = dataPhone.map((product, index) => {
                    return `
                           
                       <li class="delete-product-list " data-clear=${index}>
                      <img class="delete-product-list-img" src="${product.imgPhone}"alt="anh" />
                      <p class="delete-product-list-text">${product.namePhone}</p>
                   
                      <span class="material-symbols-outlined change-product-list-icon">edit_square</span>
                    </li>
                          
                          `
                })

                // render ra màn hình

                ulChangeProduct.innerHTML = html.join('');

            }
        }
    }
    rederChangePhone();


    // khi click vào nút chỉnh sửa hiện popup chỉnh sửa lên
    let btnChangeProduct = document.querySelectorAll('.change-product-list-icon');
    if (dataPhone) {

        if (btnChangeProduct) {
            Array.from(btnChangeProduct).forEach((changePhone) => {
                changePhone.addEventListener('click', (e) => {
                    // khi click vào nút sửa hiện popup chỉnh sửa => và lấy dữ liệu từ đó => check lên localstorage
                    // hiển thị popup=> chỉnh sửa
                    let popUpChange = document.querySelector('.wrap-change-product');
                    if (popUpChange) {
                        popUpChange.style.display = 'flex';
                    }

                    // lấy thông tin id của phone vừa click 
                    let idPhone = Number.parseInt((e.target.parentElement).getAttribute('data-clear'));

                    // lấy đúng phần tử trong db theo id đó => thông tin phone đc click
                    let phoneChangeClick = dataPhone[idPhone];
                    console.log(phoneChangeClick);

                    // render thông tin đó ra màn hình chỉnh sửa
                    // render ra thông tin ảnh
                    let urlImgPhone = document.querySelector('.url-change-phone');
                    if (urlImgPhone) {
                        urlImgPhone.value = phoneChangeClick.imgPhone;
                    }
                    // tên sản phâm
                    let namePhoneChange = document.querySelector('.name-change-phone');
                    if (namePhoneChange) {
                        namePhoneChange.value = phoneChangeClick.namePhone;
                    }

                    let priceOldPhone = document.querySelector('.priceOld-change-phone');
                    if (priceOldPhone) {
                        priceOldPhone.value = phoneChangeClick.priceNew;
                    }

                    let priceNewPhone = document.querySelector('.priceNew-change-phone');
                    if (priceOldPhone) {
                        priceNewPhone.value = phoneChangeClick.priceOld;
                    }

                    let saleOfPhone = document.querySelector('.saleOf-change-phone');
                    if (priceOldPhone) {
                        saleOfPhone.value = phoneChangeClick.phoneSaleof;
                    }

                    let descriptionPhone1 = document.querySelector('.description1-change-phone');
                    if (priceOldPhone) {
                        descriptionPhone1.value = phoneChangeClick.phoneDescription;
                    }

                    let descriptionPhone2 = document.querySelector('.description2-change-phone');
                    if (priceOldPhone) {
                        descriptionPhone2.value = phoneChangeClick.phoneDetailKM;
                    }

                    let nameOption1 = document.querySelector('.name-option1-change-phone');
                    if (priceOldPhone) {
                        nameOption1.value = phoneChangeClick.optionPhone[0].nameOption;
                    }
                    let priceOption1 = document.querySelector('.price-option1-change-phone');
                    if (priceOldPhone) {
                        priceOption1.value = phoneChangeClick.optionPhone[0].priceOption;
                    }

                    let nameOption2 = document.querySelector('.name-option2-change-phone');
                    if (priceOldPhone) {
                        nameOption2.value = phoneChangeClick.optionPhone[1].nameOption;
                    }
                    let priceOption2 = document.querySelector('.price-option2-change-phone');
                    if (priceOldPhone) {
                        priceOption2.value = phoneChangeClick.optionPhone[1].priceOption;
                    }
                    let nameOption3 = document.querySelector('.name-option3-change-phone');
                    if (priceOldPhone) {
                        nameOption3.value = phoneChangeClick.optionPhone[2].nameOption;
                    }
                    let priceOption3 = document.querySelector('.price-option3-change-phone');
                    if (priceOldPhone) {
                        priceOption3.value = phoneChangeClick.optionPhone[2].priceOption;
                    }


                    // khi click vào nút hoàn tất chỉnh sửa => check xem các điều kiện
                    let btnCompletedChangePhone = document.querySelector('.wrap-btn-completed-change-prduct button');

                    if (btnCompletedChangePhone) {
                        btnCompletedChangePhone.onclick = (e) => {
                            e.preventDefault();

                            let imgPhone = document.querySelector('.url-change-phone');
                            let namePhone = document.querySelector('.name-change-phone');
                            let priceOld = document.querySelector('.priceNew-change-phone');
                            let priceNew = document.querySelector('.priceOld-change-phone');
                            let phoneSaleof = document.querySelector('.saleOf-change-phone');
                            let phoneDescription = document.querySelector('.description1-change-phone');
                            let phoneDescription2 = document.querySelector('.description2-change-phone');
                            let nameOption1 = document.querySelector('.name-option1-change-phone');
                            let priceOption1 = document.querySelector('.price-option1-change-phone');
                            let nameOption2 = document.querySelector('.name-option2-change-phone');
                            let priceOption2 = document.querySelector('.price-option2-change-phone');
                            let nameOption3 = document.querySelector('.name-option3-change-phone');
                            let priceOption3 = document.querySelector('.price-option3-change-phone');


                            // lấy tất cả các thông báo lỗi
                            let mesageError = document.querySelectorAll('.error');

                            // nếu như có các thông tin trên trong dom => tránh lỗi ở page khác
                            // click vào thêm sản phẩm => check xem đủ dữ liệu chưa => nếu thiếu bắt check lại=> của từng cái
                            if (imgPhone && namePhone && priceOld && priceNew && phoneSaleof && phoneDescription && phoneDescription2 && nameOption1 && priceOption1 && nameOption2 && priceOption2 && nameOption3 && priceOption3) {

                                if (mesageError) {
                                    // check xem nhâp có phải url hình ảnh hay không
                                    let checkUrl = /\.(jpeg|jpg|gif|png|bmp|svg)$/i;
                                    if (!(checkUrl.test(imgPhone.value.trim())) || !(imgPhone.value.trim())) {
                                        mesageError[0].style.display = 'block';
                                    }
                                    if (!namePhone.value || namePhone.value.trim().length > 47) {
                                        mesageError[1].style.display = 'block';
                                    }
                                    if (!priceOld.value || priceOld.value.trim().length > 13) {
                                        mesageError[2].style.display = 'block';
                                    }
                                    if (!priceNew.value || priceNew.value.trim().length > 13) {
                                        mesageError[3].style.display = 'block';
                                    }
                                    if (!phoneSaleof.value) {
                                        mesageError[4].style.display = 'block';
                                    }
                                    if (!phoneDescription.value) {
                                        mesageError[5].style.display = 'block';
                                    }
                                    if (!phoneDescription2.value) {
                                        mesageError[6].style.display = 'block';
                                    }
                                    if (!nameOption1.value) {
                                        mesageError[7].style.display = 'block';
                                    }
                                    if (!priceOption1.value || priceOption1.value.trim().length > 13) {
                                        mesageError[8].style.display = 'block';
                                    }
                                    if (!nameOption2.value || nameOption2.value.trim().length > 4) {
                                        mesageError[9].style.display = 'block';
                                    }
                                    if (!priceOption2.value || priceOption2.value.trim().length > 13) {
                                        mesageError[10].style.display = 'block';
                                    }
                                    if (!nameOption3.value || nameOption3.value.trim().length > 4) {
                                        mesageError[11].style.display = 'block';
                                    }
                                    if (!priceOption3.value || priceOption3.value.trim().length > 13) {
                                        mesageError[12].style.display = 'block';
                                    }

                                }
                                // nếu như 1 ô input đang focus => bỏ đi thông báo error => blur check xem có dư liệu ko => ko có vẫn hiện cảnh báo
                                // check xem nhâp có phải là url hình ảnh ko  =>  
                                let checkUrl = /\.(jpeg|jpg|gif|png|bmp|svg)$/i;


                                imgPhone.addEventListener('focus', () => {
                                    mesageError[0].style.display = 'none';

                                })
                                imgPhone.addEventListener('blur', () => {
                                    if (!(checkUrl.test(imgPhone.value.trim())) || !(imgPhone.value.trim())) {
                                        mesageError[0].style.display = 'block';
                                    }


                                })

                                namePhone.addEventListener('focus', () => {
                                    mesageError[1].style.display = 'none';

                                })
                                namePhone.addEventListener('blur', () => {
                                    if (!namePhone.value || namePhone.value.trim().length > 47) {
                                        mesageError[1].style.display = 'block';
                                    }
                                })

                                priceOld.addEventListener('focus', () => {
                                    mesageError[3].style.display = 'none';

                                })
                                priceOld.addEventListener('blur', () => {
                                    if (!priceOld.value || priceOld.value.trim().length > 13) {
                                        mesageError[3].style.display = 'block';
                                    }
                                })
                                priceNew.addEventListener('focus', () => {
                                    mesageError[2].style.display = 'none';

                                })
                                priceNew.addEventListener('blur', () => {
                                    if (!priceNew.value || priceNew.value.trim().length > 13) {
                                        mesageError[2].style.display = 'block';
                                    }
                                })

                                phoneSaleof.addEventListener('focus', () => {
                                    mesageError[4].style.display = 'none';

                                })
                                phoneSaleof.addEventListener('blur', () => {
                                    if (!phoneSaleof.value) {
                                        mesageError[4].style.display = 'block';
                                    }
                                })

                                phoneDescription.addEventListener('focus', () => {
                                    mesageError[5].style.display = 'none';

                                })
                                phoneDescription.addEventListener('blur', () => {
                                    if (!phoneDescription.value) {
                                        mesageError[5].style.display = 'block';
                                    }
                                })

                                phoneDescription2.addEventListener('focus', () => {
                                    mesageError[6].style.display = 'none';

                                })
                                phoneDescription2.addEventListener('blur', () => {
                                    if (!phoneDescription2.value) {
                                        mesageError[6].style.display = 'block';
                                    }
                                })

                                nameOption1.addEventListener('focus', () => {
                                    mesageError[7].style.display = 'none';

                                })
                                nameOption1.addEventListener('blur', () => {
                                    if (!nameOption1.value) {
                                        mesageError[7].style.display = 'block';
                                    }
                                })

                                priceOption1.addEventListener('focus', () => {
                                    mesageError[8].style.display = 'none';

                                })
                                priceOption1.addEventListener('blur', () => {
                                    if (!priceOption1.value || priceOption1.value.trim().length > 13) {
                                        mesageError[8].style.display = 'block';
                                    }
                                })

                                nameOption2.addEventListener('focus', () => {
                                    mesageError[9].style.display = 'none';

                                })
                                nameOption2.addEventListener('blur', () => {
                                    if (!nameOption2.value || nameOption2.value.trim().length > 4) {
                                        mesageError[9].style.display = 'block';
                                    }
                                })

                                priceOption2.addEventListener('focus', () => {
                                    mesageError[10].style.display = 'none';

                                })
                                priceOption2.addEventListener('blur', () => {
                                    if (!priceOption2.value || priceOption2.value.trim().length > 13) {
                                        mesageError[10].style.display = 'block';
                                    }
                                })

                                nameOption3.addEventListener('focus', () => {
                                    mesageError[11].style.display = 'none';

                                })
                                nameOption3.addEventListener('blur', () => {
                                    if (!nameOption3.value || nameOption3.value.trim().length > 4) {
                                        mesageError[11].style.display = 'block';
                                    }
                                })
                                priceOption3.addEventListener('focus', () => {
                                    mesageError[12].style.display = 'none';

                                })
                                priceOption3.addEventListener('blur', () => {
                                    if (!priceOption3.value || priceOption3.value.trim().length > 13) {
                                        mesageError[12].style.display = 'block';
                                    }
                                })
                            }

                            // nếu dữ liệu nhập đủ => nhập đủ dữ liệu

                            if (imgPhone.value.trim() && namePhone.value.trim() && namePhone.value.trim().length <= 47 && priceOld.value && priceOld.value.trim().length <= 13 && priceNew.value && priceNew.value.trim().length <= 13 && phoneSaleof.value && phoneDescription.value && phoneDescription2.value && nameOption1.value && priceOption1.value && priceOption1.value.trim().length <= 13 && nameOption2.value && nameOption2.value.trim().length <= 4 && priceOption2.value && priceOption2.value.trim().length <= 13 && nameOption3.value && nameOption3.value.trim().length <= 4 && priceOption3.value && priceOption3.value.trim().length <= 13) {
                                // khi nhập đủ dữ liệu => lấy thông tin phone cũ => trên locastorage => thay thế thông tin mới cần cập nhật vào chính vị trí thông tin cũ đó
                                console.log('nhập đủ dữ liệu')
                                let dataPhoneOld = JSON.parse(localStorage.getItem('phone'));

                                if (dataPhoneOld) {

                                    // dữ liệu người dùng nhập vào =>
                                    let dataCompletedChangePhone = {
                                        imgPhone: imgPhone.value,
                                        namePhone: namePhone.value,
                                        priceOld: priceOld.value,
                                        priceNew: priceNew.value,
                                        phoneSaleof: phoneSaleof.value,
                                        phoneDescription: phoneDescription.value,
                                        phoneDetailKM: phoneDescription2.value,
                                        optionPhone: [
                                            {
                                                'nameOption': nameOption1.value,
                                                'priceOption': priceOption1.value
                                            },
                                            {
                                                'nameOption': nameOption2.value,
                                                'priceOption': priceOption2.value

                                            },
                                            {
                                                'nameOption': nameOption3.value,
                                                'priceOption': priceOption3.value

                                            },
                                        ]

                                    }


                                    // thay thế 1 phần tử theo đúng id trên : xóa đi 1 phần tử và thêm 1 data mới vào chính vị trí chỗ đó (chỉnh sửa)

                                    console.log(`id phone:`, idPhone);

                                    dataPhoneOld.splice(idPhone, 1, dataCompletedChangePhone);

                                    console.log('dataPhoneNew:', dataPhoneOld);
                                    // sau khi thêm dữ liễu mới cập nhật lại lên locastorage
                                    localStorage.setItem('phone', JSON.stringify(dataPhoneOld));


                                    // render lại dữ liệu ra màn hình trang chủ
                                    renderPhone();

                                    // khi sửa sản phẩm thành công => hỏi user muốn thoát về trang chủ xem thành quả luôn không
                                    if (confirm('Chỉnh Sửa Thành Công ! Bạn có muốn về trang chủ không')) {
                                        window.location.href = "./loginHomePage.html";
                                    }

                                }
                            }
                            else {
                                console.log('nhập thiếu dữ liệu');
                            }
                        }
                    }

                })
            })
        }
    }

    // khi click vào nút đóng trong popup ẩn đi
    let btnCloseChangeProduct = document.querySelector('.btn-close-changeProduct');
    if (btnCloseChangeProduct) {
        btnCloseChangeProduct.onclick = () => {
            // khi click vào nút đóng => ẩn tab popup đó đi
            let popUpChange = document.querySelector('.wrap-change-product');
            if (popUpChange) {
                popUpChange.style.display = 'none';
            }
        }
    }
}

