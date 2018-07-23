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
							<th>{{ylnlTableData.one.nf}}年</th>
							<th>{{ylnlTableData.two.nf}}年</th>
							<th>{{ylnlTableData.three.nf}}年</th>
							<th>{{ylnlTableData.jxpj.nf}}年[较差值   优秀值]</th>
						</tr>
						<tr>
							<td>净资产收益率(%)</td>
							<td>{{ylnlTableData.one.jzcsyl}}</td>
							<td>{{ylnlTableData.two.jzcsyl}}</td>
							<td>{{ylnlTableData.three.jzcsyl}}</td>
							<td>{{ylnlTableData.jxpj.jzcsyl}}</td>
						</tr>
						<tr>
							<td>总资产报酬率(%)</td>
							<td>{{ylnlTableData.one.zzcbcl}}</td>
							<td>{{ylnlTableData.two.zzcbcl}}</td>
							<td>{{ylnlTableData.three.zzcbcl}}</td>
							<td>{{ylnlTableData.jxpj.zzcbcl}}</td>
						</tr>
							<tr>
							<td>销售(营业)利润率(%)</td>
							<td>{{ylnlTableData.one.xslrl}}</td>
							<td>{{ylnlTableData.two.xslrl}}</td>
							<td>{{ylnlTableData.three.xslrl}}</td>
							<td>{{ylnlTableData.jxpj.xslrl}}</td>
						</tr>
							<tr>
							<td>成本费用利润率(%)</td>
							<td>{{ylnlTableData.one.cbfylrl}}</td>
							<td>{{ylnlTableData.two.cbfylrl}}</td>
							<td>{{ylnlTableData.three.cbfylrl}}</td>
							<td>{{ylnlTableData.jxpj.cbfylrl}}</td>
						</tr>
							<tr>
							<td>毛利率(%)</td>
							<td>{{ylnlTableData.one.mll}}</td>
							<td>{{ylnlTableData.two.mll}}</td>
							<td>{{ylnlTableData.three.mll}}</td>
							<td>{{ylnlTableData.jxpj.mll}}</td>
						</tr>
						</table>
						</div>
						
<!-- echarts图展示  start -->
    <div>
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-title">盈利能力分析趋势图</div>
        </div>
        <div>
          <ve-line :data="ylnlEchartsData" :settings="ylnlEchartSettings"></ve-line>
        </div>
      </el-card>
    </div>

<!-- echarts图展示  end -->
						
			            <div class="clear">
				        	<div slot="header" class="clearfix">
				        		<div class="card-right-wrap">
				        				<el-button type="primary" size="medium" @click="saveYlnlxjData">保存</el-button>
				        			</div>
				        			<div class="card-title">小结</div>
				        		</div>
				        		<div class="text-editor">
				        	       <quill-editor :value="ylnlTxt" :maxSize="10240" v-on:changeInput="changYlnlxjTxt"></quill-editor>
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
							<th>{{yynlTableData.one.nf}}年</th>
							<th>{{yynlTableData.two.nf}}年</th>
							<th>{{yynlTableData.three.nf}}年</th>
							<th>{{yynlTableData.jxpj.nf}}年[较差值   优秀值]</th>
						</tr>
						<tr>
							<td>总资产周转率(次)</td>
							<td>{{yynlTableData.one.zzczzl}}</td>
							<td>{{yynlTableData.two.zzczzl}}</td>
							<td>{{yynlTableData.three.zzczzl}}</td>
							<td>{{yynlTableData.jxpj.zzczzl}}</td>
						</tr>
						<tr>
							<td>应收账款周转率(次)</td>
							<td>{{yynlTableData.one.yszkzzl}}</td>
							<td>{{yynlTableData.two.yszkzzl}}</td>
							<td>{{yynlTableData.three.yszkzzl}}</td>
							<td>{{yynlTableData.jxpj.yszkzzl}}</td>
						</tr>
							<tr>
							<td>流动资产周转率(次)</td>
							<td>{{yynlTableData.one.ldzczzl}}</td>
							<td>{{yynlTableData.two.ldzczzl}}</td>
							<td>{{yynlTableData.three.ldzczzl}}</td>
							<td>{{yynlTableData.jxpj.ldzczzl}}</td>
						</tr>
							<tr>
							<td>资产现金回收率(%)</td>
							<td>{{yynlTableData.one.zcxjhsl}}</td>
							<td>{{yynlTableData.two.zcxjhsl}}</td>
							<td>{{yynlTableData.three.zcxjhsl}}</td>
							<td>{{yynlTableData.jxpj.zcxjhsl}}</td>
						</tr>
							<tr>
							<td>存货周转率(次)</td>
							<td>{{yynlTableData.one.chzzl}}</td>
							<td>{{yynlTableData.two.chzzl}}</td>
							<td>{{yynlTableData.three.chzzl}}</td>
							<td>{{yynlTableData.jxpj.chzzl}}</td>
						</tr>
						</table>
						</div>
						
