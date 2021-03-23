// déclaration DOM
let toggled = false;
let boutonBurger = document.getElementById('burger-icon');
let panneauDroit = document.querySelector('.panneauDroit');
let panneauGauche = document.querySelector('.panneauGauche');


boutonBurger.addEventListener('click',function(){
    if(toggled == false){
        this.parentElement.classList.add('translateNavbar');
        this.classList.add('burgerToggled');
        toggled = true;
    }
    else{
        this.parentElement.classList.remove('translateNavbar');
        this.classList.remove('burgerToggled');
        toggled = false;
    }
})

