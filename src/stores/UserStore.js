import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: 'Ben Hong'
  }),
  getters: {
    firstName() {
      return this.user.split(' ')[0]
    }
  }
})
