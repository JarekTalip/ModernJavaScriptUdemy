// UI variables
const headingUI = document.querySelector('h1');

// Add event listener
headingUI.addEventListener('mouseover', (e) => {
  e.target.className = 'newHeading';
})

headingUI.addEventListener('mouseleave', (e) => {
  e.target.className = null;
})

// Object Constructor
class Person {
  constructor(firstName, lastName, bod) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(bod);
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addnum(x,y) {
    return x+y;
  }
}

// Another object constructor extends Person

class Customer extends Person {
  constructor(firstName, lastName, bod, phone, membership) {
    super(firstName, lastName, bod);

    this.phone = phone;
    this.membership = membership;
  }

  static cost() {
    return 500;
  }
}

const jarek = new Person('Jaroslaw','Pilat','1974-05-02');
const marek = new Customer('Marek','Kowalski','1980-01-05','555-555-555','Standard');


console.log(jarek);
console.log(jarek.greeting());
console.log(jarek.calculateAge());

jarek.getMarried('Kowalski');
console.log(jarek);

console.log(Person.addnum(3,15));

console.log(marek);
console.log(marek.greeting());

console.log(`Membership cost: ${Customer.cost()}`);