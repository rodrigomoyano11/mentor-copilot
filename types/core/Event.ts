type Base = {
  id: string
  name: string
  description: string
  startDate: Date
  endDate: Date
}

type Class = Base & {
  type: 'class'
}

type Workshop = Base & {
  type: 'workshop'
}

type Other = Base & {
  type: 'other'
}

type Event = Class | Workshop | Other

export default Event
