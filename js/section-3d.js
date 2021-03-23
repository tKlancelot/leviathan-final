
import CreateAFloor from './createAFloor.js';


// let myRequest = new XMLHttpRequest();
let myRequest = new XMLHttpRequest();
let theBody = document.querySelector('.myBody');
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
theBody.append(loaderDiv);

myRequest.open("GET", "./assets/3d/canape-modular-2.glb");

myRequest.send();
console.log("debug");

myRequest.addEventListener("load",function(){
    if(myRequest.readyState == 4){
        setTimeout(function(){
            loaderDiv.remove();
            console.log(myRequest.responseURL);
            global3dScript();
        },2000);
    }
    else{
    }
});



function global3dScript(){



function createBouton(myBouton,classe,parent){
    myBouton = document.createElement('button');
    // myBouton.textContent = content;
    myBouton.classList = classe;
    parent.append(myBouton);
}

function createAllButtons(){
    for (let i = 0 ; i < boutonArray.length;i++){
        createBouton(boutonArray[i],boutonArrayClasse[i],sousPanneauGauche);
    }
}





let cadreContent = document.createElement('div');
let conteneur = document.createElement('div');
let infoText = document.querySelector('.navbar p');
let paraLegend = document.createElement('p');
let cadre3d = document.createElement('div');
conteneur.classList.add('dFlex');
cadreContent.classList.add('cadreContent2');
theBody.append(conteneur);
conteneur.append(cadreContent);

// DECLARATIONS DOM

let btnToggleMurs,btnToggleToit,btnToggleFenetre, btnTogglePorte, btnToggleSol,btnToggleCloison;
let boutonArray = [btnToggleMurs,btnToggleToit,btnToggleFenetre,btnTogglePorte,btnToggleSol,btnToggleCloison];
let boutonArrayClasse = ['toggleMur','toggleToit','toggleFenetre','togglePorte','toggleSol','toggleCloison'];

let boutonA = document.createElement('button');
// boutonA.textContent = "bouton a";
boutonA.classList = "boutonA";

let panneauGauche = document.createElement("div");
let panneauDroit = document.createElement("div");
let panneauInformation = document.createElement("div");
let panneauTitre = document.createElement("h4");
let panneauContent = document.createElement("div");
let myUl = document.createElement("ul");
panneauTitre.textContent = "panneau info";
// panneauContent.textContent = "panneau content";
panneauTitre.classList = "panneauTitre";
panneauContent.classList = "panneauContent";
panneauInformation.classList = "panneauInfo darkNeon";
panneauContent.append(myUl);
panneauInformation.append(panneauTitre);
panneauInformation.append(panneauContent);
conteneur.append(panneauInformation);




cadre3d.classList = 'cadre3d';
panneauGauche.classList = 'panneauGauche2';
panneauDroit.classList = 'panneauDroit2';
let sousPanneauGauche = document.createElement('div');
sousPanneauGauche.classList = 'sousPanneau';
let sousPanneauDroit = document.createElement('div');
sousPanneauDroit.classList = 'sousPanneau';
let boutonLumiere = document.createElement("button");
boutonLumiere.classList.add('toggleLight');


cadreContent.append(panneauGauche);
cadreContent.append(cadre3d);
cadreContent.append(panneauDroit);
panneauDroit.append(sousPanneauDroit);
panneauGauche.append(sousPanneauGauche);
sousPanneauGauche.append(boutonA);



// créer deux boutons dans le sous panneau droit

let buttonA = document.createElement('button');
let buttonB = document.createElement('button');
let buttonC = document.createElement('button');
buttonA.classList = "buttonA";
buttonB.classList = "buttonB";
buttonC.classList = "buttonC";

buttonA.textContent = "a";
buttonB.textContent = "b";
buttonC.textContent = "c";

createAllButtons();
sousPanneauDroit.append(boutonLumiere);
sousPanneauDroit.append(buttonA);
sousPanneauDroit.append(buttonB);
sousPanneauDroit.append(buttonC);

// setTimeout(function(){
//     console.log("boutons chargés");
//     console.log("bouton A chargé");
//     console.log("panneau ajouté");

// },5000);


let boutonPaint = document.querySelector('.boutonA');
btnToggleMurs = document.querySelector('.toggleMur');
btnToggleToit = document.querySelector('.toggleToit');
btnToggleCloison = document.querySelector('.toggleCloison');
btnToggleFenetre = document.querySelector('.toggleFenetre');
btnTogglePorte = document.querySelector('.togglePorte');
btnToggleSol = document.querySelector('.toggleSol');


// buttonB.setAttribute('disabled','');
// buttonA.setAttribute('disabled','');
// buttonC.setAttribute('disabled','');


// DECLARATIONS 3D

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
const renderer = new THREE.WebGLRenderer({ alpha: true });
const gltfLoader = new THREE.GLTFLoader();
const url = './assets/3d/table.glb';
const url2 = './assets/3d/canape-modular-1.glb';
const url3 = './assets/3d/cupboard.glb';
const url4 = './assets/3d/floor+plinthes.glb';
const url5 = './assets/3d/cloison-part.glb';
const url6 = './assets/3d/walls-part.glb';
const url7 = './assets/3d/door-part.glb';
const url8 = './assets/3d/window-part.glb';
const url9 = './assets/3d/roof-part.glb';
const url10 = './assets/3d/rug.glb';
const url11 = './assets/3d/canape-modular-2.glb';
const url12 = './assets/3d/canape-modular-1.glb';
const url13 = './assets/3d/greenPlant.glb';
const url14 = './assets/3d/siege-rotin.glb';
const url15 = './assets/3d/minos.glb';
const controls = new THREE.OrbitControls( camera, renderer.domElement);
camera.position.z = 12;
camera.position.y = 6;
camera.autoRotate = true;
camera.autoRotateSpeed = 0.25; 
camera.enableDamping = true;
const directionalLight = new THREE.DirectionalLight( 0xcccccc, 0.7 );
const light = new THREE.AmbientLight( 0x909090 ); // medium white light
const light2 = new THREE.HemisphereLight( 0xaaaa88, 0x080820, 0.6 );
const ambientLight1 = new THREE.AmbientLight( 0xc4c4c4 );
ambientLight1.position.z = 4.5;
ambientLight1.position.x = 1.5;
const myArray = [];
let MODEL_PATHS = [url,url2,url3,url10,url11,url12,url13,url14];
let MODEL_PATHS_2 = [url4,url5,url6,url7,url8,url9];
let MODEL_PATHS_3 = [url15];
let myFloor, myFloor2, myFloor3,myFloor4;
let myFloorArray = [];
let toggleTheme = 0;
let toggleRoof = 0;
let toggleWalls = 0;
let toggleCloison = 0;
let toggleDoor = 0;
let toggleWindow = 0;
let toggleFloor = 0;
let minosToggled = 0;
let houseRemoved = 0;
let scene2Array = [];
let scene3Array = [];


function loadThis(){
    for (let i = 0 ;i < MODEL_PATHS_2.length; i++){
        gltfLoader.load(MODEL_PATHS_2[i], (gltf) => {
            myArray.push(gltf.scene);
        });
    }
}

function loadScene2(){
    for (let i = 0 ;i < MODEL_PATHS.length; i++){
        gltfLoader.load(MODEL_PATHS[i], (gltf) => {
            scene2Array.push(gltf.scene);
        });
    }
}

function loadScene3(){
    for (let i = 0 ;i < MODEL_PATHS_3.length; i++){
        gltfLoader.load(MODEL_PATHS_3[i], (gltf) => {
            scene3Array.push(gltf.scene);
        });
    }
}

const promise1 = new Promise((resolve, reject) => {
    paraLegend.textContent = "chargement des objets en cours...";
    setTimeout(() => {
      resolve(myArray);
    }, 10000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(scene2Array);
    }, 10000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(scene3Array);
    }, 10000);
});

