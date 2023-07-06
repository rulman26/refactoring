import { IPerson } from './interface'

class StudentRepository implements IPerson {
    save(): string {
        return "Student Database save"
    }
}

class TeacherRepository implements IPerson {
    save(): string {
        return "Teacher Database save"
    }
}

export {
    StudentRepository,
    TeacherRepository
}