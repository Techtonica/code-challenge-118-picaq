// # Parrot Class Revisited
//
//
//
// To gain practice with ES2016 `Class` syntax, let's reimplement our talking parrot class from Challenge 116.
//
//
// ```
//
// class Parrot {
//  // ...
// }
//
// let polly = new Parrot("Polly");
// polly.speak();
// // returns "Polly want a cracker!"
//
// let benStiller = new Parrot("Ben");
// benStiller.speak();
// // returns "Ben want a cracker!"
//
// let anonymous = new Parrot();
// anonymous.speak();
// // returns "A nameless parrot want a cracker!"
//
//
// ```
//
//
// Update the class definition so the example code runs as shown.
//
// Once that works, let's create a **subclass** of Parrot called ApprenticeParrot that is too tired from reading _You Don't Know JS_ to speak on command.
//
//
// ```
//
// class ApprenticeParrot extends Parrot {
//  // ...
// }
//
// let apprentice = new ApprenticeParrot("Meg");
// apprentice.speak();
// // return "😴"
//
// ```
//
// #
//
// Bonus
//
//
// After invoking the speak function 3 times, on the 4th invocation, `ApprenticeParrot` should wake up and respond normally.


class Parrot {
    constructor( named = "A nameless parrot" ) {
      this._named = named;
      this._speak = named + " want a cracker!";
    }
    get name() {
      return this._name;
    }
    speak() {
      return this._speak;
    }
  }
  
  
  // let polly = new Parrot("Polly");
  // polly.speak(); // returns "Polly want a cracker!"
  
  // let benStiller = new Parrot("Ben");
  // benStiller.speak();  // returns "Ben want a cracker!"
  
  // let anonymous = new Parrot();
  // anonymous.speak();  // returns "A nameless parrot want a cracker!"
  

class ApprenticeParrot extends Parrot {

    speak() {
        // return this._speak;
        return "😴";
    }
}

// let polly = new Parrot("Polly");
// console.log(polly.speak());
// returns "Polly want a cracker!"


// const me = new ApprenticeParrot("Mandy");
// console.log(me.speak());
// return "😴"

module.exports = {Parrot, ApprenticeParrot};
