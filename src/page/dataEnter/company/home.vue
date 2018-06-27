<template>
	<div style="overflow:hidden">
		<el-row>
			<el-col :span="6">
				<div class="grid-content bg-white company-mod">
					<h3 class="mod-name">公司基本信息</h3>
					<div class="company-progress">
						<span>{{projDetail.qyjbxx.progress}}%</span>
						<el-progress :percentage="10" :show-text="false"></el-progress>
					</div>
					<ul class="mod-list">
						<li class="mod-list-item">
							<div class="sub-name">工商基本信息：</div>
							<div class="sub-progress">{{projDetail.qyjbxx.qyjbxx.qyxx_gsxx}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/base/gsxx">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">公司历史沿革：</div>
							<div class="sub-progress">{{projDetail.qyjbxx.qyjbxx.qyxx_lsyg}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/base/lsyg">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">股权机构及分支机构：</div>
							<div class="sub-progress">{{projDetail.qyjbxx.qyjbxx.qyxx_gqjg}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/base/gqjgfz">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">公司荣誉与认证：</div>
							<div class="sub-progress">{{projDetail.qyjbxx.qyjbxx.qyxx_ryrz}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/base/ryrz">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">知识产权：</div>
							<div class="sub-progress">{{projDetail.qyjbxx.qyjbxx.qyxx_zscq}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/base/zscq">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">环保信息：</div>
							<div class="sub-progress">{{projDetail.qyjbxx.qyjbxx.qyxx_hbxx}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/base/hbxx">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
					</ul>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-white company-mod">
					<h3 class="mod-name">公司资源信息</h3>
					<div class="company-progress">
						<span>{{projDetail.gsyy.progress}}%</span>
						<el-progress :percentage="projDetail.gsyy.progress" :show-text="false"></el-progress>
					</div>
					<ul class="mod-list">
						<li class="mod-list-item">
							<div class="sub-name">企业经营资源：</div>
							<div class="sub-progress">{{projDetail.gsyy.gsyy.qyxx_jyzy}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/resource/jyzy">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">人力资源分析：</div>
							<div class="sub-progress">{{projDetail.gsyy.gsyy.qyxx_jygltd}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/resource/rlzy">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">产品研发技术情况：</div>
							<div class="sub-progress">{{projDetail.gsyy.gsyy.qyxx_cpyf}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/resource/cpyf">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">招投标信息：</div>
							<div class="sub-progress">{{projDetail.gsyy.gsyy.qyxx_ztb}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/resource/zbxx">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">企业社保及公积金情况：</div>
							<div class="sub-progress">{{projDetail.gsyy.gsyy.qyxx_sbgjj}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/resource/sbgjj">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">企业工资发放情况：</div>
							<div class="sub-progress">{{projDetail.gsyy.gsyy.qyxx_gzff}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/resource/gzxx">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
					</ul>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-white company-mod">
					<h3 class="mod-name">企业信用概况</h3>
					<div class="company-progress">
						<span>{{projDetail.fxgk.progress}}%</span>
						<el-progress :percentage="projDetail.fxgk.progress" :show-text="false"></el-progress>
					</div>
					<ul class="mod-list">
						<li class="mod-list-item">
							<div class="sub-name">股东和法人代表风险：</div>
							<div class="sub-progress">{{projDetail.fxgk.fxgk.qyxx_zrrdgd}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/credit/gdfrfx">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">融资信息：</div>
							<div class="sub-progress">{{projDetail.fxgk.fxgk.fxgk_rzxx}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/credit/rzxx">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">对外担保信息：</div>
							<div class="sub-progress">{{projDetail.fxgk.fxgk.fxgk_dwdb}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/credit/dwdb">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">司法信息：</div>
							<div class="sub-progress">{{projDetail.fxgk.fxgk.fxgk_sfxx}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/credit/sfxx">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">被非银行信贷机构查询：</div>
							<div class="sub-progress">{{projDetail.fxgk.fxgk.fxgk_fyxdcx}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/credit/bcxxx">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
					</ul>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-white company-mod">
					<h3 class="mod-name">市场及行业情况</h3>
					<div class="company-progress">
						<span>{{projDetail.hysc.progress}}%</span>
						<el-progress :percentage="projDetail.hysc.progress" :show-text="false"></el-progress>
					</div>
					<ul class="mod-list">
						<li class="mod-list-item">
							<div class="sub-name">主要业务介绍：</div>
							<div class="sub-progress">{{projDetail.hysc.hysc.qyxx_ywjs}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/business/zyyw">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">上下游交易信息：</div>
							<div class="sub-progress">{{projDetail.hysc.hysc.qyxx_sxyjy}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/business/sxyjy">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">行业及市场发展趋势：</div>
							<div class="sub-progress">{{projDetail.hysc.hysc.hysc_fzqs}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/business/hyqs">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">竞争态势及市场机遇：</div>
							<div class="sub-progress">{{projDetail.hysc.hysc.hysc_jzjy}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/business/jzts">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">市场风险分析：</div>
							<div class="sub-progress">{{projDetail.hysc.hysc.hysc_fxfx}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/business/scfx">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
					</ul>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="6">
				<div class="grid-content bg-white company-mod">
					<h3 class="mod-name">财务状况</h3>
					<div class="company-progress">
						<span>{{projDetail.cwzk.progress}}%</span>
						<el-progress :percentage="projDetail.cwzk.progress" :show-text="false"></el-progress>
					</div>
					<ul class="mod-list">
						<li class="mod-list-item">
							<div class="sub-name">主要财务数据：</div>
							<div class="sub-progress">{{projDetail.cwzk.cwzk.cwzk_cwsj}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/finance/zycwsj">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">财务能力趋势分析：</div>
							<div class="sub-progress">{{projDetail.cwzk.cwzk.cwzk_cwnl}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/finance/cwnlqs">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">纳税情况与分析：</div>
							<div class="sub-progress">{{projDetail.cwzk.cwzk.cwzk_nsqk}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/finance/nsqkfx">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">主要经营数据：</div>
							<div class="sub-progress">{{projDetail.cwzk.cwzk.cwzk_jysj}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/finance/zyjysj">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">经营相关数据分析：</div>
							<div class="sub-progress">{{projDetail.cwzk.cwzk.cwzk_sjjy}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/finance/jysjjy">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">财务状况综述：</div>
							<div class="sub-progress">{{projDetail.cwzk.cwzk.cwzk_cwzs}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/finance/cwzkzs">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">财务结构分化：</div>
							<div class="sub-progress">{{projDetail.cwzk.cwzk.cwzk_cwjgfx}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/finance/cwjgh">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">同期数据对比：</div>
							<div class="sub-progress">{{projDetail.cwzk.cwzk.cwzk_tqsjdb}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/finance/tqsjdb">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
						<li class="mod-list-item">
							<div class="sub-name">自定义数据校验：</div>
							<div class="sub-progress">{{projDetail.cwzk.cwzk.cwzk_zdysjjy}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/finance/zdysjjy">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
					</ul>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-white company-mod">
					<h3 class="mod-name">风险性分析</h3>
					<div class="company-progress">
						<span>{{projDetail.fxfx.progress}}%</span>
						<el-progress :percentage="projDetail.fxfx.progress" :show-text="false"></el-progress>
					</div>
					<ul class="mod-list">
						<li class="mod-list-item">
							<div class="sub-name">风险性分析：</div>
							<div class="sub-progress">{{projDetail.fxfx.fxfx.fxfx}}</div>
							<div class="mod-list-item_op">
								<router-link tag="div" to="/company/risk/fxxfx">
									<i class="icon iconfont icon-edit1"></i>
								</router-link>
							</div>
						</li>
					</ul>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-white company-mod">

				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-white company-mod">

				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
  data() {
    return {
      projDetail: {
        hysc: {
          hysc: {},
          progress: 0
        },
        fxfx: {
          fxfx: {},
          progress: 0
        },
        fxgk: {
          fxgk: {},
          progress: 0
        },
        jbxx: {
          jbxx: {},
          progress: 0
        },
        cwzk: {
          progress: 0,
          cwzk: {}
        },
        gsyy: {
          progress: 0,
          gsyy: {}
        },
        qyjbxx: {
          progress: 0,
          qyjbxx: {}
        }
      }
    };
  },
  mounted() {
    this.$emit("child-side", true);
    this.init();
  },
  methods: {
    init() {
      //this.getProjDetail();
    },
    openMod() {
      console.log();
    },
    getProjDetail: async function() {
      let params = {
        token: sessionStorage.getItem("token"),
        creditCode: 123
      };
      const res = await this.$http.post("/hspt-web-api/project/detail", params);
      this.projDetail = res.data.resultData;
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.grid-content {
  height: 425px;
}
.company-mod {
  margin: -1px;
  padding: 20px;
  border: 1px solid #ebebeb;
  color: #4a4a4a;
  .mod-name {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .company-progress {
    margin-bottom: 10px;
    font-size: 28px;
    color: #000;
  }
  .mod-list-item {
    display: flex;
    line-height: 30px;
    .sub-name {
      width: 200px;
    }
    .sub-progress {
      width: 50px;
    }
    .mod-list-item_op {
      cursor: pointer;
      .icon {
        color: #9b9b9b;
      }
      &:hover {
        .icon {
          color: #1790ff;
        }
      }
    }
  }
}
</style>

