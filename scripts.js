/*
Gerado Bilbatua
Project 5
API integration
*/

//Data response object storage
let employeeArray = [];
//global modal variables
let counter = -1;
let cardss;
let modall;
let beforee;

function cardEmployee(){
        fetch('https://randomuser.me/api/?results=12').then(response => response.json()).then(data => {
            employeeArray.push(data);
              for(let i = 0; i<12; i++){
                 counter++;
                const firstName = data.results[i].name.first;
                const LastName = data.results[i].name.last;
                const email = data.results[i].email;
                const city = data.results[i].location.city;
                const picture = data.results[i].picture.medium;
                
                
                const card = `<div class="card" id = ${counter}>
                                <div class="card-img-container">
                                <img class="card-img" src="${picture}" alt="profile picture">
                                </div>
                                <div class="card-info-container">
                                <h3 id="name" class="card-name cap">${firstName} ${LastName}</h3>
                                <p class="card-text">${email}</p>
                                <p class="card-text cap">${city}</p>
                                </div>
                                </div>`
        
                 gallery.innerHTML += card;
                 cardClicked();
                       
                }
        })
           
}


// Identifies the card that was clicked
function cardClicked(){
    const parents = document.querySelectorAll('.card');
    const children = document.querySelectorAll('.card-text');
    let id = 0;
    children.forEach(c  => {
        c.addEventListener('click', (e) => {},true)
    })

    parents.forEach(c  => {
        c.addEventListener('click', (e) => {
        id = e.currentTarget.getAttribute('id');
        //console.log(id);
        cardInfo(id);
    },true)
    })
 
}

// Gets employee info from the card that was selected
function cardInfo(id){
    let picture;
    let email;
    let city;
    let cellNumber;
    let streetNumber;
    let streetName;
    let state;
    let postCode;
    let birthday;
    let firstName;
    let LastName;

    employeeArray.forEach( o => {
        picture = o.results[id].picture.medium;
        email = o.results[id].email;
        city = o.results[id].location.city;
        cellNumber = o.results[id].cell;
        streetNumber = o.results[id].location.street.number;
        streetName = o.results[id].location.name;
        state = o.results[id].location.state;
        postCode = o.results[id].location.postcode;
        birthday = o.results[id].dob.date;
        firstName = o.results[id].name.first;
        LastName = o.results[id].name.last;

        })
modal(picture,email,city,cellNumber,streetNumber,streetName,state,postCode,birthday,firstName,LastName);

}


function modal(picture,email,city,cellNumber,streetNumber,streetName,state,postCode,birthday,firstName,LastName){
     cardss = document.querySelectorAll('.card');
     modall = document.createElement('div');
     beforee = document.querySelector('script');

    modall.setAttribute('Class','modal-container');

    cardss.forEach(c =>{

        c.addEventListener('click', (e) =>  {
           
             document.body.insertBefore(modall, beforee).innerHTML =  `<div class="modal">
             <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
             <div class="modal-info-container">
                 <img class="modal-img" src="${picture}" alt="profile picture">
                 <h3 id="name" class="modal-name cap">${firstName} ${LastName}</h3>
                 <p class="modal-text">${email}</p>
                 <p class="modal-text cap">${city}</p>
                 <hr>
                 <p class="modal-text">${cellNumber}</p>
                 <p class="modal-text">${streetNumber} ${streetName}, ${state},  ${postCode}</p>
                 <p class="modal-text">Birthday: ${birthday}</p>
             </div>`
        
})
        
        });
        //asynchronus delay
        setTimeout(closeModal,200); //waits for card modal to be available...
}

//Closes modal view when the 'X' button is clicked
function closeModal(){
    const closeButton = document.querySelector('.modal-close-btn');
    const modal = document.querySelector('.modal-container');
    closeButton.addEventListener('click', (e) =>  {
    modal.remove();
    })

}

//Fetch employee cards from external server by using fetch API
cardEmployee();



    


        
        
        
        