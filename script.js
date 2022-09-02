let form = document.querySelector('form');

let store = {};

function handler(event){
    event.preventDefault();
    store.name = form.elements.name.value;
    store.email = form.elements.email.value;
    store.color =form.elements.color.value;
    store.check = form.elements.check.checked;
    store.rating = form.elements.rating.value;
    store.hobby = form.elements.hobby.value;
    store.movieChoice = form.elements.choice.value;
}
form.addEventListener('submit',handler);