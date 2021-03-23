let modal = null;
const focusablesSelector = "button, a, input, textarea"; 
let focusables = [];

const openModal = async function(e){
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    const target = e.target.getAttribute("href");
    if(target.startsWith('#')){
        console.log("ça passe !");
        modal = document.querySelector(target);
    }else{
        modal = await loadModal('modal-test.html#modal2');
    }
    
    modal.style.display = null;
    // dans la boite modale je recupere les elements qui correspondent au selecteur
    // je convertis la nodelist en tableau avec la methode Array.from
    focusables = Array.from(document.querySelectorAll(focusablesSelector));
    //pour l'accessibilité
    //par défaut le premier element sera focusable
    focusables[18].focus();
    modal.setAttribute('aria-hidden','false');
    modal.setAttribute('aria-modal','true');
    modal.addEventListener('click',closeModal);
    modal.querySelector('.js-close').addEventListener('click',closeModal);
    modal.querySelector('.js-modal-stop').addEventListener('click',stopPropagation);
}

const closeModal = function(e){
    if(modal === null){
        return;
    }
    e.preventDefault();
    //pour l'accessibilité
    modal.setAttribute('aria-hidden','true');
    modal.setAttribute('aria-modal','false');
    modal.removeEventListener("click",closeModal);
    modal.querySelector('.js-close').removeEventListener('click',closeModal);
    modal.querySelector('.js-modal-stop').removeEventListener('click',stopPropagation); 
    //event pour ecouter la fin de l'animation
    const hideModal = function(){
        modal.style.display = "none";
        modal.removeEventListener("animationend",hideModal);
        modal = null;
    }
    modal.addEventListener("animationend",hideModal);
}

const loadModal = async function(url){
    const html = fetch(url).then(response => response.text());
    return html
}

const stopPropagation = function(e){
    // empêche la propagation de l'évènement vers le parent
    e.stopPropagation();
}

const focusInModal = function(e){
    e.preventDefault();
    //focus sur le 1er 
    // recuperer le premier element de la boite modale qui possede l'attribut :focus
    // console.log(focusables);
    let index = focusables.findIndex(f => f === modal.querySelector(':focus'))
    if(e.shiftKey === true){
        index--;
        // alert('ok');
    }else{
        index++;
    }
    if(index >= focusables.length){
        index = 0;
    }
    if(index < 18){
        index = focusables.length - 1;
    }
    focusables[index].focus();
}

document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click',openModal);
})

window.addEventListener('keydown',function(e){
    if(e.key === "Escape" || e.key === "Esc"){
        console.log('ok');
        closeModal(e);
    }
    //lorsqu'on est dans la modale, je veux que les tab reste dans l'evenement
    if(e.key == "Tab" && modal != null){
        focusInModal(e);
    }
})