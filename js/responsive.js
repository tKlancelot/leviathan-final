

let myText = document.createElement('p');
myText.style.color = "white";
myText.style.padding = "1rem";
myText.textContent = "la version mobile de ce site est en cours de réalisation . . . ";

// condition responsive

function myFunction(x) {
    if (x.matches) { // If media query matches      
        responsive();
    } else {
        $("#accueilBody").css('background-image','url(./assets/elements/texture-dark.jpg)');
        $("#accueilBody").css('background-position','center -10px');
        $("#accueilBody").css('background-size','cover');
    }
}
  
// var x = window.matchMedia("(max-width: 780px) and (orientation:portrait)")
var x = window.matchMedia("(max-width: 800px)")
myFunction(x)
x.addEventListener('click',myFunction) // Attach listener function on state changes




// gestion de l'intersectionObserver

const ratio = 0.2;
const options = {
    root : null,
    rootMargin : "0px",
    threshold : ratio
}       
const handleIntersect = function(entries, observer){
    entries.forEach(function(entry){
        if (entry.intersectionRatio > ratio){
            console.log("visible");
            entry.target.classList.add("reveal-visible");
            console.log(entry.target.classList);
            //la hauteur de la div coulant vaut +50vh ?
            observer.unobserve(entry.target);
        }
        else{
            console.log("invisible");
        }
    })
    console.log("handle intersect");
}

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r);
});


function responsive(){
    $(".loaderDiv").remove();
    $(".myBody").css("background-image","unset");
    $(".myBody").css("background-color","var(--thema-dark)");
    // document.body.append(myText);




    // je veux une page scrollable de 800vh
    // chaque portion de 100vh constitue une section 
    // il y a des effets d'apparition des éléments sur chaque élément (parent) qui aura la classe reveal
    // et chacun des ses enfants reveal-1, reveal-2, reveal-3 apparaitra avec un delai différent

    $(".myBody").css("height","800vh");
    let mySectionArray = [];
    let nbrSection = 8;
    
    // créons ces sections
    // chaque section est un cadre contenant un sous cadre
    // chaque souscadre contient deux sous sections

    function createSection(){
        let myDiv = document.createElement('div');
        myDiv.classList.add("section-responsive");
        let sousDiv = document.createElement('div');
        sousDiv.classList.add('sousDiv');
        let sousSect1 = document.createElement('div');
        let sousSect2 = document.createElement('div');
        myDiv.append(sousDiv);
        sousDiv.append(sousSect1);
        sousDiv.append(sousSect2);
        mySectionArray.push(myDiv);
    }
    
    for (let i = 0; i < nbrSection; i++){
        createSection();
        $(".myBody").append(mySectionArray[i]);
        mySectionArray[i].id = "section-"+i;
    }

    // chaque sous section a la classe sousSect
    let allSect = document.querySelectorAll('.sousDiv div');
    for (let i = 0; i < allSect.length; i++){
        allSect[i].classList.add("sousSection");
    }

    console.log(mySectionArray);

    // section-1 titre
    // un titre h1
    // un titre h2
    // allSect[0].classList.add('');
    let myH1 = document.createElement('h1');
    myH1.classList.add('myH1');
    myH1.textContent = "tarik louatah";
    let myH2 = document.createElement('h2');
    myH2.classList.add('myH2');
    myH2.textContent = "développeur web junior";
    allSect[0].append(myH1);
    allSect[0].append(myH2);

    //section-2 open to work 
    let divOpen = document.createElement("div");
    divOpen.classList.add('divOpen','bg-circle','reveal');
    allSect[1].append(divOpen);
    // allSect[1].classList.add("reveal","reveal-1");

    let para1 = document.createElement("p");
    para1.classList.add('paraTemp','reveal-1');
    para1.textContent = "votre version mobile est en travaux, revenez bientôt !";
    divOpen.append(para1); 

    allSect[1]

}