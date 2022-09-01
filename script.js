let form = document.querySelector('form');

let storage = {};

function handler(event){
    event.preventDefault();
    storage.email = form.elements.email.value;
    storage.gender = form.elements.gender.value;
    storage.terms = form.elements.checkbox.checked;
}

form.addEventListener('submit',handler);