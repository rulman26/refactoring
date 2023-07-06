import { Person } from "./abstract";
import { IPerson } from "./interface";
import { StudentRepository, TeacherRepository } from "./interface-implementation";

class Student extends Person {
    public factoryMethod(): IPerson {
        return new StudentRepository();
    }
}

class Teacher extends Person {
    public factoryMethod(): IPerson {
        return new TeacherRepository();
    }
}

export {
    Student,
    Teacher
}