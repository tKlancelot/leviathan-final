// import CreateBandeBouton from '../js/functions/createBandeBouton.js';

function Parcours(){

    let theBody = document.querySelector('.body');
    let loader = document.querySelector('.cadreLoader');
    let cadreConteneur = document.createElement('div');
    let contenu = document.createElement('div');
    let bandeBouton = document.createElement('div');
    bandeBouton.classList = "bandeBouton";

    let cadreLeftArrow = document.createElement('div');
    let ornementCentre = document.createElement('div');
    let cadreRightArrow = document.createElement('div');
    cadreLeftArrow.classList = "zoneBouton";
    cadreRightArrow.classList = "zoneBouton";
    ornementCentre.classList = "zoneBouton";


    bandeBouton.append(cadreLeftArrow);
    bandeBouton.append(ornementCentre);
    bandeBouton.append(cadreRightArrow);

    let boutonPrev = document.createElement('button');
    boutonPrev.classList = "boutonPrev";
    cadreLeftArrow.append(boutonPrev);

    let boutonNext = document.createElement('button');
    boutonNext.classList = "boutonNext";
    cadreRightArrow.append(boutonNext);
    

    cadreConteneur.classList = "cadreConteneur";
    contenu.classList = "divContenu";
    


    let myCadre = document.createElement("div");
    myCadre.classList.add('flexColumn');
    myCadre.classList.add('bgBobines');
    let pageGauche = document.createElement('div');
    let pageDroite = document.createElement('div');
    pageGauche.classList = "pageGauche";
    pageDroite.classList = "pageDroite";
    myCadre.append(pageGauche);
    myCadre.append(pageDroite);

    // initialiser le carousel

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

    let pageArray = [page1, page3, page5, page7, page9];

    let zoneTitre = document.createElement('div');
    let contentImage = document.createElement('img');

    let zoneLegend = document.createElement('div');
    let textLegend1  = document.createElement('p');
    let zoneLegend2 = document.createElement('div');
    let textLegend2  = document.createElement('p');

    let zone0 = document.createElement('div');
    let logo0 = document.createElement('img');
    zone0.append(logo0);
    zone0.classList = "zoneContent";

    let zoneNumero = document.createElement('div');
    zoneNumero.classList = "zoneNumero";
    let zoneNumeroGauche = document.createElement('div');
    zoneNumeroGauche.classList = "zoneNumeroGauche";


    zoneTitre.classList = "zoneTitre";
    zoneLegend.classList = "zoneLegend";
    zoneLegend2.classList = "zoneLegend";


    zoneLegend.append(textLegend1);
    zoneLegend2.append(textLegend2);

    textLegend1.classList = "legend";
    textLegend2.classList = "legend";


    let carouselInit = 0;
    let doublePageIndex = 0;

    function initCarousel(){
        pageDroite.append(zoneTitre);
        pageDroite.style.backgroundColor = page1.bgColor;
        zoneTitre.textContent = page1.titrePage;
        textLegend1.textContent = page1.content1;
        textLegend2.textContent = page1.content2;
        zoneNumero.textContent = page1.numeroPage;
        zoneNumeroGauche.textContent = (page1.numeroPage-1);
        logo0.src = page1.source;
        pageDroite.append(zoneLegend);
        pageDroite.append(zoneLegend2);
        pageDroite.append(zoneNumero);
        pageGauche.append(zone0);
        pageGauche.append(zoneNumeroGauche);
        carouselInit = 1;
        boutonPrev.setAttribute("disabled","");
    }

    

    
    //repositionnement dans le dom
 

    initCarousel();


    function pageSuivante(){
        if(doublePageIndex < pageArray.length){
            boutonPrev.removeAttribute('disabled');
            doublePageIndex+=1;
            zoneTitre.textContent = pageArray[doublePageIndex].titrePage;
            textLegend1.textContent = pageArray[doublePageIndex].content1;
            textLegend2.textContent = pageArray[doublePageIndex].content2;
            zoneNumero.textContent = pageArray[doublePageIndex].numeroPage;
            zoneNumeroGauche.textContent = (pageArray[doublePageIndex].numeroPage-1);
            logo0.src = pageArray[doublePageIndex].source;
            console.log(doublePageIndex);
            if(doublePageIndex == pageArray.length-1){
                console.log("arrive au bout");
                doublePageIndex = (pageArray.length-1);
                boutonNext.setAttribute('disabled','');
            }
        }
    }

    function pagePrecedente(){
        if(doublePageIndex >= 1){
            boutonNext.removeAttribute('disabled');
            doublePageIndex-=1;
            zoneTitre.textContent = pageArray[doublePageIndex].titrePage;
            textLegend1.textContent = pageArray[doublePageIndex].content1;
            textLegend2.textContent = pageArray[doublePageIndex].content2;
            zoneNumero.textContent = pageArray[doublePageIndex].numeroPage;
            zoneNumeroGauche.textContent = (pageArray[doublePageIndex].numeroPage-1);
            logo0.src = pageArray[doublePageIndex].source;
            console.log(doublePageIndex);
            if(doublePageIndex == 0){
                console.log('arrive au debut');
                boutonPrev.setAttribute("disabled","");
            }
        }
    }

    boutonPrev.addEventListener('click',pagePrecedente);
    boutonNext.addEventListener('click',pageSuivante);
    let boutonCentre = document.querySelector('.boutonCentre');


    document.body.append(cadreConteneur);
    cadreConteneur.append(contenu);
    contenu.append(myCadre);
    contenu.append(bandeBouton);
};

Parcours();