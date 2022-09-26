// reference type
// objects are called the reference type
// var object1 = {value:10};



// context vs scope
// context tells us where we are within the object.
const object4 = {
    a:function(){
        console.log(this);
    }
}
// console.log(a);




// instantiation--- it is when we u make a copy of an object and reuse the code .

class Player {
    constructor(name,type){
        console.log('player',this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name,type){
        super(name,type)
    }
    play(){
        console.log(`We I 'am a  ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly','Healer');
const wizard2 = new Wizard('Shawn','Dark magic');