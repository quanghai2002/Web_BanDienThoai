function slider() {

    let sliderWrap = document.querySelector('.slider');
    if (sliderWrap) {


        let imgList = document.querySelectorAll('.slide-img');
        let btnNext = document.querySelector('.btn-prev');
        let btnPrev = document.querySelector('.btn-next');
        let imgsLength = imgList.length;
        let dots = document.querySelectorAll('.slide-dots-icon ');

        let index = 0;
        Array.from(imgList).forEach((img, index) => {
            img.setAttribute('class', 'slide-img slide-img-hiden ');

        })
        imgList[0].setAttribute('class', ' slide-img slide-img-active');

        // handle change

        // handle btnNext
        function nextSlider(e) {
            index++;
            if (index >= imgsLength) {
                index = 0;
            }
            // Tìm kiếm các imgActive
            let imgActive = document.querySelector('.slide-img-active');
            //  xóa bỏ các img active
            imgActive.classList.remove('slide-img-active');
            imgActive.classList.add('slide-img-hiden');

            // thêm các img active theo index click
            imgList[index].classList.add('slide-img-active');

            // Tìm kiếm và xóa các dots active
            let dotActive = document.querySelector('.slide-dots-active');
            dotActive.classList.remove('slide-dots-active');

            // Thêm các dots active 
            dots[index].classList.add('slide-dots-active');


            // Thêm animation trượt vào img
            imgList[index].style.animation = 'sliderRight 0.3s linear forwards';

            setTimeout(() => {
                imgList[index].style.animation = '';
            }, 300)
        }



        // handle btnPrev

        function prevSlider(e) {
            index--;
            if (index < 0) {
                index = imgsLength - 1;
            }

            // tìm kiếm ,và xóa các imgActive
            let imgActive = document.querySelector('.slide-img-active');
            imgActive.classList.remove('slide-img-active');
            imgActive.classList.add('slide-img-hiden');

            // Mỗi lần click sau khi tìm và xóa img active => thêm active và ảnh hiện tại 
            imgList[index].classList.add('slide-img-active');

            // Tìm kiếm và xóa dots active
            let dotsActive = document.querySelector('.slide-dots-active');
            dotsActive.classList.remove('slide-dots-active');

            // Thêm dots active mới khi click
            dots[index].classList.add('slide-dots-active');

            // Thêm animation trượt vào img
            imgList[index].style.animation = 'sliderLeft 0.3s linear forwards';

            setTimeout(() => {
                imgList[index].style.animation = '';
            }, 300)
        }



        // click dots active
        dots.forEach((dot, index) => {
            dot.onclick = (e) => {
                // tìm kiếm ,và xóa các imgActive
                let imgActive = document.querySelector('.slide-img-active');
                imgActive.classList.remove('slide-img-active');
                imgActive.classList.add('slide-img-hiden');
                imgList[index].classList.add('slide-img-active');

                // Tìm kiếm và xóa dots active
                let dotsActive = document.querySelector('.slide-dots-active');
                dotsActive.classList.remove('slide-dots-active');

                // Thêm dots active mới khi click
                dots[index].classList.add('slide-dots-active');

                // Thêm animation trượt vào img
                imgList[index].style.animation = 'sliderRight 0.3s linear forwards';

                setTimeout(() => {
                    imgList[index].style.animation = '';
                }, 300)
            }
        })

        btnNext.addEventListener('click', nextSlider)
        btnPrev.addEventListener('click', prevSlider)


        //sau 2s chuyển slider
        setInterval(function () {
            nextSlider();

        }, 3000)
    }
}
export default slider;