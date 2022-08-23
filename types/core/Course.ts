import type Institution from './Institution'
import type Module from './Module'
import type User from './User'

type Course = {
  id: string
  name: string
  description: string

  institution: Institution

  modules: Module[]
  teachers: Extract<User, { type: 'teacher' }>[]
  students: Extract<User, { type: 'student' }>[]
}

export default Course
