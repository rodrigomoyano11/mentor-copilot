import type Resource from './Resource'

type Base = {
  id: string
  content: string
  attachments: Resource[]
  tags: string[]
}

type Highlight = Base & {
  type: 'highlight'
}

type Improvement = Base & {
  type: 'improvement'
}

type Comment = Highlight | Improvement

export default Comment
