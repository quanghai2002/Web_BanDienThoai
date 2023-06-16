function navigation() {

    // khi click vào btn trang chủ => về trang chủ
    let btnHomepage = document.querySelector('.heading-nav-trangchu');
    btnHomepage.addEventListener('click', () => {
        window.location.href = './index.html';

    })



    // khi click vào giới thiệu => chuyển đến trang giới thiệu;
    let btnintroDuce = document.querySelector('.heading-nav-gioithieu');
    if (btnintroDuce) {

        btnintroDuce.addEventListener('click', () => {
            window.location.href = './introduce.html';
        })
    }
    // khi click vào giới thiệu => chuyển đến trang tuyển dụng;
    let btntuyendung = document.querySelector('.heading-nav-tuyendung');
    if (btntuyendung) {

        btntuyendung.addEventListener('click', () => {
            window.location.href = './tuyendung.html';
        })
    }

    // khi click vào trung tâm bảo hành => chuyển đến trang trung tâm bảo hành
    let btnTrungtambaohanh = document.querySelector('.heading-nav-baohanh');
    if (btnTrungtambaohanh) {

        btnTrungtambaohanh.addEventListener('click', () => {
            window.location.href = './trungtambaohanh.html';
        })
    }

    // khi click vào đăng kí => chuyển đến trang đăng kí
    let btnRegister = document.querySelector('.heading-nav-register');
    if (btnRegister) {

        btnRegister.addEventListener('click', () => {
            window.location.href = './register.html';
        })
    }

    // khi click vào đăng nhập => chuyển đến trang đăng nhập
    let btnLogin = document.querySelector('.heading-nav-login');
    if (btnLogin) {

        btnLogin.addEventListener('click', () => {
            window.location.href = './login.html';
        })
    }

    // xử lý khi đăng nhập => hiển thị đúng tên userName ra giao diện;


    let checkRegister = JSON.parse(localStorage.getItem('checkRegister'));
    let checkUserLogin = JSON.parse(localStorage.getItem('userLogin'));

    // khi click vào kiểm tra đơn hàng => hiện lên chức năng đang phát triển
    let btnKiemTraDonHang = document.querySelector('.heading-check-order');
    if (btnKiemTraDonHang) {
        btnKiemTraDonHang.addEventListener('click', () => {
            let popUpDangPhatTrien = document.querySelector('.check-don-hang');
            if (popUpDangPhatTrien) {
                popUpDangPhatTrien.style.display = 'block';

                setTimeout(() => {
                    popUpDangPhatTrien.style.display = 'none';
                }, 3000)
            }
        })
    }

    if (checkRegister === true && checkUserLogin) {
        let data = JSON.parse(localStorage.getItem('register'));
        let emailUser = JSON.parse(localStorage.getItem('userLogin')).email;
        if (emailUser) {

            let valueUser = data.find((data) => {
                return data.email === emailUser;
            })



            // thêm đúng tên user hoặc email đã đăng nhập vào trang chủ;
            let userText = document.querySelector('.heading-nav-user-text');
            if (userText) {
                userText.innerText = valueUser.email;
            }
            // }
        }

        // khi click đăng xuất => về trang chủ => checkLogin = false;
        setTimeout(() => {

            let btnLogout = document.querySelector('.heading-nav-link.heading-nav-logout');

            if (btnLogout) {

                btnLogout.addEventListener('click', () => {
                    let data = JSON.parse(localStorage.getItem('userLogin'));
                    let dataNew = { ...data, checkLogin: false };


                    localStorage.setItem('userLogin', JSON.stringify(dataNew));
                    window.location.href = './index.html';

                    // khi click đăng xuất => sô lượng trên giỏ hàng ===0
                    // số liệu sản phẩm => lập tức bằng 0
                    let btnCartNumber = document.querySelector('.header-cart .header-cart-total');
                    if (btnCartNumber) {
                        btnCartNumber.innerText = 0;
                    }

                })
            }
        }, 100)

        // khi click vào nút trang chủ => ý  là đăng xuất set lại checklogin:false
        let btnHomepageLogout = document.querySelector('.heading-nav-trangchu');

        if (btnHomepageLogout) {
            let data = JSON.parse(localStorage.getItem('userLogin'));
            btnHomepageLogout.addEventListener('click', () => {
                let newData = { ...data, checkLogin: false };
                localStorage.setItem('userLogin', JSON.stringify(newData));
                // số liệu sản phẩm => lập tức bằng 0
                let btnCartNumber = document.querySelector('.header-cart .header-cart-total');
                if (btnCartNumber) {
                    btnCartNumber.innerText = 0;
                }
            })
        }


        // click vào logo về trang chủ => set lại checklogin:false
        let btnLogo = document.querySelector('.heading-content-img');
        if (btnLogo) {

            btnLogo.addEventListener('click', () => {
                window.location.href = './index.html';
                let data = JSON.parse(localStorage.getItem('userLogin'));
                let dataNew = { ...data, checkLogin: false };

                localStorage.setItem('userLogin', JSON.stringify(dataNew));
                // số liệu sản phẩm => lập tức bằng 0
                let btnCartNumber = document.querySelector('.header-cart .header-cart-total');
                if (btnCartNumber) {
                    btnCartNumber.innerText = 0;
                }

            })
        }

        // khi click vào slider => đăng nhập
        let btnSilder = document.querySelectorAll('.slide-img');

        if (btnSilder) {

            btnSilder.forEach((slider) => {

                slider.onclick = (e) => {
                    window.location.href = './login.html';
                }
            })
        }



    };
}

export default navigation;


