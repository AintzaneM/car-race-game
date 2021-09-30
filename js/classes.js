class Game {
    contructor (){
        this.currenTime = 0;
        this.car = null;

    }

    startGame(){
        this.car = new Car();
        this.car.create();
        this.addEventListeners();
        

    }

    addEventListeners(){
        document.addEventListener("keydown", (event) => {
            //read Keycode and check if its 37 or 39
        
            if(event.key === "ArrowLeft") {
                this.car.moveLeft();
                this.car.draw();
                
            } else if(event.key === "ArrowRight") {
                this.car.moveRight();
                this.car.draw();
            }
        });
    }
        
}


class Car {
    constructor(){
        this.x = 50;
        this.y = 100;
        this.width= 10;
        this.height= 20;
        this.domElm = null;
    }

    moveLeft(){
        this.x--;

    }

    moveRight(){
        this.x++;

    }

    create(){
        this.domElm =document.createElement("div");
        this.domElm.className ="car";
        const gameElm = document.getElementById("game");
        gameElm.appendChild(this.domElm);

    }

    draw() {
        //create element and add css style
        
        
        this.domElm.style.width = this.width + "%";
        this.domElm.style.height = this.width + "%";
        this.domElm.style.left = this.x + "%";
        this.domElm.style.top = this.y + "%";
        
        //append to DOM
        
    }
}