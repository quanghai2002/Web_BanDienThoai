function renderPhone() {

  let data = JSON.parse(localStorage.getItem('phone'));


  let container = document.querySelector('.container-wrap-product');
  if (data) {
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
              
                <div class="col l-2-4 m-4 c-6 data=${index}">
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
  }
}


export { renderPhone };