
class Person {
    constructor(uname, fname, lname, age, gender, email, password) {
             this.uname = uname,
            this.fname = fname,
            this.lname = lname,
            this.age = age,
            this.gender = gender
               this.email = email,
            this.password = password
    }
}

function submit_handler(uname, fname, lname, age, gender, email, pass) {
    let person1 = new Person(uname, fname, lname, age, gender, email, pass);
    localStorage.setItem("person", JSON.stringify(person1));
}