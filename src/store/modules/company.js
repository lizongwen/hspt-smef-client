import Vue from 'vue';

const company = {
  state: {
    historyNewFlag: false
  },
  mutations: {
    setHistoryNewFlag(state,newVal){
      state.historyNewFlag = newVal;
    }
  }
};

export default company;
