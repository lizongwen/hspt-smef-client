<template>
	<div>
		
		<div class="select">
            	
            		<el-form :inline="true" :model="searchForm" class="demo-form-inline">
					<!--<el-button>行业选择</el-button>-->
					 <el-select  placeholder="行业选择" @change="getValue">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item" ></el-option>
                     </el-select>
					<el-input v-model="searchForm.searchInput" placeholder="请输入内容"></el-input>
					
					<el-button type="primary">确定</el-button>
					</el-form>
                
            </div>
            
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
									<th>2017年[较差值 优秀值]</th>
								</tr>
								<tr>
									<td>净资产收益率（%）</td>
									<td>{{form.jccsyl}}</td>
									<td>{{form.jccsyl}}</td>
									<td>{{form.jccsyl}}</td>
									<td>[{{form.jccsyl}} {{form.jccsyl}}]</td>
								</tr>
								<tr>
									<td>总资产报酬率（%）</td>
									<td>{{form.zzcbcl}}</td>
									<td>{{form.zzcbcl}}</td>
									<td>{{form.zzcbcl}}</td>
									<td>[{{form.zzcbcl}} {{form.zzcbcl}}]</td>
								</tr>
								<tr>
									<td>销售（营业）利润率（%）</td>
									<td>{{form.xslrl}}</td>
									<td>{{form.xslrl}}</td>
									<td>{{form.xslrl}}</td>
									<td>[{{form.xslrl}} {{form.xslrl}}]</td>
								</tr>
								<tr>
									<td>成本费用利润率（%）</td>
									<td>{{form.cbfylrl}}</td>
									<td>{{form.cbfylrl}}</td>
									<td>{{form.cbfylrl}}</td>
									<td>[{{form.cbfylrl}} {{form.cbfylrl}}]</td>
								</tr>
								<tr>
									<td>毛利率（%）</td>
									<td>{{form.mll}}</td>
									<td>{{form.mll}}</td>
									<td>{{form.mll}}</td>
									<td>[{{form.mll}} {{form.mll}}]</td>
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
									<th>2015年</th>
									<th>2016年</th>
									<th>2017年</th>
									<th>2017年[较差值 优秀值]</th>
								</tr>
								<tr>
									<td>总资产周转率（次）</td>
									<td>{{form_yy.zzc}}</td>
									<td>{{form_yy.zzc}}</td>
									<td>{{form_yy.zzc}}</td>
									<td>[{{form_yy.zzc}} {{form_yy.zzc}}]</td>
								</tr>
								<tr>
									<td>应收账款周转率（次）</td>
									<td>{{form_yy.yszk}}</td>
									<td>{{form_yy.yszk}}</td>
									<td>{{form_yy.yszk}}</td>
									<td>[{{form_yy.yszk}} {{form_yy.yszk}}]</td>
								</tr>
								<tr>
									<td>流动资产周转率（次）</td>
									<td>{{form_yy.ldzc}}</td>
									<td>{{form_yy.ldzc}}</td>
									<td>{{form_yy.ldzc}}</td>
									<td>[{{form_yy.ldzc}} {{form_yy.ldzc}}]</td>
								</tr>
								<tr>
									<td>资产现金回收率（%）</td>
									<td>{{form_yy.zcxj}}</td>
									<td>{{form_yy.zcxj}}</td>
									<td>{{form_yy.zcxj}}</td>
									<td>[{{form_yy.zcxj}} {{form_yy.zcxj}}]</td>
								</tr>
								<tr>
									<td>存货周转率（次）</td>
									<td>{{form_yy.ch}}</td>
									<td>{{form_yy.ch}}</td>
									<td>{{form_yy.ch}}</td>
									<td>[{{form_yy.ch}} {{form_yy.ch}}]</td>
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
									<th>2015年</th>
									<th>2016年</th>
									<th>2017年</th>
									<th>2017年[较差值 优秀值]</th>
								</tr>
								<tr>
									<td>资产周转率（%）</td>
									<td>{{form_cz.zc}}</td>
									<td>{{form_cz.zc}}</td>
									<td>{{form_cz.zc}}</td>
									<td>[{{form_cz.zc}} {{form_cz.zc}}]</td>
								</tr>
								<tr>
									<td>已获利息倍数（%）</td>
									<td>{{form_cz.yhlx}}</td>
									<td>{{form_cz.yhlx}}</td>
									<td>{{form_cz.yhlx}}</td>
									<td>[{{form_cz.yhlx}} {{form_cz.yhlx}}]</td>
								</tr>
								<tr>
									<td>速度比率（%）</td>
									<td>{{form_cz.sd}}</td>
									<td>{{form_cz.sd}}</td>
									<td>{{form_cz.sd}}</td>
									<td>[{{form_cz.sd}} {{form_cz.sd}}]</td>
								</tr>
								<tr>
									<td>现金流动负债比率（%）</td>
									<td>{{form_cz.xjld}}</td>
									<td>{{form_cz.xjld}}</td>
									<td>{{form_cz.xjld}}</td>
									<td>[{{form_cz.xjld}} {{form_cz.xjld}}]</td>
								</tr>
								<tr>
									<td>流动比率（%）</td>
									<td>{{form_cz.ld}}</td>
									<td>{{form_cz.ld}}</td>
									<td>{{form_cz.ld}}</td>
									<td>[{{form_cz.ld}} {{form_cz.ld}}]</td>
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
									<el-button type="primary" size="medium" @click="saveCznlfxxjData">保存</el-button>
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
							<div class="card-right-wrap">
								<el-button type="default" size="medium">获取数据</el-button>
								<el-button type="primary" size="medium">保存</el-button>
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
									<th>2017年[较差值 优秀值]</th>
								</tr>
								<tr>
									<td>销售（营业）增长率（%）</td>
									<td>{{form_chzh.xs}}</td>
									<td>{{form_chzh.xs}}</td>
									<td>{{form_chzh.xs}}</td>
									<td>[{{form_chzh.xs}} {{form_chzh.xs}}]</td>
								</tr>
								<tr>
									<td>资本保值增值率（%）</td>
									<td>{{form_chzh.zbbz}}</td>
									<td>{{form_chzh.zbbz}}</td>
									<td>{{form_chzh.zbbz}}</td>
									<td>[{{form_chzh.zbbz}} {{form_chzh.zbbz}}]</td>
								</tr>
								<tr>
									<td>销售（营业）利润增长率（%）</td>
									<td>{{form_chzh.xslr}}</td>
									<td>{{form_chzh.xslr}}</td>
									<td>{{form_chzh.xslr}}</td>
									<td>[{{form_chzh.xslr}} {{form_chzh.xslr}}]</td>
								</tr>
								<tr>
									<td>总资产增长率（%）</td>
									<td>{{form_chzh.zzc}}</td>
									<td>{{form_chzh.zzc}}</td>
									<td>{{form_chzh.zzc}}</td>
									<td>[{{form_chzh.zzc}} {{form_chzh.zzc}}]</td>
								</tr>
								<tr>
									<td>净利润增长率（%）</td>
									<td>{{form_chzh.jlr}}</td>
									<td>{{form_chzh.jlr}}</td>
									<td>{{form_chzh.jlr}}</td>
									<td>[{{form_chzh.jlr}} {{form_chzh.jlr}}]</td>
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
	</div>
