const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');
const textAreaCont = document.querySelector('.text-area-cont');
//Show and hide the modal container
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

//create a ticket dynamically
function createTicket() {
    const ticket = document.createElement('div'); // creating a new ticket HTML(container element) 

    ticket.classList.add('ticket-cont'); // attaching a class to a div way - 1 or // ticket.setAttribute('class', 'ticket-cont'); // attaching a class to a div way - 2

    //setting the html that we have written to the ticket-container
    ticket.innerHTML = `  <div class = "ticket-color"></div>
            <div class = "ticket-id"></div>
            <div class = "ticket-desc"></div>
            <div class = "ticket-lock">
                <i class="fa-solid fa-lock"></i>
                <!-- <i class="fa-solid fa-lock-open"></i> -->
            </div> `;
    //Appending the added ticket container to the main container
    const mainCont = document.querySelector('.main-cont');
    mainCont.appendChild(ticket);

}

window.addEventListener('keydown', function (ev) {
    if (ev.key === 'Shift') {
        ev.preventDefault();
        createTicket();
        modalCont.style.display = 'none'; // hide the modal
        textAreaCont.value = ''; // clear the contents on refresh
    }
});

