import type Course from './Course'

type Route = {
  id: string
  name: string
  description: string

  courses: Course[]
}

export default Route
