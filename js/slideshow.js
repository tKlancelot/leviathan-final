/******************************* */
/**** script carousel tarik **** */
/******************************* */


// recuperation dom

let content = document.querySelector('.content');

let next = document.getElementById("next");
let prev = document.getElementById("prev");

$(".myBody").css("overflow","hidden");
$(".cadre").css('background-color','var(--thema-darker)');

let currentIndex = 1;
let carre1, carre2, carre3, carre4, carre5,carre6;
let myArray = [carre1, carre2, carre3, carre4, carre5,carre6];
let myArrayContent = ["carre1", "carre2", "carre3", "carre4", "carre5", "carre6"];
let allDiv = [];

let page1 = {
    titrePage : "introduction",
    bgColor : "initial",
    source : "./assets/elements/picture-1.svg",
    numeroPage : 1,
    content1 : "Hi, Je m'appelle Tarik et je suis développeur web junior",
    content2 : "Arrivé au terme de ma reconversion professionnelle et fraîchement diplômé, je suis de plus en plus passionné par mon nouveau métier"
}

let page3 = {
    titrePage : "parcours linguistique",
    bgColor : "lightSkyBlue",
    source : "./assets/elements/picture-2.svg",
    numeroPage : 3,
    content1 : "Après un bac littéraire, j'ai fait des études d'espagnol et d'anglais à l'université Stendhal à Grenoble",
    content2 : "Je suis bilingue, j'ai récemment passé le TOEIC avec brio"
}

let page5 = {
    titrePage : "mécanicien couturier",
    bgColor : "lightSkyBlue",
    source : "./assets/elements/picture-3.svg",
    numeroPage : 5,
    content1 : "Il y a 10 ans, je me passionnais pour la mode, la couture et le dessin de figurine. Pendant 2 ans, j'ai appris à"+ 
    "\n exécuter une gamme de montage, diverses techniques de couture à plat, faire du moulage et dessiner des figurines de mode",
    content2 : "J'ai fait mes études au Lycée Octave Feuillet à Paris et j'ai obtenu le titre professionnel de métier de la mode vêtement flou"
}


let page7 = {
    titrePage : "grande distribution",
    bgColor : "lightSkyBlue",
    source : "./assets/elements/picture-4.svg",
    numeroPage : 7,
    content1 : "J'ai ensuite travaillé pendant 8 ans dans le commerce de grande distribution. J'ai notamment tenu le rôle de chargé de service ou ECPA (appellation Carrefour) pour la"+
    "\n majeure partie de ma carrière. Dès lors, j'avais pour missions principales de gérer une ligne de caisse, piloter le poste accueil, réaliser les"+
    "\n tâches administratives et comptables du magasin.",
    content2 : "J'ai développé un sens commercial et des qualités que je considère importantes comme la patience, la persévérance, l'adaptabilité et la rigueur"+
    "\n Par ailleurs , j'ai fait une formation pour ce poste à Vaires-Sur-Marne"
}

let page9 = {
    titrePage : "human booster",
    bgColor : "lightSkyBlue",
    source : "./assets/elements/picture-5.svg",
    numeroPage : 9,
    content1 : "Après 1 an de formation au sein de l'organisme human booster, me voilà fièrement diplômé"+
    "\n au titre de développeur web et web mobile",
    content2 : "À cet égard, je remercie HUMAN BOOSTER pour leur implication, leur sérieux et les efforts qu'ils ont déployé pour maintenir et poursuivre la formation en dépit du contexte sanitaire "
}

let page11 = {
    titrePage : "vers de nouveaux défis !",
    bgColor : "lightSkyBlue",
    source : "./assets/elements/picture-5.svg",
    numeroPage : 9,
    content1 : "Je me sens pleinement serein pour la suite du programme et prêt à relever des défis",
    content2 : "J'ai hâte d'intégrer une équipe, commencer à mettre en pratique les techniques acquises et en apprendre de nouvelles!"
}

let tableauContent = [page1,page3,page5,page7,page9,page11];

function initContent(){
    for (let i = 0; i < myArray.length; i++){
        let divContent = document.createElement("div");
        let divImage = document.createElement('div');
        let divCircle = document.createElement('div');
        let cadreText = document.createElement('div');
        cadreText.classList.add('cadreText');
        divImage.classList.add('divImage');
        divCircle.classList.add(myArrayContent[i]);
        let para = document.createElement("p");
        let para2 = document.createElement("p");
        let heading = document.createElement("h4");
        para.classList.add('paragraphe'); 
        para2.classList.add('paragraphe'); 
        heading.classList.add('heading'); 
        divContent.classList.add('divContent'); 
        cadreText.append(heading);
        cadreText.append(para);
        cadreText.append(para2);
        divContent.append(cadreText);
        divImage.append(divCircle);
        heading.textContent = tableauContent[i].titrePage;
        para.textContent = tableauContent[i].content1;
        para2.textContent = tableauContent[i].content2;
        myArray[i] = document.createElement('div');
        myArray[i].classList = "forme";
        myArray[i].append(divContent);
        myArray[i].append(divImage);
        // allDiv.push(myArray[i]);
    }
}

