import { Person } from "./abstract";
import { Student, Teacher } from "./class";

function person(person: Person) {
    console.log("starting...")
    let message = person.savePerson()
    console.log("message => ", message)
}

console.log('Student...')
person(new Student())
console.log('----------')

console.log('Teacher...')
person(new Teacher())
console.log('----------')