<!-- echarts图展示  start -->
    <div>
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-title">运营能力分析趋势图</div>
        </div>
        <div>
          <ve-line :data="yynlEchartsData" :settings="yynlEchartSettings"></ve-line>
        </div>
      </el-card>
    </div>

<!-- echarts图展示  end -->
						
						<div class="clear">
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" @click="saveYynlxjData">保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="yynlTxt" :maxSize="10240" v-on:changeInput="changYynlxjTxt"></quill-editor>
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
							<th>{{cznlTableData.one.nf}}年</th>
							<th>{{cznlTableData.two.nf}}年</th>
							<th>{{cznlTableData.three.nf}}年</th>
							<th>{{cznlTableData.jxpj.nf}}年[较差值   优秀值]</th>
						</tr>
						<tr>
							<td>资产负债率(%)</td>
							<td>{{cznlTableData.one.zcfzl}}</td>
							<td>{{cznlTableData.two.zcfzl}}</td>
							<td>{{cznlTableData.three.zcfzl}}</td>
							<td>{{cznlTableData.jxpj.zcfzl}}</td>
						</tr>
						<tr>
							<td>已获利息倍数(%)</td>
							<td>{{cznlTableData.one.yhlxbs}}</td>
							<td>{{cznlTableData.two.yhlxbs}}</td>
							<td>{{cznlTableData.three.yhlxbs}}</td>
							<td>{{cznlTableData.jxpj.yhlxbs}}</td>
						</tr>
							<tr>
							<td>速度比率(%)</td>
							<td>{{cznlTableData.one.sdbl}}</td>
							<td>{{cznlTableData.two.sdbl}}</td>
							<td>{{cznlTableData.three.sdbl}}</td>
							<td>{{cznlTableData.jxpj.sdbl}}</td>
						</tr>
							<tr>
							<td>现金流动负债比率(%)</td>
							<td>{{cznlTableData.one.xjldfzbl}}</td>
							<td>{{cznlTableData.two.xjldfzbl}}</td>
							<td>{{cznlTableData.three.xjldfzbl}}</td>
							<td>{{cznlTableData.jxpj.xjldfzbl}}</td>
						</tr>
							<tr>
							<td>流动比率(%)</td>
							<td>{{cznlTableData.one.ldbl}}</td>
							<td>{{cznlTableData.two.ldbl}}</td>
							<td>{{cznlTableData.three.ldbl}}</td>
							<td>{{cznlTableData.jxpj.ldbl}}</td>
						</tr>
						</table>
						</div>
						
<!-- echarts图展示  start -->
    <div>
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-title">偿债能力分析趋势图</div>
        </div>
        <div>
          <ve-line :data="cznlEchartsData" :settings="cznlEchartSettings"></ve-line>
        </div>
      </el-card>
    </div>

