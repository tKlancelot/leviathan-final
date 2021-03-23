// // loader

let myBody = document.querySelector('.myBody');
console.log(myBody);

let myRequest = new XMLHttpRequest();
let loaderDiv = document.createElement("div");
let loader = document.createElement("div");
let div1, div2;
div1 = document.createElement('div');
div2 = document.createElement('div');
loaderDiv.classList.add('loaderDiv');
loader.classList.add('lds-ripple');
loader.append(div1);
loader.append(div2);
loaderDiv.append(loader);
myBody.append(loaderDiv);
$('.navbar').css("display","none");
$('.cadre').css("display","none");


myRequest.open("GET", "./assets/image-test-3.jpg");

myRequest.send();
console.log("debug");

myRequest.addEventListener("load",function(){
    if(myRequest.readyState == 4){
        setTimeout(function(){
            loaderDiv.remove();
            console.log(myRequest.responseURL);
            $('.navbar').css("display","flex");
            $('.cadre').css("display","flex");
            artwork();
        },2000);
    }
    else{
    }   
});


function artwork(){


    let cadre = document.querySelector('.cadre');
    $(cadre).css('background-color','var(--thema-darker');


    // créons un cadre conteneur de 80% de la largeur ecran

    let conteneur = document.createElement('div');
    cadre.append(conteneur);

    // le cadre

    $(cadre).css('display','flex');
    $(cadre).css('flex-direction','column');

    // le conteneur

    conteneur.classList.add('diapoConteneur');

    // créons 5 div dans un display flex

    let case1, case2, case3, case4, case5;
    let monTableau = [case1,case2,case3,case4,case5];
    let idArray = ["case1","case2","case3","case4","case5"];
    let pictureSrc = ["./assets/image-test.png","./assets/image-test-2.jpg","./assets/image-test-3.jpg","./assets/image-test-4.jpeg","./assets/image-test-5.jpg"];

    for (let i = 0; i < monTableau.length; i++){
        let oneImage = document.createElement('div');
        oneImage.style.backgroundImage = 'url(' + pictureSrc[i] + ')';
        oneImage.classList.add("oneImage");
        monTableau[i] = document.createElement('div');
        monTableau[i].classList.add('divAbsolu');
        monTableau[i].append(oneImage);
        monTableau[i].id = idArray[i];
    }

    conteneur.append(monTableau[0]);
    conteneur.append(monTableau[1]);
    conteneur.append(monTableau[2]);
    conteneur.append(monTableau[3]);
    conteneur.append(monTableau[4]);

    function initState(){
        $('#case2').css('transform','translate(-400px, 100px)');
        $('#case4').css('transform','translate(400px, 100px)');
        $('#case1').css('transform','translate(-700px, 100px)scale(0.75)');
        $('#case5').css('transform','translate(700px, 100px)scale(0.75)');
        $('#case3').css('transform','translate(0px, 100px)scale(1.25)');
        $('#case3').css('filter','grayscale(0)');
    }

    initState();

    function resetZIndex(){
        for (let i = 0; i < monTableau.length; i++){
            monTableau[i].style.zIndex = 0;
        }
    }

    function switchGrayScale(element1,element2){
        element1.css('filter','grayscale(1)');
        element2.css('filter','grayscale(0)');
    }


    // creons un panneau d'action

    let panneauAction = document.createElement('div');
    panneauAction.classList.add('darkNeon','panneauAction');
    $(panneauAction).css('background-color','var(--thema-darkest');
    cadre.append(panneauAction);

    // creons un bouton d'action

    let boutonAction = document.createElement('button');

    boutonAction.textContent = "action";
    $(boutonAction).css('margin','auto');
    $(boutonAction).css('width','100px');
    $(boutonAction).css('height','30px');
    boutonAction.classList.add('boutonTk',"darkNeon");
    panneauAction.append(boutonAction);

    // test action


    let currentIndex = 1;
    let premierPassage = false;

    boutonAction.addEventListener('click',function(){
        switch (currentIndex) {
            case 1:
                resetZIndex();
                //instructions
                console.log(currentIndex);
                console.log(monTableau[1].style.zIndex);
                if(premierPassage == true){
                    $('#case5').css("z-index",'9999');
                }
                $('#case3').css('transform','translate(-400px, 100px)scale(1)');  
                $('#case4').css('transform','translate(0px, 100px)scale(1.25)');  
                $('#case5').css('transform','translate(400px, 100px)scale(1)');  
                $('#case1').css('transform','translate(700px, 100px)scale(0.75)');  
                $('#case2').css('transform','translate(-700px, 100px)scale(0.75)');
                switchGrayScale($('#case3'),$('#case4'));  
                currentIndex++;
            break;
            case 2:
                //instructions
                console.log(currentIndex);
                $('#case1').css("z-index",'9999');
                $('#case3').css('transform','translate(-700px, 100px)scale(0.75)');  
                $('#case4').css('transform','translate(-400px, 100px)scale(1)');  
                $('#case5').css('transform','translate(0px, 100px)scale(1.25)');  
                $('#case1').css('transform','translate(400px, 100px)scale(1)');  
                $('#case2').css('transform','translate(700px, 100px)scale(0.75)');  
                switchGrayScale($('#case4'),$('#case5'));  
                currentIndex++;
            break;
            case 3:
                //instructions
                console.log(currentIndex);
                $('#case2').css("z-index",'9999');
                $('#case3').css('transform','translate(700px, 100px)scale(0.75)');
                $('#case4').css('transform','translate(-700px, 100px)scale(0.75)');
                $('#case5').css('transform','translate(-400px, 100px)scale(1)');
                $('#case1').css('transform','translate(0px, 100px)scale(1.25)');
                $('#case2').css('transform','translate(400px, 100px)scale(1)');
                switchGrayScale($('#case5'),$('#case1'));  
                currentIndex++;
            break;
            case 4:
                $('#case3').css("z-index",'9999');
                $('#case3').css('transform','translate(400px, 100px)scale(1)');
                $('#case4').css('transform','translate(700px, 100px)scale(0.75)');
                $('#case5').css('transform','translate(-700px, 100px)scale(0.75)');
                $('#case1').css('transform','translate(-400px, 100px)scale(1)');
                $('#case2').css('transform','translate(0px, 100px)scale(1.25)');
                switchGrayScale($('#case1'),$('#case2'));  
                //instructions
                console.log(currentIndex);
                currentIndex++;
            break;
            case 5:
                //instructions
                console.log(currentIndex);
                if(premierPassage == true){
                    $('#case5').css("z-index",'0');
                }
                $('#case4').css("z-index",'9999');
                $('#case3').css('transform','translate(0px, 100px)scale(1.25)');
                $('#case4').css('transform','translate(400px, 100px)scale(1)');
                $('#case5').css('transform','translate(700px, 100px)scale(0.75)');
                $('#case1').css('transform','translate(-700px, 100px)scale(0.75)');
                $('#case2').css('transform','translate(-400px, 100px)scale(1)');
                switchGrayScale($('#case2'),$('#case3'));  
                currentIndex = 1;
                premierPassage = true;
            break;
        default:
            console.log('je passe dans défault');
        }

    })


    // fonctionnalités supplémentaires

    // ajouter un bouton info au panneau info

    let divToggle = document.createElement("div");
    let myCross = document.createElement("button");
    let toggled = false;

    divToggle.classList.add('divToggle','darkNeon');
    myCross.classList.add('theCross');

    document.body.append(divToggle);
    divToggle.append(myCross);
    let myH3 = document.createElement('h3');
    myH3.classList.add('titrePanneau');
    myH3.textContent = "étapes de réalisation";

    let conteneurAccordeon = document.createElement("div");
    conteneurAccordeon.classList.add('conteneurAccordeon');

    let accordeon1,accordeon2,accordeon3;
    let accordeonHead1,accordeonHead2,accordeonHead3;
    let accordeonContent1,accordeonContent2,accordeonContent3;
    let toggleAccordeon1,toggleAccordeon2,toggleAccordeon3;

    let arrayAccordeon = [accordeon1,accordeon2,accordeon3];
    let arrayAccordeonHead = [accordeonHead1,accordeonHead2,accordeonHead3];
    let arrayAccordeonContent = [accordeonContent1,accordeonContent2,accordeonContent3];
    let arrayToggle = [toggleAccordeon1,toggleAccordeon2,toggleAccordeon3];

    let arrayTitle = ["step 1 - configurer le dom","step 2 - initialiser le carousel", "step 3 - créer une fonction switchCarousel"];
    let arrayContent = ["Créer un cadre (une div en display flex) un cadre conteneur avec margin:auto et à l'interieur superposer 5 div" +
    "\n en position absolute de 2 'size small', 2 'size medium' et une qu'on placera au centre 'size large'. Enfin créer un panneau contenant un bouton d'action.",
    "\nPlacer les div absolute en les répartissant équitablement dans la div conteneur. Pour ce faire, on peut utiliser jquery", 
    "Créer un évènement de type click sur le bouton d'action et créer des cas sur une fonction switch. Dans les instructions, pour chaque cas"+
    " appliquer des transformations sur chaque div et enlever le filter grayscale sur la div du centre. Modifier le z-index de l'elément qui passe par dessus les autres."
    ];

    //dom
    for (let i = 0; i < arrayAccordeon.length;i++){
        arrayAccordeon[i] = document.createElement("div");
        arrayAccordeon[i].classList.add('accordeon');
        arrayToggle[i] = false;

        arrayAccordeonHead[i] = document.createElement("div"); 
        arrayAccordeonHead[i].classList.add('accordeonHead');
        arrayAccordeonHead[i].textContent = arrayTitle[i];

        arrayAccordeonContent[i] = document.createElement('p');
        arrayAccordeonContent[i].classList.add("accordeonContent");
        
        arrayAccordeon[i].append(arrayAccordeonHead[i]);

        conteneurAccordeon.append(arrayAccordeon[i]);
    }

    //action
    for (let i = 0; i < arrayAccordeon.length;i++){
        arrayAccordeon[i].append(arrayAccordeonContent[i]);
        arrayAccordeonHead[i].addEventListener("click",function(){
            if(arrayToggle[i] == false){
                arrayAccordeonContent[i].classList.remove("accordeonContent");
                arrayAccordeonContent[i].classList.add("ouvrir");
                arrayToggle[i] = true;
                setTimeout(function(){
                    arrayAccordeonContent[i].textContent = arrayContent[i];
                },500);
            }
            else{
                arrayAccordeonContent[i].classList.remove("ouvrir");
                arrayAccordeonContent[i].classList.add("accordeonContent");
                arrayToggle[i] = false;
                setTimeout(function(){
                    arrayAccordeonContent[i].textContent = "";
                },500);
            }
        })
    }




    console.log(arrayAccordeon);

    myCross.addEventListener("click",function(){
        if(toggled == false){
            myCross.classList.add('fermer');
            divToggle.style.width = "300px";
            divToggle.style.height = "auto";
            setTimeout(function(){
                divToggle.append(myH3);
                divToggle.append(conteneurAccordeon);
            },800);
            toggled = true;
        }
        else{
            divToggle.style.width = "38px";
            divToggle.style.height = "38px";
            myCross.classList.remove('fermer');
            conteneurAccordeon.remove();
            myH3.remove();
            toggled = false;
        }
    })
}

