type Base = {
  id: string
  name: string
  url: string
}

type Video = Base & {
  type: 'video'
}

type Image = Base & {
  type: 'image'
}

type Audio = Base & {
  type: 'audio'
}

type Document = Base & {
  type: 'document'
}

type Application = Base & {
  type: 'application'
}

type Url = Base & {
  type: 'url'
}

type Other = Base & {
  type: 'other'
}

type Resource = Video | Image | Audio | Document | Application | Url | Other

export default Resource
