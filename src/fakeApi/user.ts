import { Permission, ROLE, User } from '../models/user'

export function fetchUserInfor(userInfor: User) {
  return new Promise<User>((resolve) => {
    setTimeout(() => resolve(userInfor), 500)
  })
}

export function fetchPermission() {
  return new Promise<Permission>((resolve) => {
    setTimeout(
      () =>
        resolve({
          role: ROLE.User,
          isAuthenticated: true
        }),
      1000
    )
  })
}
