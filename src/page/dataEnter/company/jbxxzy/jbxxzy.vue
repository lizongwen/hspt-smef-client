<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="企业基本信息" name="first">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
                                 <el-button type="default" size="medium" @click="getJbxxData">获取数据</el-button>
								 <el-button type="primary" size="medium" @click="saveJbxxData">保存</el-button>
                             </div>
							<div class="card-title">基本信息</div>
						</div>
						<div>
							<el-form class="form clearfix" size="small" :label-position="labelPosition" label-width="100px" :model="form">
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="公司名称:">
											<el-input size="small" v-model="form.qymc" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="注册日期:">
											<el-date-picker size="small" type="date" placeholder="选择日期" v-model="form.zcrq" :editable='false' value-format="yyyy-MM-dd"></el-date-picker>
						                </el-form-item>
									</el-col>
								</el-row>	
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="注册机关:">
											<el-input size="small" v-model="form.zcjg" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="社会信用代码:">
											<el-input size="small" :disabled="true" v-model="form.creditCode"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>	
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="组织机构代码:">
											<el-input size="small" v-model="form.zzjgdm" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="纳税人识别号:">
											<el-input size="small" v-model="form.nsrsbh" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>	
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="纳税评级:">
											<el-input size="small" v-model="form.nspj" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="所属行业:">
											<el-input size="small" v-model="form.sshy" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>	
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="注册资本:">
											<el-input size="small" v-model="form.zczb" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="企业类型:">
											<el-input size="small" v-model="form.qylx" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>	
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="存续年限:">
											<el-input size="small" v-model="form.cxnx" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="营业期限:">
											<el-input size="small" v-model="form.yyqx" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>	
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="注册地址:">
											<el-input size="small" v-model="form.zcdz" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="法人代表:">
											<el-input size="small" v-model="form.frdb" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>		
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="电话:">
											<el-input size="small" v-model="form.dh" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="公司人数:">
											<el-input size="small" v-model="form.gsrs" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>			
								<el-row>
									<el-col :offset="1" :span="21">
										<el-form-item label="主营业务:">
											<el-input size="small" type="textarea" v-model="form.zyyw" placeholder="请输入" :rows="3"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>		
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="认证资质:">
											<el-input size="small" v-model="form.zzrz" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="行政许可:">
											<el-input size="small" v-model="form.xzxk" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>		
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="荣誉信息:">
											<el-input size="small" v-model="form.ryxx" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="专利:">
											<el-input size="small" v-model="form.zl" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>	
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="商标:">
											<el-input size="small" v-model="form.sb" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="著作权:">
											<el-input size="small" v-model="form.zzq" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>	
								<el-row>
									<el-col :offset="1" :span="10">
										<el-form-item label="网站:">
											<el-input size="small" v-model="form.wz" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col :offset="1" :span="10">
										<el-form-item label="网站备案:">
											<el-input size="small" v-model="form.wzba" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
								</el-row>	
							</el-form> 
						</div>
					</el-card>

					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
                                 <el-button type="default" size="medium">获取数据</el-button>
								 <el-button type="primary" size="medium">保存</el-button>
                             </div>
							<div class="card-title">风险摘要</div>
						</div>
						
                        <div>
							风险摘要
						</div>
						
					</el-card>
				</div>
				
			</el-tab-pane>
                     <!--公司风险评估-->
           <el-tab-pane label="公司风险评估" name="second">
				<div>
					<el-card class="box-card" shadow='nevner'>
						<div slot="header" class="clearfix">
							<div class="card-right-wrap">
                                 <el-button type="default" size="medium">编辑</el-button>
								 <el-button type="primary" size="medium">保存</el-button>
                             </div>
							<div class="card-title">风险评估</div>
						</div>
						
						


					</el-card>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>


