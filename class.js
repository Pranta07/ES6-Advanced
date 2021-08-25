class Support {
    name;
    designation = "Support Web Dev";
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, "start a support session");
    }
}

const aamir = new Support("Aamir Khan", "BD");
const salman = new Support("Solaiman Khan", "Dubai");
const sharuk = new Support("SRK Khan", "Dubai");
const akshay = new Support("Akshay Kumar", "Dubai");
aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharuk, akshay);
// console.log(salman);

//practice
class person {
    // name;
    // address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.age = 23;
    }
    msg() {
        console.log(`hello from ${this.name}`);
    }
}

const pranta = new person("Pranta", "BD");
const briti = new person("Briti", "BD");
console.log(pranta, briti);
pranta.msg();
briti.msg();
