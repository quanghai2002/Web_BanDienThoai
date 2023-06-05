

export default function tranggioithieulogin() {

    setTimeout(() => {

        // trang loginHomePage => khi click btn giới thiệu sau khi đã đăng nhập => chuyển vào trang giới thiệu => vẫn lưu thông tin user
        let introduceLogin = document.querySelector('.heading-nav-gioithieu-login');
        if (introduceLogin) {
            introduceLogin.addEventListener('click', () => {
                window.location.href = './tranggioithieukhidadangnhap.html';
            })
        }

        // hiển thị trong trang giới thiệu, tuyển dụng, trung tâm bảo hành =>  có tên user khi đã đăng nhập => vẫn lưu thông tin user khi đăng nhập
        let isLogin = localStorage.key('userLogin');

        if (isLogin === 'userLogin') {

            let checkUserName = JSON.parse(localStorage.getItem('userLogin'));
            let isCheckLogin = checkUserName.checkLogin;

            if (isCheckLogin) {
                let renderNameUser = document.querySelector('.heading-nav-user-text');
                if (renderNameUser) {

                    renderNameUser.innerText = checkUserName.email;
                }
            }
        }

        // khi click vào trang tuyển dụng khi đã đăng nhập => chuyển đến trang tuyển dụng => hiện thị tên userName
        let tuyendunglogin = document.querySelector('.heading-nav-tuyendung-login');
        if (tuyendunglogin) {

            tuyendunglogin.addEventListener('click', function () {
                window.location.href = './tuyendungkhidadangnhap.html';
            })
        }

        // khi click vào trang trung tâm bảo hành khi đã đăng nhập => chuyển đến trang đăng nhập => hiện thị tên userName
        let baohanhlogin = document.querySelector('.heading-nav-baohanh-login');

        if (baohanhlogin) {

            baohanhlogin.addEventListener('click', function () {
                window.location.href = './baohanhkhidangnhap.html';
            })
        }
    }, 1000)
}