// artwork();


// var rect = mesImages[0].getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
// var rect2 = mesImages[2].getBoundingClientRect();
// console.log(rect2.top, rect2.right, rect2.bottom, rect2.left);
// var rect3 = mesImages[1].getBoundingClientRect();
// console.log(rect3.top, rect3.right, rect3.bottom, rect3.left);


//prochaine etape

// superposer 4 div en mode absolute

// faire une fonction init() translate pour chacune des div

/* ************************************ */
/* ************************************ */
/* ************************************ */
/* code qui fonctionne pour 3 images ** */
/* ************************************ */
/* ************************************ */
/* ************************************ */

// let currentIndex = 1;
// let indice2 = 2;
// let indice3 = 3;
// let mesImages = document.querySelectorAll('.oneImage');
// let toggled = 0;


// let myParent = mesImages[1].parentNode;

// myParent.style.filter = "grayscale(0)";
// console.log(myParent.style.filter);

// let myParent2 = mesImages[0].parentNode;
// let myParent3 = mesImages[2].parentNode;

// boutonAction.addEventListener('click',function(){
//     switch (currentIndex) {
//     case 1:
//         console.log('case n 1');
//         myParent.style.zIndex = "0";
//         currentIndex++;
//         myParent2.style.zIndex = "0";
//         mesImages[0].style.transform = "translate(1000px)";
//         mesImages[1].style.transform = "translate(-500px) scale(0.747)";
//         mesImages[2].style.transform = "translate(-500px) scale(1.33)";
//         myParent3.style.filter = "grayscale(0)";
//         myParent.style.filter = "grayscale(1)";