<!-- echarts图展示  end -->
						<div class="clear">
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium"  @click="saveCznlfxxjData">保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="cznlTxt" :maxSize="10240" v-on:changeInput="changCznlfxxjTxt"></quill-editor>
				</div>
			</div>
					</el-card>
				</div>
				
			</el-tab-pane>
			
			<el-tab-pane label="成长能力状况分析" name="four">
				
					<div>
					<el-card class="box-card" shadow='nevner'>
							<div slot="header" class="clearfix">
								<!-- 按钮 -->
							<div class="card-title">数据列表</div>
						</div>
						<div>
							<table lay-skin="line">
						<tr>
							<th>成长能力状况</th>
							<th>{{zcnlTableData.one.nf}}年</th>
							<th>{{zcnlTableData.two.nf}}年</th>
							<th>{{zcnlTableData.three.nf}}年</th>
							<th>{{zcnlTableData.jxpj.nf}}年[较差值   优秀值]</th>
						</tr>
						<tr>
							<td>销售(营业)收入增长率(%)</td>
							<td>{{zcnlTableData.one.xssrzzl}}</td>
							<td>{{zcnlTableData.two.xssrzzl}}</td>
							<td>{{zcnlTableData.three.xssrzzl}}</td>
							<td>{{zcnlTableData.jxpj.xssrzzl}}</td>
						</tr>
						<tr>
							<td>资本保值增值长率(%)</td>
							<td>{{zcnlTableData.one.zbbzzzl}}</td>
							<td>{{zcnlTableData.two.zbbzzzl}}</td>
							<td>{{zcnlTableData.three.zbbzzzl}}</td>
							<td>{{zcnlTableData.jxpj.zbbzzzl}}</td>
						</tr>
							<tr>
							<td>销售(营业)利润增长率(%)</td>
							<td>{{zcnlTableData.one.xslrzzl}}</td>
							<td>{{zcnlTableData.two.xslrzzl}}</td>
							<td>{{zcnlTableData.three.xslrzzl}}</td>
							<td>{{zcnlTableData.jxpj.xslrzzl}}</td>
						</tr>
							<tr>
							<td>总资产增长率(%)</td>
							<td>{{zcnlTableData.one.zzczzl}}</td>
							<td>{{zcnlTableData.two.zzczzl}}</td>
							<td>{{zcnlTableData.three.zzczzl}}</td>
							<td>{{zcnlTableData.jxpj.zzczzl}}</td>
						</tr>
							<tr>
							<td>净利润增长率(%)</td>
							<td>{{zcnlTableData.one.jlrzzl}}</td>
							<td>{{zcnlTableData.two.jlrzzl}}</td>
							<td>{{zcnlTableData.three.jlrzzl}}</td>
							<td>{{zcnlTableData.jxpj.jlrzzl}}</td>
						</tr>
						</table>
						</div>
						
<!-- echarts图展示  start -->
    <div>
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-title">成长能力分析趋势图</div>
        </div>
        <div>
          <ve-line :data="zcnlEchartsData" :settings="zcnlEchartSettings"></ve-line>
        </div>
      </el-card>
    </div>

