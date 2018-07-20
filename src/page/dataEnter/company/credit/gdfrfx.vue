<template>
  <div>
    <div style="margin-bottom: 20px;">
      <el-card class="box-card" shadow='nevner'>
        <div slot="header" class="clearfix">
          <div class="card-right-wrap">
            <el-button class="save" type="primary" size="medium" @click="setZrrdgd">保存</el-button>
          </div>
          <div class="card-title">自然人大股东</div>
        </div>
        <div>
          <el-table :data="tableData_0" v-loading.body="listLoading" border fit highlight-current-row
                    style="width: 100%">
            <el-table-column label="序号" type="index" width="50"></el-table-column>
            <el-table-column min-width="200px" label="姓名">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules_zrrdgd" :id="'Name'+scope.$index"
                           :ref="'form_Name_'+scope.$index" :show-message="false">
                    <el-form-item prop="Name" class="td-form-item">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_0_columns)[1]" size="small" v-model="scope.row.name"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="300px" label="身份证号">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules_zrrdgd" :id="'identityNum'+scope.$index"
                           :ref="'form_identityNum_'+scope.$index" :show-message="false">
                    <el-form-item prop="identityNum" class="td-form-item">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_0_columns)[2]"
                                size="small" v-model="scope.row.idNumber"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{ scope.row.idNumber}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="300px" label="手机号码">
              <template slot-scope="scope">
                <template v-if="scope.row.edit">
                  <el-form :model="scope.row" :rules="rules_zrrdgd" :id="'phoneNum'+scope.$index"
                           :ref="'form_phoneNum_'+scope.$index" :show-message="false">
                    <el-form-item prop="phoneNum" class="td-form-item">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_0_columns)[3]"
                                size="small" v-model="scope.row.mobile"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span v-else>{{ scope.row.mobile}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="240">
              <template slot-scope="scope">
                <v-tableOperation :scope="scope" :tableData="tableData_0" v-on:verify="verify_0"
                                  v-on:acceptDelRow='acceptDelRow_0'></v-tableOperation>
              </template>
            </el-table-column>
          </el-table>
          <v-tabelAddBtn :tableData="tableData_0" :tableData_columns="tableData_0_columns"></v-tabelAddBtn>
        </div>
      </el-card>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="央行报告信息" name="first">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="primary" size="medium" @click="setYhbg">保存</el-button>
              </div>
              <div class="card-title">自然人大股东央行报告信息</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column min-width="70px" label="姓名">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_yhbg" :id="'Name'+scope.$index"
                               :ref="'form_Name_'+scope.$index" :show-message="false">
                        <el-form-item prop="Name" class="td-form-item">
                          <el-input class="edit-input" :disabled="true" size="small" v-model="scope.row.name"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.name}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="80px" label="账户">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_yhbg" :id="'account'+scope.$index"
                               :ref="'form_status_'+scope.$index" :show-message="false">
                        <el-form-item prop=" account" class="td-form-item">
                          <el-input class="edit-input" :disabled="true" size="small" v-model="scope.row.account"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.account}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="账户数">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_yhbg" :id="'accountNum'+scope.$index"
                               :ref="'form_accountNum_'+scope.$index" :show-message="false">
                        <el-form-item prop="accountNum" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.accountAmount"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.accountAmount}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="授信额度">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_yhbg" :id="'creditLine'+scope.$index"
                               :ref="'form_creditLine_'+scope.$index" :show-message="false">
                        <el-form-item prop="creditLine" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.sxed"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.sxed}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="未结清余额">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_yhbg" :id="'balance'+scope.$index"
                               :ref="'form_balance_'+scope.$index" :show-message="false">
                        <el-form-item prop="balance" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.dkye"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.dkye}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="逾期记录">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_yhbg" :id="'yqrecord'+scope.$index"
                               :ref="'form_yqrecord_'+scope.$index" :show-message="false">
                        <el-form-item prop="yqrecord" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.yqjl"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.yqjl}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="150px" label="为他人担保余额">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_yhbg" :id="'lawStatus'+scope.$index"
                               :ref="'form_lawStatus_'+scope.$index" :show-message="false">
                        <el-form-item prop="lawStatus" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.dbed"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.dbed}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="被查询记录">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_yhbg" :id="'bcrecord'+scope.$index"
                               :ref="'form_bcrecord_'+scope.$index" :show-message="false">
                        <el-form-item prop="bcrecord" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.bcxjl"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.bcxjl}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperationNoDelete :scope="scope" :tableData="tableData_1" v-on:verify="verify"
                                      v-on:acceptDelRow='acceptDelRow'></v-tableOperationNoDelete>
                  </template>
                </el-table-column>
              </el-table>
              <!--<v-tabelAddBtn :tableData="tableData" :tableData_columns="tableData_columns"></v-tabelAddBtn>-->
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="法律风险" name="second">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="primary" size="medium" @click="setFlfx">保存</el-button>
              </div>
              <div class="card-title">自然人大股东法律风险</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_1" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="150px" label="被执行人姓名/名称">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_flfx" :id="'Name'+scope.$index"
                               :ref="'form_Name_'+scope.$index" :show-message="false">
                        <el-form-item prop="Name" class="td-form-item">
                          <el-input class="edit-input" :disabled="true" size="small" v-model="scope.row.bzxrxm"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.bzxrxm}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="案号">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_flfx" :id="'caseNo'+scope.$index"
                               :ref="'form_caseNo_'+scope.$index" :show-message="false">
                        <el-form-item prop="caseNo" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.ah"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.ah}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="立案时间">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_flfx" :id="'time'+scope.$index"
                               :ref="'form_time_'+scope.$index" :show-message="false">
                        <el-form-item prop="time" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.lasj"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.lasj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="执行法院">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_flfx" :id="'executive'+scope.$index"
                               :ref="'form_executive_'+scope.$index" :show-message="false">
                        <el-form-item prop="executive" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.zxfy"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.zxfy}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="150px" label="执行标的（元）">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_flfx" :id="'zxbd'+scope.$index"
                               :ref="'form_zxbd_'+scope.$index" :show-message="false">
                        <el-form-item prop="zxbd" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.zxbd"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.zxbd}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="案件状态">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_flfx" :id="'state'+scope.$index"
                               :ref="'form_state_'+scope.$index" :show-message="false">
                        <el-form-item prop="state" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.ajzgt"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.ajzgt}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperationNoDelete :scope="scope" :tableData="tableData_1" v-on:verify="verify_1"
                                      v-on:acceptDelRow='acceptDelRow_1'></v-tableOperationNoDelete>
                  </template>
                </el-table-column>
              </el-table>
              <!--<v-tabelAddBtn :tableData="tableData_1" :tableData_columns="tableData_1_columns"></v-tabelAddBtn>-->
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="公共信息" name="third">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <!--<el-button class="save" type="default" size="medium">获取数据</el-button>-->
                <el-button class="save" type="primary" size="medium" @click="setGrshxyjl">保存</el-button>
              </div>
              <div class="card-title">个人社会信用记录</div>
            </div>
            <div>
              <el-table :data="tableData_2" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="100px" label="姓名">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grxy" :id="'copyrightName'+scope.$index"
                               :ref="'form_copyrightName_'+scope.$index" :show-message="false">
                        <el-form-item prop="copyrightName" class="td-form-item">
                          <el-input class="edit-input" :disabled="true" size="small" v-model="scope.row.name"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.name}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" label="是否严重不良行为青少年">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grxy" :id="'worksType'+scope.$index"
                               :ref="'form_worksType_'+scope.$index" :show-message="false">
                        <el-form-item prop="worksType" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.sfblxwqsn"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.sfblxwqsn}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" label="是否校园周边重点人员">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grxy" :id="'worksName'+scope.$index"
                               :ref="'form_worksName_'+scope.$index" :show-message="false">
                        <el-form-item prop="worksName" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.sfxyzdry"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.sfxyzdry}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" label="是否重点人员信息">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grxy" :id="'regNo'+scope.$index"
                               :ref="'form_regNo_'+scope.$index" :show-message="false">
                        <el-form-item prop="regNo" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.sfzdryxx"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.sfzdryxx}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="是否超生">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grxy" :id="'version'+scope.$index"
                               :ref="'form_version_'+scope.$index" :show-message="false">
                        <el-form-item prop="version" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.sfcs"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.sfcs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="150px" label="是否为流动人口">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grxy" :id="'regDate'+scope.$index"
                               :ref="'form_regDate_'+scope.$index" :show-message="false">
                        <el-form-item prop="regDate" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.sfldrk"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.sfldrk}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="150px" label="是否有交通处罚">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grxy" :id="'regDate'+scope.$index"
                               :ref="'form_regDate_'+scope.$index" :show-message="false">
                        <el-form-item prop="regDate" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.sfyjtcf"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.sfyjtcf}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="150px" label="是否有治安处罚">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grxy" :id="'regDate'+scope.$index"
                               :ref="'form_regDate_'+scope.$index" :show-message="false">
                        <el-form-item prop="regDate" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.sfyzacf"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.sfyzacf}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperationNoDelete :scope="scope" :tableData="tableData_2" v-on:verify="verify_2"
                                      v-on:acceptDelRow='acceptDelRow_2'></v-tableOperationNoDelete>
                  </template>
                </el-table-column>
              </el-table>
              <!--<v-tabelAddBtn :tableData="tableData_2" :tableData_columns="tableData_2_columns"></v-tabelAddBtn>-->
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="default" size="medium" @click="getXzcfData">获取数据</el-button>
                <el-button class="save" type="primary" size="medium" @click="saveXzcf">保存</el-button>
              </div>
              <div class="card-title">信用记录行政处罚</div>
            </div>
            <div class="el-table el-table--border el-table--enable-row-hover el-table--enable-row-transition">
              <table class="el-table__body text-center" style="width:100%" cellspacing="0"
                     cellpadding="0" border="0">
                <thead>
                <tr>
                  <th class=" text-center">
                    <div class="cell" strong>姓名</div>
                  </th>
                  <th class=" text-center">
                    <div class="cell" strong>处罚性质</div>
                  </th>
                  <th class=" text-center" colspan="5">
                    <div class="cell" strong>公安处罚信息</div>
                  </th>
                </tr>
                </thead>
                <tbody v-for="item in tableData_xzcf" :key="item.id">
                <tr class="el-table__row">
                  <td rowspan="5">
                    <div class="cell">{{item.name}}</div>
                  </td>
                  <td rowspan="2">
                    <div class="cell">{{item.cfxz}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_xzcf_columns.cfcs}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_xzcf_columns.cfdw}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_xzcf_columns.cflx}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_xzcf_columns.cfje}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_xzcf_columns.kfs}}</div>
                  </td>
                </tr>
                <tr class="el-table__row">
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入处罚次数" v-model="item.cfcs"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入处罚单位" v-model="item.cfdw"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入处罚类型" v-model="item.cflx"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入罚款金额" v-model="item.cfje"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入扣分数" v-model="item.kfs"></el-input>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="default" size="medium" @click="getGrgjjData">获取数据</el-button>
                <el-button class="save" type="primary" size="medium" @click="setGrgjj">保存</el-button>
              </div>
              <div class="card-title">公积金个人信息</div>
            </div>
            <div>
              <el-table :data="tableData_3" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column min-width="100px" :label="tableData_3_columns.name">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.name" class="edit-input cellItem el-form-item"
                              :class="Object.keys(tableData_3_columns)[1]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.name}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_3_columns.cjsj">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.cjsj" class="edit-input cellItem el-form-item"
                              :class="Object.keys(tableData_3_columns)[2]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.cjsj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_3_columns.jnys">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.jnys" class="edit-input cellItem el-form-item"
                              :class="Object.keys(tableData_3_columns)[3]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.jnys}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_3_columns.sbgzjs">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.sbgzjs" class="edit-input cellItem el-form-item"
                              :class="Object.keys(tableData_3_columns)[4]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.sbgzjs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_3_columns.gryjse">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.gryjse" class="edit-input cellItem el-form-item"
                              :class="Object.keys(tableData_3_columns)[5]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.gryjse}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" :label="tableData_3_columns.zhzt">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.zhzt" class="edit-input cellItem el-form-item"
                              :class="Object.keys(tableData_3_columns)[6]" v-if="scope.row.edit"
                              size="small"></el-input>
                    <span v-else>{{ scope.row.zhzt}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperationNoDelete :scope="scope" :tableData="tableData_3" v-on:verify="verify_3"></v-tableOperationNoDelete>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="default" size="medium" @click="getGrsbData">获取数据</el-button>
                <el-button class="save" type="primary" size="medium" @click="setGrsb">保存</el-button>
              </div>
              <div class="card-title">社保个人信息</div>
            </div>
            <div>
              <el-table :data="tableData_4" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="100px" label="姓名">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grsb" :id="'copyrightName'+scope.$index"
                               :ref="'form_copyrightName_'+scope.$index" :show-message="false">
                        <el-form-item prop="copyrightName" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.name"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.name}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" label="是否参保">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grsb" :id="'worksType'+scope.$index"
                               :ref="'form_worksType_'+scope.$index" :show-message="false">
                        <el-form-item prop="worksType" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.sfcb"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.sfcb}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" label="参保时间">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grsb" :id="'worksName'+scope.$index"
                               :ref="'form_worksName_'+scope.$index" :show-message="false">
                        <el-form-item prop="worksName" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.cbsj"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.cbsj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" label="参保状态">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grsb" :id="'regNo'+scope.$index"
                               :ref="'form_regNo_'+scope.$index" :show-message="false">
                        <el-form-item prop="regNo" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.cbzt"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.cbzt}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="缴费基数">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grsb" :id="'version'+scope.$index"
                               :ref="'form_version_'+scope.$index" :show-message="false">
                        <el-form-item prop="version" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.jfjs"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.jfjs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="150px" label="本期应缴(当前)">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grsb" :id="'regDate'+scope.$index"
                               :ref="'form_regDate_'+scope.$index" :show-message="false">
                        <el-form-item prop="regDate" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.byyj"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.byyj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="150px" label="参保险种">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grsb" :id="'regDate'+scope.$index"
                               :ref="'form_regDate_'+scope.$index" :show-message="false">
                        <el-form-item prop="regDate" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.cbxz"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.cbxz}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperationNoDelete :scope="scope" :tableData="tableData_4" v-on:verify="verify_4"
                                      v-on:acceptDelRow='acceptDelRow_4'></v-tableOperationNoDelete>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="default" size="medium" @click="getGrclData">获取数据</el-button>
                <el-button class="save" type="primary" size="medium" @click="setGrcl">保存</el-button>
              </div>
              <div class="card-title">个人车辆信息</div>
            </div>
            <div>
              <el-table :data="tableData_5" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="100px" label="姓名">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grcl" :id="'name'+scope.$index"
                               :ref="'form_name_'+scope.$index" :show-message="false">
                        <el-form-item prop="name" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.name"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.name}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" label="号牌号码">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grcl" :id="'hphm'+scope.$index"
                               :ref="'form_hphm_'+scope.$index" :show-message="false">
                        <el-form-item prop="hphm" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.hphm"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.hphm}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" label="中文品牌">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grcl" :id="'zwpm'+scope.$index"
                               :ref="'form_zwpm_'+scope.$index" :show-message="false">
                        <el-form-item prop="zwpm" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.zwpm"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.zwpm}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" label="车辆类型">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grcl" :id="'cllx'+scope.$index"
                               :ref="'form_cllx_'+scope.$index" :show-message="false">
                        <el-form-item prop="cllx" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.cllx"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.cllx}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="100px" label="制造国">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grcl" :id="'zzg'+scope.$index"
                               :ref="'form_zzg_'+scope.$index" :show-message="false">
                        <el-form-item prop="zzg" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.zzg"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.zzg}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="150px" label="机动车状态">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grcl" :id="'jdczt'+scope.$index"
                               :ref="'form_jdczt_'+scope.$index" :show-message="false">
                        <el-form-item prop="jdczt" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.jdczt"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.jdczt}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="150px" label="抵押标记">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_grcl" :id="'dybz'+scope.$index"
                               :ref="'form_dybz_'+scope.$index" :show-message="false">
                        <el-form-item prop="dybz" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.dybz"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.dybz}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperationNoDelete :scope="scope" :tableData="tableData_5" v-on:verify="verify_5"
                                      v-on:acceptDelRow='acceptDelRow_5'></v-tableOperationNoDelete>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="反欺诈信息" name="four">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="default" size="medium">获取数据</el-button>
                <el-button class="save" type="primary" size="medium" @click="saveFqz">保存</el-button>
              </div>
              <div class="card-title">反欺诈信息</div>
            </div>
            <!-- 表格容器 -->
            <div class="el-table el-table--border el-table--enable-row-hover el-table--enable-row-transition">
              <el-table :data="tableData_6" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="200px" :label="tableData_6_columns.firstLevelClass">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_fqz" :id="'firstLevelClass'+scope.$index"
                               :ref="'form_firstLevelClass_'+scope.$index" :show-message="false">
                        <el-form-item prop="firstLevelClass" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.firstLevelClass">-</el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{scope.row.firstLevelClass}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_6_columns.secondLevelClass">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_fqz" :id="'secondLevelClass'+scope.$index"
                               :ref="'form_secondLevelClass_'+scope.$index" :show-message="false">
                        <el-form-item prop="secondLevelClass" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.secondLevelClass"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.secondLevelClass}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_6_columns.fraudTypeInstruction">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_fqz" :id="'fraudTypeInstruction'+scope.$index"
                               :ref="'form_fraudTypeInstruction_'+scope.$index" :show-message="false">
                        <el-form-item prop="fraudTypeInstruction" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.fraudTypeInstruction"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <span v-else>{{ scope.row.fraudTypeInstruction}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_6_columns.queryResult">
                  <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                      <el-form :model="scope.row" :rules="rules_fqz" :id="'queryResult'+scope.$index"
                               :ref="'form_queryResult_'+scope.$index" :show-message="false">
                        <el-form-item prop="queryResult" class="td-form-item">
                          <el-input class="edit-input" size="small" v-model="scope.row.queryResult"></el-input>
                        </el-form-item>
                      </el-form>
                    </template>
                    <el-input class="edit-input" size="small" v-model="scope.row.queryResult" v-else></el-input>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="互联网监控信息" name="five">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="primary" size="medium" @click="saveHlwjk">保存</el-button>
              </div>
              <div class="card-title">互联网监控信息</div>
            </div>

            <div class="el-table el-table--border el-table--enable-row-hover el-table--enable-row-transition">
              <table class="el-table__body text-center" style="width:100%" cellspacing="0"
                     cellpadding="0" border="0">
                <thead>
                <tr>
                  <th class=" text-center">
                    <div class="cell" strong>姓名</div>
                  </th>
                  <th class=" text-center" colspan="5">
                    <div class="cell" strong>乘机记录</div>
                  </th>
                </tr>
                </thead>
                <tbody v-for="formItem in tableData_7" :key="formItem.id">
                <tr class="el-table__row">
                  <td rowspan="5">
                    <div class="cell">{{formItem.name}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_7_columns.ynnfxcs}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_7_columns.swccjcs}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_7_columns.gwccjcs}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_7_columns.jjccjcs}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_7_columns.pjpj}}</div>
                  </td>
                </tr>
                <tr class="el-table__row">
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入一年内次数" v-model="formItem.ynnfxcs"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入商务舱乘机次数" v-model="formItem.swccjcs"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入公务舱乘机" v-model="formItem.gwccjcs"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入经济舱乘机" v-model="formItem.jjccjcs"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入平均票价（元）" v-model="formItem.pjpj"></el-input>
                    </div>
                  </td>
                </tr>
                <tr class="el-table__row">
                  <td>
                    <div class="cell">{{tableData_7_columns.zpfcfcs}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_7_columns.zpfddcs}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_7_columns.zhfxsj}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_7_columns.zhqfcs}}</div>
                  </td>
                  <td>
                    <div class="cell">{{tableData_7_columns.zhddcs}}</div>
                  </td>
                </tr>
                <tr class="el-table__row">
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入最频繁出发城市" v-model="formItem.zpfcfcs"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入最频繁到达城市" v-model="formItem.zpfddcs"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入最后飞行时间" v-model="formItem.zhfxsj"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入最后起飞城市" v-model="formItem.zhqfcs"></el-input>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <el-input placeholder="请输入最后抵达城市" v-model="formItem.zhddcs"></el-input>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import tabelAddBtn from "@/components/table/table-add-btn.vue";
  import tableOperation from "@/components/table/table-operation.vue";
  import tableValidates from "@/utils/validateTable/tableValidates.js";
  import tableOperation_no_delete from "@/components/table/table-operation.no_delete_button.vue";

  export default {
    data() {
      return {
        activeName: "first",
        listLoading: false,
        idNumber: [],
        tableData_0: [], //表格数据
        deleteData_0: [],
        addData_0: [],
        updateData_0: [],
        tableData_0_columns: {
          id: null,
          name: "姓名",
          idNumber: "身份证号",
          mobile: "手机号",
          edit: false
        },
        rules_zrrdgd: {
          name: [{required: true, message: "姓名是必填项"}],
          idNumber: [{required: true, message: "身份证号是必填项"},
            {
              validator(rule, value, callback) {
                var errors = [];
                if (!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value)) {

                  callback('请输入正确身份证号....');
                }
                callback(errors);

              }
            }
          ],
          mobile: [
            {
              validator(rule, value, callback) {
                if(value != "" && value != null){
                  var errors = [];
                  if (!/^1[34578]\d{9}$/.test(value)) {

                    callback('请输入正确手机号....');
                  }
                  callback(errors);
                }else{
                   callback();
                }
              }
            }
          ]
        },

        tableData: [],
        updateData: [],
        deleteData: [],
        addData: [],
        tableData_columns: {
          id: null,
          name: "姓名",
          account: "账户",
          accountAmount: "账户数",
          sxed: "授信额度",
          dkye: "未结清余额",
          yqjl: "逾期记录",
          dbed: "为他人担保余额",
          bcxjl: "被查询记录",
          edit: false
        },
        rules_yhbg: {},

        tableData_1: [],
        updateData_1: [],
        deleteData_1: [],
        addData_1: [],
        tableData_1_columns: {
          id: null,
          bzxrxm: "被执行人姓名/名称",
          ah: "案号",
          lasj: "立案时间",
          zxfy: "执行法院",
          zxbd: "执行标的(元）",
          ajzgt: "案件状态",
          edit: false
        },
        rules_flfx: {
          lasj: [{validator(rule, value, callback) {
              var errors = [];
              if (!/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)) {

                callback('此项必须为日期格式....');
              }
              callback(errors);

            }}
          ],
        },

        tableData_2: [],
        updateData_2: [],
        deleteData_2: [],
        addData_2: [],
        tableData_2_columns: {
          id: null,
          name: "姓名",
          sfblxwqsn: "是否严重不良行为青少年",
          sfxyzdry: "是否校园周边重点人员",
          sfzdryxx: "是否重点人员信息",
          sfcs: "是否超生",
          sfldrk: "是否为流动人口",
          sfyjtcf: "是否有交通处罚",
          sfyzacf: "是否有治安处罚",
          edit: false
        },
        rules_grxy: {},

        tableData_3: [],
        updateData_3: [],
        addData_3: [],
        tableData_3_columns: {
          id: null,
          name: "姓名",
          cjsj: "参缴时间",
          jnys: "缴纳月数",
          sbgzjs: "申报工资基数(元)",
          gryjse: "个人月缴额(元)",
          zhzt: "账户状态",
          edit: false
        },
        rules_grgjj: {
          cjsj: [{validator(rule, value, callback) {
              var errors = [];
              if (!/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)) {

                callback('此项必须为日期格式....');
              }
              callback(errors);

            }}
          ],
        },

        tableData_4: [],
        updateData_4: [],
        deleteData_4: [],
        addData_4: [],
        tableData_4_columns: {
          id: null,
          name: "姓名",
          sfcb: "是否参保",
          cbsj: "参保时间",
          cbzt: "参保状态",
          jfjs: "缴费基数",
          byyj: "本期应缴(当前)",
          cbxz: "参保险种",
          edit: false
        },
        rules_grsb: {
          cbsj: [{validator(rule, value, callback) {
              var errors = [];
              if (!/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)) {

                callback('此项必须为日期格式....');
              }
              callback(errors);

            }}
          ],
        },

        tableData_5: [],
        updateData_5: [],
        deleteData_5: [],
        addData_5: [],
        tableData_5_columns: {
          id: null,
          name: "姓名",
          hphm: "号牌号码",
          zwpm: "中文品牌",
          cllx: "车辆类型",
          zzg: "制造国",
          jdczt: "机动车状态",
          dybz: "抵押标记",
          edit: false
        },
        rules_grcl: {},

        tableData_6: [],
        updateData_6: [],
        deleteData_6: [],
        addData_6: [],
        tableData_6_columns: {
          firstLevelClass: "第一级分类",
          secondLevelClass: "第二级分类",
          fraudTypeInstruction: "数据欺诈类型说明",
          queryResult: "查询结果",
          edit: false
        },

        tableData_7: [],
        updateData_7: [],
        deleteData_7: [],
        addData_7: [],
        tableData_7_columns: {
          name: "姓名",
          ynnfxcs: "一年内飞行次数",
          swccjcs: "商务舱乘机次数",
          gwccjcs: "公务舱乘机次数",
          jjccjcs: "经济舱乘机次数",
          pjpj: "平均票价（元）",
          zpfcfcs: "最频繁出发城市",
          zpfddcs: "最频繁到达城市",
          zhfxsj: "最后飞行时间",
          zhqfcs: "最后起飞城市",
          zhddcs: "最后抵达城市",
          edit: false
        },

        tableData_xzcf: [],
        tableData_xzcf_columns: {
          id: null,
          name: "姓名",
          cfxz: "处罚性质",
          cfcs: "处罚次数",
          cfdw: "处罚单位",
          cflx: "处罚类型",
          cfje: "罚款金额",
          kfs: "扣分数",
          edit: false
        },
      };
    },
    computed: {},
    mounted() {
      this.getZrrdgd();
      this.getYhbg();
      this.getFlfx();
      this.getGrshxyjl();
      this.getXzcf();
      this.getGrgjj();
      this.getGrsb();
      this.getGrcl();
      this.getFqz();
      this.getHlwjk();
    },
    methods: {
      //-------------------------------------------------自然人大股东-------------------------------------------------
      //获取自然人大股东信息
      getZrrdgd: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdfxxx/loadBaseInfoData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_0 = res.data.resultData.data;

          //遍历获取自然人大股东信息 idNumber
          for (var i = 0; i < this.tableData_0.length; i++) {
            this.idNumber.push(this.tableData_0[i].idNumber);
          }
        }
      },
      //保存自然人大股东信息
      setZrrdgd: async function () {
        this.tableData_0.forEach((item, index) => {
          if (item.id == null) {
            this.addData_0.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_0),
          updateData: JSON.stringify(this.updateData_0),
          deleteData: JSON.stringify(this.deleteData_0)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdfxxx/saveBaseInfoData",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getZrrdgd();
          this.getYhbg();
          this.getFlfx();
          this.getGrshxyjl();
          this.getXzcf();
          this.getGrgjj();
          this.getGrsb();
          this.getGrcl();
          this.getFqz();
          this.getHlwjk();
          this.deleteData_0 = [];
          this.updateData_0 = [];
          this.addData_0 = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接受自然人大股东信息删除的数据
      acceptDelRow_0(val) {
        this.deleteData_0.push(val);
      },
      //验证自然人大股东信息数据
      verify_0(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_zrrdgd,
          this
        );
        if (rowObj.id) {
          this.updateData_0.push(rowObj);
        }
      },
      //-------------------------------------------------央行报告信息-----------------------------------------------
      //获取自然人大股东央行报告信息
      getYhbg: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdYhbg/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData = res.data.resultData.data.rows;
        }
      },
      //保存自然人大股东央行报告信息
      setYhbg: async function () {
        this.tableData.forEach((item, index) => {
          if (item.id == null) {
            this.addData.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          updateData: JSON.stringify(this.updateData)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdYhbg/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getYhbg();
          this.deleteData = [];
          this.updateData = [];
          this.addData = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //验证自然人大股东央行报告信息数据
      verify(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_yhbg,
          this
        );
        if (rowObj.id) {
          this.updateData.push(rowObj);
        }
      },
      //接受自然人大股东央行报告信息删除的数据
      acceptDelRow(val) {
        this.deleteData.push(val);
      },
      //----------------------------------------------------法律风险--------------------------------------------------
      //获取法律风险信息
      getFlfx: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdFlfx/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_1 = res.data.resultData.data;
        }
      },
      //保存法律风险信息
      setFlfx: async function () {
        this.tableData_1.forEach((item, index) => {
          if (item.id == null) {
            this.addData_1.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_1),
          updateData: JSON.stringify(this.updateData_1),
          deleteData: JSON.stringify(this.deleteData_1)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkZrrdgdFlfx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getFlfx();
          this.deleteData_1 = [];
          this.updateData_1 = [];
          this.addData_1 = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //验证法律风险信息数据
      verify_1(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_flfx,
          this
        );
        if (rowObj.id) {
          this.updateData_1.push(rowObj);
        }
      },
      //接受法律风险信息删除的数据
      acceptDelRow_1(val) {
        this.deleteData_1.push(val);
      },
      //----------------------------------------------------公共信息-------------------------------------------------------
      //获取个人社会行用记录信息
      getGrshxyjl: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxGrpz/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_2 = res.data.resultData.data.rows;
        }
      },
      //保存个人社会行用记录信息
      setGrshxyjl: async function () {
        this.tableData_2.forEach((item, index) => {
          if (item.id == null) {
            this.addData_2.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          updateData: JSON.stringify(this.updateData_2)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxGrpz/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getGrshxyjl();
          this.deleteData_2 = [];
          this.updateData_2 = [];
          this.addData_2 = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //验证个人社会行用记录信息数据
      verify_2(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_grxy,
          this
        );
        if (rowObj.id) {
          this.updateData_2.push(rowObj);
        }
      },
      //接受个人社会行用记录信息删除的数据
      acceptDelRow_2(val) {
        this.deleteData_2.push(val);
      },
      //----------------------------------------------------反欺诈信息-------------------------------------------------------
      //获取反欺诈信息
      getFqz: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkFqz/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_6 = res.data.resultData.data;
        }
      },
      //保存反欺诈信息
      saveFqz: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          updateData: JSON.stringify(this.tableData_6)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkFqz/fqzUpdate",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.updateData = [];
          this.getFqz();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //----------------------------------------------------互联网监控信息-------------------------------------------------------
      //获取互联网监控信息
      getHlwjk: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkHlwjk/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_7 = res.data.resultData.data;
        }
      },
      //保存反欺诈信息
      saveHlwjk: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          updateData: JSON.stringify(this.tableData_7)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkHlwjk/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.updateData = [];
          this.getHlwjk();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },

      ////////////////////////////////////////////////////////////////////////////获取个人公积金信息
      getGrgjj: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxGrgjj/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_3 = res.data.resultData.data.rows;
        }
      },
      //接口获取个人公积金信息
      getGrgjjData: async function () {
        let params = {
          idNumber: JSON.stringify(this.idNumber),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxGrgjj/remoteInterfaceData",
          params
        );
        if (res.data.resultCode == "0000") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.tableData_3 = res.data.resultData;
          this.updateData_3 = [];
          this.addData_3 = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //保存个人公积金信息
      setGrgjj: async function () {
        this.tableData_3.forEach((item, index) => {
          if (item.id == null) {
            this.addData_3.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_3),
          updateData: JSON.stringify(this.updateData_3)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxGrgjj/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getGrgjj();
          this.updateData_3 = [];
          this.addData_3 = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //验证个人公积金信息数据
      verify_3(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_grgjj,
          this
        );
        if (rowObj.id) {
          this.updateData_3.push(rowObj);
        }
      },

      //////////////////////////////////////////////////////////////////////////////获取个人社保信息
      getGrsb: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxGrsb/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_4 = res.data.resultData.data.rows;
        }
      },
      //接口获取个人社保信息
      getGrsbData: async function () {
        let params = {
          idNumber: JSON.stringify(this.idNumber),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxGrsb/remoteInterfaceData",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.tableData_4 = res.data.resultData.data;
          this.deleteData_4 = [];
          this.updateData_4 = [];
          this.addData_4 = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //保存个人社保信息
      setGrsb: async function () {
        this.tableData_4.forEach((item, index) => {
          if (item.id == null) {
            this.addData_4.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          updateData: JSON.stringify(this.updateData_4),
          addData: JSON.stringify(this.addData_4)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxGrsb/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getGrsb();
          this.deleteData_4 = [];
          this.updateData_4 = [];
          this.addData_4 = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //验证个人社保信息数据
      verify_4(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_grsb,
          this
        );
        if (rowObj.id) {
          this.updateData_4.push(rowObj);
        }
      },
      //接受个人社保信息删除的数据
      acceptDelRow_4(val) {
        this.deleteData_4.push(val);
      },

      //////////////////////////////////////////////////////////////////////////////获取个人车辆信息
      getGrcl: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxGrcl/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_5 = res.data.resultData.data.rows;
        }
      },
      //接口获取个人车辆信息
      getGrclData: async function () {
        let params = {
          idNumber: JSON.stringify(this.idNumber),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxGrcl/remoteInterfaceData",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.tableData_5 = res.data.resultData.data;
          this.deleteData_5 = [];
          this.updateData_5 = [];
          this.addData_5 = [];
          this.addData_5 = res.data.resultData.data;
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //保存个人车辆信息
      setGrcl: async function () {
        this.tableData_5.forEach((item, index) => {
          if (item.id == null) {
            this.addData_5.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          updateData: JSON.stringify(this.updateData_5),
          addData: JSON.stringify(this.addData_5),
          deleteData: JSON.stringify(this.deleteData_5)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxGrcl/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getGrcl();
          this.deleteData_5 = [];
          this.updateData_5 = [];
          this.addData_5 = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //验证个人车辆信息数据
      verify_5(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_grcl,
          this
        );
        if (rowObj.id) {
          this.updateData_5.push(rowObj);
        }
      },
      //接受个人车辆信息删除的数据
      acceptDelRow_5(val) {
        this.deleteData_5.push(val);
      },

      //验证反欺诈信息数据
      verify_6(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_grcl,
          this
        );
        if (rowObj.id) {
          this.updateData_5.push(rowObj);
        }
      },
      ////////////////////////////////////////////////////////////////////////////////////////行政处罚
      //初始化获取行政处罚信息
      getXzcf: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxXxcf/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_xzcf = res.data.resultMapData.rows;
        }
      },
      //保存行政处罚信息
      saveXzcf: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          updateData: JSON.stringify(this.tableData_xzcf)
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxXxcf/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getXzcf();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接口获取行政处罚信息
      getXzcfData: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/ggxxXxcf/remote",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.tableData_xzcf = [];
          this.tableData_xzcf = res.data.resultData.data;

        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },

      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      "v-tabelAddBtn": tabelAddBtn,
      "v-tableOperation": tableOperation,
      "v-tableOperationNoDelete": tableOperation_no_delete,


    }
  };
</script>

<style>
</style>
