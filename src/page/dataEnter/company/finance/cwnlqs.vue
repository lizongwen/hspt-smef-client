<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			
			<el-tab-pane label="盈利能力状况分析" name="first">
				
				<div>
					<el-card class="box-card" shadow='nevner'>
							<div slot="header" class="clearfix">
							<div class="card-title">数据列表</div>
						</div>
						<div>
							<table lay-skin="line">
						<tr>
							<th>盈利能力状况</th>
							<th>2015年</th>
							<th>2016年</th>
							<th>2017年</th>
							<th>2017年[较差值   优秀值]</th>
						</tr>
						<tr>
							<td>净资产收益率（%）</td>
							<td>{{form.jccsyl}}</td>
							<td>{{form.jccsyl}}</td>
							<td>{{form.jccsyl}}</td>
							<td>[{{form.jccsyl}}  {{form.jccsyl}}]</td>
						</tr>
						<tr>
							<td>总资产报酬率（%）</td>
							<td>{{form.zzcbcl}}</td>
							<td>{{form.zzcbcl}}</td>
							<td>{{form.zzcbcl}}</td>
							<td>[{{form.zzcbcl}}  {{form.zzcbcl}}]</td>
						</tr>
							<tr>
							<td>销售（营业）利润率（%）</td>
							<td>{{form.xslrl}}</td>
							<td>{{form.xslrl}}</td>
							<td>{{form.xslrl}}</td>
							<td>[{{form.xslrl}}  {{form.xslrl}}]</td>
						</tr>
							<tr>
							<td>成本费用利润率（%）</td>
							<td>{{form.cbfylrl}}</td>
							<td>{{form.cbfylrl}}</td>
							<td>{{form.cbfylrl}}</td>
							<td>[{{form.cbfylrl}}  {{form.cbfylrl}}]</td>
						</tr>
							<tr>
							<td>毛利率（%）</td>
							<td>{{form.mll}}</td>
							<td>{{form.mll}}</td>
							<td>{{form.mll}}</td>
							<td>[{{form.mll}}  {{form.mll}}]</td>
						</tr>
						</table>
						</div>
						
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-title">图表视图</div>
						</div>
						<div>
							<div class="img">
								图片展示区域
							</div>
						</div>
						</div>
						
						<div class="clear">
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" >保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
				</div>
						</div>
				
						
					</el-card>
				</div>
				
			</el-tab-pane>
			
			<el-tab-pane label="运营能力状况分析" name="second">
				
					<div>
					<el-card class="box-card" shadow='nevner'>
							<div slot="header" class="clearfix">
							<div class="card-title">数据列表</div>
						</div>
						<div>
							<table lay-skin="line">
						<tr>
							<th>运营能力状况</th>
							<th>2015年</th>
							<th>2016年</th>
							<th>2017年</th>
							<th>2017年[较差值   优秀值]</th>
						</tr>
						<tr>
							<td>总资产周转率（次）</td>
							<td>{{form_yy.zzc}}</td>
							<td>{{form_yy.zzc}}</td>
							<td>{{form_yy.zzc}}</td>
							<td>[{{form_yy.zzc}}  {{form_yy.zzc}}]</td>
						</tr>
						<tr>
							<td>应收账款周转率（次）</td>
							<td>{{form_yy.yszk}}</td>
							<td>{{form_yy.yszk}}</td>
							<td>{{form_yy.yszk}}</td>
							<td>[{{form_yy.yszk}}  {{form_yy.yszk}}]</td>
						</tr>
							<tr>
							<td>流动资产周转率（次）</td>
							<td>{{form_yy.ldzc}}</td>
							<td>{{form_yy.ldzc}}</td>
							<td>{{form_yy.ldzc}}</td>
							<td>[{{form_yy.ldzc}}  {{form_yy.ldzc}}]</td>
						</tr>
							<tr>
							<td>资产现金回收率（%）</td>
							<td>{{form_yy.zcxj}}</td>
							<td>{{form_yy.zcxj}}</td>
							<td>{{form_yy.zcxj}}</td>
							<td>[{{form_yy.zcxj}}  {{form_yy.zcxj}}]</td>
						</tr>
							<tr>
							<td>存货周转率（次）</td>
							<td>{{form_yy.ch}}</td>
							<td>{{form_yy.ch}}</td>
							<td>{{form_yy.ch}}</td>
							<td>[{{form_yy.ch}}  {{form_yy.ch}}]</td>
						</tr>
						</table>
						</div>
						
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-title">图表视图</div>
						</div>
						<div>
							<div class="img">
								图片展示区域
							</div>
						</div>
						</div>
						
						<div class="clear">
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
				</div>
						</div>
				
						
					</el-card>
				</div>
				
			</el-tab-pane>
			
			<el-tab-pane label="偿债能力状况分析" name="third">
				
				<div>
					<el-card class="box-card" shadow='nevner'>
							<div slot="header" class="clearfix">
							<div class="card-title">数据列表</div>
						</div>
						<div>
							<table lay-skin="line">
						<tr>
							<th>偿债能力状况</th>
							<th>2015年</th>
							<th>2016年</th>
							<th>2017年</th>
							<th>2017年[较差值   优秀值]</th>
						</tr>
						<tr>
							<td>资产周转率（%）</td>
							<td>-</td>
							<td></td>
							<td></td>
							<td>[-2.3  12.3]</td>
						</tr>
						<tr>
							<td>已获利息倍数（%）</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
							<tr>
							<td>速度比率（%）</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
							<tr>
							<td>现金流动负债比率（%）</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
							<tr>
							<td>流动比率（%）</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						</table>
						</div>
						
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-title">图表视图</div>
						</div>
						<div>
							<div class="img">
								图片展示区域
							</div>
						</div>
						</div>
						
						<div class="clear">
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
				</div>
						</div>
				
						
					</el-card>
				</div>
				
			</el-tab-pane>
			
			<el-tab-pane label="成长能力状况分析" name="four">
				
					<div>
					<el-card class="box-card" shadow='nevner'>
							<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">获取数据</el-button>
								<el-button  type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">数据列表</div>
						</div>
						<div>
							<table lay-skin="line">
						<tr>
							<th>成长能力状况</th>
							<th>2015年</th>
							<th>2016年</th>
							<th>2017年</th>
							<th>2017年[较差值   优秀值]</th>
						</tr>
						<tr>
							<td>销售（营业）增长率（%）</td>
							<td>-</td>
							<td></td>
							<td></td>
							<td>[-2.3  12.3]</td>
						</tr>
						<tr>
							<td>资本保值增值率（%）</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
							<tr>
							<td>销售（营业）利润增长率（%）</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
							<tr>
							<td>总资产增长率（%）</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
							<tr>
							<td>净利润增长率（%）</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						</table>
						</div>
						
						<div class="clear">
								<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="default" size="medium">生成图表</el-button>
								<el-button type="primary" size="medium">保存</el-button>
							</div>
							<div class="card-title">图表视图</div>
						</div>
						<div>
							<div class="img">
								图片展示区域
							</div>
						</div>
						</div>
						
						<div class="clear">
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" >保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
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
activeName: "first",
textEditorContent: "",
form:{
	//盈利能力状况
	jccsyl:'',
	zzcbcl:'',
	xslrl:'',
	cbfylrl:'',
	mll:''

},
form_yy:{
	zzc:'',
	yszk:'',
	ldzc:'',
	zcxj:'',
	ch:''
},
form_cz:{
	zc:'',
	yhlx:'',
	sd:'',
	xjld:'',
	ld:''
},
 	}
 },
     mounted() {
      this.getYlnl();
      this.getYynl();
    },
	 methods: {
      //点击标签页触发事件
      handleClick(tab, event) {
        //   console.log(tab, event);
      },
      
      
       //获取盈利能力状况
    getYlnl:async function(){
    		let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwnlqsfx/ylnlzkfx/list",
        params
      );
//    console.log(res.data.resultData)
      this.form.jccsyl=res.data.resultData.data.jccsyl
      this.form.zzcbcl=res.data.resultData.data.zzcbcl
      this.form.xslrl=res.data.resultData.data.xslrl
      this.form.cbfylrl=res.data.resultData.data.cbfylrl
      this.form.mll=res.data.resultData.data.mll
    },
    
    
    //获取运营能力状况分析
    getYynl:async function(){
    		let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwnlqsfx/yynlzkfx/list",
        params
      );
      console.log(res.data.resultData)
      this.form_yy.zzc=res.data.resultData.data.zzc
      this.form_yy.yszk=res.data.resultData.data.yszk
      this.form_yy.ldzc=res.data.resultData.data.ldzc
      this.form_yy.zcxj=res.data.resultData.data.zcxj
      this.form_yy.ch=res.data.resultData.data.ch
    },
     
     //获取偿债能力状况分析
     getCznl:async function(){
     	let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "",
        params
      );
      console.log(res.data.resultData)
     },
     
     
    },
    

 		components: {
    "quill-editor": quillEditor
}

}
</script>

<style lang="scss">
table{
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
	
}
.clear{
	/*border-top: 1px solid #F6F6F6;
	border-bottom: 1px solid #F6F6F6;*/
	margin-top: 20px;
}
.clearfix{
	margin-top: 20px;
}
.img{
	width: 100%;
	height: 200px;
	background: #EEF9FF;
	margin-top: 20px;
	margin-bottom: 20px;
	text-align: center;
	line-height:200px;
}
.text-editor {
	margin-top: 15px;
}
.text-editor .ql-editor {
  height: 200px;
}
</style>
