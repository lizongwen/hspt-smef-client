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
                  <td v-if="tableData.start.hbzj=='0'">-</td>
                  <td v-else>{{tableData.start.hbzj}}</td>
                  <td v-if="tableData.firstBh.hbzj == null">-</td>
                  <td v-else>{{tableData.firstBh.hbzj}}</td>
                  <td v-if="tableData.mid.hbzj=='0'">-</td>
                  <td v-else>{{tableData.mid.hbzj}}</td>
                  <td v-if="tableData.secondBh.hbzj == null">-</td>
                  <td v-else>{{tableData.secondBh.hbzj}}</td>
                  <td v-if="tableData.end.hbzj=='0'">-</td>
                  <td v-else>{{tableData.end.hbzj}}</td>
                </tr>
                <tr>
                  <td>应收票据</td>
                  <td v-if="tableData.start.yspj=='0'">-</td>
                  <td v-else>{{tableData.start.yspj}}</td>
                  <td v-if="tableData.firstBh.yspj == null">-</td>
                  <td v-else>{{tableData.firstBh.yspj}}</td>
                  <td v-if="tableData.mid.yspj=='0'">-</td>
                  <td v-else>{{tableData.mid.yspj}}</td>
                  <td v-if="tableData.secondBh.yspj == null">-</td>
                  <td v-else>{{tableData.secondBh.yspj}}</td>
                  <td v-if="tableData.end.yspj=='0'">-</td>
                  <td v-else>{{tableData.end.yspj}}</td>
                </tr>
                <tr>
                  <td>应收账款</td>
                  <td v-if="tableData.start.yszk=='0'">-</td>
                  <td v-else>{{tableData.start.yszk}}</td>
                  <td v-if="tableData.firstBh.yszk == null">-</td>
                  <td v-else>{{tableData.firstBh.yszk}}</td>
                  <td v-if="tableData.mid.yszk=='0'">-</td>
                  <td v-else>{{tableData.mid.yszk}}</td>
                  <td v-if="tableData.secondBh.yszk == null">-</td>
                  <td v-else>{{tableData.secondBh.yszk}}</td>
                  <td v-if="tableData.end.yszk=='0'">-</td>
                  <td v-else>{{tableData.end.yszk}}</td>
                </tr>
                <tr>
                  <td>预付账款</td>
                  <td v-if="tableData.start.yfkx=='0'">-</td>
                  <td v-else>{{tableData.start.yfkx}}</td>
                  <td v-if="tableData.firstBh.yszk == null">-</td>
                  <td v-else>{{tableData.firstBh.yfkx}}</td>
                  <td v-if="tableData.mid.yfkx=='0'">-</td>
                  <td v-else>{{tableData.mid.yfkx}}</td>
                  <td v-if="tableData.secondBh.yszk == null">-</td>
                  <td v-else>{{tableData.secondBh.yfkx}}</td>
                  <td v-if="tableData.mid.yfkx=='0'">-</td>
                  <td v-else>{{tableData.end.yfkx}}</td>
                </tr>
                <tr>
                  <td>其他应收账款</td>
                  <td v-if="tableData.start.qtysk=='0'">-</td>
                  <td v-else>{{tableData.start.qtysk}}</td>
                  <td v-if="tableData.firstBh.qtyszk == null">-</td>
                  <td v-else>{{tableData.firstBh.qtyszk}}</td>
                  <td v-if="tableData.mid.qtysk=='0'">-</td>
                  <td v-else>{{tableData.mid.qtysk}}</td>
                  <td v-if="tableData.secondBh.qtyszk == null">-</td>
                  <td v-else>{{tableData.secondBh.qtyszk}}</td>
                  <td v-if="tableData.end.qtysk=='0'">-</td>
                  <td v-else>{{tableData.end.qtysk}}</td>
                </tr>
                <tr>
                  <td>存货</td>
                  <td v-if="tableData.start.stock=='0'">-</td>
                  <td v-else>{{tableData.start.stock}}</td>
                  <td v-if="tableData.firstBh.ch == null">-</td>
                  <td v-else>{{tableData.firstBh.ch}}</td>
                  <td v-if="tableData.mid.stock=='0'">-</td>
                  <td v-else>{{tableData.mid.stock}}</td>
                  <td v-if="tableData.secondBh.ch == null">-</td>
                  <td v-else>{{tableData.secondBh.ch}}</td>
                  <td v-if="tableData.end.stock=='0'">-</td>
                  <td v-else>{{tableData.end.stock}}</td>
                </tr>
                <tr>
                  <td>其他流动资产</td>
                  <td v-if="tableData.start.qtldzc=='0'">-</td>
                  <td v-else>{{tableData.start.qtldzc}}</td>
                  <td v-if="tableData.firstBh.qtldzc == null">-</td>
                  <td v-else>{{tableData.firstBh.qtldzc}}</td>
                  <td v-if="tableData.mid.qtldzc=='0'">-</td>
                  <td v-else>{{tableData.mid.qtldzc}}</td>
                  <td v-if="tableData.secondBh.qtldzc == null">-</td>
                  <td v-else>{{tableData.secondBh.qtldzc}}</td>
                  <td v-if="tableData.end.qtldzc=='0'">-</td>
                  <td v-else>{{tableData.end.qtldzc}}</td>
                </tr>
                <tr>
                  <td colspan='6' style="color:#3DA3FF ;">2、非流动资产合计</td>
                </tr>
                <tr>
                  <td>长期应收款</td>
                  <td v-if="tableData.start.cqysk=='0'">-</td>
                  <td v-else>{{tableData.start.cqysk}}</td>
                  <td v-if="tableData.firstBh.cqysk == null">-</td>
                  <td v-else>{{tableData.firstBh.cqysk}}</td>
                  <td v-if="tableData.mid.cqysk=='0'">-</td>
                  <td v-else>{{tableData.mid.cqysk}}</td>
                  <td v-if="tableData.secondBh.cqysk == null">-</td>
                  <td v-else>{{tableData.secondBh.cqysk}}</td>
                  <td v-if="tableData.end.cqysk=='0'">-</td>
                  <td v-else>{{tableData.end.cqysk}}</td>
                </tr>
                <tr>
                  <td>长期股权投资</td>
                  <td v-if="tableData.start.cqgqtz=='0'">-</td>
                  <td v-else>{{tableData.start.cqgqtz}}</td>
                  <td v-if="tableData.firstBh.cqgqtz == null">-</td>
                  <td v-else>{{tableData.firstBh.cqgqtz}}</td>
                  <td v-if="tableData.mid.cqgqtz=='0'">-</td>
                  <td v-else>{{tableData.mid.cqgqtz}}</td>
                  <td v-if="tableData.secondBh.cqgqtz == null">-</td>
                  <td v-else>{{tableData.secondBh.cqgqtz}}</td>
                  <td v-if="tableData.end.cqgqtz=='0'">-</td>
                  <td v-else>{{tableData.end.cqgqtz}}</td>
                </tr>
                <tr>
                  <td>固定资产</td>
                  <td v-if="tableData.start.gdzc=='0'">-</td>
                  <td v-else>{{tableData.start.gdzc}}</td>
                  <td v-if="tableData.firstBh.gdzc == null">-</td>
                  <td v-else>{{tableData.firstBh.gdzc}}</td>
                  <td v-if="tableData.mid.gdzc=='0'">-</td>
                  <td v-else>{{tableData.mid.gdzc}}</td>
                  <td v-if="tableData.secondBh.gdzc == null">-</td>
                  <td v-else>{{tableData.secondBh.gdzc}}</td>
                  <td v-if="tableData.end.gdzc=='0'">-</td>
                  <td v-else>{{tableData.end.gdzc}}</td>
                </tr>
                <tr>
                  <td>在建工程</td>
                  <td v-if="tableData.start.zjgc=='0'">-</td>
                  <td v-else>{{tableData.start.zjgc}}</td>
                  <td v-if="tableData.firstBh.zjgc == null">-</td>
                  <td v-else>{{tableData.firstBh.zjgc}}</td>
                  <td v-if="tableData.mid.zjgc=='0'">-</td>
                  <td v-else>{{tableData.mid.zjgc}}</td>
                  <td v-if="tableData.secondBh.zjgc == null">-</td>
                  <td v-else>{{tableData.secondBh.zjgc}}</td>
                  <td v-if="tableData.end.zjgc=='0'">-</td>
                  <td v-else>{{tableData.end.zjgc}}</td>
                </tr>
                <tr>
                  <td>固定资产清理</td>
                  <td v-if="tableData.start.gdzcql=='0'">-</td>
                  <td v-else>{{tableData.start.gdzcql}}</td>
                  <td v-if="tableData.firstBh.gdzcql == null">-</td>
                  <td v-else>{{tableData.firstBh.gdzcql}}</td>
                  <td v-if="tableData.mid.gdzcql=='0'">-</td>
                  <td v-else>{{tableData.mid.gdzcql}}</td>
                  <td v-if="tableData.secondBh.gdzcql == null">-</td>
                  <td v-else>{{tableData.secondBh.gdzcql}}</td>
                  <td v-if="tableData.end.gdzcql=='0'">-</td>
                  <td v-else>{{tableData.end.gdzcql}}</td>
                </tr>
                <tr>
                  <td>无形资产</td>
                  <td v-if="tableData.start.wxzc=='0'">-</td>
                  <td v-else>{{tableData.start.wxzc}}</td>
                  <td v-if="tableData.firstBh.wxzc == null">-</td>
                  <td v-else>{{tableData.firstBh.wxzc}}</td>
                  <td v-if="tableData.mid.wxzc=='0'">-</td>
                  <td v-else>{{tableData.mid.wxzc}}</td>
                  <td v-if="tableData.secondBh.wxzc == null">-</td>
                  <td v-else>{{tableData.secondBh.wxzc}}</td>
                  <td v-if="tableData.end.wxzc=='0'">-</td>
                  <td v-else>{{tableData.end.wxzc}}</td>
                </tr>
                <tr>
                  <td>递延所得税资产</td>
                  <td v-if="tableData.start.dysdszc=='0'">-</td>
                  <td v-else>{{tableData.start.dysdszc}}</td>
                  <td v-if="tableData.firstBh.dysdszc == null">-</td>
                  <td v-else>{{tableData.firstBh.dysdszc}}</td>
                  <td v-if="tableData.mid.dysdszc=='0'">-</td>
                  <td v-else>{{tableData.mid.dysdszc}}</td>
                  <td v-if="tableData.secondBh.dysdszc == null">-</td>
                  <td v-else>{{tableData.secondBh.dysdszc}}</td>
                  <td v-if="tableData.end.dysdszc=='0'">-</td>
                  <td v-else>{{tableData.end.dysdszc}}</td>
                </tr>
                <tr>
                  <td>其他非流动资产</td>
                  <td v-if="tableData.start.qtfldzc=='0'">-</td>
                  <td v-else>{{tableData.start.qtfldzc}}</td>
                  <td v-if="tableData.firstBh.qtfldzc == null">-</td>
                  <td v-else>{{tableData.firstBh.qtfldzc}}</td>
                  <td v-if="tableData.mid.qtfldzc=='0'">-</td>
                  <td v-else>{{tableData.mid.qtfldzc}}</td>
                  <td v-if="tableData.secondBh.qtfldzc == null">-</td>
                  <td v-else>{{tableData.secondBh.qtfldzc}}</td>
                  <td v-if="tableData.end.qtfldzc=='0'">-</td>
                  <td v-else>{{tableData.end.qtfldzc}}</td>
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
                  <td v-if="tableData.start.dqjk=='0'">-</td>
                  <td v-else>{{tableData.start.dqjk}}</td>
                  <td v-if="tableData.firstBh.dqjk == null">-</td>
                  <td v-else>{{tableData.firstBh.dqjk}}</td>
                  <td v-if="tableData.mid.dqjk=='0'">-</td>
                  <td v-else>{{tableData.mid.dqjk}}</td>
                  <td v-if="tableData.secondBh.dqjk == null">-</td>
                  <td v-else>{{tableData.secondBh.dqjk}}</td>
                  <td v-if="tableData.end.dqjk=='0'">-</td>
                  <td v-else>{{tableData.end.dqjk}}</td>
                </tr>
                <tr>
                  <td>应付票据</td>
                  <td v-if="tableData.start.yfpj=='0'">-</td>
                  <td v-else>{{tableData.start.yfpj}}</td>
                  <td v-if="tableData.firstBh.yfpj == null">-</td>
                  <td v-else>{{tableData.firstBh.yfpj}}</td>
                  <td v-if="tableData.mid.yfpj=='0'">-</td>
                  <td v-else>{{tableData.mid.yfpj}}</td>
                  <td v-if="tableData.secondBh.yfpj == null">-</td>
                  <td v-else>{{tableData.secondBh.yfpj}}</td>
                  <td v-if="tableData.end.yfpj=='0'">-</td>
                  <td v-else>{{tableData.end.yfpj}}</td>
                </tr>
                <tr>
                  <td>应付账款</td>
                  <td v-if="tableData.start.yfzk=='0'">-</td>
                  <td v-else>{{tableData.start.yfzk}}</td>
                  <td v-if="tableData.firstBh.yfzk == null">-</td>
                  <td v-else>{{tableData.firstBh.yfzk}}</td>
                  <td v-if="tableData.mid.yfzk=='0'">-</td>
                  <td v-else>{{tableData.mid.yfzk}}</td>
                  <td v-if="tableData.secondBh.yfzk == null">-</td>
                  <td v-else>{{tableData.secondBh.yfzk}}</td>
                  <td v-if="tableData.end.yfzk=='0'">-</td>
                  <td v-else>{{tableData.end.yfzk}}</td>
                </tr>
                <tr>
                  <td>预收款项</td>
                  <td v-if="tableData.start.yskx=='0'">-</td>
                  <td v-else>{{tableData.start.yskx}}</td>
                  <td v-if="tableData.firstBh.yskx == null">-</td>
                  <td v-else>{{tableData.firstBh.yskx}}</td>
                  <td v-if="tableData.mid.yskx=='0'">-</td>
                  <td v-else>{{tableData.mid.yskx}}</td>
                  <td v-if="tableData.secondBh.yskx == null">-</td>
                  <td v-else>{{tableData.secondBh.yskx}}</td>
                  <td v-if="tableData.end.yskx=='0'">-</td>
                  <td v-else>{{tableData.end.yskx}}</td>
                </tr>
                <tr>
                  <td>应付职工薪酬</td>
                  <td v-if="tableData.start.yfzgxc=='0'">-</td>
                  <td v-else>{{tableData.start.yfzgxc}}</td>
                  <td v-if="tableData.firstBh.yfzgxc == null">-</td>
                  <td v-else>{{tableData.firstBh.yfzgxc}}</td>
                  <td v-if="tableData.mid.yfzgxc=='0'">-</td>
                  <td v-else>{{tableData.mid.yfzgxc}}</td>
                  <td v-if="tableData.secondBh.yfzgxc == null">-</td>
                  <td v-else>{{tableData.secondBh.yfzgxc}}</td>
                  <td v-if="tableData.end.yfzgxc=='0'">-</td>
                  <td v-else>{{tableData.end.yfzgxc}}</td>
                </tr>
                <tr>
                  <td>应付利息</td>
                  <td v-if="tableData.start.yflx=='0'">-</td>
                  <td v-else>{{tableData.start.yflx}}</td>
                  <td v-if="tableData.firstBh.yflx == null">-</td>
                  <td v-else>{{tableData.firstBh.yflx}}</td>
                  <td v-if="tableData.mid.yflx=='0'">-</td>
                  <td v-else>{{tableData.mid.yflx}}</td>
                  <td v-if="tableData.secondBh.yflx == null">-</td>
                  <td v-else>{{tableData.secondBh.yflx}}</td>
                  <td v-if="tableData.end.yflx=='0'">-</td>
                  <td v-else>{{tableData.end.yflx}}</td>
                </tr>
                <tr>
                  <td>其他应付款</td>
                  <td v-if="tableData.start.qtyfk=='0'">-</td>
                  <td v-else>{{tableData.start.qtyfk}}</td>
                  <td v-if="tableData.firstBh.qtyfk == null">-</td>
                  <td v-else>{{tableData.firstBh.qtyfk}}</td>
                  <td v-if="tableData.mid.qtyfk=='0'">-</td>
                  <td v-else>{{tableData.mid.qtyfk}}</td>
                  <td v-if="tableData.secondBh.qtyfk == null">-</td>
                  <td v-else>{{tableData.secondBh.qtyfk}}</td>
                  <td v-if="tableData.end.qtyfk=='0'">-</td>
                  <td v-else>{{tableData.end.qtyfk}}</td>
                </tr>
                <tr>
                  <td>其他流动负债</td>
                  <td v-if="tableData.start.qtldfz=='0'">-</td>
                  <td v-else>{{tableData.start.qtldfz}}</td>
                  <td v-if="tableData.firstBh.qtldfz == null">-</td>
                  <td v-else>{{tableData.firstBh.qtldfz}}</td>
                  <td v-if="tableData.mid.qtldfz=='0'">-</td>
                  <td v-else>{{tableData.mid.qtldfz}}</td>
                  <td v-if="tableData.secondBh.qtldfz == null">-</td>
                  <td v-else>{{tableData.secondBh.qtldfz}}</td>
                  <td v-if="tableData.end.qtldfz=='0'">-</td>
                  <td v-else>{{tableData.end.qtldfz}}</td>
                </tr>
                <tr>
                  <td colspan='6' style="color:#3DA3FF ;">2、非流动负债合计</td>
                </tr>
                <tr>
                  <td>长期应付款</td>
                  <td v-if="tableData.start.cqyfk=='0'">-</td>
                  <td v-else>{{tableData.start.cqyfk}}</td>
                  <td v-if="tableData.firstBh.cqyfk == null">-</td>
                  <td v-else>{{tableData.firstBh.cqyfk}}</td>
                  <td v-if="tableData.mid.cqyfk=='0'">-</td>
                  <td v-else>{{tableData.mid.cqyfk}}</td>
                  <td v-if="tableData.secondBh.cqyfk == null">-</td>
                  <td v-else>{{tableData.secondBh.cqyfk}}</td>
                  <td v-if="tableData.end.cqyfk=='0'">-</td>
                  <td v-else>{{tableData.end.cqyfk}}</td>
                </tr>
                <tr>
                  <td>专项应收款</td>
                  <td v-if="tableData.start.zxyfk=='0'">-</td>
                  <td v-else>{{tableData.start.zxyfk}}</td>
                  <td v-if="tableData.firstBh.zxyfk == null">-</td>
                  <td v-else>{{tableData.firstBh.zxyfk}}</td>
                  <td v-if="tableData.mid.zxyfk=='0'">-</td>
                  <td v-else>{{tableData.mid.zxyfk}}</td>
                  <td v-if="tableData.secondBh.zxyfk == null">-</td>
                  <td v-else>{{tableData.secondBh.zxyfk}}</td>
                  <td v-if="tableData.end.zxyfk=='0'">-</td>
                  <td v-else>{{tableData.end.zxyfk}}</td>
                </tr>
                <tr>
                  <td>预计负债</td>
                  <td v-if="tableData.start.yjfz=='0'">-</td>
                  <td v-else>{{tableData.start.yjfz}}</td>
                  <td v-if="tableData.firstBh.yjfz == null">-</td>
                  <td v-else>{{tableData.firstBh.yjfz}}</td>
                  <td v-if="tableData.mid.yjfz=='0'">-</td>
                  <td v-else>{{tableData.mid.yjfz}}</td>
                  <td v-if="tableData.secondBh.yjfz == null">-</td>
                  <td v-else>{{tableData.secondBh.yjfz}}</td>
                  <td v-if="tableData.mid.end=='0'">-</td>
                  <td v-else>{{tableData.end.yjfz}}</td>
                </tr>
                <tr>
                  <td>其他非流动负债</td>
                  <td v-if="tableData.start.qtfldfz=='0'">-</td>
                  <td v-else>{{tableData.start.qtfldfz}}</td>
                  <td v-if="tableData.firstBh.qtfldfz == null">-</td>
                  <td v-else>{{tableData.firstBh.qtfldfz}}</td>
                  <td v-if="tableData.mid.qtfldfz=='0'">-</td>
                  <td v-else>{{tableData.mid.qtfldfz}}</td>
                  <td v-if="tableData.secondBh.qtfldfz == null">-</td>
                  <td v-else>{{tableData.secondBh.qtfldfz}}</td>
                  <td v-if="tableData.end.qtfldfz=='0'">-</td>
                  <td v-else>{{tableData.end.qtfldfz}}</td>
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
                <table lay-skin="line">
                  <colgroup>
                    <col width="250">
                  </colgroup>
                  <tr>
                    <th>项目</th>
                    <th>{{table_lr_data.third.rq}}</th>
                    <th>变化</th>
                    <th>{{table_lr_data.second.rq}}</th>
                    <th>变化</th>
                    <th>{{table_lr_data.first.rq}}</th>
                  </tr>
                </table>
              </table>
              <table lay-skin="line">
                <colgroup>
                  <col width="250">
                </colgroup>
                <tr>
                  <th>资产总计</th>
                </tr>
                <tr>
                  <td colspan='6' style="color:#3DA3FF ;">1、营业收入</td>
                </tr>
                <tr>
                  <td>减：营业成本</td>
                  <td v-if="table_lr_data.third.cost==null">-</td>
                  <td v-else>{{table_lr_data.third.cost}}</td>

                  <td v-if="table_lr_data.secondChange.cost==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.cost}}</td>

                  <td v-if="table_lr_data.second.cost==null">-</td>
                  <td v-else>{{table_lr_data.second.cost}}</td>

                  <td v-if="table_lr_data.firstChange.cost==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.cost}}</td>

                  <td v-if="table_lr_data.first.cost==null">-</td>
                  <td v-else>{{table_lr_data.first.cost}}</td>
                </tr>
                <tr>
                  <td>营业税收及附加</td>
                  <td v-if="table_lr_data.third.sjjfj==null">-</td>
                  <td v-else>{{table_lr_data.third.sjjfj}}</td>

                  <td v-if="table_lr_data.secondChange.sjjfj==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.sjjfj}}</td>

                  <td v-if="table_lr_data.second.sjjfj==null">-</td>
                  <td v-else>{{table_lr_data.second.sjjfj}}</td>

                  <td v-if="table_lr_data.firstChange.sjjfj==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.sjjfj}}</td>

                  <td v-if="table_lr_data.first.sjjfj==null">-</td>
                  <td v-else>{{table_lr_data.first.sjjfj}}</td>
                </tr>
                <tr>
                  <td>销售费用</td>
                  <td v-if="table_lr_data.third.xsfy==null">-</td>
                  <td v-else>{{table_lr_data.third.xsfy}}</td>

                  <td v-if="table_lr_data.secondChange.xsfy==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.xsfy}}</td>

                  <td v-if="table_lr_data.second.xsfy==null">-</td>
                  <td v-else>{{table_lr_data.second.xsfy}}</td>

                  <td v-if="table_lr_data.firstChange.xsfy==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.xsfy}}</td>

                  <td v-if="table_lr_data.first.xsfy==null">-</td>
                  <td v-else>{{table_lr_data.first.xsfy}}</td>
                </tr>
                <tr>
                  <td>管理费用</td>
                  <td v-if="table_lr_data.third.glfy==null">-</td>
                  <td v-else>{{table_lr_data.third.glfy}}</td>

                  <td v-if="table_lr_data.secondChange.glfy==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.glfy}}</td>

                  <td v-if="table_lr_data.second.glfy==null">-</td>
                  <td v-else>{{table_lr_data.second.glfy}}</td>

                  <td v-if="table_lr_data.firstChange.glfy==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.glfy}}</td>

                  <td v-if="table_lr_data.first.glfy==null">-</td>
                  <td v-else>{{table_lr_data.first.glfy}}</td>
                </tr>
                <tr>
                  <td>财务费用</td>
                  <td v-if="table_lr_data.third.cwfy==null">-</td>
                  <td v-else>{{table_lr_data.third.cwfy}}</td>

                  <td v-if="table_lr_data.secondChange.cwfy==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.cwfy}}</td>

                  <td v-if="table_lr_data.second.cwfy==null">-</td>
                  <td v-else>{{table_lr_data.second.cwfy}}</td>

                  <td v-if="table_lr_data.firstChange.cwfy==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.cwfy}}</td>

                  <td v-if="table_lr_data.first.cwfy==null">-</td>
                  <td v-else>{{table_lr_data.first.cwfy}}</td>
                </tr>
                <tr>
                  <td>资产减值损失</td>
                  <td v-if="table_lr_data.third.zcjzss==null">-</td>
                  <td v-else>{{table_lr_data.third.zcjzss}}</td>

                  <td v-if="table_lr_data.secondChange.zcjzss==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.zcjzss}}</td>

                  <td v-if="table_lr_data.second.zcjzss==null">-</td>
                  <td v-else>{{table_lr_data.second.zcjzss}}</td>

                  <td v-if="table_lr_data.firstChange.zcjzss==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.zcjzss}}</td>

                  <td v-if="table_lr_data.first.zcjzss==null">-</td>
                  <td v-else>{{table_lr_data.first.zcjzss}}</td>
                </tr>
                <tr>
                  <td>加:公允价值变动收益(损失以“-”号填列)</td>
                  <td v-if="table_lr_data.third.gyjzbdsy==null">-</td>
                  <td v-else>{{table_lr_data.third.gyjzbdsy}}</td>

                  <td v-if="table_lr_data.secondChange.gyjzbdsy==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.gyjzbdsy}}</td>

                  <td v-if="table_lr_data.second.gyjzbdsy==null">-</td>
                  <td v-else>{{table_lr_data.second.gyjzbdsy}}</td>

                  <td v-if="table_lr_data.firstChange.gyjzbdsy==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.gyjzbdsy}}</td>

                  <td v-if="table_lr_data.first.gyjzbdsy==null">-</td>
                  <td v-else>{{table_lr_data.first.gyjzbdsy}}</td>
                </tr>
                <tr>
                  <td>投资收益(损失以"-"号填列)</td>
                  <td v-if="table_lr_data.third.tzsy==null">-</td>
                  <td v-else>{{table_lr_data.third.tzsy}}</td>

                  <td v-if="table_lr_data.secondChange.tzsy==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.tzsy}}</td>

                  <td v-if="table_lr_data.second.tzsy==null">-</td>
                  <td v-else>{{table_lr_data.second.tzsy}}</td>

                  <td v-if="table_lr_data.firstChange.tzsy==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.tzsy}}</td>

                  <td v-if="table_lr_data.first.tzsy==null">-</td>
                  <td v-else>{{table_lr_data.first.tzsy}}</td>
                </tr>
                <tr>
                  <td>其中:对联营企业和合营企业的投资收益</td>
                  <td v-if="table_lr_data.third.dlyqyhhyqydtz==null">-</td>
                  <td v-else>{{table_lr_data.third.dlyqyhhyqydtz}}</td>

                  <td v-if="table_lr_data.secondChange.dlyqyhhyqydtz==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.dlyqyhhyqydtz}}</td>

                  <td v-if="table_lr_data.second.dlyqyhhyqydtz==null">-</td>
                  <td v-else>{{table_lr_data.second.dlyqyhhyqydtz}}</td>

                  <td v-if="table_lr_data.firstChange.dlyqyhhyqydtz==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.dlyqyhhyqydtz}}</td>

                  <td v-if="table_lr_data.first.dlyqyhhyqydtz==null">-</td>
                  <td v-else>{{table_lr_data.first.dlyqyhhyqydtz}}</td>
                </tr>
                <tr>
                  <td colspan='6' style="color:#3DA3FF ;">二、营业利润（亏损以“-”号填列）</td>
                </tr>
                <tr>
                  <td>加:营业外收入</td>
                  <td>{{table_lr_data.third.yywsr}}</td>
                  <td>{{table_lr_data.secondChange.yywsr}}</td>
                  <td>{{table_lr_data.second.yywsr}}</td>
                  <td>{{table_lr_data.firstChange.yywsr}}</td>
                  <td>{{table_lr_data.first.yywsr}}</td>
                </tr>
                <tr>
                  <td>减:营业外支出</td>
                  <td v-if="table_lr_data.third.yywzc==null">-</td>
                  <td v-else>{{table_lr_data.third.yywzc}}</td>

                  <td v-if="table_lr_data.secondChange.yywzc==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.yywzc}}</td>

                  <td v-if="table_lr_data.second.yywzc==null">-</td>
                  <td v-else>{{table_lr_data.second.yywzc}}</td>

                  <td v-if="table_lr_data.firstChange.yywzc==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.yywzc}}</td>

                  <td v-if="table_lr_data.first.yywzc==null">-</td>
                  <td v-else>{{table_lr_data.first.yywzc}}</td>
                </tr>
                <tr>
                  <td>其中:非流动资产处置损失</td>
                  <td v-if="table_lr_data.third.fldzcczss==null">-</td>
                  <td v-else>{{table_lr_data.third.fldzcczss}}</td>

                  <td v-if="table_lr_data.secondChange.fldzcczss==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.fldzcczss}}</td>

                  <td v-if="table_lr_data.second.fldzcczss==null">-</td>
                  <td v-else>{{table_lr_data.second.fldzcczss}}</td>

                  <td v-if="table_lr_data.firstChange.fldzcczss==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.fldzcczss}}</td>

                  <td v-if="table_lr_data.first.fldzcczss==null">-</td>
                  <td v-else>{{table_lr_data.first.fldzcczss}}</td>
                </tr>
                <tr>
                  <td colspan='6' style="color:#3DA3FF ;">三、利润总额（亏损总额以“-”号填列）</td>
                </tr>
                <tr>
                  <td>减：所得税费用</td>
                  <td v-if="table_lr_data.third.sdsfy==null">-</td>
                  <td v-else>{{table_lr_data.third.sdsfy}}</td>

                  <td v-if="table_lr_data.secondChange.sdsfy==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.sdsfy}}</td>

                  <td v-if="table_lr_data.second.sdsfy==null">-</td>
                  <td v-else>{{table_lr_data.second.sdsfy}}</td>

                  <td v-if="table_lr_data.firstChange.sdsfy==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.sdsfy}}</td>

                  <td v-if="table_lr_data.first.sdsfy==null">-</td>
                  <td v-else>{{table_lr_data.first.sdsfy}}</td>
                </tr>
                <tr>
                  <td colspan='6' style="color:#3DA3FF ;">四、净利润（净亏损以“-”号填列）</td>
                </tr>
                <tr>
                  <td colspan='6' style="color:#3DA3FF ;">五、每股收益</td>
                </tr>
                <tr>
                  <td>（一）基本每股收益</td>
                  <td v-if="table_lr_data.third.jbmgsy==null">-</td>
                  <td v-else>{{table_lr_data.third.jbmgsy}}</td>

                  <td v-if="table_lr_data.secondChange.jbmgsy==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.jbmgsy}}</td>

                  <td v-if="table_lr_data.second.jbmgsy==null">-</td>
                  <td v-else>{{table_lr_data.second.jbmgsy}}</td>

                  <td v-if="table_lr_data.firstChange.jbmgsy==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.jbmgsy}}</td>

                  <td v-if="table_lr_data.first.jbmgsy==null">-</td>
                  <td v-else>{{table_lr_data.first.jbmgsy}}</td>
                </tr>
                <tr>
                  <td>（二）稀释每股收益</td>
                  <td v-if="table_lr_data.third.xsmgsy==null">-</td>
                  <td v-else>{{table_lr_data.third.xsmgsy}}</td>

                  <td v-if="table_lr_data.secondChange.xsmgsy==null">-</td>
                  <td v-else>{{table_lr_data.secondChange.xsmgsy}}</td>

                  <td v-if="table_lr_data.second.xsmgsy==null">-</td>
                  <td v-else>{{table_lr_data.second.xsmgsy}}</td>

                  <td v-if="table_lr_data.firstChange.xsmgsy==null">-</td>
                  <td v-else>{{table_lr_data.firstChange.xsmgsy}}</td>

                  <td v-if="table_lr_data.first.xsmgsy==null">-</td>
                  <td v-else>{{table_lr_data.first.xsmgsy}}</td>
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
        table_lr_data: {
          //利润表
          first: {},
          firstChange: {},
          second: {},
          secondChange: {},
          third: {}
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
      //主要财务数据中资产负债表的初始化
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
      //主要财务数据中的利润表的初始化
      getLr: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/cwzkLrb/initLrb",
          params
        );
        console.log(res.data);
        if (res.data.resultCode == "0") {
          this.table_lr_data = res.data.resultData.data;
        }
      },
      //主要财务数据中现金流量表的初始化
      getXjll: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/cwzk/zycwsj/xjll/list",
          params
        );
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
