class Animal {
        constructor(name){
                this.name = name
        }
        speak(){
                console.log(`${this.name} makes a sound!`)
        }
        static create(name){
                return new Animal(name);
        }
        #secret = "DNA" // private field
        static version = "1.0.0"
}

const horse = new Animal("Rosinante")
// Classes don't have hoisting

f()

function f(){
        console.log("Hello")

}

// Functions have hoisting

console.log(typeof Animal)

