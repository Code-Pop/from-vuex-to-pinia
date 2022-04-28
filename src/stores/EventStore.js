import { defineStore } from 'pinia'
import EventService from '../services/EventService.js'

export const useEventStore = defineStore('EventStore', {
  state() {
    return {
      events: [],
      event: {}
    }
  },
  getters: {
    numberOfEvents: state => state.events.length
  },
  actions: {
    createEvent(event) {
      return EventService.postEvent(event)
        .then(() => {
          this.events.push(event)
        })
        .catch(error => {
          throw error
        })
    },
    fetchEvent(id) {
      return EventService.getEvent(id)
        .then(response => {
          this.event = response.data
        })
        .catch(error => {
          throw error
        })
    },
    fetchEvents() {
      return EventService.getEvents()
        .then(response => {
          this.events = response.data
        })
        .catch(error => {
          throw error
        })
    }
  }
})
