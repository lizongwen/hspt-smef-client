let popMsg = {
  popErrorHtmlMsg(vm,msg)
  {
    vm.$message({
      dangerouslyUseHTMLString: true,
      showClose: true,
      message: msg,
      type: 'error'
    });
  }
}

export default popMsg;

