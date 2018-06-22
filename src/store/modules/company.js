import Vue from 'vue';

const company = {
	state: {
		editingState: false,
		isAside: true,
		creditCode: ''
	},
	mutations: {
		setEditingFlag(state, newValObj) {
			state.editingState = newValObj.editingFlag;
		},
		changeSide(state, newVal) {
			state.isAside = newVal;
		},
		setCreditCode(state, newVal) {
			state.creditCode = newVal;
		}
	}

};


export default company;