initContent();


// chaque div est positionne en absolute et décalée vers la droite

function initPositions(){
    for (let i = 0; i < myArray.length; i++){
        $(myArray[i]).css("position","absolute");
        $(myArray[i]).css("right","0%");
        $(myArray[i]).css("top","19.35%");
    }

    // maintenant chaque div a une position bien précise dans le cadre
    $(myArray[0]).css("transform","translate(-100%)");
    
    $(myArray[1]).css("right","0%");
    $(myArray[2]).css("right","-50%");
    $(myArray[3]).css("right","-100%");
    $(myArray[4]).css("right","-150%");
    $(myArray[5]).css("right","-200%");
}

initPositions();
// récupérer les div steps

let divSteps = document.querySelectorAll('.bandeSteps div');


function translateDiv(){
    for (let i = 0; i < myArray.length;i++){
        myArray[i].style.transition = "1s";
        myArray[i].style.transform += "translate(-50vw)";
    }
}

function allumerPaire(el1,el2,el3){
    $(divSteps[el1]).addClass('glowing');
    $(divSteps[el2]).addClass('glowing');
    $(divSteps[el3]).removeClass('glowing');
}



function deleteArray(){
    for (let i = 0; i < myArray.length;i++){
        myArray[i].remove();
    }
}

function initCarousel(){
    for (let i = 0; i < myArray.length;i++){
        content.append(myArray[i]);
    }

}

function translateOneDiv(el,value){
    $(myArray[el]).css("opacity","0");
    setTimeout(function(){
        $(myArray[el]).css("transform","translate("+value+"%)");
        setTimeout(function(){
            $(myArray[el]).css("opacity","1");
        },500);
    },500);
}



initCarousel();
allumerPaire(0,1,2);


function replacer(el){
    setTimeout(function(){
        $(myArray[el]).css("opacity","0");
        setTimeout(function(){
            $(myArray[el]).css("transform","translate(-100%)");
            $(myArray[el]).css("right","-200%");
            setTimeout(function(){
                $(myArray[el]).css("opacity","1");
            },500);     
        },500);
    },1);
}


next.addEventListener('click',function(){
    switch (currentIndex) {
        case 1:
            console.log('1');
            translateDiv();
            replacer(5);
            allumerPaire(1,2,0);
            currentIndex++;
        break;
        case 2:
            console.log('2');
            translateDiv();
            replacer(0);
            allumerPaire(2,3,1);
            currentIndex++;
        break;
        case 3:
            console.log('3');
            translateDiv();
            replacer(1);
            allumerPaire(3,4,2);
            currentIndex++;
        break;
        case 4:
            console.log('4');
            translateDiv();
            replacer(2);
            allumerPaire(4,5,3);
            currentIndex++;
        break;
        case 5:
            console.log('5');
            translateDiv();
            replacer(3);
            allumerPaire(5,0,4);
            currentIndex++;
        break;
        case 6:
            console.log('6');
            translateDiv();
            replacer(4);
            allumerPaire(0,1,5);
            currentIndex = 1;
        break;
    }
});

// gestion bouton switch nberPerFrame

let btnSwitch = document.querySelector('#switch');


function deleteCarousel(){
    for (let i = 0; i < myArray.length;i++){
        myArray[i].remove();
    }
    // allumerPaire(0,1,2);
}

function initNewPositions(){
    for (let i = 0; i < myArray.length; i++){
        $(myArray[i]).css("position","absolute");
        $(myArray[i]).css("right","25%");
        $(myArray[i]).css("top","19.35%");
        $(myArray[i]).css("transform","initial");
        $(myArray[i]).css("overflow","hidden");
    }
    $(myArray[0]).css("z-index","50");
    
        $(".content").css("border","2px solid blue");
    // maintenant chaque div a une position bien précise dans le cadre
    // $(myArray[0]).css("transform","translate(0%)");
    
    // $(myArray[1]).css("right","0%");
    // $(myArray[2]).css("right","-50%");
    // $(myArray[3]).css("right","-100%");
    // $(myArray[4]).css("right","-150%");
    // $(myArray[5]).css("right","-200%");
}

let toggleNbPerFrame = false;

// btnSwitch.addEventListener("click",function(){
//     if(toggleNbPerFrame == false){
//         deleteCarousel();
//         initNewPositions();
//         setTimeout(function(){
//             initCarousel();
//         },1000);
//         toggleNbPerFrame = true;
//     }
//     else{
//         deleteCarousel();
//         initPositions();
//         setTimeout(function(){
//             initCarousel();
//         },1000);
//         toggleNbPerFrame = false;
//     }
// })