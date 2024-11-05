export interface User {
  username: string,
  email: string,
  password: string
}

export interface UserRequestBody extends Omit<User, 'email'> {}