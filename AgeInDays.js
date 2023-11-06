const person = {
    firstname: "Mithun",
    lastName: "s",
    age: 18,
};

function personObj(personObj,Callback) {
    let personName = `${personObj.firstname}`;
    let lastName = `${personObj.lastName}`;
    let age = personObj.age * 365;

    Callback(personName,lastName,age)
}

function Callback(Name, lastName, age) {
    console.log(`The person's full name is ${Name} ${lastName}, and their age in days is ${age}`);
}

personObj(person,Callback)