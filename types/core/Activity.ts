type Base = {
  id: string
  name: string
  description: string
  instructions: string
}

type Practice = Base & {
  type: 'practice'
}

type Lab = Base & {
  type: 'lab'
}

type Project = Base & {
  type: 'project'
}

type Presentation = Base & {
  type: 'presentation'
}

type Other = Base & {
  type: 'other'
}

type Activity = Practice | Lab | Project | Presentation | Other

export default Activity