//         break;
//         case 2:
//         console.log('case n 2');
//         // myParent2.style.border = "8px solid red";
//         myParent2.style.zIndex = "9999";
//         // myParent2.style.zIndex = "0";
//         currentIndex++;
//         mesImages[0].style.transform += "translate(-500px) scale(1.33)";
//         mesImages[1].style.transform += "translate(1340px) scale(1)";
//         mesImages[2].style.transform += "translate(-376px) scale(0.747)";
//         myParent2.style.filter = "grayscale(0)";
//         myParent3.style.filter = "grayscale(1)";
//         break;
//         case 3:
//         console.log('case n 3');
//         myParent.style.zIndex = "9999";
//         mesImages[0].style.transform += "translate(-376px) scale(0.747)";
//         mesImages[2].style.transform += "translate(1000px)";
//         mesImages[1].style.transform += "translate(-670px) scale(1.33)";
//         myParent.style.filter = "grayscale(0)";
//         myParent2.style.filter = "grayscale(1)";
//         // myParent.style.zIndex = "initial";
//         currentIndex = 1;
//         break;
//     default:
//         currentIndex = 1;
//         console.log('case default');
//     }
// })



// if(currentIndex < mesImages.length){
//     mesImages[0].style.backgroundImage = 'url(' + pictureSrc[currentIndex] + ')';
//     currentIndex++;
// }
// else{
//     currentIndex = 0;
//     mesImages[0].style.backgroundImage = 'url(' + pictureSrc[currentIndex] + ')';
//     currentIndex++;
// }
// if(indice2 < mesImages.length){
//     mesImages[1].style.backgroundImage = 'url(' + pictureSrc[indice2] + ')';
//     indice2++;
// }
// else{
//     indice2 = 0;
//     mesImages[1].style.backgroundImage = 'url(' + pictureSrc[indice2] + ')';
//     indice2++;
// }
// if(indice3 < mesImages.length){
//     mesImages[2].style.backgroundImage = 'url(' + pictureSrc[indice3] + ')';
//     indice3++;
//     if(indice3 == 2){
//         // alert('stop');
//     }
// }
// else{
//     indice3 = 0;
//     mesImages[2].style.backgroundImage = 'url(' + pictureSrc[indice3] + ')';
//     indice3++;
// }