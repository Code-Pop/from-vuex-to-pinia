import { createStore } from 'vuex'
import EventService from '../services/EventService.js'

export default createStore({
  state: {
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch(error => {
          throw error
        })
    }
  }
})
