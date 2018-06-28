String.prototype.m_Replace=function(strBefore,strAfter){
  var reg=new RegExp(strBefore,"g");
  return this.replace(reg,strAfter);
}
