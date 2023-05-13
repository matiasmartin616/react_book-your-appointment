import axios from 'axios'
import { API_URL } from '../consts'
import useAuthStore from '../stores/authStore'

export const authenticateUser = async (form) => {
  const url = `${API_URL}/auth/log-in`

  try {
    const response = await axios.post(url, form)
    const token = response.data.accessToken

    // Guarda el token en el localStorage
    localStorage.setItem('authToken', token)

    // Obtiene el estado global
    const login = useAuthStore.getState().login
    // Guarda el token en el store de Zustand y establece `isLoggedIn` a `true`
    login(token)

    return response
  } catch (error) {
    return error
  }
}

export const createUser = async (form) => {
  const url = `${API_URL}/auth/sign-up`

  return await axios
    .post(url, form)
    .then((data) => data)
    .catch((error) => error)
}

export const isUnauthorized = (status) => {
  const unauthorizedStatus = 401

  return status === unauthorizedStatus
}
