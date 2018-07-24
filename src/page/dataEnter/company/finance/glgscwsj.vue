<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			
			<el-tab-pane label="资产负债表" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button  type="primary" size="medium">保存</el-button>
							</div>
						</div>
						
				<div>
					<table lay-skin="line">
						<colgroup>
                            <col width="250">
                        </colgroup>
						<tr>
							<th>项目</th>
							<th>2015年</th>
							<th>变化</th>
							<th>2016年</th>
							<th>变化</th>
							<th>2017年</th>
						</tr>
						</table>
						<table lay-skin="line">
						<tr><th>资产总计</th></tr>
						<tr><td style="color:#3DA3FF ;" colspan='6'>1、流动资产总计</td></tr>
						<tr><td>货币资金</td><td>{{form.hbzj}}</td><td>{{form.hbzj}}</td><td>{{form.hbzj}}</td><td>{{form.hbzj}}</td><td>{{form.hbzj}}</td></tr>
						<tr><td>应收票据</td><td>{{form.yspj1}}</td><td>{{form.yspj1}}</td><td>{{form.yspj1}}</td><td>{{form.yspj1}}</td><td>{{form.yspj1}}</td></tr>
						<tr><td>应收票据</td><td>{{form.yspj2}}</td><td>{{form.yspj2}}</td><td>{{form.yspj2}}</td><td>{{form.yspj2}}</td><td>{{form.yspj2}}</td></tr>
						<tr><td>应收账款</td><td>{{form.yszk1}}</td><td>{{form.yszk1}}</td><td>{{form.yszk1}}</td><td>{{form.yszk1}}</td><td>{{form.yszk1}}</td></tr>
						<tr><td>预付账款</td><td>{{form.yfzk1}}</td><td>{{form.yfzk1}}</td><td>{{form.yfzk1}}</td><td>{{form.yfzk1}}</td><td>{{form.yfzk1}}</td></tr>
						<tr><td>其他应收账款</td><td>{{form.qtyszk}}</td><td>{{form.qtyszk}}</td><td>{{form.qtyszk}}</td><td>{{form.qtyszk}}</td><td>{{form.qtyszk}}</td></tr>
						<tr><td>存货</td><td>{{form.ch}}</td><td>{{form.ch}}</td><td>{{form.ch}}</td><td>{{form.ch}}</td><td>{{form.ch}}</td></tr>
						<tr><td>其他流动资产</td><td>{{form.qtldzc}}</td><td>{{form.qtldzc}}</td><td>{{form.qtldzc}}</td><td>{{form.qtldzc}}</td><td>{{form.qtldzc}}</td></tr>
						<tr><td style="color:#3DA3FF ;" colspan='6'>2、非流动资产合计</td></tr>
						<tr><td>长期应收款</td><td>{{form.cqysk}}</td><td>{{form.cqysk}}</td><td>{{form.cqysk}}</td><td>{{form.cqysk}}</td><td>{{form.cqysk}}</td></tr>
						<tr><td>长期股权投资</td><td>{{form.cqgqtz}}</td><td>{{form.cqgqtz}}</td><td>{{form.cqgqtz}}</td><td>{{form.cqgqtz}}</td><td>{{form.cqgqtz}}</td></tr>
						<tr><td>固定资产</td><td>{{form.gdzc}}</td><td>{{form.gdzc}}</td><td>{{form.gdzc}}</td><td>{{form.gdzc}}</td><td>{{form.gdzc}}</td></tr>
						<tr><td>在建工程</td><td>{{form.zjgc}}</td><td>{{form.zjgc}}</td><td>{{form.zjgc}}</td><td>{{form.zjgc}}</td><td>{{form.zjgc}}</td></tr>
						<tr><td>固定资产清理</td><td>{{form.gdzcql}}</td><td>{{form.gdzcql}}</td><td>{{form.gdzcql}}</td><td>{{form.gdzcql}}</td><td>{{form.gdzcql}}</td></tr>
						<tr><td>无形资产</td><td>{{form.wxzc}}</td><td>{{form.wxzc}}</td><td>{{form.wxzc}}</td><td>{{form.wxzc}}</td><td>{{form.wxzc}}</td></tr>
						<tr><td>递延所得税资产</td><td>{{form.dysdszc}}</td><td>{{form.dysdszc}}</td><td>{{form.dysdszc}}</td><td>{{form.dysdszc}}</td><td>{{form.dysdszc}}</td></tr>
						<tr><td>其他非流动资产</td><td>{{form.qtfldzc}}</td><td>{{form.qtfldzc}}</td><td>{{form.qtfldzc}}</td><td>{{form.qtfldzc}}</td><td>{{form.qtfldzc}}</td></tr>
						</table>
				<table lay-skin="line" style="margin-top: 20px;">
						<tr><th>负债合计</th></tr>
						<tr><td style="color:#3DA3FF ;" colspan='6'>1、流动负债合计</td></tr>
						<tr><td>短期借款</td><td>{{form.dqjk}}</td><td>{{form.dqjk}}</td><td>{{form.dqjk}}</td><td>{{form.dqjk}}</td><td>{{form.dqjk}}</td></tr>
						<tr><td>应付票据</td><td>{{form.yfpj3}}</td><td>{{form.yfpj3}}</td><td>{{form.yfpj3}}</td><td>{{form.yfpj3}}</td><td>{{form.yfpj3}}</td></tr>
						<tr><td>应收账款</td><td>{{form.yszk2}}</td><td>{{form.yszk2}}</td><td>{{form.yszk2}}</td><td>{{form.yszk2}}</td><td>{{form.yszk2}}</td></tr>
						<tr><td>预售款项</td><td>{{form.yskx}}</td><td>{{form.yskx}}</td><td>{{form.yskx}}</td><td>{{form.yskx}}</td><td>{{form.yskx}}</td></tr>
						<tr><td>应付职工薪酬</td><td>{{form.yfzgxc}}</td><td>{{form.yfzgxc}}</td><td>{{form.yfzgxc}}</td><td>{{form.yfzgxc}}</td><td>{{form.yfzgxc}}</td></tr>
						<tr><td>应付利息</td><td>{{form.yflx}}</td><td>{{form.yflx}}</td><td>{{form.yflx}}</td><td>{{form.yflx}}</td><td>{{form.yflx}}</td></tr>
						<tr><td>其他应付款</td><td>{{form.qtyfk}}</td><td>{{form.qtyfk}}</td><td>{{form.qtyfk}}</td><td>{{form.qtyfk}}</td><td>{{form.qtyfk}}</td></tr>
						<tr><td>其他流动负债</td><td>{{form.qtldfz}}</td><td>{{form.qtldfz}}</td><td>{{form.qtldfz}}</td><td>{{form.qtldfz}}</td><td>{{form.qtldfz}}</td></tr>
						<tr><td style="color:#3DA3FF ;">2、非流动负债合计</td><td>{{form.fldfzhj}}</td><td>{{form.fldfzhj}}</td><td>{{form.fldfzhj}}</td><td>{{form.fldfzhj}}</td><td>{{form.fldfzhj}}</td></tr>
						<tr><td>长期应付款</td><td>{{form.cqyfk}}</td><td>{{form.cqyfk}}</td><td>{{form.cqyfk}}</td><td>{{form.cqyfk}}</td><td>{{form.cqyfk}}</td></tr>
						<tr><td>专项应收款</td><td>{{form.zxysk}}</td><td>{{form.zxysk}}</td><td>{{form.zxysk}}</td><td>{{form.zxysk}}</td><td>{{form.zxysk}}</td></tr>
						<tr><td>预计负债</td><td>{{form.yjfz}}</td><td>{{form.yjfz}}</td><td>{{form.yjfz}}</td><td>{{form.yjfz}}</td><td>{{form.yjfz}}</td></tr>
						<tr><td>其他非流动负债</td><td>{{form.qtfldfz}}</td><td>{{form.qtfldfz}}</td><td>{{form.qtfldfz}}</td><td>{{form.qtfldfz}}</td><td>{{form.qtfldfz}}</td></tr>
						</table>
						<table lay-skin="line" style="margin-top: 20px;">
							<tr><th>所有者权益（或股东权益）合计</th></tr>
							<tr><td style="color:#3DA3FF ;">1、实缴资本（或股东）</td><td>{{form.sjzb}}</td><td>{{form.sjzb}}</td><td>{{form.sjzb}}</td><td>{{form.sjzb}}</td><td>{{form.sjzb}}</td></tr>
							<tr><td style="color:#3DA3FF ;">2、资本公积</td><td>{{form.zbgj}}</td><td>{{form.zbgj}}</td><td>{{form.zbgj}}</td><td>{{form.zbgj}}</td><td>{{form.zbgj}}</td></tr>
							<tr><td style="color:#3DA3FF ;">3、专项储备</td><td>{{form.zxcb}}</td><td>{{form.zxcb}}</td><td>{{form.zxcb}}</td><td>{{form.zxcb}}</td><td>{{form.zxcb}}</td></tr>
							<tr><td style="color:#3DA3FF ;">4、盈余公积</td><td>{{form.yygj}}</td><td>{{form.yygj}}</td><td>{{form.yygj}}</td><td>{{form.yygj}}</td><td>{{form.yygj}}</td></tr>
							<tr><td style="color:#3DA3FF ;">5、未分配利益</td><td>{{form.wfply}}</td><td>{{form.wfply}}</td><td>{{form.wfply}}</td><td>{{form.wfply}}</td><td>{{form.wfply}}</td></tr>
					</table>
					
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<!--<el-button type="default" size="medium">上传数据</el-button>-->
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">备注</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
				</div>
					
				</div>
						
					</el-card>
				</div>

			</el-tab-pane>
			
			<el-tab-pane label="利润表" name="second">
				
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">模板下载</el-button>
								<el-button type="default" size="medium">数据导入</el-button>
								<el-button  type="primary" size="medium">保存</el-button>
							</div>
						</div>
						
				<div>
					<table lay-skin="line">
						<colgroup>
                            <col width="250">
                        </colgroup>
						<tr>
							<th>项目</th>
							<th>2015年12月</th>
							<th>变化</th>
							<th>2016年12月</th>
							<th>变化</th>
							<th>2017年12月</th>
						</tr>
						<tr><td colspan='6'>资产总计</td></tr>
						<tr><td style="color:#3DA3FF ;">1、流动资产总计</td><td>{{form_lr.ldzczj}}</td><td>{{form_lr.ldzczj}}</td><td>{{form_lr.ldzczj}}</td><td>{{form_lr.ldzczj}}</td><td>{{form_lr.ldzczj}}</td></tr>
						<tr><td><h4>减：营业成本</h4></td><td>{{form_lr.yycb}}</td><td>{{form_lr.yycb}}</td><td>{{form_lr.yycb}}</td><td>{{form_lr.yycb}}</td><td>{{form_lr.yycb}}</td></tr>
					    <tr><td>营业税金及附加</td><td>{{form_lr.yysjjfj}}</td><td>{{form_lr.yysjjfj}}</td><td>{{form_lr.yysjjfj}}</td><td>{{form_lr.yysjjfj}}</td><td>{{form_lr.yysjjfj}}</td></tr>
					    <tr><td>销售费用</td><td>{{form_lr.xsfy}}</td><td>{{form_lr.xsfy}}</td><td>{{form_lr.xsfy}}</td><td>{{form_lr.xsfy}}</td><td>{{form_lr.xsfy}}</td></tr>
					    <tr><td>管理费用</td><td>{{form_lr.glfy1}}</td><td>{{form_lr.glfy1}}</td><td>{{form_lr.glfy1}}</td><td>{{form_lr.glfy1}}</td><td>{{form_lr.glfy1}}</td></tr>
					    <tr><td>管理费用</td><td>{{form_lr.glfy2}}</td><td>{{form_lr.glfy2}}</td><td>{{form_lr.glfy2}}</td><td>{{form_lr.glfy2}}</td><td>{{form_lr.glfy2}}</td></tr>
					    <tr><td>资产减值损失</td><td>{{form_lr.zcjzss}}</td><td>{{form_lr.zcjzss}}</td><td>{{form_lr.zcjzss}}</td><td>{{form_lr.zcjzss}}</td><td>{{form_lr.zcjzss}}</td></tr>
					    <tr><td><h4>加：投资收益</h4></td><td>{{form_lr.tzsy}}</td><td>{{form_lr.tzsy}}</td><td>{{form_lr.tzsy}}</td><td>{{form_lr.tzsy}}</td><td>{{form_lr.tzsy}}</td></tr>
						<tr><td style="color:#3DA3FF ;">2、营业利润</td><td>{{form_lr.yylr}}</td><td>{{form_lr.yylr}}</td><td>{{form_lr.yylr}}</td><td>{{form_lr.yylr}}</td><td>{{form_lr.yylr}}</td></tr>
						<tr><td><h4>减：营业外支出</h4></td><td>{{form_lr.yywzc}}</td><td>{{form_lr.yywzc}}</td><td>{{form_lr.yywzc}}</td><td>{{form_lr.yywzc}}</td><td>{{form_lr.yywzc}}</td></tr>
						<tr><td><h4>加：营业外收入</h4></td><td>{{form_lr.yywsr}}</td><td>{{form_lr.yywsr}}</td><td>{{form_lr.yywsr}}</td><td>{{form_lr.yywsr}}</td><td>{{form_lr.yywsr}}</td></tr>
						<tr><td style="color:#3DA3FF ;">3、利润总额</td><td>{{form_lr.lrze}}</td><td>{{form_lr.lrze}}</td><td>{{form_lr.lrze}}</td><td>{{form_lr.lrze}}</td><td>{{form_lr.lrze}}</td></tr>
						<tr><td><h4>减：所得税费用</h4></td><td>{{form_lr.sdsfy}}</td><td>{{form_lr.sdsfy}}</td><td>{{form_lr.sdsfy}}</td><td>{{form_lr.sdsfy}}</td><td>{{form_lr.sdsfy}}</td></tr>
						<tr><td style="color:#3DA3FF ;">4、净利润</td><td>{{form_lr.jlr}}</td><td>{{form_lr.jlr}}</td><td>{{form_lr.jlr}}</td><td>{{form_lr.jlr}}</td><td>{{form_lr.jlr}}</td></tr>
						</table>
				
					
					
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<!--<el-button type="default" size="medium">上传数据</el-button>-->
								<el-button type="primary" size="medium" >保存</el-button>
							</div>
							<div class="card-title">备注</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
				</div>
					
				</div>
						
					</el-card>
				</div>
				
			</el-tab-pane>
			
		</el-tabs>
	</div>
