class Game {
    contructor (){
        this.currenTime = 0;
        this.car = null;
        this.obstacle = null;
    }

    startGame(){
        this.car = new Car();
        this.car.create();
        this.addEventListeners();

        let obstacleArr= [];

        setInterval(() => {
            this.obstacle = new Obstacles();
            this.obstacle.create();
            this.obstacle.draw();
            obstacleArr.push(this.obstacle);

            setInterval(()=> {
                obstacleArr.forEach((element) => {
                element.moveDown();
                element.draw();
            } )
            },1000)
        }, 6000)
    }

        
    





   
    

    addEventListeners(){
        document.addEventListener("keydown", (event) => {
            //read Keycode and check if its 37 or 39
        
            if(event.key === "ArrowLeft") {
                this.car.moveLeft();
                this.car.draw();//@todo
                
            } else if(event.key === "ArrowRight") {
                this.car.moveRight();
                this.car.draw();//@todo
            }
        });
    }
}



class Thing {
    constructor(){
        
        
        this.width= 10;
        this.height= 20;
        this.domElm = null;
    }

    create(){
        this.domElm = document.createElement("div");
        this.domElm.className = this.className; 
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


class Car extends Thing {
    constructor (){
        super();//call the constractor of parent class
        this.x = 50;
        this.y = 100;
        this.width= 10;
        this.height= 20;
        this.className = "car";
    }


    moveLeft(){
        this.x--;
    }

    moveRight(){
        this.x++;
    }


}


class Obstacles extends Thing {
    constructor (){
        super();
        this.x = 50
        this.y = 0
        this.width= 20;
        this.height= 5;
        this.className = "obstacle";
    }

    moveDown(){ 
        this.y = this.y + 5
    }

}