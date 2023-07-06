import { IPerson } from "./interface"


abstract class Person {

    public abstract factoryMethod(): IPerson

    public savePerson(): string {
        const person = this.factoryMethod()
        let response = person.save()
        return response
    }

}

export {
    Person
}