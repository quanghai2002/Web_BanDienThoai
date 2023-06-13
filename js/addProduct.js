import { renderPhone } from "./renderPhone.js";
export default function addProduct() {


    // khi click vào nút icon add-product => trên màn hình => chuyển đến trang addProduct
    let btnConvertAddProduct = document.querySelector('.convert-add-product');

    if (btnConvertAddProduct) {
        // khi click vào bút add => check xem có phải là tài khoản admin => để được vào trang sản phẩm không
        btnConvertAddProduct.addEventListener('click', () => {

            let nameUser = JSON.parse(localStorage.getItem('userLogin'));
            // nếu có thông tin userLogin => check xem có đúng phải admin không
            if (nameUser) {

                // nếu checkLogin => false =>đã đăng xuất => vui lòng đăng nhập lại
                let checkLogin = nameUser.checkLogin;
                let checkNameUser = nameUser.email;
                let nameAdmin = "haimobiarmy2002@gmail.com";

                if (checkLogin) {
                    // kiểm tra xem đúng tài khoản admin không => đúng cho vào trang đăng nhập
                    if (checkNameUser === nameAdmin) {
                        if (confirm('Xin chào admin: Bạn có muốn chuyển trang chỉnh sửa sản phẩm không ?')) {
                            window.location.href = "./themSanPham.html";
                        }
                    }
                    else {
                        if (confirm('Bạn chưa đăng nhập đúng tài khoản admin! Vui lòng đăng nhập đúng tài khoản admin để thêm sản phẩm')) {
                            window.location.href = "./login.html";
                        }
                    }
                }

                else {
                    if (confirm('Bạn chưa đăng nhập đúng tài khoản admin! Vui lòng đăng nhập đúng tài khoản admin để thêm sản phẩm')) {
                        window.location.href = "./login.html";
                    }

                }

            }
            // ko có thông tin userLogin => hiện thông báo => chuyển đến trang đăng nhập
            else {
                if (confirm('Bạn chưa đăng nhập đúng tài khoản admin! Vui lòng đăng nhập đúng tài khoản admin để thêm sản phẩm')) {
                    window.location.href = "./login.html";
                }

            }
        })
    }

    let dataPhoneOld = localStorage.getItem('phone'); // nếu có dữ liệu dataphone từ trước thì mới làm, ko thì set dataPhone
    if (dataPhoneOld) {


        // cho chữ thêm sản phẩm nhấp nháy đỏ,violet
        let h1AddProduct = document.querySelector('.add-product-heading');
        if (h1AddProduct) {

            setInterval(() => {
                setTimeout(() => {
                    h1AddProduct.classList.toggle('add-product-heading-active');


                }, 1000)
                setTimeout(() => {
                    h1AddProduct.classList.toggle('add-product-heading-active-2');

                }, 2000)

            }, 3000);

        }
        let nameOption1 = document.querySelector('.add-product-option-phone-1');
        if (nameOption1) {
            nameOption1.style.pointerEvents = 'none';
        }

        // check khi clik vào nút thêm sản phẩm => phải có tất cả dữ liệu mới đc
        let btnaddProduct = document.querySelector('.product-btn-add');
        if (btnaddProduct) {
            btnaddProduct.addEventListener('click', (e) => {
                e.preventDefault();

                let imgPhone = document.querySelector('.add-product-img');
                let namePhone = document.querySelector('.add-product-name');
                let priceOld = document.querySelector('.add-product-price-new');
                let priceNew = document.querySelector('.add-product-price-old');
                let phoneSaleof = document.querySelector('.add-product-sale-of');
                let phoneDescription = document.querySelector('.add-product-des-phone');
                let phoneDescription2 = document.querySelector('.add-product-detail-sale');
                let nameOption1 = document.querySelector('.add-product-option-phone-1');
                let priceOption1 = document.querySelector('.add-product-option-phone-1-price');
                let nameOption2 = document.querySelector('.add-product-option-phone-2');
                let priceOption2 = document.querySelector('.add-product-option-phone-2-price');
                let nameOption3 = document.querySelector('.add-product-option-phone-3');
                let priceOption3 = document.querySelector('.add-product-option-phone-3-price');


                // lấy tất cả các thông báo lỗi
                let mesageError = document.querySelectorAll('.error');

                // nếu như có các thông tin trên trong dom => tránh lỗi ở page khác
                // click vào thêm sản phẩm => check xem đủ dữ liệu chưa => nếu thiếu bắt check lại=> của từng cái
                if (imgPhone && namePhone && priceOld && priceNew && phoneSaleof && phoneDescription && phoneDescription2 && nameOption1 && priceOption1 && nameOption2 && priceOption2 && nameOption3 && priceOption3) {

                    if (mesageError) {
                        // check xem nhâp có phải url hình ảnh hay không
                        let checkUrl = /\.(jpeg|jpg|gif|png|bmp|svg)$/i;
                        if (!(checkUrl.test(imgPhone.value))) {
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
                        if (!(checkUrl.test(imgPhone.value))) {
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




                if (imgPhone.value && namePhone.value && namePhone.value.trim().length <= 47 && priceOld.value && priceOld.value.trim().length <= 13 && priceNew.value && priceNew.value.trim().length <= 13 && phoneSaleof.value && phoneDescription.value && phoneDescription2.value && nameOption1.value && priceOption1.value && priceOption1.value.trim().length <= 13 && nameOption2.value && nameOption2.value.trim().length <= 4 && priceOption2.value && priceOption2.value.trim().length <= 13 && nameOption3.value && nameOption3.value.trim().length <= 4 && priceOption3.value && priceOption3.value.trim().length <= 13) {
                    // khi nhập đủ dữ liệu => lấy thông tin phone cũ => trên locastorage => cập nhật thêm thông tin mới vào
                    console.log('nhập đủ dữ liệu')
                    let dataPhone = JSON.parse(localStorage.getItem('phone'));
                    if (dataPhone) {
                        let id = dataPhone.length;

                        // dữ liệu người dùng nhập vào =>
                        let dataUser = {
                            id: ++id,
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


                        dataPhone.push(dataUser);

                        // sau khi thêm dữ liễu mới cập nhật lại lên locastorage
                        localStorage.setItem('phone', JSON.stringify(dataPhone));

                        console.log(dataPhone);
                        // render lại dữ liệu ra màn hình trang chủ
                        renderPhone();

                        // khi thêm dữ liệu thành công => hỏi user muốn thoát về trang chủ xem thành quả luôn không
                        if (confirm('Bạn đã thêm thành công sản phẩm ! Bạn có muốn về trang chủ luôn không')) {
                            window.location.href = "./index.html";
                        }

                    }
                }
                else {
                    console.log('nhập thiếu dữ liệu');
                }



            })
        }
    }
    // nếu mặc đinh ko có dataPhone => thì set dataPhone mặc định ban đầu
    else {
        let id = 0;
        const phone = [

            {
                "id": ++id,
                "imgPhone": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/01/1111.png",
                "namePhone": "iPhone 14 Pro (128GB) - Chính hãng VN/A",
                "priceOld": "24,690,000 ₫",
                "priceNew": "29,390,000 ₫",
                "phoneSaleof": "KM",
                "phoneDescription": "Giảm thêm tới 1,5 triệu khi đăng ký ",
                "phoneDetailKM": "VÀ 16 KM KHÁC",
                "optionPhone": [
                    {
                        'nameOption': '64G',
                        'priceOption': '24,690,000 ₫'

                    },
                    {
                        'nameOption': '128G',
                        'priceOption': '26,690,000 ₫'

                    },
                    {
                        'nameOption': '256G',
                        'priceOption': '28,690,000 ₫'

                    },
                    {
                        'nameOption': '1TB',
                        'priceOption': '32,690,000 ₫'

                    },
                ]
            },
            {
                "id": ++id,
                "imgPhone": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/06/01/samsung-galaxy-s23-ultra.png",
                "namePhone": "Samsung Galaxy S23 Ultra 8GB/256GB - Chính hãng",
                "priceOld": "26,030,000 ₫",
                "priceNew": "31,990,000 ₫",
                "phoneSaleof": "KM",
                "phoneDescription": "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP ",
                "phoneDetailKM": "VÀ 8 KM KHÁC ",
                "optionPhone": [
                    {
                        'nameOption': '64G',
                        'priceOption': '26,030,000 ₫'

                    },
                    {
                        'nameOption': '128G',
                        'priceOption': '26,030,000 ₫'

                    }, {
                        'nameOption': '256G',
                        'priceOption': '29,030,000 ₫'

                    },
                ]
            },
            {
                "id": ++id,
                "imgPhone": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12s.png",
                "namePhone": "Redmi Note 12S (8GB/256GB) - Chính hãng",
                "priceOld": "6,190,000 ₫",
                "priceNew": "6,690,000 ₫",
                "phoneSaleof": "KM",
                "phoneDescription": "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP ",
                "phoneDetailKM": "VÀ 8 KM KHÁC ",
                "optionPhone": [
                    {
                        'nameOption': '64G',
                        'priceOption': '6,190,000 ₫'

                    },
                    {
                        'nameOption': '128G',
                        'priceOption': '8,190,000 ₫'

                    }, {
                        'nameOption': '256G',
                        'priceOption': '9,190,000 ₫'

                    },
                ]
            }, {
                "id": ++id,
                "imgPhone": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/17/a14-2.png",
                "namePhone": "Samsung Galaxy A14 4G 4GB/128GB - Chính hãng",
                "priceOld": "3,590,000 ₫",
                "priceNew": "4,490,000 ₫",
                "phoneSaleof": "KM",
                "phoneDescription": "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP ",
                "phoneDetailKM": "VÀ 9 KM KHÁC",
                "optionPhone": [
                    {
                        'nameOption': '64G',
                        'priceOption': '3,590,000 ₫'

                    },
                    {
                        'nameOption': '128G',
                        'priceOption': '4,590,000 ₫'

                    }, {
                        'nameOption': '256G',
                        'priceOption': '5,590,000 ₫'

                    },
                ]
            }, {
                "id": ++id,
                "imgPhone": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/02/combo-product-reno8-z-gold.png",
                "namePhone": "Reno8 Z 5G - Chính hãng",
                "priceOld": "7,890,000 ₫",
                "priceNew": "9,790,000 ₫",
                "phoneSaleof": "KM",
                "phoneDescription": "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP ",
                "phoneDetailKM": "VÀ 7 KM KHÁC ",
                "optionPhone": [
                    {
                        'nameOption': '64G',
                        'priceOption': '7,890,000 ₫'

                    },
                    {
                        'nameOption': '128G',
                        'priceOption': '8,890,000 ₫'

                    }, {
                        'nameOption': '256G',
                        'priceOption': '9,890,000 ₫'

                    },
                ]
            },





        ]

        // Lưu thông tin phone lên locastorage
        localStorage.setItem('phone', JSON.stringify(phone));
    }




}
