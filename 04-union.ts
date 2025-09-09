type Status = 'not-found' | 'new' | 'deleted'

type Person = {
  status: Status
}

const user: Person = {
  status: 'new'
}