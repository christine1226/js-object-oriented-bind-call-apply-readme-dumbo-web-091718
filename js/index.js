// use this to copy code snippets or use your browser's console
class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}

class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    matchInterests(event) {
        return event.keywords.some(
            function(word) {
                return this.interests.includes(word);
            }.bind(this) // added to the and of the callback function
        );
    }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

billy.matchInterests(freeMusic);

//the mathchInterests function needs the 'bind' function to be able to access the instance
//of a user.

matchInterests(event) {
  return event.keywords.some(word => this.interests.includes(word));
}

//using arrow functions, this will always refer to the context the function was invoked in
// for our matchInterests function, it was invoked within the User class, making
//the 'this' always an instance of the User class.



let sally = { name: 'Sally' };

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!
greet.apply(sally, ['Terry', 'George']);
// Hi Terry and George, my name is Sally!



//call and apply functions are used to invoke a functoin.
//call will take many arguments on a function that it is applied to.
//apply can only be used with two arguments. the second will need to be an array if there
// are multiple values that apply to one of our arguments
// apply = may require an array
//call will take multiple arguements
