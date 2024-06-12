export default function ({ store, redirect }) {
  const currentUser = auth.currentUser
  if (!currentUser) return redirect('/login')
}