function renderPhone() {


  let url = 'http://localhost:3000/phone';
  fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      let container = document.querySelector('.container-wrap-product');
      if (container) {


        let html = '';
        data.forEach((phone, index) => {
          let imgPhone = phone.imgPhone;
          let namePhone = phone.namePhone;
          let phoneDescription = phone.phoneDescription;
          let phoneDetailKM = phone.phoneDetailKM;
          let phoneSaleof = phone.phoneSaleof;
          let priceOld = phone.priceOld;
          let priceNew = phone.priceNew;

          html += `
              
                <div class="col l-2-4">
                    <div class="container-product">
                       <div class="container-product-img">
                        <img src=${imgPhone} alt="anh" />
                    </div>

                    <div class="container-product-info">
                        <h3 class="container-product-info-heading">${namePhone}</h3>
                        <div class="container-product-info-price">
                       <span class="container-product-info-price-old">${priceOld}</span>
                       <span class="container-product-info-price-new">${priceNew}</span>
                        </div>

                     <div class="container-product-info-note">
                       <span class="container-product-info-note-saleof">${phoneSaleof}</span>
                       <span class="container-product-info-note-text">${phoneDescription}</span>
                       <span class="container-product-info-note-detail">${phoneDetailKM} </span>
                    </div>
                   </div>
                   </div>
                  </div>
              `
        });

        container.innerHTML = html;

        // tạo dấu 3 chấm cho sản phẩm khi nhập quá giới hạn kí tự;
        let namePhone = document.querySelectorAll('.container-product-info-heading');
        namePhone.forEach((namephone) => {

          if ((namephone.innerText.length) > 51) {
            namephone.innerText = `${namephone.innerText.slice(0, 51)}...`;
          }
        })

        let nameKM = document.querySelectorAll('.container-product-info-note-text');

        nameKM.forEach((namekm) => {

          if ((namekm.innerText.length) >= 34) {
            namekm.innerText = ` ${namekm.innerText.slice(0, 34)}...`;
          }
        })

        let saleof = document.querySelectorAll('.container-product-info-note-detail');
        saleof.forEach(sale => {

          if ((sale.innerText.length) >= 21) {
            sale.innerText = `${sale.innerText.slice(0, 21)}...`;
          }
        })
        let km = document.querySelectorAll('.container-product-info-note-saleof');
        km.forEach(KM => {

          if ((KM.innerText.length) > 2) {
            KM.innerText = `${KM.innerText.slice(0, 2)}...`;
          }
        })

      }
    })
}


/*

  <div class="row sm-gutter">
          <div class="col l-2-4">
            <div class="container-product">
              <div class="container-product-img">
                <img src="./assets/img/dt1.webp" alt="anh" />
              </div>
              <div class="container-product-info">
                <h3 class="container-product-info-heading">Nokia G22 (4GB/128GB) - Chính hãng okia G22 (4GB/128GB) - Chính hãng</h3>
                <div class="container-product-info-price">
                  <span class="container-product-info-price-old">3,390,000 ₫</span>
                  <span class="container-product-info-price-new">3,390,000 ₫</span>
                </div>

                <div class="container-product-info-note">
                  <span class="container-product-info-note-saleof">km</span>
                  <span class="container-product-info-note-text">ưu đãi đến 300.000đ khi mở Ví hoặc làm gì đó</span>
                  <span class="container-product-info-note-detail">và 8Km khác </span>
                </div>
              </div>
            </div>
          </div>
        </div>

*/

export { renderPhone };