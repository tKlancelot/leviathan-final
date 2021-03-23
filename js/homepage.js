


// déclaration DOM

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
$('#main').css("display","none");
$('.navbar').css("display","none");
$('footer').css("display","none");


// myRequest.open("GET", "./index.php");
myRequest.open("GET", "./index.php");

myRequest.send();

myRequest.addEventListener("load",function(){
    if(myRequest.readyState == 4){
        setTimeout(function(){
            loaderDiv.remove();
            console.log(myRequest.responseURL);
            $('#main').css("display","flex");
            $('.navbar').css("display","flex");
            $('footer').css("display","flex");
            homePage();
        },2000);
    }
    else{
    }
});



function homePage(){


    $('.navbar').css('background-color','unset');
    
    let menuIcon = document.querySelector('.menu-icon');
    let btnLeft = document.querySelector("#btnLeft");
    let btnRight = document.getElementById("btnRight");
    let centerFrame = document.querySelector('.centerFrame');
    let messageBox = document.querySelector('.zoneLegend p');
    let boutonSwitch = document.getElementById('anim');
    let bigCircle = document.querySelector('.bigCircle');
    let leftPanel = document.querySelector('.smallCircle.left-panel');
    let rightPanel = document.querySelector('.smallCircle.right-panel');
    let allDots = document.querySelectorAll('.littleDot');
    let titreDiapo = document.querySelector('.panneauCentre h3');
    let bandeDiapo = document.querySelectorAll('#circleShow div');
    let frameCircle = document.querySelector('#frameCircle');
    
    let panneauContent = document.getElementById('circleShow');
    let panneauMain = document.getElementById('main');
    let panneauLegend = document.querySelector('.zoneLegend');
    let panneauDots = document.querySelector('.dotRow');
    let sectionLegend = document.querySelector('.section-legend');
    let footer = document.querySelector('footer');
    let copyright = document.querySelector('.copyright');
    
    // déclarations tableaux - variables
    
    const chemin = "url('./assets/icons/";
    let sphereLogo,sphereDesktop,sphereBalloons,sphereJoystick,sphereP5,sphereTrello,sphereRigorous;
    let sphereOpen,sphereLaptop,sphereGreatIdeas,sphereLogotype,sphereThree,sphereFigma,sphereCurious;
    let sphereDevWeb,sphereTablet,sphere3dfriendly,spherePictures,sphereJavaScript,sphereVsCode,sphereDedicated;
    
    let messageArray = [
        'Hey , je suis Tarik, un brand new dev !',
        'Concevoir des sites et des applications qui s\'adaptent au périphérique de l\'utilisateur',
        'je donne vie à des projets originaux 365 jours/an',
        'je crée mes propres logos sur figma, contribuant ainsi à une expérience utilisateur unique',
        'Mes librairies de prédilection et le langage javascript',
        'Quelques-uns de mes outils favoris',
        'implication, rigueur, soif d\'apprendre !'
    ];
    
    let titreArray = [
        "à propos de moi",
        "responsive websites",
        "créativité",
        "design",
        "boîte à outils",
        "environnement",
        "qualités"
    ]
    
    let tableauLeft = [
        [sphereOpen,"./assets/spheres/sphere-open.svg"],
        [sphereLaptop,"./assets/spheres/sphere-laptop.svg"],
        [sphereGreatIdeas,"./assets/spheres/sphere-greatIdeas.svg"],
        [sphereJoystick,"./assets/spheres/sphere-joystick.svg"],
        [sphereThree,"./assets/spheres/sphere-threeJs.svg"],
        [sphereFigma,"./assets/spheres/sphere-figma.svg"],
        [sphereRigorous,"./assets/spheres/sphere-rigueur.svg"],
    ]
    
    let tableauImages = [
        [sphereLogo,"./assets/spheres/sphere-logo.svg"],
        [sphereDesktop,"./assets/spheres/sphere-desktop.svg"],
        [sphereBalloons,"./assets/spheres/sphere-balloon.svg"],
        [sphereLogotype,"./assets/spheres/sphere-logotype.svg"],
        [sphereP5,"./assets/spheres/sphere-p5.svg"],
        [sphereTrello,"./assets/spheres/sphere-trello.svg"],
        [sphereCurious,"./assets/spheres/sphere-curious.svg"]
    ];
    
    let tableauRight = [
        [sphereDevWeb,"./assets/spheres/sphere-dev-web.svg"],
        [sphereTablet,"./assets/spheres/sphere-tablet.svg"],
        [sphere3dfriendly,"./assets/spheres/sphere-3d-friendly.svg"],
        [spherePictures,"./assets/spheres/sphere-pictures.svg"],
        [sphereJavaScript,"./assets/spheres/sphere-javaScript.svg"],
        [sphereVsCode,"./assets/spheres/sphere-vscode.svg"],
        [sphereDedicated,"./assets/spheres/sphere-dedicated.svg"]
    ]
    
    
    
    let iconIndex = 0;
    let currentIndex = 0;
    let iconArray = ["-0px","-64px"];
    
    
    // init array spheres
    function fillArray(tableau){
        for (let i = 0; i < tableau.length; i++){
            tableau[i][0] = document.createElement('img');
            tableau[i][0].setAttribute('src',tableau[i][1]);
            tableau[i][0].classList.add('fadeIn');
            // console.log(tableau[i]);
        }
    }
    
    fillArray(tableauImages);
    fillArray(tableauLeft);
    fillArray(tableauRight);
    
    
    
    // function initCenterFrame(){
    //     centerFrame.style.backgroundImage = "url('./assets/icons/bande-icones.svg";
    //     centerFrame.style.backgroundPosition = iconArray[iconIndex];
    // }
    
    
    
    // btnRight.addEventListener('click',function(){
    //     if (iconIndex < iconArray.length-1){
    //         iconIndex++;
    //         centerFrame.style.backgroundPositionX = iconArray[iconIndex];
    //         if(iconIndex == iconArray.length-1){
    //             console.log("arrive au bout");
    //             // désactiver bouton
    //             this.setAttribute('disabled',"");
    //         }
    //     }
    //     else{
    //         //rien faire
    //     }
    //     switchContent();
    // })
    
    // btnRight.textContent = "switch";
    // btnRight.classList.add('darkNeon');
    
    btnRight.addEventListener('click',function(){
        if (iconIndex < iconArray.length-1){
            // btnRight.style.transform += "rotate(180deg)"; 
            btnRight.style.backgroundImage = "url('./assets/icons/icon-library.svg')";
            iconIndex++;
        }
        else{
            //rien faire
            iconIndex = 0;
            btnRight.style.backgroundImage = "url('./assets/icons/icon-testimonial.svg')";
            // btnRight.style.transform += "rotate(180deg)"; 
            console.log(iconIndex);
    
        }
        switchContent();
    })
    
    
    
    
    
    
    
    function initBigCircle(){
        // console.log(sphereLogo);
        bigCircle.append(tableauImages[0][0]);
        leftPanel.append(tableauLeft[0][0]);
        rightPanel.append(tableauRight[0][0]);
        titreDiapo.textContent = titreArray[currentIndex];
    }
    
    
    
    boutonSwitch.addEventListener("click",function(){
        parcours();
        frameCircle.style.transform += 'rotate(45deg)';
        bigCircle.style.transform += "rotate(-45deg)";
    })
    
    
    initBigCircle();
    
    
    
    function parcours(){
        if (currentIndex < tableauImages.length-1){
            tableauImages[currentIndex][0].remove();
            tableauLeft[currentIndex][0].remove();
            tableauRight[currentIndex][0].remove();
            allDots[currentIndex].classList.remove('active-dot');
            currentIndex++;
            bigCircle.append(tableauImages[currentIndex][0]);
            leftPanel.append(tableauLeft[currentIndex][0]);
            rightPanel.append(tableauRight[currentIndex][0]);
            tableauImages[currentIndex][0].classList.add('flipMe');
            allDots[currentIndex].classList.add('active-dot');
            messageBox.textContent = messageArray[currentIndex];
            titreDiapo.textContent = titreArray[currentIndex];
        }
        else{
            tableauImages[currentIndex][0].remove();
            tableauLeft[currentIndex][0].remove();
            tableauRight[currentIndex][0].remove();
            allDots[currentIndex].classList.remove('active-dot');
            currentIndex = 0;
            tableauImages[currentIndex][0].classList.add('flipMe');
            bigCircle.append(tableauImages[currentIndex][0]);
            leftPanel.append(tableauLeft[currentIndex][0]);
            rightPanel.append(tableauRight[currentIndex][0]);
            allDots[currentIndex].classList.add('active-dot');
            messageBox.textContent = messageArray[currentIndex];
            titreDiapo.textContent = titreArray[currentIndex];
        }
    }
    
    let cadreTestimonial = document.createElement('div');
    cadreTestimonial.classList.add('cadreTestimonial');
    let cadre1,cadre2,cadre3;
    let avatar1,avatar2,avatar3;
    let para1,para2,para3;
    let auteur1,auteur2,auteur3;
    let cadreArray = [cadre1,cadre2,cadre3];
    let cadreContent1 = [avatar1,avatar2,avatar3];
    let cadreContent2 = [para1,para2,para3];
    let cadreContent3 = [auteur1,auteur2,auteur3];
    let messageContents = [
        "Je recommande Tarik à toute entreprise désireuse de renforcer son équipe avec quelqu'un de sérieux et fiable : sa capacité à s’impliquer et à mener un travail de façon rigoureuse et structuré en fait un atout majeur.",
        "En plus de ses compétences techniques, Tarik a été extrêmement performant dans son apprentissage et dans les mises en pratiques confiés.  Son autonomie et sa remise en question ont été des éléments très remarqués et appréciés de ses formateurs. La pertinence et la justesse de ses propos sont également à souligner.",
        "Tarik a été recruté pour intégrer la formation DWWM sur une soixantaine de candidats pour 15 places. Il s'est montré à la hauteur : j'ai pu suivre sa progression tout au long de son parcours chez Human Booster. Sa soif de savoir et de connaissance l'ont fait progresser au-delà de nos espérances !"
    ];  
    let tableauAuteur = ['❝Aurélien❞','❝Yohan❞','❝Laetitia❞'];
    
    
    
    function creerPanneau(){
        for (let i = 0; i < cadreArray.length;i++){
            cadreArray[i] = document.createElement('div');
            cadreContent1[i] = document.createElement('div');
            cadreContent2[i] = document.createElement('p');
            cadreContent3[i] = document.createElement('div');
            cadreArray[i].classList.add('encadre');
            cadreContent1[i].classList.add('avatar');
            cadreContent2[i].classList.add('paragraphe');
            cadreContent3[i].classList.add('auteur');
            cadreArray[i].append(cadreContent1[i]);
            cadreArray[i].append(cadreContent2[i]);
            cadreArray[i].append(cadreContent3[i]);
            cadreTestimonial.append(cadreArray[i]);
            cadreContent2[i].textContent = messageContents[i];
            cadreContent3[i].textContent = tableauAuteur[i];
        }
    }
    
    creerPanneau();
    
    
    
    function switchContent(){
        if (iconIndex == 1){
            console.log("testimonials");
            titreDiapo.textContent = "testimonials";
            panneauContent.remove();
            panneauLegend.remove();
            panneauDots.remove();
            boutonSwitch.style.visibility = "hidden";
            sectionLegend.remove();
            panneauMain.append(cadreTestimonial);
        }
        else{
            cadreTestimonial.remove();
            titreDiapo.textContent = titreArray[currentIndex];
            boutonSwitch.style.visibility = "visible";
            panneauMain.append(panneauContent);
            panneauMain.append(sectionLegend);
            panneauMain.insertBefore(panneauContent,sectionLegend)
            sectionLegend.append(panneauLegend);
            footer.append(panneauDots);
            footer.insertBefore(panneauDots,copyright);
            
        }
    }
}

// homePage();





  