import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isLoggedIn: !!localStorage.getItem('authToken'),
  token: localStorage.getItem('authToken'),
  login: (token) => set({ isLoggedIn: true, token }),
  logout: () => {
    localStorage.removeItem('authToken')
    set({ isLoggedIn: false, token: null })
  }
}))

export default useAuthStore
