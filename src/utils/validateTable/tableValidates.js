import AsyncValidator from 'async-validator';

import popMsg from '@/utils/notice/notice';
let table_validates = {
  validateByRow(row, index, rules, vm)

  {
    let validateState = '';
    const validator = new AsyncValidator(rules);
    validateState = 'validating';
    let count = 1;
	let cellList = document.querySelectorAll('.cellItem');
    // let columnsList = Object.keys(vm.tableData_columns);
    // 清理 is_error和is_success状态
    for (let i = 0; i < cellList.length; i++) {
      let index = 0;
      let newClassName = '';
      index = cellList[i].className.indexOf('is-error');
      newClassName = (index == 0) ? cellList[i].className.replace('is-error ', '') : cellList[i].className.m_Replace(' is-error', '');
      index = cellList[i].className.indexOf('is-success');
      newClassName = (index == 0) ? newClassName.replace('is-success ', '') : newClassName.m_Replace(' is-success', '');
      cellList[i].className = newClassName;
    }
    // 验证
    validator.validate(row, (errors, invalidFields) => {
      validateState = !errors ? 'success' : 'error';
      let notice = "";
      if (errors) {
        let notice = '';
        for (let invalidCellKey in invalidFields) {
          // 对验证不通过的单元格高亮显示
          for (let i = 0; i < cellList.length; i++) {
            let haveFlag = cellList[i].className.includes(invalidCellKey);
            if (haveFlag) {
              cellList[i].className += " is-" + validateState;
            }
          }
          //构造错误提示信息
          invalidFields[invalidCellKey].forEach((item, index, array) => {
            notice += `<p>${count++}. ${item.message}; </p> `;
          })
        }
        // 弹出错误信息
        popMsg.popErrorHtmlMsg(vm, notice);
      }
      else {
		row.edit = false;
		return true
      }
    })
  }
}

export default table_validates;

