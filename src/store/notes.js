export default {
  state: {
    title: 'Notes App',
    message: null,
    notes: [
      {
        title: 'First note',
        descr: 'First description',
        date: new Date(Date.now()).toLocaleString(),
        notify: 'standart',
        edit: false
      },
      {
        title: 'Second note',
        descr: 'Second description',
        date: new Date(Date.now()).toLocaleString(),
        notify: 'average',
        edit: false
      },
      {
        title: 'Third note',
        descr: 'Third description',
        date: new Date(Date.now()).toLocaleString(),
        notify: 'important',
        edit: false
      }
    ],
    note: {
      title: '',
      descr: '',
      notify: 'standart',
      edit: false
    },
    editFields: {
      editTitle: null,
      editDescr: null
    },
    priority: [
      {
        text: 'No important', value: 'standart'
      },
      {
        text: 'Important', value: 'average'
      },
      {
        text: 'Very important', value: 'important'
      }
    ]
  },
  mutations: {
    addNote(state, payload) {
      if (payload.title === "") {
        state.message = "title don't be empty!";
        return false;
      }
      state.notes.push(payload);

      state.note.title = '';
      state.note.descr = '';
      state.note.notify = 'standart';
      state.note.edit = false;
      state.message = null;
    },
    removeNote(state, payload) {
      state.notes.splice(payload, 1);
    },
    editNote(state, payload) {
      state.editFields.editTitle = state.notes[payload].title;
      state.editFields.editDescr = state.notes[payload].descr;
      state.notes[payload].edit = true;
    },
    cancelEdit(state, payload) {
      state.editFields.editTitle = null;
      state.editFields.editDescr = null;
      state.notes[payload].edit = false;
    },
    saveEdit(state, payload) {
      state.notes[payload].title = state.editFields.editTitle;
      state.notes[payload].descr = state.editFields.editDescr;
      state.notes[payload].date = new Date(Date.now()).toLocaleString();
    }
  },
  actions: {
    addNote({ commit }, payload) {
      commit('addNote', payload);
    },
    removeNote({ commit }, payload) {
      commit('removeNote', payload);
    },
    editNote({commit}, payload) {
      commit('editNote', payload);
    },
    cancelEdit({commit}, payload) {
      commit('cancelEdit', payload);
    },
    saveEdit({commit}, payload) {
      commit('saveEdit', payload);
    }
  },
  getters: {
    getTitle(state) {
      return state.title;
    },
    getNotes(state) {
      return state.notes;
    },
    getPriority(state) {
      return state.priority;
    },
    getMessage(state) {
      return state.message;
    },
    getPriority(state) {
      return state.priority;
    },
    getNote(state) {
      return state.note;
    },
    getEditFields(state) {
      return state.editFields;
    }
  }
}