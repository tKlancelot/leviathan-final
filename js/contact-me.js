// alert('hey salut');

// creer une div absolu (accordeon)

let divToggle = document.createElement("div");
let myCross = document.createElement("button");
let toggled = false;

divToggle.classList.add('divToggle','darkNeon');
myCross.classList.add('theCross');
// myCross.textContent = "cross";

document.body.append(divToggle);
divToggle.append(myCross);
let myH3 = document.createElement('h3');
myH3.classList.add('titrePanneau');
myH3.textContent = "sites partenaires";

let linkArray = [];

function createLink(lien,content){
    let myLink = document.createElement('a');
    myLink.href = lien;
    myLink.textContent = content;
    linkArray.push(myLink);
}



// let linkThree = "";

createLink("http://quentin-chevalier-42.fr/home","🌏 Quentin alias Elecreep");
createLink("http://laurie-villeneuve.com","🌏 Laurie Villeneuve");
createLink("https://jonathanlopez.wingrog.fr/","🌏 Jonathan Lopez");
createLink("http://www.laurent-curat.net/","🎨 Laurent Curat");


function addLinks(){
    for (let i = 0; i < linkArray.length;i++){
        divToggle.append(linkArray[i]);
    }
}

function removeLinks(){
    for (let i = 0; i < linkArray.length;i++){
        linkArray[i].remove();
    }
}


myCross.addEventListener("click",function(){
    if(toggled == false){
        divToggle.style.width = "300px";
        divToggle.style.height = "50%";
        myCross.classList.add('fermer');
        setTimeout(function(){
            divToggle.append(myH3);
            addLinks();
        },800);
        toggled = true;
    }
    else{
        divToggle.style.width = "38px";
        divToggle.style.height = "38px";
        myCross.classList.remove('fermer');
        myH3.remove();
        removeLinks();
        toggled = false;
    }
})