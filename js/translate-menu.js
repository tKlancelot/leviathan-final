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

// cadre menu absolu

let divMenu = document.createElement('div');
let cadreMenu = document.createElement('div');
cadreMenu.classList.add('cadreAbsolu');

let adminLink = document.createElement('a');
adminLink.href = "admin.php";
adminLink.textContent = "admin";
let carteVisiteLink = document.createElement('a');
carteVisiteLink.href = "carte-visite.php";
carteVisiteLink.textContent = "carte de visite";
let contactMeLink = document.createElement('a');
contactMeLink.href = "contact-me.php";
contactMeLink.textContent = "contactez-moi";
let parcoursLink = document.createElement('a');
parcoursLink.href = "parcours.php";
parcoursLink.textContent = "parcours";
let homeLink = document.createElement('a');
homeLink.href = "index.php";
homeLink.textContent = "accueil";


// croix 

let myCross = document.createElement('button');
myCross.classList.add('myCross');


cadreMenu.append(myCross);
myCross.addEventListener('click',function(){
    divMenu.remove();
})

cadreMenu.append(homeLink);
cadreMenu.append(carteVisiteLink);
cadreMenu.append(contactMeLink);
cadreMenu.append(parcoursLink);
cadreMenu.append(adminLink);
divMenu.append(cadreMenu);

divMenu.classList.add('divMenu');
cadreMenu.classList.add('darkNeon');
cadreMenu.classList.add('switch-frame');




function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.panneau-droit').insertBefore($('.panneau-gauche'));
        $('.myBody').css("max-height","100vh");

        if( document.body.contains( document.querySelector('.panneauGauche') ) ) {
        panneauGauche.append(panneauDroit);
        }
        boutonBurger.addEventListener("click",function(){
        this.parentElement.style.transform = "translate(0px)";
        document.body.append(divMenu);
        if(boutonBurger.classList.contains('burgerToggled')){
            boutonBurger.classList.remove('burgerToggled');
        }



      });

    } else {
    //   document.body.style.backgroundColor = "pink";
    }
}
  
var x = window.matchMedia("(max-width: 700px) and (orientation:portrait)")
myFunction(x)
x.addEventListener('click',myFunction) // Attach listener function on state changes