<!-- echarts图展示  end -->
						
						<div class="clear">
					<div slot="header" class="clearfix">
							<div class="card-right-wrap">
								<el-button type="primary" size="medium" @click="saveZcnlfxxjData">保存</el-button>
							</div>
							<div class="card-title">小结</div>
							
						</div>
						<div class="text-editor">
					<quill-editor :value="zcnlTxt" :maxSize="10240" v-on:changeInput="changZcnlfxxjTxt"></quill-editor>
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
		/******************Echarts视图 starts *******************/
		this.ylnlEchartSettings = {
        labelMap:{
          'jzcsyl': '净资产收益率%',
		  'zzcbcl': '总资产报酬率%',
		  'xslrl': '销售(营业)利润率%',
		  'cbfylrl': '成本费用利润率%',
          'mll': '毛利率%'
		}
	  }
	  this.yynlEchartSettings = {
		labelMap:{
          'zzczzl': '总资产周转率%',
		  'yszkzzl': '应收账款周转率%',
		  'ldzczzl': '流动资产周转率%',
		  'zcxjhsl': '资产现金回收率%',
          'chzzl': '存货周转率%'
		}
	}
	this.cznlEchartSettings = {
		labelMap:{
          'zcfzl': '资产负债率%',
		  'yhlxbs': '已获利息倍数%',
		  'sdbl': '速动比率%',
		  'xjldfzbl': '现金流动负债比率%',
          'ldbl': '流动比率%'
		}
	}
	this.zcnlEchartSettings = {
		labelMap:{
          'xssrzzl': '销售(营业)收入增长率%',
		  'zbbzzzl': '资本保值增值率%',
		  'xslrzzl': '销售(营业)利润增长率%',
		  'zzczzl': '总资产增长率%',
          'jlrzzl': '净利润增长率%'
		}
	}
	
 	return {
    activeName: "first",
	ylnlTxt: "",// 盈利能力小结
	yynlTxt: "",// 营运能力小结
	cznlTxt: "",// 偿债能力小结
	zcnlTxt: "",// 成长能力小结
	ylnlEchartsData:{// 定义盈利能力分析Echarts图表数据容器
          rows:[],
          columns:[]
		},
	yynlEchartsData:{// 定义运营能力分析Echarts图表数据容器
          rows:[],
          columns:[]
		},
	cznlEchartsData:{// 定义偿债能力分析Echarts图表数据容器
          rows:[],
          columns:[]
		},
	zcnlEchartsData:{// 定义成长能力分析Echarts图表数据容器
        rows:[],
        columns:[]
		},
	/******************Echarts视图 end*******************/

	/******************表格数据 start*******************/
	ylnlTableData:{one:{},two:{},three:{},jxpj:{}},
	yynlTableData:{one:{},two:{},three:{},jxpj:{}},
	cznlTableData:{one:{},two:{},three:{},jxpj:{}},
	zcnlTableData:{one:{},two:{},three:{},jxpj:{}}
	/******************表格数据 end*******************/
 	}
 },
    mounted() {
      this.init();
    },
	 methods: {
      //点击标签页触发事件
      handleClick(tab, event) {
        //   console.log(tab, event);
	  },
	  init(){
		this.loadYlnlxjData();
		this.loadYynlxjData();
		this.loadCznlxjData();
		this.loadZcnlxjData();
		this.loadYlnlxjEchartsData();
		this.loadYynlxjEchartsData();
		this.loadCznlxjEchartsData();
		this.loadZcnlxjEchartsData();
		this.loadYlnlTableData();
		this.loadYynlTableData();
		this.loadCznlTableData();
		this.loadZcnlTableData();
	  },
/*************************************对表格类数据的处理 start*****************************************/
loadYlnlTableData:async function(){   // 盈利能力表格数据加载请求
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
		  hyfldm:''
		};
		const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkYlnlfxxj/init",
          params
        );
        if (res.data.resultCode == "0") {
          this.ylnlTableData = res.data.resultData.data;
        }
},
loadYynlTableData:async function(){  // 运营能力表格数据加载请求
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
		  hyfldm:''
		};
		const res = await this.$http.post(
           "/hspt-web-api/data_entry/cwzk/cwzkYynlfxxj/init",
          params
        );
        if (res.data.resultCode == "0") {
          this.yynlTableData = res.data.resultData.data;
        }
},
loadCznlTableData:async function(){  // 偿债能力表格数据加载请求
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
		  hyfldm:''
		};
		const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCznlfxxj/init",
          params
        );
        if (res.data.resultCode == "0") {
          this.cznlTableData = res.data.resultData.data;
        }
},
loadZcnlTableData:async function(){// // 成长能力表格数据加载请求
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
		  hyfldm:''
		};
		const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCznlzkfxxj/init",
          params
        );
        if (res.data.resultCode == "0") {
          this.zcnlTableData = res.data.resultData.data;
        }
},

