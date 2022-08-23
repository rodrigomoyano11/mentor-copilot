import type Answer from './Answer'

type Question = {
  id: string
  title: string
  description: string

  topAnswer: Answer
  answers: Answer[]
}

export default Question
