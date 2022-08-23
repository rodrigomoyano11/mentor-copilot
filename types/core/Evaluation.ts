import type Correction from './Correction'
import type Resource from './Resource'

type Evaluation = {
  id: string
  title: string
  description: string
  attachments: Resource[]

  correction: Correction
}

export default Evaluation