</template>

<script>
import quillEditor from "@/components/form/quillEditor.vue";
export default {
 data(){
 	return {
 		value4: '',
activeName: "first",
textEditorContent: "",
 form: {
 	//资产负债
 	ldzczj:'',
 	hbzj:'',
	yspj1: '',
	yspj2: '',
	yszk1: '',
	yfzk1: '',
	qtyszk:'',
	ch:'',
	qtldzc:'',
			
	fldzchj:'',
	cqysk:'',
	cqgqtz:'',
	gdzc:'',
	zjgc:'',
	gdzcql:'',
	wxzc:'',
	dysdszc:'',
	qtfldzc:'',
			
	ldfzhj:'',
	dqjk:'',
	yfpj3:'',
	yszk2:'',
	yskx:'',
	yfzgxc:'',
	yflx:'',
	qtyfk:'',
	qtldfz:'',
			
	fldfzhj:'',
	cqyfk:'',
	zxysk:'',
	yjfz:'',
	qtfldfz:'',
			
	sjzb:'',
	zbgj:'',
	zxcb:'',
	yygj:'',
	wfply:'',

 },
 form_lr:{
 	//利润
	ldzczj:'',
	yycb:'',
	yysjjfj:'',
	xsfy:'',
	glfy1:'',
	glfy2:'',
	zcjzss:'',
	tzsy:'',
	yylr:'',
	yywzc:'',
	yywsr:'',
	lrze:'',
	sdsfy:'',
	jlr:'',
 },

 	}
 },
  mounted() {
     this.getZcfz();
     this.getLr();

  },
 methods: {
      //点击标签页触发事件
      handleClick(tab, event) {
        //   console.log(tab, event);
      },
      
  getZcfz:async function() {
  	 let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/gsjbxx/hbxx/hbxx/list",
        params
      );
      this.form.ldzczj = res.data.resultData.data.ldzczj;
      this.form.hbzj = res.data.resultData.data.hbzj
      this.form.yspj1 = res.data.resultData.data.yspj1
      this.form.yspj2 = res.data.resultData.data.yspj2
      this.form.yszk1 = res.data.resultData.data.yszk1
      this.form.yfzk1 = res.data.resultData.data.yfzk1
      this.form.qtyszk = res.data.resultData.data.qtyszk
      this.form.ch = res.data.resultData.data.ch
      this.form.qtldzc = res.data.resultData.data.qtldzc
      this.form.fldzchj = res.data.resultData.data.fldzchj
      this.form.cqysk = res.data.resultData.data.cqysk
      this.form.cqgqtz = res.data.resultData.data.cqgqtz
      this.form.gdzc = res.data.resultData.data.gdzc
      this.form.zjgc = res.data.resultData.data.zjgc
      this.form.gdzcql = res.data.resultData.data.gdzcql
      this.form.wxzc = res.data.resultData.data.wxzc
      this.form.dysdszc = res.data.resultData.data.dysdszc
      this.form.qtfldzc = res.data.resultData.data.qtfldzc
      this.form.ldfzhj = res.data.resultData.data.ldfzhj
      this.form.dqjk = res.data.resultData.data.dqjk
      this.form.yfpj3 = res.data.resultData.data.yfpj3
      this.form.yszk2 = res.data.resultData.data.yszk2
      this.form.yskx = res.data.resultData.data.yskx
     this.form.yfzgxc=res.data.resultData.data.yfzgxc
	this.form.yflx=res.data.resultData.data.yflx
	this.form.qtyfk=res.data.resultData.data.qtyfk
	this.form.qtldfz=res.data.resultData.data.qtldfz
			
	this.form.fldfzhj=res.data.resultData.data.fldfzhj
	this.form.cqyfk=res.data.resultData.data.cqyfk
	this.form.zxysk=res.data.resultData.data.zxysk
	this.form.yjfz=res.data.resultData.data.yjfz
	this.form.qtfldfz=res.data.resultData.data.qtfldfz
			
	this.form.sjzb=res.data.resultData.data.sjzb
	this.form.zbgj=res.data.resultData.data.zbgj
	this.form.zxcb=res.data.resultData.data.zxcb
	this.form.yygj=res.data.resultData.data.yygj
	this.form.wfply=res.data.resultData.data.wfply
      
  },
  
     getLr:async function(){
   	let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/zycwsj/lr/list",
        params
      );
       
	this.form_lr.ldzczj=res.data.resultData.data.ldzczj
	this.form_lr.yycb=res.data.resultData.data.yycb
	this.form_lr.yysjjfj=res.data.resultData.data.yysjjfj
	this.form_lr.xsfy=res.data.resultData.data.xsfy
	this.form_lr.glfy1=res.data.resultData.data.glfy1
	this.form_lr.glfy2=res.data.resultData.data.glfy2
	this.form_lr.zcjzss=res.data.resultData.data.zcjzss
	this.form_lr.tzsy=res.data.resultData.data.tzsy
	this.form_lr.yylr=res.data.resultData.data.yylr
	this.form_lr.yywzc=res.data.resultData.data.yywzc
	this.form_lr.yywsr=res.data.resultData.data.yywsr
	this.form_lr.lrze=res.data.resultData.data.lrze
	this.form_lr.sdsfy=res.data.resultData.data.sdsfy
	this.form_lr.jlr=res.data.resultData.data.jlr
   },
      
      
   },

   	 		components: {
    "quill-editor": quillEditor
},	
};
</script>