function configFloor(){
    // ajouter un sol
    CreateAFloor(myFloor,'./assets/lawn-texture.jpg',-0.04,20,20,myFloorArray);
    CreateAFloor(myFloor2,'./assets/ground.jpg',-0.02,12,12,myFloorArray);
    CreateAFloor(myFloor3,'./assets/rock-texture.jpg',-0.024,16,16,myFloorArray);
    CreateAFloor(myFloor4,'./assets/wooden-floor.jpg',-0.020,10,10,myFloorArray);
    // console.log(myFloorArray);
}


function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    var width = 892;
    var height = 560.7;
    var canvasPixelWidth = canvas.width / window.devicePixelRatio;
    var canvasPixelHeight = canvas.height / window.devicePixelRatio;
    const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

function createScene(parent){
    parent.appendChild( renderer.domElement );
    const animate = function () {
        controls.update();
        controls.autoRotate = true;
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
    };
    resizeRendererToDisplaySize(renderer);
    configFloor();
    loadThis();
    loadScene2();
    loadScene3();
    promise1.then((value) => {
        infoText.textContent = "la scène est chargée !";
        ajouterTousLesObjets(value);
        initHouseColor();
        getInfo(myArray);
        toggleThis(btnToggleMurs,3,toggleWalls);
        toggleThis(btnToggleCloison,2,toggleCloison);
        toggleThis(btnToggleToit,1,toggleRoof);
        toggleThis(btnToggleFenetre,4,toggleWindow);
        toggleThis(btnTogglePorte,5,toggleDoor);
        toggleThis(btnToggleSol,0,toggleFloor);
        changeRoofRoughness();
    });
    addLights();
    scene.add(myFloorArray[0]);
    scene.add(myFloorArray[1]);
    animate();
    
}


