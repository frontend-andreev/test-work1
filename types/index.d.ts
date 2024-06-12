export { authForm, error };
declare global {
  interface authForm {
        username: string,
        password: string
  }
  interface user {
    email: string,
    token: string,
    user_id: number,
    username: string
  }
  type error = string | undefined
}