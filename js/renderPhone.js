function renderPhone() {

  // xử lý lưu thông tin sản phẩm trên localstorage
  // let id = 0;
  // const phone = [

  //   {
  //     "id": ++id,
  //     "imgPhone": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/01/1111.png",
  //     "namePhone": "iPhone 14 Pro (128GB) - Chính hãng VN/A",
  //     "priceOld": "24,690,000 ₫",
  //     "priceNew": "29,390,000 ₫",
  //     "phoneSaleof": "KM",
  //     "phoneDescription": "Giảm thêm tới 1,5 triệu khi đăng ký ",
  //     "phoneDetailKM": "VÀ 16 KM KHÁC",
  //     "optionPhone": [
  //       {
  //         'nameOption': '64G',
  //         'priceOption': '24,690,000 ₫'

  //       },
  //       {
  //         'nameOption': '128G',
  //         'priceOption': '26,690,000 ₫'

  //       },
  //       {
  //         'nameOption': '256G',
  //         'priceOption': '28,690,000 ₫'

  //       },
  //       {
  //         'nameOption': '1TB',
  //         'priceOption': '32,690,000 ₫'

  //       },
  //     ]
  //   },
  //   {
  //     "id": ++id,
  //     "imgPhone": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/06/01/samsung-galaxy-s23-ultra.png",
  //     "namePhone": "Samsung Galaxy S23 Ultra 8GB/256GB - Chính hãng",
  //     "priceOld": "26,030,000 ₫",
  //     "priceNew": "31,990,000 ₫",
  //     "phoneSaleof": "KM",
  //     "phoneDescription": "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP ",
  //     "phoneDetailKM": "VÀ 8 KM KHÁC ",
  //     "optionPhone": [
  //       {
  //         'nameOption': '64G',
  //         'priceOption': '26,030,000 ₫'

  //       },
  //       {
  //         'nameOption': '128G',
  //         'priceOption': '26,030,000 ₫'

  //       }, {
  //         'nameOption': '256G',
  //         'priceOption': '29,030,000 ₫'

  //       },
  //     ]
  //   },
  //   {
  //     "id": ++id,
  //     "imgPhone": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/11/note12s.png",
  //     "namePhone": "Redmi Note 12S (8GB/256GB) - Chính hãng",
  //     "priceOld": "6,190,000 ₫",
  //     "priceNew": "6,690,000 ₫",
  //     "phoneSaleof": "KM",
  //     "phoneDescription": "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP ",
  //     "phoneDetailKM": "VÀ 8 KM KHÁC ",
  //     "optionPhone": [
  //       {
  //         'nameOption': '64G',
  //         'priceOption': '6,190,000 ₫'

  //       },
  //       {
  //         'nameOption': '128G',
  //         'priceOption': '8,190,000 ₫'

  //       }, {
  //         'nameOption': '256G',
  //         'priceOption': '9,190,000 ₫'

  //       },
  //     ]
  //   }, {
  //     "id": ++id,
  //     "imgPhone": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/17/a14-2.png",
  //     "namePhone": "Samsung Galaxy A14 4G 4GB/128GB - Chính hãng",
  //     "priceOld": "3,590,000 ₫",
  //     "priceNew": "4,490,000 ₫",
  //     "phoneSaleof": "KM",
  //     "phoneDescription": "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP ",
  //     "phoneDetailKM": "VÀ 9 KM KHÁC",
  //     "optionPhone": [
  //       {
  //         'nameOption': '64G',
  //         'priceOption': '3,590,000 ₫'

  //       },
  //       {
  //         'nameOption': '128G',
  //         'priceOption': '4,590,000 ₫'

  //       }, {
  //         'nameOption': '256G',
  //         'priceOption': '5,590,000 ₫'

  //       },
  //     ]
  //   }, {
  //     "id": ++id,
  //     "imgPhone": "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/02/combo-product-reno8-z-gold.png",
  //     "namePhone": "Reno8 Z 5G - Chính hãng",
  //     "priceOld": "7,890,000 ₫",
  //     "priceNew": "9,790,000 ₫",
  //     "phoneSaleof": "KM",
  //     "phoneDescription": "Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua ví VNP ",
  //     "phoneDetailKM": "VÀ 7 KM KHÁC ",
  //     "optionPhone": [
  //       {
  //         'nameOption': '64G',
  //         'priceOption': '7,890,000 ₫'

  //       },
  //       {
  //         'nameOption': '128G',
  //         'priceOption': '8,890,000 ₫'

  //       }, {
  //         'nameOption': '256G',
  //         'priceOption': '9,890,000 ₫'

  //       },
  //     ]
  //   },





  // ]

  // // Lưu thông tin phone lên locastorage
  // localStorage.setItem('phone', JSON.stringify(phone));

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
              
                <div class="col l-2-4 data=${index}">
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