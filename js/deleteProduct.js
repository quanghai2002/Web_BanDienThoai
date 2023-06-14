import { renderPhone } from "./renderPhone.js";
export default function deleteProduct() {

    // khi click vào nút xóa sản phẩm => chuyển đến trang xóa sản phẩm
    let btnXoaSP = document.querySelector('.product-btn.product-btn-delete');

    if (btnXoaSP) {
        btnXoaSP.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = "./xoaSanPham.html";
        })
    }


    // khi click vào nút thêm sản phẩm => chuyển về trang thêm sp trong trang xóa hoặc trang chỉnh sửa
    let btnThemSP = document.querySelector('.product-btn-add-1');

    if (btnThemSP) {
        btnThemSP.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = "./themSanPham.html";
        })
    }
    // đầu tiên render dữ liệu từ locasorage ra màn hình trước

    let ulDeleteProduct = document.querySelector('.delete-product-item');
    let dataPhone = JSON.parse(localStorage.getItem('phone'));

    function rederDeletePhone() {

        if (dataPhone) {
            if (ulDeleteProduct) {
                let html = dataPhone.map((phone, index) => {
                    return `
                           
                       <li class="delete-product-list " data-clear=${index}>
                      <img class="delete-product-list-img" src="${phone.imgPhone}"alt="anh" />
                      <p class="delete-product-list-text">${phone.namePhone}</p>
                      <span class="material-symbols-outlined delete-product-list-icon"> delete </span>
                    </li>
                          
                          `
                })

                // render ra màn hình
                ulDeleteProduct.innerHTML = html.join('');

            }
        }
    }
    rederDeletePhone();

    // handle change khi click vào nút xóa
    let btnClearProduct = document.querySelectorAll('.delete-product-list-icon');

    if (dataPhone) {

        if (btnClearProduct) {
            // khi click vào nút xóa product
            Array.from(btnClearProduct).forEach((btnClear) => {
                btnClear.addEventListener('click', (e) => {

                    // nếu dataPhone .length >0 thì còn để xóa   
                    if (dataPhone.length > 0) {
                        // lấy id cần xóa=> qua data-clear
                        let idClear = Number.parseInt((e.target.parentElement).getAttribute('data-clear'));

                        console.log(idClear);
                        // xóa dữ liệu dùng => splice
                        dataPhone.splice(idClear, 1);

                        // update lại dữ liệu lên localstorage
                        localStorage.setItem('phone', JSON.stringify(dataPhone));

                        // sau đó render lại ra màn hình xóa của trang hiện tại và load lại trang
                        // xóa thành công => hiện popup 
                        let popupDelete = document.querySelector('.popup-delete');

                        if (popupDelete) {
                            popupDelete.style.display = 'block';
                            // sau 3s ẩn thông báo đi và hiển thị lại 
                            setTimeout(() => {
                                popupDelete.style.display = 'none';


                                // window.location.href = "./xoaSanPham.html";
                                location.reload();

                                // sau khi xóa sp xong hỏi xem có muốn về trang chủ không
                                if (confirm('Xóa thành công ! Bạn muốn về trang chủ không')) {

                                    window.location.href = "./loginHomePage.html";
                                }

                            }, 1000)

                        }
                        // render lại dữ liệu ra màn hình hiện tại
                        rederDeletePhone();

                        // và trang chủ sẽ load lại sản phẩm đã xóa
                        renderPhone();

                        // khi xóa sp thành công => xóa thông tin infoBuyPhone trên localstorage đi
                        localStorage.removeItem('infoBuyPhone');



                    }

                })
            })

        }
        /// dataPhone.length === 0 => đã xóa hết sản phẩm trên dữ liệu
        if (dataPhone.length === 0) {
            if (ulDeleteProduct) {
                ulDeleteProduct.innerHTML = `
                                  <div class="delete-phone-null" >
                                  <span class="material-symbols-outlined delete-0-icon">warning</span>
                                   <h1 class="delete-0"> Đã Xóa Hết Sản Phẩm ! Vui lòng click vào thêm SP lại !!! </h1>
                                   </div>
                                `

            }
        }


    }



}