</template>

<script>
import quillEditor from "@/components/form/quillEditor.vue";
export default {
  data() {
    return {
      searchForm: {
        searchInput: ""
      },
      activeName: "first",
      textEditorContent: "",
      ylnlTxt: "", // 盈利能力小结
      yynlTxt: "", // 营运能力小结
      cznlTxt: "", // 偿债能力小结
      zcnlTxt: "", // 成长能力小结
      value: '',
      label:'',

options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],

      form: {
        //盈利能力状况
        jccsyl: "",
        zzcbcl: "",
        xslrl: "",
        cbfylrl: "",
        mll: ""
      },
      form_yy: {
        zzc: "",
        yszk: "",
        ldzc: "",
        zcxj: "",
        ch: ""
      },
      form_cz: {
        zc: "",
        yhlx: "",
        sd: "",
        xjld: "",
        ld: ""
      },
      form_chzh: {
        xs: "",
        zbbz: "",
        xslr: "",
        zzc: "",
        jlr: ""
      }
    };
  },

  mounted() {
    this.getYlnl();
    this.getYynl();
    this.getCznl();
    this.getChzhnl();
    this.init();
  },

  methods: {
    //点击标签页触发事件
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    
    getValue: function(value){
    this.searchForm.searchInput=value.label
    },
    
    
    //获取盈利能力状况
    getYlnl: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwnlqsfx/ylnlzkfx/list",
        params
      );
      //    console.log(res.data.resultData)
      this.form.jccsyl = res.data.resultData.data.jccsyl;
      this.form.zzcbcl = res.data.resultData.data.zzcbcl;
      this.form.xslrl = res.data.resultData.data.xslrl;
      this.form.cbfylrl = res.data.resultData.data.cbfylrl;
      this.form.mll = res.data.resultData.data.mll;
    },

    //获取运营能力状况分析
    getYynl: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwnlqsfx/yynlzkfx/list",
        params
      );
      console.log(res.data.resultData);
      this.form_yy.zzc = res.data.resultData.data.zzc;
      this.form_yy.yszk = res.data.resultData.data.yszk;
      this.form_yy.ldzc = res.data.resultData.data.ldzc;
      this.form_yy.zcxj = res.data.resultData.data.zcxj;
      this.form_yy.ch = res.data.resultData.data.ch;
    },

    //获取偿债能力状况分析
    getCznl: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post("", params);
      console.log(res.data.resultData);
    },

    init() {
      this.loadYlnlxjData();
      this.loadYynlxjData();
      this.loadCznlxjData();
      this.loadZcnlxjData();
	},
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
    loadYlnlxjData: async function() {
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
    loadYynlxjData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwnlqsfx/cznlzkfx/list",
        params
      );
      //console.log(res.data.resultData)
      this.form_cz.zc = res.data.resultData.data.zc;
      this.form_cz.yhlx = res.data.resultData.data.yhlx;
      this.form_cz.sd = res.data.resultData.data.sd;
      this.form_cz.xjld = res.data.resultData.data.xjld;
      this.form_cz.ld = res.data.resultData.data.ld;
	},
    //获取成长能力状况分析
    getChzhnl: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwnlqsfx/chzhnlzkfx/list",
        params
      );
      console.log(res.data.resultData);
      this.form_chzh.xs = res.data.resultData.data.xs;
      this.form_chzh.zbbz = res.data.resultData.data.zbbz;
      this.form_chzh.xslr = res.data.resultData.data.xslr;
      this.form_chzh.zzc = res.data.resultData.data.zzc;
      this.form_chzh.jlr = res.data.resultData.data.jlr;
    },

    
   
    //加载偿债能力状况分析小结
    loadCznlxjData: async function() {
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
    loadZcnlxjData: async function() {
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
    saveYlnlxjData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        xj: this.ylnlTxt
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwzkYlnlfxxj/saveXj",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    // 保存运营能力小结
    saveYynlxjData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        xj: this.yynlTxt
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwzkYynlfxxj/saveXj",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    // 保存偿债能力小结
    saveCznlfxxjData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        xj: this.cznlTxt
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwzkCznlfxxj/saveXj",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    },

    // 保存成长能力小结
    saveZcnlfxxjData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token"),
        xj: this.zcnlTxt
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/cwzkCznlzkfxxj/saveXj",
        params
      );
      if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      } else {
        this.$message({ message: res.data.resultMsg, type: "warning" });
      }
    }
  }, 
    /*************************************对小结数据的处理 end*****************************************/

  components: {
    "quill-editor": quillEditor
  }
};
</script>

<style lang="scss">
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
$margin-top: 20px;
.clear {
  margin-top: $margin-top;
}
$margin-top: 20px;
.clearfix {
  margin-top: $margin-top;
}
  $width: 100%;
  $height: 200px;
  $background: #eef9ff;
  $margin-top: 20px;
  $margin-bottom: 20px;
  $text-align: center;
  $line-height: 200px;
.img {
  width: $width;
  height: $height;
  background: $background;
  margin-top: $margin-top;
  margin-bottom:  $margin-bottom;
  text-align: $text-align;
  line-height: $line-height;
}
.text-editor {
  margin-top: 15px;
}
.text-editor .ql-editor {
  height: 200px;
}
$width: 30%;
$height: 45px;
$position: relative;
$left: 70%;
.select{
	width: $width;
	height: $height;
	position: $position;
	left:$left;
}
$width: 54%;
.el-input{
	width: $width;
}
$display: none;
.el-select .el-input .el-select__caret{
	display: $display;
}
$width: 26%;
.el-select{
	width:$width;
}
$width: 100%;
.el-select>.el-input{
	width: $width;
}
</style>