createScene(cadre3d);

function ajouterUnObjet(monObjet){
    scene.add(monObjet);
}

function getRoofColor(){
    console.log(myArray[1].children[0].material.color);
}

function changeElementColor(el,numero,rouge,vert,bleu){
    myArray[el].children[numero].material.color.r = rouge;
    myArray[el].children[numero].material.color.g = vert;
    myArray[el].children[numero].material.color.b = bleu;
    // console.log(myArray[el].children[numero]);
}

function getInfo(array){
    for (let i = 0; i < array.length; i++){
        // console.log(myArray[i].children);
        let enfants = array[i].children;
        for (let j = 0; j < enfants.length; j++){
            // console.log(enfants[j].name);
            console.log(enfants[j].name);
            let myLi = document.createElement('li');
            myLi.textContent = enfants[j].name;
            myUl.append(myLi);
        }
    }
}

function changeRoofRoughness(){
    // console.log(myArray[1].children[0].material.roughness);
    myArray[1].children[0].material.roughness = 0.8;
}



function initHouseColor(){
    changeElementColor(2,0,0.9,0.9,0.9);//cloison
    changeElementColor(0,0,0.22,0.36,0.82);//plinthes
    changeElementColor(4,5,0.22,0.36,0.82);//fenetre0 encadre1
    changeElementColor(4,7,0.22,0.36,0.82);//fenetre1 encadre
    changeElementColor(4,8,0.22,0.36,0.82);//fenetre2 encadre
    changeElementColor(4,9,0.22,0.36,0.82);//fenetre3 encadre
    changeElementColor(5,1,0.22,0.36,0.82);//porte
    changeElementColor(1,0,0.22,0.36,0.82);//roof 
    changeElementColor(5,0,0.40,0.56,0.92);//encadrement porte
    changeElementColor(3,0,0.40,0.56,0.92);//walls
    changeElementColor(1,1,0.40,0.56,0.92);//roof wall
}

boutonA.addEventListener('click',function(){
    if(toggleTheme == 0){
        changeElementColor(2,0,0.96,0.58,0.58);//cloison
        changeElementColor(0,0,0.48,0.48,0.48);//plinthes
        changeElementColor(4,5,0.78,0.36,0.24);//fenetre0 encadre1
        changeElementColor(4,7,0.78,0.36,0.24);//fenetre1 encadre
        changeElementColor(4,8,0.78,0.36,0.24);//fenetre2 encadre
        changeElementColor(4,9,0.78,0.36,0.24);//fenetre3 encadre
        changeElementColor(5,1,0.78,0.36,0.24);//porte
        changeElementColor(1,0,0.78,0.36,0.24);//roof 
        changeElementColor(5,0,0.96,0.74,0.74);//encadrement porte
        changeElementColor(3,0,0.96,0.74,0.74);//walls
        changeElementColor(1,1,0.96,0.74,0.74);//roof wall
        toggleTheme = 1;
    }
    else{
        initHouseColor();
        toggleTheme = 0;
    }
});

function toggleThis(monBouton,numero,monInterrupteur){
    monBouton.addEventListener("click",function(){
        if(monInterrupteur == 0){
            scene.remove(myArray[numero]);
            monInterrupteur = 1;
        }
        else{
            scene.add(myArray[numero]);
            monInterrupteur = 0;
        }
    })
}


// toggleThis(btnToggleRoof,1,toggleRoof);


// btnToggleWalls.addEventListener("click",function(){
//     toggleThis(myArray[3],interrupteur);
// })

