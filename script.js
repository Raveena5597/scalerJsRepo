const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');
const textAreaCont = document.querySelector('.text-area-cont');
//Show and hide the modal container
let addFlag = false;
// addBtn.addEventListener('click', () => {
//     if (addFlag == false) {
//         modalCont.style.display = "flex";
//         addFlag = true;
//     }
//     else {
//         modalCont.style.display = "none";
//         addFlag = false;
//     }
// })
addBtn.addEventListener('click', () => {
    if (!addFlag) {
        modalCont.classList.add('visible');
        modalCont.classList.remove('hidden');
        addFlag = true;

        // Remove active class from all priority colors when the modal is shown
        allPriorityColors.forEach(colorElement => {
            colorElement.classList.remove('active');
        });

        modalPriorityColor = ''; // Reset selected color to none
    } else {
        modalCont.classList.add('hidden');
        modalCont.classList.remove('visible');
        addFlag = false;
    }
});

//create a ticket dynamically
function createTicket(ticketColor, ticketTask, ticketID) {
    const ticket = document.createElement('div'); // creating a new ticket HTML(container element) 

    ticket.classList.add('ticket-cont'); // attaching a class to a div way - 1 or // ticket.setAttribute('class', 'ticket-cont'); // attaching a class to a div way - 2

    //setting the html that we have written to the ticket-container
    ticket.innerHTML = `  <div class = "ticket-color" style="background-color:${ticketColor}"></div>
            <div class = "ticket-id">${ticketID}</div>
            <div class = "ticket-desc">${ticketTask}</div>
            <div class = "ticket-lock">
                <i class="fa-solid fa-lock"></i>
                <!-- <i class="fa-solid fa-lock-open"></i> -->
            </div> `;
    //Appending the added ticket container to the main container
    const mainCont = document.querySelector('.main-cont');
    mainCont.appendChild(ticket);
}
let modalPriorityColor = 'black';

modalCont.addEventListener('keyup', function (ev) {
    if (ev.key === 'Shift' && document.activeElement === textAreaCont) {
        const ticketTaskValue = textAreaCont.value.trim();
        ev.preventDefault();
        if (ticketTaskValue !== "" && modalPriorityColor !== '') {
            const ticketID = Math.random().toString(36).substring(2, 9);//generating random id
            createTicket(modalPriorityColor, ticketTaskValue, ticketID); // pass the color,random ticket id and ticket-description while creating the ticket
            //hide the modal after ticket creation
            modalCont.classList.add('hidden');
            modalCont.classList.remove('visible');
            textAreaCont.value = ''; // clear the contents on refresh
            addFlag = false; // Reset the addFlag so that the modal can be reopened
        }
    }
});
//selecting the priority colors and showing them in the ticket
const allPriorityColors = document.querySelectorAll('.priority-color');
allPriorityColors.forEach(function (colorElement) {
    colorElement.addEventListener('click', function () {
        // on each color remove active class
        for (let i = 0; i < allPriorityColors.length; i++) {
            allPriorityColors[i].classList.remove('active');
        }
        //on clicked element add the active class
        colorElement.classList.add('active');
        modalPriorityColor = colorElement.getAttribute('data-color');
    })
})

