// Person constructor
function Person(firstName, lastName, birthday) {
    this.firstName = firstName,
    this.lastName = lastName;
    this.bod = new Date(birthday);
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.bod.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear()-1970);
    //     }
    }

    // Calculate age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.bod.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
    }
    
    // Full name prototype
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

    // Gets married
Person.prototype.getsMaried = function(newLastName){
    this.lastName = newLastName;
}

// Create two Person objects

const Jarek = new Person('Jarek', 'Pilat', '1974-03-26');
    console.log(Jarek);
    console.log(Jarek.calculateAge());

const Bogusia = new Person('Bogusia', 'Talik', '4 Jul 1975')
    console.log(Bogusia, Bogusia.calculateAge());

Bogusia.getsMaried('Pilat');

console.log(Jarek.getFullName());
console.log(Bogusia.getFullName());

console.log(Jarek.hasOwnProperty('lastName'));
console.log(Jarek.hasOwnProperty('getFullName'));

//Prototype inheritance

    //Person prototype greeting
    Person.prototype.greeting = function () {
        return `Witaj ${this.firstName} ${this.lastName}. Czy to prawda, że urodziłeś się ${this.bod}?`;
    }

const person1 = new Person('John', 'Doe', '2000-01-01');
console.log(person1.greeting());

//Customer constractor
function Customer(firstName, lastName, bod, phone, membership) {
    Person.call(this, firstName, lastName, bod);

    this.phone = phone;
    this.membership = membership;
}

//Inherit Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return customer()
Customer.prototype.consturctor = Customer;

//Create new customers
customer1 = new Customer('Tim', 'Nowak', '2010-03-02', '+48 71 370-26-13', 'Gold');
customer2 = new Customer('Ania','Frania','1955-05-05','+48 56 256-46-45', 'Standard');

console.log(customer2);

console.log(customer1.greeting());

// New customer greeting
Customer.prototype.greeting = function () {
    return `Witaj ${this.firstName} ${this.lastName} w naszej firmie`;
}

console.log(customer2.greeting());

// Using Objects.create

const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);

mary.firstName = 'Mary';
mary.lastName = 'Smith';
mary.age = 30;

console.log(mary);

mary.getsMarried('Thompson');

console.log(mary);

//Other method
const jim = Object.create(personPrototypes, {
    firstName: {value: 'Jim'},
    lastName: {value: 'Nowak'},
    age:{value: 36}
});

console.log(jim);

console.log(jim.greeting());