/*************************************对表格类数据的处理 end*****************************************/

/*************************************对表格类数据的处理 start*****************************************/
// 盈利能力视图数据加载请求
loadYlnlxjEchartsData: async function(){
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
		};
		const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkYlnlfxxj/initEchart",
          params
        );
        if (res.data.resultCode == "0") {
          this.ylnlEchartsData = res.data.resultData.data;
        }
},
// 运营能力视图数据加载请求
loadYynlxjEchartsData: async function(){
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
		};
		const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkYynlfxxj/initEchart",
          params
        );
        if (res.data.resultCode == "0") {
		  this.yynlEchartsData = res.data.resultData.data;
        }
},
// 偿债能力视图数据加载请求
loadCznlxjEchartsData: async function(){
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
		};
		const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCznlfxxj/initEchart",
          params
        );
        if (res.data.resultCode == "0") {
          this.cznlEchartsData = res.data.resultData.data;
        }
},
// 成长能力视图数据加载请求
loadZcnlxjEchartsData: async function(){
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
		};
		const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCznlzkfxxj/initEchart",
          params
        );
        if (res.data.resultCode == "0") {
          this.zcnlEchartsData = res.data.resultData.data;
        }
},
/*************************************对视图数据的处理 end*******************************************/


/*************************************对小结数据的处理 start*****************************************/
      changYlnlxjTxt(val) {
        this.ylnlTxt = val;
	  },
	  changYynlxjTxt(val) {
        this.yynlTxt = val;
	  },
	  changCznlfxxjTxt(val) {
        this.cznlTxt = val;
	  },
	  changZcnlfxxjTxt(val) {
        this.zcnlTxt = val;
	  },
	  //加载盈利能力状况分析小结
	  loadYlnlxjData:async function(){
          let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
		};
		const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkYlnlfxxj/initXj",
          params
        );
        if (res.data.resultCode == "0") {
          this.ylnlTxt = res.data.resultData.data;
        }
	  },
	    //加载运营能力状况分析小结
	  loadYynlxjData:async function(){
          let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
		};
		const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkYynlfxxj/initXj",
          params
        );
        if (res.data.resultCode == "0") {
          this.yynlTxt = res.data.resultData.data;
        }
	  },
	    //加载偿债能力状况分析小结
	  loadCznlxjData:async function(){
          let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
		};
		const res = await this.$http.post(
           "/hspt-web-api/data_entry/cwzk/cwzkCznlfxxj/initXj",
          params
        );
        if (res.data.resultCode == "0") {
          this.cznlTxt = res.data.resultData.data;
        }
	  },
	    //加载成长利能力状况分析小结
	  loadZcnlxjData:async function(){
          let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
		};
		const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCznlzkfxxj/initXj",
          params
        );
        if (res.data.resultCode == "0") {
          this.zcnlTxt = res.data.resultData.data;
        }
	  },
	      //保存盈利能力状况分析小结
      saveYlnlxjData: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          xj: this.ylnlTxt,
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkYlnlfxxj/saveXj",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
	  },
	  
	  // 保存运营能力小结
	  saveYynlxjData: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          xj: this.yynlTxt,
        };
        const res = await this.$http.post(
           "/hspt-web-api/data_entry/cwzk/cwzkYynlfxxj/saveXj",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
	  },

      // 保存偿债能力小结
	  saveCznlfxxjData: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          xj: this.cznlTxt,
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkCznlfxxj/saveXj",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
	  },

      // 保存成长能力小结
	  saveZcnlfxxjData: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          xj: this.zcnlTxt,
        };
        const res = await this.$http.post(
           "/hspt-web-api/data_entry/cwzk/cwzkCznlzkfxxj/saveXj",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
	  },
/*************************************对小结数据的处理 end*****************************************/
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
