import type Comment from './Comment'
import type Grade from './Grade'
import type Resource from './Resource'

type Correction = {
  id: string
  grade: Grade
  description: {
    result: string
    highlights: Extract<Comment, { type: 'highlight' }>[]
    improvements: Extract<Comment, { type: 'improvement' }>[]
    greeting: string
  }
  attachments: Resource[]
}

export default Correction
