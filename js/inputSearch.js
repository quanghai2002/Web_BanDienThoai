function inputSearch() {
    let inputHeader = document.querySelector('.heading-content-search-input');
    let body = document.querySelector('body');



    inputHeader.onfocus = (e) => {
        document.querySelector('.overlay').style.display = 'block';
        body.style.overflowY = 'hidden';


    }

    inputHeader.onblur = (e) => {
        body.style.overflowY = 'scroll';
        document.querySelector('.overlay').style.display = 'none';

    }
}

export default inputSearch;