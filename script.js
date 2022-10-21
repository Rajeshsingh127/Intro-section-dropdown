const toggleElm = document.querySelector('.mobile-toggle');
const overlay = document.querySelector(".mobile-overlay");
const dropdownBtns = document.querySelectorAll("nav button");

const sideNavC = [toggleElm,overlay];


sideNavC.forEach((el) =>{
    el.addEventListener('click',(event) =>{
        event.preventDefault();
        handleNav();
    })
})


dropdownBtns.forEach((el) => {
    el.addEventListener('click',(e) => {
        e.preventDefault();
        handleDropdown(el);
    })
})


function handleDropdown(el){
    setTimeout(() => {
        el.nextElementSibling.classList.toggle("shift");    
    }, 0);
    el.nextElementSibling.classList.toggle("reveal");
    
    
}


function handleNav(){
if(isAriaExpanded(toggleElm)){

}

toggleElement(toggleElm);
}


function toggleElement(elm){
    let expanded  = isAriaExpanded(elm);
    elm.setAttribute("aria-expanded",!expanded);

}

function isAriaExpanded(elm){
    return elm.getAttribute('aria-expanded') == 'true' ? true: false;
}