<script>
export default {
  data() {
    return {
	  activeName: "first",
      labelPosition: "right",
      form: {
        qymc: "", // 公司名称
        zcrq: "", // 注册日期
        zcjg: "", // 注册机关
        creditCode: "", // 社会信用代码
        zzjgdm: "", // 组织机构代码
        nsrsbh: "", // 纳税人识别编号
        nspj: "", // 纳税评级
        sshy: "", // 所属行业
        zczb: "", // 注册资本
        qylx: "", // 企业类型
        cxnx: "", // 存续年限
        yyqx: "", // 营业期限
        zcdz: "", // 注册地址
        frdb: "", // 法人代表
        dh: "", // 电话
        gsrs: "", // 公司人数
        zyyw: "", // 主营业务
        zzrz: "", // 认证资质
        xzxk: "", // 行政许可
        ryxx: "", // 荣誉信息
        zl: "", // 专利
        sb: "", // 商标
        zzq: "", // 著作权
        wz: "", // 网站
        wzba: "" // 网站备案
      }
    };
  },
  mounted() {
	  this.loadQyjbxxData();
  },
  methods: {
    // 获取企业得基本信息接口
    loadQyjbxxData: async function() {
      let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/jbxxjzy/jbxx",
        params
      );
      if (res.data.resultCode == "0") {
        this.form.qymc = res.data.resultData.qymc;
        this.form.zcrq = res.data.resultData.zcrq;
        this.form.zcjg = res.data.resultData.zcjg;
        this.form.creditCode = res.data.resultData.creditCode;
        this.form.zzjgdm = res.data.resultData.zzjgdm;
        this.form.nsrsbh = res.data.resultData.nsrsbh;
        this.form.nspj = res.data.resultData.nspj;
        this.form.sshy = res.data.resultData.sshy;
        this.form.zczb = res.data.resultData.zczb;
        this.form.qylx = res.data.resultData.qylx;
        this.form.cxnx = res.data.resultData.cxnx;
        this.form.yyqx = res.data.resultData.yyqx;
        this.form.zcdz = res.data.resultData.zcdz;
        this.form.frdb = res.data.resultData.frdb;
        this.form.dh = res.data.resultData.dh;
        this.form.gsrs = res.data.resultData.gsrs;
        this.form.zyyw = res.data.resultData.zyyw;
        this.form.zzrz = res.data.resultData.zzrz;
        this.form.xzxk = res.data.resultData.xzxk;
        this.form.ryxx = res.data.resultData.ryxx;
        this.form.zl = res.data.resultData.zl;
        this.form.sb = res.data.resultData.sb;
        this.form.zzq = res.data.resultData.zzq;
        this.form.wz = res.data.resultData.wz;
        this.form.wzba = res.data.resultData.wzba;
      }
	},
	// 获取数据按钮 获取工商信息
	getJbxxData:async function(){
		let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/jbxxjzy/jbxx/retrieve",
        params
	  );
	  if (res.data.resultCode == "0000") {
		this.$message({ message: res.data.resultMsg, type: "success" });
        this.form.qymc = res.data.resultMapData.jbxx.qymc;
        this.form.zcrq = res.data.resultMapData.jbxx.zcrq;
        this.form.zcjg = res.data.resultMapData.jbxx.zcjg;
        this.form.creditCode = res.data.resultMapData.jbxx.creditCode;
        this.form.zzjgdm = res.data.resultMapData.jbxx.zzjgdm;
        this.form.nsrsbh = res.data.resultMapData.jbxx.nsrsbh;
        this.form.nspj = res.data.resultMapData.jbxx.nspj;
        this.form.sshy = res.data.resultMapData.jbxx.sshy;
        this.form.zczb = res.data.resultMapData.jbxx.zczb;
        this.form.qylx = res.data.resultMapData.jbxx.qylx;
        this.form.cxnx = res.data.resultMapData.jbxx.cxnx;
        this.form.yyqx = res.data.resultMapData.jbxx.yyqx;
        this.form.zcdz = res.data.resultMapData.jbxx.zcdz;
        this.form.frdb = res.data.resultMapData.jbxx.frdb;
        this.form.dh = res.data.resultMapData.jbxx.dh;
        this.form.gsrs = res.data.resultMapData.jbxx.gsrs;
        this.form.zyyw = res.data.resultMapData.jbxx.zyyw;
        this.form.zzrz = res.data.resultMapData.jbxx.zzrz;
        this.form.xzxk = res.data.resultMapData.jbxx.xzxk;
        this.form.ryxx = res.data.resultMapData.jbxx.ryxx;
        this.form.zl = res.data.resultMapData.jbxx.zl;
        this.form.sb = res.data.resultMapData.jbxx.sb;
        this.form.zzq = res.data.resultMapData.jbxx.zzq;
        this.form.wz = res.data.resultMapData.jbxx.wz;
        this.form.wzba = res.data.resultMapData.jbxx.wzba;
      }
	},
	  // 保存按钮 保存企业基本信息
  saveJbxxData: async function(){
	  let params = {
        creditCode: sessionStorage.getItem("creditCode"),
		token: sessionStorage.getItem("token"),
		data: JSON.stringify(this.form)
	  };
	  const res = await this.$http.post("/hspt-web-api/data_entry/jbxxjzy/jbxx/modify",params);
	  if (res.data.resultCode == "0") {
        this.$message({ message: res.data.resultMsg, type: "success" });
      }else{
	    this.$message({ message: res.data.resultMsg, type: "warning" });
	  }
  }
  }
};
</script>
<style scoped lang="scss">
@import "@/style/commonStyle.scss";
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>