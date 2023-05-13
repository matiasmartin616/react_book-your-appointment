import axios from 'axios'
import { API_URL } from '../consts'

export const getUsers = async (token) => {
  const url = `${API_URL}/users`

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  return await axios
    .get(url, config)
    .then((data) => data)
    .catch((error) => error)
}

export const createUser = async (form) => {
  const url = `${API_URL}/auth/sign-up`

  return await axios
    .post(url, form)
    .then((data) => data)
    .catch((error) => error)
}

export const deleteUser = async (token, id) => {
  const url = `${API_URL}/users/${id}`
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  return await axios
    .delete(url, config)
    .then((data) => data)
    .catch((error) => error)
}

export const isUserNotFound = (status) => {
  const userNotFoundStatus = 404

  return status === userNotFoundStatus
}

export const isSuccess = (status) => {
  return status >= 200 && status < 300
}
