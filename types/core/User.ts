import type Course from './Course'
import type Institution from './Institution'

type Base = {
  id: string
  firstName: string
  lastName: string
  email: string
  avatarUrl: string

  institutions: Institution[]
  courses: Course[]
}

type Student = Base & {
  type: 'student'
}

type Teacher = Base & {
  type: 'teacher'
}

type Admin = Base & {
  type: 'admin'
}

type User = Student | Teacher | Admin

export default User
