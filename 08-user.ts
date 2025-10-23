interface User {
  name: string
}

function getUserName(user: User) {
  return user.name.toLowerCase();
}