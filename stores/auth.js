import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: '',
      user: {},
    }
  },

  getters: {
    firstName: state => state.user?.first_name,
    lastName: state => state.user?.last_name,
    email: state => state.user?.email,
    loggedIn: state => !!state.token.length,
  },

  persist: true,

  actions: {
    async login(formData) {
      try {
        const { data: response } = await this.$nuxt.$api.auth.login(formData)
        if (!response.success) {
          throw new Error(response.message)
        }
        this.token = response.data.bearer_token
        this.user = response.data
      } catch (error) {
        throw new Error(
          typeof error === 'object' ? error.response.data.message : error
        )
      }
    },

    setBearerToken(token) {
      this.token = token
    },

    setUser(user) {
      if (user.bearer_token) {
        this.token = user.bearer_token
      }

      this.user = user
    },

    async getUser() {
      const { data: response } = await this.$nuxt.$api.auth.user()
      this.setUser(response.data)
    },

    async loginWithGoogle(formData) {
      try {
        const { data: response } = await this.$nuxt.$api.auth.loginWithGoogle(
          formData
        )
        if (!response.success) {
          throw new Error('Login failed. Please try again')
        }
        this.token = response.data.bearer_token
        this.user = response.data
      } catch (error) {
        throw new Error(
          typeof error === 'object' ? error.response.data.message : error
        )
      }
    },

    async loginWithFacebook(formData) {
      try {
        const { data: response } = await this.$nuxt.$api.auth.loginWithFacebook(
          formData
        )
        if (!response.success) {
          throw new Error('Login failed. Please try again')
        }
        this.token = response.data.bearer_token
        this.user = response.data
      } catch (error) {
        throw new Error(
          typeof error === 'object' ? error.response.data.message : error
        )
      }
    },

    async logout() {
      await this.$nuxt.$api.auth.logout()
      this.token = ''
      this.user = {}
    },

    async register(formData) {
      const { data: response } = await this.$nuxt.$api.auth.register(formData)
      if (!response.success) {
        throw new Error(response.message)
      }
      this.token = response.data.user.bearer_token
      this.user = response.data.user
    },

    async forgotPassword(formData) {
      const response = await this.$nuxt.$api.auth.forgotPassword(formData)
      console.log(response)
    },

    async resetPassword(formData) {
      const response = await this.$nuxt.$api.auth.resetPassword(formData)
      console.log(response)
    },

    async updateUser(formData, userId = this.user.id) {
      const { data: response } = await this.$nuxt.$api.auth.updateUser(
        formData,
        userId
      )
      if (response.data.bearer_token) {
        this.token = response.data.bearer_token
      }
      this.user = response.data
    },

    async sendResetPasswordEmail(payload) {
      await this.$nuxt.$api.auth.resetPasswordEmail(payload)
    },

    async validateResetToken(payload) {
      await this.$nuxt.$api.auth.validate(payload)
    },
  },
})