<style lang="scss">
/*table{
	width: 100%;
	background:#F4F3F3;
	border-collapse:collapse;
}
table tr{
	border-bottom:1px solid #D8D8D8;
}
table tr th{
	height: 40px;
	text-align:left;
	padding-left: 20px;
}
table tr td{
	height: 40px;
	text-align:left;
	padding-left: 20px;
	background: white;
	
}*/
$width: 100%;
  $background: #f4f3f3;
  $border-collapse: collapse;
table {
  width: $width;
  background: $background;
  border-collapse: $border-collapse;
}
$border-bottom: 1px solid #d8d8d8;
table tr {
  border-bottom: $border-bottom;
}
 $height: 40px;
  $text-align: left;
  $padding-left: 20px;
table tr th {
  height: $height;
  text-align: $text-align;
  padding-left: $padding-left;
}
$height: 40px;
  $text-align: left;
  $padding-left: 20px;
  $background: white;
table tr td {
  height: $height;
  text-align: $text-align;
  padding-left: $padding-left;
  background: $background;
}
.clearfix{
	margin-top: 30px;;
}
.text-editor {
	margin-top: 15px;
}
.text-editor .ql-editor {
  height: 300px;
}
$font-size: 15px;
.card-title{
	font-size: $font-size;
}
$width: 55%;
.el-input__inner{
	width: $width;
}
</style>
