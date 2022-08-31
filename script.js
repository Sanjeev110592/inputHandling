let email = document.querySelector('#email') ;
let gender = document.querySelector('#gender');
let check = document.querySelector('#check');

let store = {} ;

function handlerEmail(event){
    store.emeil = event.target.value ;
}
email.addEventListener('input',handlerEmail) ;

function handlerGender(event){
    store.gender = event.target.value ;
}
gender.addEventListener('input',handlerGender) ;

function handlerCheck(event){
    store.check = event.target.checked ;
    // console.dir(event.target) ;
}
check.addEventListener('input',handlerCheck) ;
console.log(store) ;