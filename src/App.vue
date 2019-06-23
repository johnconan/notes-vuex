<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <p class="heading"> {{ getTitle }} </p>
          <message v-if="getMessage" :message="getMessage" />

          <!-- new note -->
          <newNote />

          <div class="note-header" style="margin: 36px 0;">
            <h1 class="title"> {{ getTitle }} </h1>
            <search placeholder="Find notes" />
            <div class="icons">
              <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>
          <!-- note list -->
          <notes :grid="grid" />

        </div>
      </section>

    </div>
  </div>
</template>

<script>
import message from '@/components/Message.vue';
import notes from '@/components/Notes.vue';
import newNote from '@/components/NewNote.vue';
import search from '@/components/Search.vue';

export default {
  components: {
    message,
    notes,
    newNote,
    search
  },
  data() {
    return {
      grid: true,
      message: null
    }
  },
  computed: {
    getTitle() {
      return this.$store.getters.getTitle;
    },
    getMessage() {
      return this.$store.getters.getMessage;
    }
  }
}
</script>