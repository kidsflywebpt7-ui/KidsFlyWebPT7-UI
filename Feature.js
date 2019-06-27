// Menu Button show/hide function

function myMenu(){
document.getElementById("myMenu").classList.toggle("show");
}


// Card expansion functionality

class Card{
constructor(element){

this.element = element;

this.expandBtn = element.querySelector('.expandBtn');

this.expandBtn.textContent = 'open';

this.expandBtn.addEventListener('click', () => {
this.expandCard();

});
}
expandCard(){
this.element.classList.toggle('card-open');
}
}

let cards = document.querySelectorAll('.card');
cards.forEach(card => {
new Card(card);
});

