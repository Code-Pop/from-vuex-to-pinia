<script>
import { useEventStore } from '../stores/EventStore'

export default {
  props: ['id'],
  setup() {
    const eventStore = useEventStore()

    return {
      eventStore
    }
  },
  created() {
    this.eventStore.fetchEvent(this.id).catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
  computed: {
    event() {
      return this.eventStore.event
    }
  }
}
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
