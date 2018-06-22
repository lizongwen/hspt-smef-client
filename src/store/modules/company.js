import Vue from 'vue';

const company = {
    state: {
	  editingState: false,
	  isAside:true,
    },
    mutations: {
      setEditingFlag(state, newValObj)
      {
        state.editingState = newValObj.editingFlag;
	  },
	  changeSide(state,newVal){
		state.isAside =newVal;
	  }
    }

  }
;

export default company;