function getAllColors(tableau){
    for (let i = 0 ; i < tableau.length; i++){
        console.log(tableau[i].children[0].name);
        console.log(tableau[i].children[0].material.color);
    }
}


// ajouter de la lumière

function addLights(){
    scene.add( directionalLight );
    scene.add( light );
    scene.add( light2 );
    scene.add(ambientLight1);
}


function removeLights(){
    scene.remove( directionalLight );
    scene.remove( light );
    scene.remove( light2 );
    scene.remove(ambientLight1);
}




function ajouterTousLesObjets(tableau){
    for (let i = 0; i < tableau.length; i++){
        scene.add(tableau[i]);
    }
}

function supprimerTousLesObjets(tableau){
    for (let i = 0; i < tableau.length; i++){
        scene.remove(tableau[i]);
    }
}

function initPosition(){
    scene2Array[0].position.z = 4.5; //plant
    scene2Array[0].position.x = 2.5; //plant

    scene2Array[1].position.z = 0; //table
    
    scene2Array[2].position.z = 4.5; //commode
    scene2Array[2].rotation.y = Math.PI; //commode

    scene2Array[3].position.z = -4.5; //siege rotin
    scene2Array[3].position.x = -4; //siege rotin
    scene2Array[3].rotation.y = Math.PI/1.5; //siege rotin

    scene2Array[5].rotation.y = Math.PI/2; //canape1
    scene2Array[5].position.x = 3.5; //canape1

    scene2Array[6].rotation.y = -(Math.PI/2); //canape2
    scene2Array[6].position.x = -3.5; //canape2

    scene2Array[7].position.z = -3.5; //canape3
    scene2Array[7].rotation.y = Math.PI; //canape3

    // console.log(scene2Array);

}

function initMinosPosition(){
    // scene3Array[0].position.z = 4.5;
    scene3Array[0].scale.x = 0.7;
    scene3Array[0].scale.y = 0.7;
    scene3Array[0].scale.z = 0.7;
    // scene3Array[0].position.y = 1.165;
}

promise3.then((value) => {
    initMinosPosition();
    buttonC.removeAttribute('disabled');
});

promise2.then((value) => {
    initPosition();
    initMinosPosition();
    buttonB.removeAttribute('disabled');
    buttonA.removeAttribute('disabled');
    buttonC.removeAttribute('disabled');
});

let arrayButtons = [btnToggleSol,btnToggleToit,btnTogglePorte,btnToggleMurs,btnToggleFenetre,btnToggleCloison,boutonPaint];

function disableButtons(){
    for (let i = 0; i < arrayButtons.length;i++){
        console.log(arrayButtons[i]);
        arrayButtons[i].setAttribute('disabled','');
        arrayButtons[i].style.opacity = "0";
    }
}

function enableButtons(){
    for (let i = 0; i < arrayButtons.length;i++){
        // console.log(arrayButtons[i]);
        arrayButtons[i].removeAttribute('disabled');
        arrayButtons[i].style.opacity = "1";
    }
}

let toggleLight = 0;


buttonB.addEventListener("click",function(){
    if(minosToggled == 1){
        scene.add(ambientLight1);
        supprimerTousLesObjets(scene3Array);
        minosToggled = 0;
    }
    myUl.textContent = "";
    getInfo(scene2Array);
    supprimerTousLesObjets(myArray);
    scene.remove(myFloorArray[1]);
    ajouterTousLesObjets(scene2Array);
    scene.add(myFloorArray[3]);
    houseRemoved = 1;
    disableButtons();
})

buttonA.addEventListener("click",function(){
    if((minosToggled == 1)||(houseRemoved == 1)){
        scene.add(ambientLight1);
        myUl.textContent = "";
        getInfo(myArray);
        supprimerTousLesObjets(scene3Array);
        supprimerTousLesObjets(scene2Array);
        ajouterTousLesObjets(myArray);
        scene.remove(myFloorArray[3]);
        scene.add(myFloorArray[1]);
        enableButtons();
        minosToggled = 0;
        houseRemoved = 0;
    }
})

boutonLumiere.addEventListener('click',function(){
    if(toggleLight == 0){
        removeLights();
        toggleLight = 1;
    }
    else{
        addLights();
        toggleLight = 0;
    }
})


const axesHelper = new THREE.AxesHelper( 10 );
// scene.add(axesHelper);

buttonC.addEventListener("click",function(){
    alert('bientôt disponible');
})


}


