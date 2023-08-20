const isAuthenticated = () => {
  // This should if the token is valid, but for now we just check if it exists.
  if (!process.client) { return }

  return localStorage.getItem('token') !== null
}

export default defineNuxtRouteMiddleware((_to, _from) => {
  if (isAuthenticated() === false) {
    return navigateTo('/login')
  }
})
