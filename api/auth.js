export default http => ({
  login: async formData => {
    return http.get('/sanctum/csrf-cookie').then(() => {
      return http.post('/api/auth/login', formData)
    })
  },

  loginWithGoogle: async formData => {
    return http.post('/api/auth/social/google', formData)
  },

  loginWithFacebook: async formData => {
    return http.post('/api/auth/social/facebook', formData)
  },

  logout: async () => http.post('/api/auth/logout'),

  register: async formData => {
    return http.post('/api/auth/register', formData)
  },

  forgotPassword: async formData => http.post('/api/forgot-password', formData),

  resetPassword: async formData =>
    http.post('/api/auth/password/reset', formData),

  resetPasswordEmail: async payload =>
    http.post('/api/auth/password/email', payload),

  validate: async payload =>
    http.get('/api/auth/password/validate-token', { params: payload }),

  user: async () => http.get('/api/user'),
})
