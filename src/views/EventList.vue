<script>
import EventCard from '../components/EventCard.vue'

export default {
  components: {
    EventCard
  },
  async created() {
    const response = await fetch('/events.json').then(response =>
      response.json()
    )

    this.$store.state.events = response.events
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  }
}
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
