import { defineNuxtPlugin } from '#app'
import axios from 'axios'
import authApi from '@/api/auth'
import { useAuthStore } from '@/stores/auth'

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore()
  const router = useRouter()
  const config = useRuntimeConfig()
  const http = axios.create({
    baseURL: config.public.apiBase,
    withCredentials: true,
  })

  if (process.client) {
    http.interceptors.request.use(
      config => {
        const token = window.localStorage.getItem('token')

        if (token && token.length) {
          config.headers.common['Authorization'] = `Bearer ${token}`
        }

        return config
      },
      error => Promise.reject(error)
    )

    http.interceptors.response.use(
      response => response,
      error => {
        if (
          401 === error.response.status &&
          (error.response.data?.message !== 'Invalid Credentials' ||
            error.response.data?.error !== 'Invalid Credentials')
        ) {
          authStore.logout()
          router.push({ path: '/auth/login?loggedOut=1' })
        }
        return Promise.reject(error)
      }
    )
  }

  const repositories = {
    auth: authApi(http),
  }

  return {
    provide: {
      api: repositories,
    },
  }
})
