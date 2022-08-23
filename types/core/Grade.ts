type Base = {
  id: string
}

type Numeric = Base & {
  type: 'numeric'
  grade: number
}

type ApprovedOrDisapproved = Base & {
  type: 'approvedOrDisapproved'
  grade: 'approved' | 'disapproved'
}

type Grade = Numeric | ApprovedOrDisapproved

export default Grade
