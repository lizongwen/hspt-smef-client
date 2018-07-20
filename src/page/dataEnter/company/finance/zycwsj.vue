<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">

      <el-tab-pane label="资产负债表" name="first">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <!--<div class="card-right-wrap">-->
              <!--选择时间：-->
              <!--<el-date-picker v-model="value4" type="month" placeholder="选择月"></el-date-picker>-->
              <!--</div>-->
              <div class="card-title">资产负债表</div>
            </div>
            <!--<div slot="header" class="clearfix">
                            <div class="card-right-wrap">
                                <el-button type="default" size="medium">模板下载</el-button>
                                <el-button type="default" size="medium">数据导入</el-button>
                                <el-button @click="saveXj" type="primary" size="medium">保存</el-button>
                            </div>
                        </div>-->

            <div>
              <table lay-skin="line">
                <colgroup>
                  <col width="250">
                </colgroup>
                <tr>
                  <th>项目</th>
                  <th>{{tableData.start.rq}}</th>
                  <th>变化</th>
                  <th>{{tableData.mid.rq}}</th>
                  <th>变化</th>
                  <th>{{tableData.end.rq}}</th>
                </tr>
              </table>
              <table lay-skin="line">
                <tr>
                  <th>资产总计</th>
                </tr>
                <tr>
                  <td colspan='6' style="color:#3DA3FF ;">1、流动资产总计</td>
                </tr>
                <tr>
                  <td>货币资金</td>
                  <td>{{tableData.start.hbzj}}</td>
                  <td>{{tableData.firstBh.hbzj}}</td>
                  <td>{{tableData.mid.hbzj}}</td>
                  <td>{{tableData.secondBh.hbzj}}</td>
                  <td>{{tableData.end.hbzj}}</td>
                </tr>
                <tr>
                  <td>应收票据</td>
                  <td>{{tableData.start.yspj}}</td>
                  <td>{{tableData.firstBh.yspj}}</td>
                  <td>{{tableData.mid.yspj}}</td>
                  <td>{{tableData.secondBh.yspj}}</td>
                  <td>{{tableData.end.yspj}}</td>
                </tr>
                <tr>
                  <td>应收账款</td>
                  <td>{{tableData.start.yszk}}</td>
                  <td>{{tableData.firstBh.yszk}}</td>
                  <td>{{tableData.mid.yszk}}</td>
                  <td>{{tableData.secondBh.yszk}}</td>
                  <td>{{tableData.end.yszk}}</td>
                </tr>
                <tr>
                  <td>预付账款</td>
                  <td>{{tableData.start.yszk}}</td>
                  <td>{{tableData.firstBh.yszk}}</td>
                  <td>{{tableData.mid.yszk}}</td>
                  <td>{{tableData.secondBh.yszk}}</td>
                  <td>{{tableData.end.yszk}}</td>
                </tr>
                <tr>
                  <td>其他应收账款</td>
                  <td>{{tableData.start.qtysk}}</td>
                  <td>{{tableData.firstBh.qtyszk}}</td>
                  <td>{{tableData.mid.qtysk}}</td>
                  <td>{{tableData.secondBh.qtyszk}}</td>
                  <td>{{tableData.end.qtysk}}</td>
                </tr>
                <tr>
                  <td>存货</td>
                  <td>{{tableData.start.stock}}</td>
                  <td>{{tableData.firstBh.ch}}</td>
                  <td>{{tableData.mid.stock}}</td>
                  <td>{{tableData.secondBh.ch}}</td>
                  <td>{{tableData.end.stock}}</td>
                </tr>
                <tr>
                  <td>其他流动资产</td>
                  <td>{{tableData.start.qtldzc}}</td>
                  <td>{{tableData.firstBh.qtldzc}}</td>
                  <td>{{tableData.mid.qtldzc}}</td>
                  <td>{{tableData.secondBh.qtldzc}}</td>
                  <td>{{tableData.end.qtldzc}}</td>
                </tr>
                <tr>
                  <td colspan='6' style="color:#3DA3FF ;">2、非流动资产合计</td>
                </tr>
                <tr>
                  <td>长期应收款</td>
                  <td>{{tableData.start.cqysk}}</td>
                  <td>{{tableData.firstBh.cqysk}}</td>
                  <td>{{tableData.mid.cqysk}}</td>
                  <td>{{tableData.secondBh.cqysk}}</td>
                  <td>{{tableData.end.cqysk}}</td>
                </tr>
                <tr>
                  <td>长期股权投资</td>
                  <td>{{tableData.start.cqgqtz}}</td>
                  <td>{{tableData.firstBh.cqgqtz}}</td>
                  <td>{{tableData.mid.cqgqtz}}</td>
                  <td>{{tableData.secondBh.cqgqtz}}</td>
                  <td>{{tableData.end.cqgqtz}}</td>
                </tr>
                <tr>
                  <td>固定资产</td>
                  <td>{{tableData.start.gdzc}}</td>
                  <td>{{tableData.firstBh.gdzc}}</td>
                  <td>{{tableData.mid.gdzc}}</td>
                  <td>{{tableData.secondBh.gdzc}}</td>
                  <td>{{tableData.end.gdzc}}</td>
                </tr>
                <tr>
                  <td>在建工程</td>
                  <td>{{tableData.start.zjgc}}</td>
                  <td>{{tableData.firstBh.zjgc}}</td>
                  <td>{{tableData.mid.zjgc}}</td>
                  <td>{{tableData.secondBh.zjgc}}</td>
                  <td>{{tableData.end.zjgc}}</td>
                </tr>
                <tr>
                  <td>固定资产清理</td>
                  <td>{{tableData.start.gdzcql}}</td>
                  <td>{{tableData.firstBh.gdzcql}}</td>
                  <td>{{tableData.mid.gdzcql}}</td>
                  <td>{{tableData.secondBh.gdzcql}}</td>
                  <td>{{tableData.end.gdzcql}}</td>
                </tr>
                <tr>
                  <td>无形资产</td>
                  <td>{{tableData.start.wxzc}}</td>
                  <td>{{tableData.firstBh.wxzc}}</td>
                  <td>{{tableData.mid.wxzc}}</td>
                  <td>{{tableData.secondBh.wxzc}}</td>
                  <td>{{tableData.end.wxzc}}</td>
                </tr>
                <tr>
                  <td>递延所得税资产</td>
                  <td>{{tableData.start.dysdszc}}</td>
                  <td>{{tableData.firstBh.dysdszc}}</td>
                  <td>{{tableData.mid.dysdszc}}</td>
                  <td>{{tableData.secondBh.dysdszc}}</td>
                  <td>{{tableData.end.dysdszc}}</td>
                </tr>
                <tr>
                  <td>其他非流动资产</td>
                  <td>{{tableData.start.qtfldzc}}</td>
                  <td>{{tableData.firstBh.qtfldzc}}</td>
                  <td>{{tableData.mid.qtfldzc}}</td>
                  <td>{{tableData.secondBh.qtfldzc}}</td>
                  <td>{{tableData.end.qtfldzc}}</td>
                </tr>
              </table>
              <table lay-skin="line" style="margin-top: 20px;">
                <tr>
                  <th>负债合计</th>
                </tr>
                <tr>
                  <td colspan='6' style="color:#3DA3FF ;">1、流动负债合计</td>
                </tr>
                <tr>
                  <td>短期借款</td>
                  <td>{{tableData.start.dqjk}}</td>
                  <td>{{tableData.firstBh.dqjk}}</td>
                  <td>{{tableData.mid.dqjk}}</td>
                  <td>{{tableData.secondBh.dqjk}}</td>
                  <td>{{tableData.end.dqjk}}</td>
                </tr>
                <tr>
                  <td>应付票据</td>
                  <td>{{tableData.start.yfpj}}</td>
                  <td>{{tableData.firstBh.yfpj}}</td>
                  <td>{{tableData.mid.yfpj}}</td>
                  <td>{{tableData.secondBh.yfpj}}</td>
                  <td>{{tableData.end.yfpj}}</td>
                </tr>
                <tr>
                  <td>应收账款</td>
                  <td>{{tableData.start.yfzk}}</td>
                  <td>{{tableData.firstBh.yfzk}}</td>
                  <td>{{tableData.mid.yfzk}}</td>
                  <td>{{tableData.secondBh.yfzk}}</td>
                  <td>{{tableData.end.yfzk}}</td>
                </tr>
                <tr>
                  <td>预收款项</td>
                  <td>{{tableData.start.yskx}}</td>
                  <td>{{tableData.firstBh.yskx}}</td>
                  <td>{{tableData.mid.yskx}}</td>
                  <td>{{tableData.secondBh.yskx}}</td>
                  <td>{{tableData.end.yskx}}</td>
                </tr>
                <tr>
                  <td>应付职工薪酬</td>
                  <td>{{tableData.start.yfzgxc}}</td>
                  <td>{{tableData.firstBh.yfzgxc}}</td>
                  <td>{{tableData.mid.yfzgxc}}</td>
                  <td>{{tableData.secondBh.yfzgxc}}</td>
                  <td>{{tableData.end.yfzgxc}}</td>
                </tr>
                <tr>
                  <td>应付利息</td>
                  <td>{{tableData.start.yflx}}</td>
                  <td>{{tableData.firstBh.yflx}}</td>
                  <td>{{tableData.mid.yflx}}</td>
                  <td>{{tableData.secondBh.yflx}}</td>
                  <td>{{tableData.end.yflx}}</td>
                </tr>
                <tr>
                  <td>其他应付款</td>
                  <td>{{tableData.start.qtyfk}}</td>
                  <td>{{tableData.firstBh.qtyfk}}</td>
                  <td>{{tableData.mid.qtyfk}}</td>
                  <td>{{tableData.secondBh.qtyfk}}</td>
                  <td>{{tableData.end.qtyfk}}</td>
                </tr>
                <tr>
                  <td>其他流动负债</td>
                  <td>{{tableData.start.qtldfz}}</td>
                  <td>{{tableData.firstBh.qtldfz}}</td>
                  <td>{{tableData.mid.qtldfz}}</td>
                  <td>{{tableData.secondBh.qtldfz}}</td>
                  <td>{{tableData.end.qtldfz}}</td>
                </tr>
                <tr>
                  <td colspan='6' style="color:#3DA3FF ;">2、非流动负债合计</td>
                </tr>
                <tr>
                  <td>长期应付款</td>
                  <td>{{tableData.start.cqyfk}}</td>
                  <td>{{tableData.firstBh.cqyfk}}</td>
                  <td>{{tableData.mid.cqyfk}}</td>
                  <td>{{tableData.secondBh.cqyfk}}</td>
                  <td>{{tableData.end.cqyfk}}</td>
                </tr>
                <tr>
                  <td>专项应收款</td>
                  <td>{{tableData.start.zxyfk}}</td>
                  <td>{{tableData.firstBh.zxyfk}}</td>
                  <td>{{tableData.mid.zxyfk}}</td>
                  <td>{{tableData.secondBh.zxyfk}}</td>
                  <td>{{tableData.end.zxyfk}}</td>
                </tr>
                <tr>
                  <td>预计负债</td>
                  <td>{{tableData.start.yjfz}}</td>
                  <td>{{tableData.firstBh.yjfz}}</td>
                  <td>{{tableData.mid.yjfz}}</td>
                  <td>{{tableData.secondBh.yjfz}}</td>
                  <td>{{tableData.end.yjfz}}</td>
                </tr>
                <tr>
                  <td>其他非流动负债</td>
                  <td>{{tableData.start.qtfldfz}}</td>
                  <td>{{tableData.firstBh.qtfldfz}}</td>
                  <td>{{tableData.mid.qtfldfz}}</td>
                  <td>{{tableData.secondBh.qtfldfz}}</td>
                  <td>{{tableData.end.qtfldfz}}</td>
                </tr>
              </table>
              <table colspan='6' lay-skin="line" style="margin-top: 20px;">
                <tr>
                  <th>所有者权益（或股东权益）合计</th>
                </tr>
                <tr>
                  <td style="color:#3DA3FF ;">1、实缴资本（或股东）</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style="color:#3DA3FF ;">2、资本公积</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style="color:#3DA3FF ;">3、专项储备</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style="color:#3DA3FF ;">4、盈余公积</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td style="color:#3DA3FF ;">5、未分配利益</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>

              <!--<div slot="header" class="clearfix">-->
              <!--<div class="card-right-wrap">-->
              <!--&lt;!&ndash;<el-button type="default" size="medium">上传数据</el-button>&ndash;&gt;-->
              <!--<el-button type="primary" size="medium">保存</el-button>-->
              <!--</div>-->
              <!--<div class="card-title">备注</div>-->

              <!--</div>-->
              <!--<div class="text-editor">-->
              <!--<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>-->
              <!--</div>-->

            </div>

          </el-card>
        </div>

      </el-tab-pane>

      <el-tab-pane label="利润表" name="second">

        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-title">利润表</div>
            </div>
            <!--<div slot="header" class="clearfix">
                            <div class="card-right-wrap">
                                <el-button type="default" size="medium">模板下载</el-button>
                                <el-button type="default" size="medium">数据导入</el-button>
                                <el-button @click="saveXj" type="primary" size="medium">保存</el-button>
                            </div>
                        </div>-->

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
                <tr>
                  <td colspan='6'>资产总计</td>
                </tr>
                <tr>
                  <td style="color:#3DA3FF ;" colspan='6'>1、营业收入</td>
                </tr>
                <tr>
                  <td colspan='6'><h4>减：营业成本</h4></td>
                </tr>
                <tr>
                  <td colspan='6'>营业税收及附加</td>
                </tr>
                <tr>
                  <td colspan='6'>销售费用</td>
                </tr>
                <tr>
                  <td colspan='6'>管理费用</td>
                </tr>
                <tr>
                  <td colspan='6'>财务费用</td>
                </tr>
                <tr>
                  <td colspan='6'><h4>资产减值损失</h4></td>
                </tr>
                <tr>
                  <td colspan='6'><h4>加:公允价值变动收益(损失以“-”号填列)</h4></td>
                </tr>
                <tr>
                  <td colspan='6'><h4>投资收益(损失以"-"号填列)</h4></td>
                </tr>
                <tr>
                  <td colspan='6'><h4>其中:对联营企业和合营企业的投资收益</h4></td>
                </tr>
                <tr>
                  <td style="color:#3DA3FF ;" colspan='6'>二、营业利润（亏损以“-”号填列）</td>
                </tr>
                <tr>
                  <td colspan='6'><h4>加:营业外收入</h4></td>
                </tr>
                <tr>
                  <td colspan='6'><h4>减:营业外支出</h4></td>
                </tr>
                <tr>
                  <td colspan='6'><h4>其中:非流动资产处置损失</h4></td>
                </tr>
                <tr>
                  <td style="color:#3DA3FF ;" colspan='6'>三、利润总额（亏损总额以“-”号填列）</td>
                </tr>
                <tr>
                  <td colspan='6'><h4>减：所得税费用</h4></td>
                </tr>
                <tr>
                  <td style="color:#3DA3FF ;" colspan='6'>四、净利润（净亏损以“-”号填列）</td>
                </tr>
                <tr>
                  <td colspan='6'><h4>五、每股收益</h4></td>
                </tr>
                <tr>
                  <td colspan='6'><h4>（一）基本每股收益</h4></td>
                </tr>
                <tr>
                  <td colspan='6'><h4>（二）稀释每股收益</h4></td>
                </tr>
              </table>
            </div>
          </el-card>
        </div>
      </el-tab-pane>

      <el-tab-pane label="现金流量表" name="third">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <!--<div class="card-right-wrap">-->
              <!--选择时间：-->
              <!--<el-date-picker v-model="value4" type="month" placeholder="选择月"></el-date-picker>-->
              <!--</div>-->
              <div class="card-title">现金流量表</div>
            </div>
            <!--<div slot="header" class="clearfix">
                            <div class="card-right-wrap">
                                <el-button type="default" size="medium">模板下载</el-button>
                                <el-button type="default" size="medium">数据导入</el-button>
                                <el-button @click="saveXj" type="primary" size="medium">保存</el-button>
                            </div>
                        </div>-->

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
                <tr>
                  <td style="color:#3DA3FF ;">1、经营活动产生的现金流量</td>
                  <td>{{form_xj.hdxjll}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>销售商品、提供劳务收到的现金</td>
                  <td>{{form_xj.xssp}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>收到的税费返还</td>
                  <td>{{form_xj.sdsf}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>收到其他与经营活动相关的现金</td>
                  <td>{{form_xj.jyhdxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>经营活动现金入小计</td>
                  <td>{{form_xj.hdxjxj1}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>购买商品、接受劳务支付的现金</td>
                  <td>{{form_xj.gmzf}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>支付给职工以及职工支付的现金</td>
                  <td>{{form_xj.zfzg}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>支付的各项税费</td>
                  <td>{{form_xj.zfsf}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>支付其他与经营活动相关的现金</td>
                  <td>{{form_xj.zfjy}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>经营活动现金流出小计</td>
                  <td>{{form_xj.hdxjxj2}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>经营活动产生的现金流净额</td>
                  <td>{{form_xj.hdxjje}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td style="color:#3DA3FF ;">2、投资活动产生的现金流量</td>
                  <td>{{form_xj.tzhdxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>收回投资收到的现金</td>
                  <td>{{form_xj.shtzxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>取得投资收益收到的现金</td>
                  <td>{{form_xj.qdtzxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>处置固定资产、无形资产和其他长期资产回收的现金净额</td>
                  <td>{{form_xj.czxjje}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>处置子公司及其他营业单位收到的现金净额</td>
                  <td>{{form_xj.czyeje}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>收到其他与投资活动相关的现金</td>
                  <td>{{form_xj.sdhdxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>投资活动现金流出小计</td>
                  <td>{{form_xj.tzhdlcxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>投资活动生产的现金流量净额</td>
                  <td>{{form_xj.tzhdxjje}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td style="color:#3DA3FF ;">3、筹资活动产生的现金流量</td>
                  <td>{{form_xj.czhdxjll}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>吸收投资收到的现金</td>
                  <td>{{form_xj.xstzxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>取得借款收到的现金</td>
                  <td>{{form_xj.qdjkxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>收到其他与筹资活动相关的现金</td>
                  <td>{{form_xj.sdqtxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>筹资活动现金流入小计</td>
                  <td>{{form_xj.czhdxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>偿还债务支付的现金</td>
                  <td>{{form_xj.chzwxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>分配股利、利润或偿付利息支付的现金</td>
                  <td>{{form_xj.fpzfxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>支付其他与筹资活动有关的现金</td>
                  <td>{{form_xj.zfczxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>筹资活动现金流出小计</td>
                  <td>{{form_xj.czxjxj}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>筹资活动产生的现金流量净额</td>
                  <td>{{form_xj.czhdje}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>


              <!--<div slot="header" class="clearfix">-->
              <!--<div class="card-right-wrap">-->
              <!--&lt;!&ndash;<el-button type="default" size="medium">上传数据</el-button>&ndash;&gt;-->
              <!--<el-button type="primary" size="medium">保存</el-button>-->
              <!--</div>-->
              <!--<div class="card-title">备注</div>-->

              <!--</div>-->
              <!--<div class="text-editor">-->
              <!--<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>-->
              <!--</div>-->

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
    data() {
      return {
        value4: '',
        activeName: "first",
        textEditorContent: "",
        tableData: {
          //资产负债
          start: {},
          firstBh: {},
          mid: {},
          secondBh: {},
          end: {}
        },
        form_lr: {
          //利润
          ldzczj: '',
          yycb: '',
          yysjjfj: '',
          xsfy: '',
          glfy1: '',
          glfy2: '',
          zcjzss: '',
          tzsy: '',
          yylr: '',
          yywzc: '',
          yywsr: '',
          lrze: '',
          sdsfy: '',
          jlr: '',
        },
        form_xj: {
          //现金流量
          hdxjll: '',
          xssp: '',
          sdsf: '',
          jyhdxj: '',
          hdxjxj1: '',
          gmzf: '',
          zfzg: '',
          zfsf: '',
          zfjy: '',
          hdxjxj2: '',
          hdxjje: '',

          tzhdxj: '',
          shtzxj: '',
          qdtzxj: '',
          czxjje: '',
          czyeje: '',
          sdhdxj: '',
          tzhdlcxj: '',
          tzhdxjje: '',

          czhdxjll: '',
          xstzxj: '',
          qdjkxj: '',
          sdqtxj: '',
          czhdxj: '',
          chzwxj: '',
          fpzfxj: '',
          zfczxj: '',
          czxjxj: '',
          czhdje: ''
        },
      }
    },
    mounted() {
      this.getZcfz();
      this.getLr();
      this.getXjll();
    },
    methods: {
      //点击标签页触发事件
      handleClick(tab, event) {
        //   console.log(tab, event);
      },

      getZcfz: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkZcfz/getZcfz",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData = res.data.resultData;
        }
      },

      getLr: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/gsjbxx/hbxx/hbxx/list",
          params
        );

        this.form_lr.ldzczj = res.data.resultData.data.ldzczj
        this.form_lr.yycb = res.data.resultData.data.yycb
        this.form_lr.yysjjfj = res.data.resultData.data.yysjjfj
        this.form_lr.xsfy = res.data.resultData.data.xsfy
        this.form_lr.glfy1 = res.data.resultData.data.glfy1
        this.form_lr.glfy2 = res.data.resultData.data.glfy2
        this.form_lr.zcjzss = res.data.resultData.data.zcjzss
        this.form_lr.tzsy = res.data.resultData.data.tzsy
        this.form_lr.yylr = res.data.resultData.data.yylr
        this.form_lr.yywzc = res.data.resultData.data.yywzc
        this.form_lr.yywsr = res.data.resultData.data.yywsr
        this.form_lr.lrze = res.data.resultData.data.lrze
        this.form_lr.sdsfy = res.data.resultData.data.sdsfy
        this.form_lr.jlr = res.data.resultData.data.jlr
      },

      getXjll: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/zycwsj/xjll/list",
          params
        );
        //console.log(res.data.resultData)
        this.form_xj.hdxjll = res.data.resultData.data.hdxjll
        this.form_xj.xssp = res.data.resultData.data.xssp
        this.form_xj.sdsf = res.data.resultData.data.sdsf
        this.form_xj.jyhdxj = res.data.resultData.data.jyhdxj
        this.form_xj.hdxjxj1 = res.data.resultData.data.hdxjxj1
        this.form_xj.gmzf = res.data.resultData.data.gmzf
        this.form_xj.zfzg = res.data.resultData.data.zfzg
        this.form_xj.zfsf = res.data.resultData.data.zfsf
        this.form_xj.zfjy = res.data.resultData.data.zfjy
        this.form_xj.hdxjxj2 = res.data.resultData.data.hdxjxj2
        this.form_xj.hdxjje = res.data.resultData.data.hdxjje

        this.form_xj.tzhdxj = res.data.resultData.data.tzhdxj
        this.form_xj.shtzxj = res.data.resultData.data.shtzxj
        this.form_xj.qdtzxj = res.data.resultData.data.qdtzxj
        this.form_xj.czxjje = res.data.resultData.data.czxjje
        this.form_xj.czyeje = res.data.resultData.data.czyeje
        this.form_xj.sdhdxj = res.data.resultData.data.sdhdxj
        this.form_xj.tzhdlcxj = res.data.resultData.data.tzhdlcxj
        this.form_xj.tzhdxjje = res.data.resultData.data.tzhdxjje

        this.form_xj.czhdxjll = res.data.resultData.data.czhdxjll
        this.form_xj.xstzxj = res.data.resultData.data.xstzxj
        this.form_xj.qdjkxj = res.data.resultData.data.qdjkxj
        this.form_xj.sdqtxj = res.data.resultData.data.sdqtxj
        this.form_xj.czhdxj = res.data.resultData.data.czhdxj
        this.form_xj.chzwxj = res.data.resultData.data.chzwxj
        this.form_xj.fpzfxj = res.data.resultData.data.fpzfxj
        this.form_xj.zfczxj = res.data.resultData.data.zfczxj
        this.form_xj.czxjxj = res.data.resultData.data.czxjxj
        this.form_xj.czhdje = res.data.resultData.data.czhdje
      },

    },

    components: {
      "quill-editor": quillEditor
    },
  };
</script>

<style lang="scss">
  table {
    width: 100%;
    background: #F4F3F3;
    border-collapse: collapse;
  }

  table tr {
    border-bottom: 1px solid #D8D8D8;
  }

  table tr th {
    height: 40px;
    text-align: left;
    padding-left: 20px;
  }

  table tr td {
    height: 40px;
    text-align: left;
    padding-left: 20px;
    background: white;

  }

  .clearfix {
    margin-top: 30px;;
  }

  .text-editor {
    margin-top: 15px;
  }

  .text-editor .ql-editor {
    height: 300px;
  }

  .card-title {
    font-size: 15px;
  }

  $width: 55%;
  .el-input__inner {
    width: $width;
  }
</style>
