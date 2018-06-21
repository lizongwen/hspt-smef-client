import Vue from 'vue';

const company = {
  state: {
    historyNewFlag: false
  },
  mutations: {
    setHistoryNewFlag(state,newValObj){
      state.historyNewFlag = newValObj.newFlag;
    }
  }
};

export default company;
