class Carousel  {

    constructor(element, options = {}){
        this.element = element;
        this.options = Object.assign({},{
            slidesToScroll : 1,
            slidesVisible : 1,
            loop : false,
            pagination : false,
            navigation : true
        },options);
        let children = [].slice.call(element.children);         // convertir une nodelist sous forme de tableau
        this.moveCallBacks = [];
        this.currentItem = 0;
        this.isMobile = false;

        // modification du DOM

        this.root = this.createDivWithClass('carousel');
        this.container = this.createDivWithClass('carousel__container');
        this.root.setAttribute('tabindex','0');
        this.root.appendChild(this.container);
        this.element.appendChild(this.root);
        this.items = children.map((child) =>{
            let item = this.createDivWithClass("carousel__item");

            item.appendChild(child);
            this.container.appendChild(item);
            return item;
        })
        this.setStyle();
        if(this.options.navigation === true){
            this.createNavigation();
        }
        if(this.options.pagination === true){
            this.createPagination();
        }
        
        //évenements 

        this.moveCallBacks.forEach(callback=>callback(0));
        this.onWindowResize();
        window.addEventListener('resize',this.onWindowResize.bind(this)); 
        this.root.addEventListener('keyup', e =>{
            if(e.key === "ArrowRight" || e.key === "Right"){
                this.next();
            }else if(e.key === "ArrowLeft" || e.key === "Left"){
                this.prev();
            }
        })

        // debugger
    }

    // methode creation div avec une class
    createDivWithClass(className){
        let div = document.createElement("div");
        div.setAttribute("class",className);
        return div;
    }

    // applique les bonnes dimensions aux éléments du carousel 
    setStyle(){
        let ratio = this.items.length / this.slidesVisible;
        this.container.style.width = (ratio *100)+"%";
        this.items.forEach(item => item.style.width = ((100/this.slidesVisible)/ratio)+"%")
    }

    // methode creation de fleche de navigation
    createNavigation(){
        let nextButton = this.createDivWithClass("carousel__next");
        let prevButton = this.createDivWithClass("carousel__prev");
        this.root.appendChild(nextButton);
        this.root.appendChild(prevButton);
        nextButton.addEventListener('click',this.next.bind(this));
        prevButton.addEventListener('click',this.prev.bind(this));
        if(this.options.loop == true){
            return;
        }
        this.onMove(index => {
            if(index == 0){
                prevButton.classList.add("hidden");
            }
            else{
                prevButton.classList.remove("hidden");
            }
            if(this.items[this.currentItem + this.slidesVisible] === undefined){
                nextButton.classList.add("hidden");
            }
            else{
                nextButton.classList.remove("hidden");
            }
        })
    }

    createPagination(){
        let pagination =  this.createDivWithClass('carousel__pagination');
        let buttons = [];
        this.root.appendChild(pagination);
        //trouver le nombre de boutons
        for (let i = 0; i < this.items.length; i = i + this.options.slidesToScroll){
            let button = this.createDivWithClass('carousel__pagination__button');
            button.addEventListener("click",()=> this.gotoItem(i));
            pagination.appendChild(button);
            buttons.push(button);
        }
        this.onMove(index => {
            let activeButton = buttons[Math.floor(index / this.options.slidesToScroll)];
            if(activeButton){
                buttons.forEach(button => button.classList.remove('carousel__pagination__button__active'));
                activeButton.classList.add('carousel__pagination__button__active');
            }
        })
    }

    next(){
        this.gotoItem(this.currentItem + this.slidesToScroll);
    }
    prev(){
        this.gotoItem(this.currentItem - this.slidesToScroll);
    }

    gotoItem(index){
        if(index < 0){
            if(this.options.loop){
                index = this.items.length - this.slidesVisible;
            }else{
                return;
            }
            index = this.items.length - this.options.slidesVisible
        }
        else if(index >= this.items.length || (this.items[this.currentItem + this.slidesVisible] === undefined && index > this.currentItem)){
            if(this.options.loop){
                index = 0;
            }else{
                return;
            }
        }
        let translateX = index * -100/this.items.length;
        this.container.style.transform = "translate3d("+translateX+"%,0,0)";
        this.currentItem = index;
        this.moveCallBacks.forEach(callback => callback(index));
    }

    onMove(callback){
        this.moveCallBacks.push(callback);
    }

    onWindowResize(){
        let mobile = window.innerWidth < 800;
        if(mobile !== this.isMobile){
            // changer la valeur de la propriété d'instance
            this.isMobile = mobile;
            this.setStyle();
            this.moveCallBacks.forEach(callback=>callback(this.currentItem));
        }
    }

    get slidesToScroll(){
        //ecriture ternaire
        return this.isMobile ? 1 : this.options.slidesToScroll;
    }

    get slidesVisible(){
        //ecriture ternaire
        return this.isMobile ? 1 : this.options.slidesVisible;
    }
}



document.addEventListener("DOMContentLoaded", function(){
    let myCar   = new Carousel(document.querySelector('#carousel1'),{
        slidesToScroll : 1,
        slidesVisible : 3,
        loop : true,
    })
    let myCar2   = new Carousel(document.querySelector('#carousel2'),{
        slidesToScroll : 2,
        slidesVisible : 2,
        loop : true,
        pagination : true
    })
    // let myCar3   = new Carousel(document.querySelector('#carousel3'),{
    //     slidesToScroll : 1,
    //     slidesVisible : 1
    // })
})
