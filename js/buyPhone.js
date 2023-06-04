export default function buyPhone() {


    // handle change khi click vào sản phẩm khi chưa đăng nhập => yêu cầu đăng nhập => mới cho mua
    let phone = document.querySelectorAll('.container-product');
    let checkLogin = JSON.parse(localStorage.getItem('userLogin')).checkLogin;
    if (phone) {

        phone.forEach((itemPhone) => {
            itemPhone.addEventListener('click', (e) => {
                if (checkLogin) {
                    // xử lý khi đăng nhập thành công để mua sản phẩm

                    // lấy các thông tin của sản phẩm khi clik => lưu lên local storage
                    let imgPhone = itemPhone.querySelector('.container-product-img img').src;
                    let namePhone = itemPhone.querySelector('.container-product-info-heading').innerText;
                    let pricePhone = itemPhone.querySelector('.container-product-info-price-old').innerText;

                    if (imgPhone && namePhone && pricePhone) {

                        let infoPhone = {
                            imgPhone,
                            namePhone,
                            pricePhone
                        }
                        localStorage.setItem('infoBuyPhone', JSON.stringify(infoPhone));
                    }


                    // sau khi lưu thông tin => chuyển đến trang mua sản phẩm => load info phone user chọn ra => trang mua sản phẩm
                    window.location.href = './buyPhone.html';

                }

                else {
                    // user phải đăng nhập mới được mua điện thoại 
                    if (confirm('Bạn chưa đăng nhập ! Bạn đồng ý đăng nhập để mua sản phẩm chứ')) {
                        window.location.href = './login.html';
                    }
                }
            })
        })
    }


}