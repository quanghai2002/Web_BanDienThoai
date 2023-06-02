function navigation() {


    // click vào logo về trang chủ
    let btnLogo = document.querySelector('.heading-content-img');
    btnLogo.addEventListener('click', () => {
        window.location.href = './index.html';
        let data = JSON.parse(localStorage.getItem('userLogin'));
        let dataNew = { ...data, checkLogin: false };
        console.log(dataNew);
        localStorage.setItem('userLogin', JSON.stringify(dataNew));

    })
    // khi click vào giới thiệu => chuyển đến trang giới thiệu;
    let btnintroDuce = document.querySelector('.heading-nav-gioithieu');
    console.log(btnintroDuce);
    btnintroDuce.addEventListener('click', () => {
        window.location.href = './introduce.html';
    })
    // khi click vào giới thiệu => chuyển đến trang tuyển dụng;
    let btnGioiThieu = document.querySelector('.heading-nav-tuyendung');
    btnGioiThieu.addEventListener('click', () => {
        window.location.href = './tuyendung.html';
    })

    // xử lý khi đăng nhập => hiển thị đúng tên userName ra giao diện;
    let data = JSON.parse(localStorage.getItem('register'));
    let emailUser = JSON.parse(localStorage.getItem('userLogin')).email;
    let valueUser = data.find((data) => {
        return data.email === emailUser;
    })
    // thêm đúng tên user hoặc email đã đăng nhập vào trang chủ;
    let userText = document.querySelector('.heading-nav-user-text');
    if (userText) {

        userText.innerText = valueUser.email;
    }


    // khi click đăng xuất hoặc về trang chủ => checkLogin = false;
    let btnLogout = document.querySelector('.heading-nav-logout');
    if (btnLogout) {

        btnLogout.addEventListener('click', () => {
            let data = JSON.parse(localStorage.getItem('userLogin'));
            let dataNew = { ...data, checkLogin: false };
            localStorage.setItem('userLogin', JSON.stringify(dataNew));

        })
    }

};
navigation();
export default navigation;
// }

