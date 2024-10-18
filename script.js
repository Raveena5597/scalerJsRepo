const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');

let addFlag = false;
addBtn.addEventListener('click', () => {
    if (addFlag == false) {
        modalCont.style.display = "flex";
        addFlag = true;
    }
    else {
        modalCont.style.display = "none";
        addFlag = false;
    }
})