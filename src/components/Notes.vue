<template>
  <div class="notes">
    <div class="note" :class="[{ full: !grid }, note.notify]" v-for="(note, index) in notes" :key="index">
      <div class="note-header" :class="{ full: !grid }">

      <p v-if="!note.edit" @click="editNote(index)" class="notify">{{ note.title }}</p>

      <input
        @keydown.enter="saveEdit(index)"
        @keydown.esc="cancelEdit(index)" 
        v-if="note.edit" type="text" 
        v-model="editFields.editTitle">

        <p style="cursor: pointer;"
           @click="removeNote(index)">x</p>
      </div>

      <div class="note-body">
        <p v-if="!note.edit" >{{ note.descr }}</p>
        <input
          @keydown.enter="saveEdit(index)"
          @keydown.esc="cancelEdit(index)" 
          v-if="note.edit" type="text" 
          v-model="editFields.editDescr">
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: null,
      editFields: null
    }
  },
  props: {
    grid: {
      type: Boolean,
      required: true
    }
  },
  created() {
    this.notes = this.$store.getters.getNotes;
    this.editFields = this.$store.getters.getEditFields;
  },
  methods: {
    removeNote(index) {
      this.$store.dispatch('removeNote', index);
    },
    editNote(index) {
      this.$store.dispatch('editNote', index);
    },
    cancelEdit(index) {
      this.$store.dispatch('cancelEdit', index);
    },
    saveEdit(index) {
      this.$store.dispatch('saveEdit', index);
      this.cancelEdit(index);
    }
  }
}
</script>

<style lang="scss">
  .notes {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 40px 0;
  }
  .note {
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: #fff;
    transition: all .25s;
    &:hover {
      transform: translateY(-3px);
      transition: 0.2s all;
    }
    &.full {
      width: 100%;
      text-align: center;
    }
  }
  .note-header {
    h1 {
      font-size: 32px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: #402caf;
      font-size: 22px;
    }
    &.full {
      justify-content: center;
      p {
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    svg {
    margin-right: 15px; 
    color: #999;
    cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      &.active {
        color: #402caf;
      }
    }
  }
  .note-body {
    p {
      margin: 20px 0;
    }
    span {
      font-size: 14px;
      color: #999;
    }
  }
  .notify {
    border-radius: 20px;
    padding: 10px;
  }
  .standart {
      box-shadow: 0 30px 30px rgba(0,0,0,.04);    
    &:hover {
      box-shadow: 0 30px 30px rgba(0,128,0,.05);
    }
  }
  .average {
    box-shadow: 0 30px 30px rgba(255,165,0,.4);
    &:hover {
      box-shadow: 0 30px 30px rgba(255,165,0,.5);      
    }
  }
  .important {
    &:hover {
      box-shadow: 0 30px 30px rgba(255,0,0,.5);
    }
    box-shadow: 0 30px 30px rgba(255,0,0,.4);
  }
</style>
