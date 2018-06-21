import Vue from 'vue';

const company = {
    state: {
      editingState: false
    },
    mutations: {
      setEditingFlag(state, newValObj)
      {
        state.editingState = newValObj.editingFlag;
      }
    }

  }
;

export default company;
