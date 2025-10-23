
interface UserId {
  name: string
  role: 'editor' | 'admin'
}

const person = {
  name: 'Ivan',
  role: 'admin' as const
}

const setUserId = (identity: UserId) => {

}


setUserId(person);