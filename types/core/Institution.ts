import type Route from './Route'
import type User from './User'

type Base = {
  id: string
  name: string
  type: 'university' | 'college' | 'school' | 'academy' | 'other'

  routes: Route[]
  teachers: Extract<User, { type: 'teacher' }>[]
  students: Extract<User, { type: 'student' }>[]
}

type University = Base & {
  type: 'university'
}
type College = Base & {
  type: 'college'
}
type School = Base & {
  type: 'school'
}
type Academy = Base & {
  type: 'academy'
}
type Other = Base & {
  type: 'other'
}

type Institution = University | College | School | Academy | Other

export default Institution
