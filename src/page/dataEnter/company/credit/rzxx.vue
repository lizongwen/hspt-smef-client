<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="银行借款信息" name="first">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button @click="saveBankInfo" class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">主要往来银行信息</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_bank" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="200px" :label="tableData_bank_columns.yhmc" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_bank_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.yhmc"></el-input>
                    <span v-else>{{scope.row.yhmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_bank_columns.yhzhlb" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_bank_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.yhzhlb"></el-input>
                    <span v-else>{{scope.row.yhzhlb}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_bank_columns.zh" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_bank_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zh"></el-input>
                    <span v-else>{{scope.row.zh}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_bank_columns.zhsypl" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_bank_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zhsypl"></el-input>
                    <span v-else>{{scope.row.zhsypl}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_bank" v-on:verify="verify_bank"
                                      v-on:acceptDelRow='acceptDelRow_bank'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_bank" :tableData_columns="tableData_bank_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button @click="saveYhwjqxded" class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">银行未结清信贷额度</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_xd" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="200px" :label="tableData_xd_columns.yhmc" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.yhmc"></el-input>
                    <span v-else>{{scope.row.yhmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_xd_columns.cxsj" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.cxsj"></el-input>
                    <span v-else>{{scope.row.cxsj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_xd_columns.xdedlx" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.xdedlx"></el-input>
                    <span v-else>{{scope.row.xdedlx}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_xd_columns.dydb" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.dydb"></el-input>
                    <span v-else>{{scope.row.dydb}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_xd_columns.sxed" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[5]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.sxed"></el-input>
                    <span v-else>{{scope.row.sxed}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_xd_columns.dkye" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[6]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.dkye"></el-input>
                    <span v-else>{{scope.row.dkye}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_xd_columns.dkcb" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[7]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.dkcb"></el-input>
                    <span v-else>{{scope.row.dkcb}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_xd" v-on:verify="verify_xd"
                                      v-on:acceptDelRow='acceptDelRow_xd'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_xd" :tableData_columns="tableData_xd_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="primary" size="medium" @click="saveWjqyhcdhp">保存</el-button>
              </div>
              <div class="card-title">未结清银行承兑汇票</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_cdhp" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="150px" :label="tableData_cdhp_columns.yhmc" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_cdhp_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.yhmc"></el-input>
                    <span v-else>{{scope.row.yhmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="150px" :label="tableData_cdhp_columns.bs" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_cdhp_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.bs"></el-input>
                    <span v-else>{{scope.row.bs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="750px" label="余额" align="center">
                  <el-table-column min-width="150px" :label="tableData_cdhp_columns.dqrxy30t" align="center">
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_cdhp_columns)[3]"
                                v-if="scope.row.edit" size="small" v-model="scope.row.dqrxy30t"></el-input>
                      <span v-else>{{scope.row.dqrxy30t}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column min-width="150px" :label="tableData_cdhp_columns.dqrxy60t" align="center">
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_cdhp_columns)[4]"
                                v-if="scope.row.edit" size="small" v-model="scope.row.dqrxy60t"></el-input>
                      <span v-else>{{scope.row.dqrxy60t}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column min-width="150px" :label="tableData_cdhp_columns.dqrxydy90t" align="center">
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_cdhp_columns)[5]"
                                v-if="scope.row.edit" size="small" v-model="scope.row.dqrxydy90t"></el-input>
                      <span v-else>{{scope.row.dqrxydy90t}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column min-width="150px" :label="tableData_cdhp_columns.dqrdy90t" align="center">
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_cdhp_columns)[6]"
                                v-if="scope.row.edit" size="small" v-model="scope.row.dqrdy90t"></el-input>
                      <span v-else>{{scope.row.dqrdy90t}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column min-width="150px" :label="tableData_cdhp_columns.hj" align="center">
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_cdhp_columns)[7]"
                                v-if="scope.row.edit" size="small" v-model="scope.row.hj"></el-input>
                      <span v-else>{{scope.row.hj}}</span>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column min-width="150px" :label="tableData_cdhp_columns.ck" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_cdhp_columns)[8]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.ck"></el-input>
                    <span v-else>{{scope.row.ck}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_cdhp" v-on:verify="verify_cdhp"
                                      v-on:acceptDelRow='acceptDelRow_cdhp'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_cdhp" :tableData_columns="tableData_cdhp_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>

        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button class="save" type="primary" size="medium" @click="saveXyz">保存</el-button>
              </div>
              <div class="card-title">信用证</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_xyz" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="150px" :label="tableData_xyz_columns.yhmc" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xyz_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.yhmc"></el-input>
                    <span v-else>{{scope.row.yhmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="150px" :label="tableData_xyz_columns.bs" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xyz_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.bs"></el-input>
                    <span v-else>{{scope.row.bs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="750px" label="余额" align="center">
                  <el-table-column min-width="150px" :label="tableData_xyz_columns.dqrxy30t" align="center">
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xyz_columns)[3]"
                                v-if="scope.row.edit" size="small" v-model="scope.row.dqrxy30t"></el-input>
                      <span v-else>{{scope.row.dqrxy30t}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column min-width="150px" :label="tableData_xyz_columns.dqrxy60t" align="center">
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xyz_columns)[4]"
                                v-if="scope.row.edit" size="small" v-model="scope.row.dqrxy60t"></el-input>
                      <span v-else>{{scope.row.dqrxy60t}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column min-width="150px" :label="tableData_xyz_columns.dqrxydy90t" align="center">
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xyz_columns)[5]"
                                v-if="scope.row.edit" size="small" v-model="scope.row.dqrxydy90t"></el-input>
                      <span v-else>{{scope.row.dqrxydy90t}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column min-width="150px" :label="tableData_xyz_columns.dqrdy90t" align="center">
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xyz_columns)[6]"
                                v-if="scope.row.edit" size="small" v-model="scope.row.dqrdy90t"></el-input>
                      <span v-else>{{scope.row.dqrdy90t}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column min-width="150px" :label="tableData_xyz_columns.hj" align="center">
                    <template slot-scope="scope">
                      <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xyz_columns)[7]"
                                v-if="scope.row.edit" size="small" v-model="scope.row.hj"></el-input>
                      <span v-else>{{scope.row.hj}}</span>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column min-width="150px" :label="tableData_xyz_columns.ck" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xyz_columns)[8]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.ck"></el-input>
                    <span v-else>{{scope.row.ck}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_xyz" v-on:verify="verify_xyz"
                                      v-on:acceptDelRow='acceptDelRow_xyz'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_xyz" :tableData_columns="tableData_xyz_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>

        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button  class="save" type="primary" size="medium" @click="saveWdqbh">保存</el-button>
              </div>
              <div class="card-title">未到期的保函</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_wdqbh" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="200px" :label="tableData_wdqbh_columns.yhmc" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_wdqbh_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.yhmc"></el-input>
                    <span v-else>{{scope.row.yhmc}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_wdqbh_columns.klsj" align="center">
                  <template slot-scope="scope">
                    <el-date-picker v-model="scope.row.klsj" class="cellItem el-form-item" value-format="yyyy-MM-dd"
                                    :class="Object.keys(tableData_wdqbh_columns)[1]" v-if="scope.row.edit" type="date"
                                    placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
                    <span v-else>{{scope.row.klsj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_wdqbh_columns.dqsj" align="center">
                  <template slot-scope="scope">
                    <el-date-picker v-model="scope.row.dqsj" class="cellItem el-form-item" value-format="yyyy-MM-dd"
                                    :class="Object.keys(tableData_wdqbh_columns)[2]" v-if="scope.row.edit" type="date"
                                    placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
                    <span v-else>{{scope.row.dqsj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_wdqbh_columns.je" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_wdqbh_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.je"></el-input>
                    <span v-else>{{scope.row.je}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_wdqbh_columns.ck" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_wdqbh_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.ck"></el-input>
                    <span v-else>{{scope.row.ck}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_wdqbh" v-on:verify="verify_wdqbh"
                                      v-on:acceptDelRow='acceptDelRow_wdqbh'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_wdqbh" :tableData_columns="tableData_wdqbh_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>

      </el-tab-pane>
      <el-tab-pane label="动产融资信息" name="second">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button @click="saveDcdyxx" class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">动产融资信息</div>
            </div>
            <!-- 表格容器 -->
            <div>
              <el-table :data="tableData_dcdy" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="200px" :label="tableData_dcdy_columns.djrq" align="center">
                  <template slot-scope="scope">
                    <el-date-picker v-model="scope.row.djrq" class="cellItem el-form-item" value-format="yyyy-MM-dd"
                                    :class="Object.keys(tableData_dcdy_columns)[1]" v-if="scope.row.edit" type="date"
                                    placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
                    <span v-else>{{scope.row.djrq}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_dcdy_columns.djh" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[2]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.djh"></el-input>
                    <span v-else>{{scope.row.djh}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_dcdy_columns.bdbzqlx" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.bdbzqlx"></el-input>
                    <span v-else>{{scope.row.bdbzqlx}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_dcdy_columns.bdbzqse" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[4]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.bdbzqse"></el-input>
                    <span v-else>{{scope.row.bdbzqse}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_dcdy_columns.zwqx" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[5]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zwqx"></el-input>
                    <span v-else>{{scope.row.zwqx}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_dcdy_columns.dyqr" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[6]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.dyqr"></el-input>
                    <span v-else>{{scope.row.dyqr}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_dcdy_columns.djjg" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[7]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.djjg"></el-input>
                    <span v-else>{{scope.row.djjg}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_dcdy_columns.zt" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_xd_columns)[8]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zt"></el-input>
                    <span v-else>{{scope.row.zt}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_dcdy" v-on:verify="verify_dcdy"
                                      v-on:acceptDelRow='acceptDelRow_dcdy'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_dcdy" :tableData_columns="tableData_dcdy_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="其他融资信息" name="third">
        <div>
          <el-card class="box-card" shadow='nevner'>
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button @click="saveYxfz" class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">其他融资信息</div>
            </div>
            <div>
              <el-table :data="tableData_yxfz" v-loading.body="listLoading" border fit highlight-current-row
                        style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column min-width="200px" :label="tableData_yxfz_columns.jkjg" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_yxfz_columns)[1]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.jkjg"></el-input>
                    <span v-else>{{scope.row.jkjg}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_yxfz_columns.jksj" align="center">
                  <template slot-scope="scope">
                    <el-date-picker v-model="scope.row.jksj" class="cellItem el-form-item" value-format="yyyy-MM-dd"
                                    :class="Object.keys(tableData_yxfz_columns)[2]" v-if="scope.row.edit" type="date"
                                    placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
                    <span v-else>{{scope.row.jksj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_yxfz_columns.jkje" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_yxfz_columns)[3]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.jkje"></el-input>
                    <span v-else>{{scope.row.jkje}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_yxfz_columns.dqsj" align="center">
                  <template slot-scope="scope">
                    <el-date-picker v-model="scope.row.dqsj" class="cellItem el-form-item" value-format="yyyy-MM-dd"
                                    :class="Object.keys(tableData_yxfz_columns)[4]" v-if="scope.row.edit" type="date"
                                    placeholder="选择日期" style="width: 100%;" :clearable='false'></el-date-picker>
                    <span v-else>{{scope.row.dqsj}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_yxfz_columns.zxfs" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_yxfz_columns)[5]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.zxfs"></el-input>
                    <span v-else>{{scope.row.zxfs}}</span>
                  </template>
                </el-table-column>
                <el-table-column min-width="200px" :label="tableData_yxfz_columns.rzyt" align="center">
                  <template slot-scope="scope">
                    <el-input class="edit-input cellItem el-form-item" :class="Object.keys(tableData_yxfz_columns)[6]"
                              v-if="scope.row.edit" size="small" v-model="scope.row.rzyt"></el-input>
                    <span v-else>{{scope.row.rzyt}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="240">
                  <template slot-scope="scope">
                    <v-tableOperation :scope="scope" :tableData="tableData_yxfz" v-on:verify="verify_yxfz"
                                      v-on:acceptDelRow='acceptDelRow_yxfz'></v-tableOperation>
                  </template>
                </el-table-column>
              </el-table>
              <v-tabelAddBtn :tableData="tableData_yxfz" :tableData_columns="tableData_yxfz_columns"></v-tabelAddBtn>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="card-right-wrap">
                <el-button @click="saveXj" class="save" type="primary" size="medium">保存</el-button>
              </div>
              <div class="card-title">小结</div>
            </div>
            <div>
              <quill-editor class="text-editor" :value="textEditorContent" :maxSize="10240" v-on:changeInput="changeInput"></quill-editor>
            </div>
          </el-card>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  import tableValidates from "@/utils/validateTable/tableValidates.js";
  import tabelAddBtn from "@/components/table/table-add-btn.vue";
  import tableOperation from "@/components/table/table-operation.vue";
  import quillEditor from "@/components/form/quillEditor.vue";

  export default {
    data() {
      return {
        activeName: "first",
        listLoading: false,
        textarea: "",
        addData_bank: [],
        updateData_bank: [],
        deleteData_bank: [],
        tableData_bank: [],
        tableData_bank_columns: {
          id:null,
          yhmc: "银行名称",
          yhzhlb: "往来账户类别",
          zh: "账户",
          zhsypl: "账户使用频率",
          edit: false
        }, //表格列字段
        rules_bank: {},

        addData_xd: [],
        updateData_xd: [],
        deleteData_xd: [],
        tableData_xd: [],
        tableData_xd_columns: {
          id:null,
          yhmc: "银行名称",
          cxsj: "存续时间",
          xdedlx: "信贷额度类型",
          dydb: "抵押/担保",
          sxed: "授信额度",
          dkye: "贷款余额",
          dkcb: "贷款成本",
          edit: false
        }, //表格列字段
        rules_xd:{},


        addData_cdhp: [],
        updateData_cdhp: [],
        deleteData_cdhp: [],
        tableData_cdhp: [],
        tableData_cdhp_columns: {
          id:null,
          yhmc: "银行名称",
          bs: "笔数",
          dqrxy30t: "到期<30天",
          dqrxy60t: "到期日<60天",
          dqrxydy90t: "到期≤90天",
          dqrdy90t: "到期>90天",
          hj: "合计",
          ck: "敞口",
          edit: false
        }, //表格列字段
        rules_cdhp:{},

        addData_xyz: [],
        updateData_xyz: [],
        deleteData_xyz: [],
        tableData_xyz: [],
        tableData_xyz_columns: {
          id:null,
          yhmc: "银行名称",
          bs: "笔数",
          dqrxy30t: "到期<30天",
          dqrxy60t: "到期日<60天",
          dqrxydy90t: "到期≤90天",
          dqrdy90t: "到期>90天",
          hj: "合计",
          ck: "敞口",
          edit: false
        }, //表格列字段
        rules_xyz: {},

        addData_wdqbh: [],
        updateData_wdqbh: [],
        deleteData_wdqbh: [],
        tableData_wdqbh: [],
        tableData_wdqbh_columns: {
          id:null,
          yhmc: "银行名称",
          klsj: "开立时间",
          dqsj: "到期时间",
          je: "金额",
          ck: "敞口",
          edit: false
        }, //表格列字段
        rules_wdqbh: {},


        addData_dcdy: [],
        updateData_dcdy: [],
        deleteData_dcdy: [],
        tableData_dcdy: [],
        tableData_dcdy_columns: {
          id:null,
          djrq: "登记日期",
          djh: "登记号",
          bdbzqlx: "被担保债权类型",
          bdbzqse: "被担保债权数额",
          zwqx: "债务期限",
          dyqr: "抵押权人",
          djjg: "登记机关",
          zt: "状态",
          edit: false
        }, //表格列字段
        rules_dcdy: {},


        addData_yxfz: [],
        updateData_yxfz: [],
        deleteData_yxfz: [],
        tableData_yxfz: [],
        tableData_yxfz_columns: {
          id:null,
          jkjg: "借款机构",
          jksj: "借款时间",
          jkje: "借款金额",
          dqsj: "到期时间",
          zxfs: "增信方式",
          rzyt: "融资用途",
          edit: false
        }, //表格列字段
        rules_yxfz: {},

        textEditorContent: ""
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.getBankInfo();
        this.getYhwjqxded();
        this.getDcdyxx();
        this.getYxfz();
        this.getTextEditorCon();
        this.getWjqyhcdhp();
        this.getXyz();
        this.getWdqbh();
      },


      //-------------------------------------------------银行借款信息----------------------------------------------------
      //获取主要往来银行信息
      getBankInfo: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          dataType: "Zywlyhxx"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_bank = res.data.resultData.data;
        }
      },
      //保存主要往来银行信息
      saveBankInfo: async function () {
        this.tableData_bank.forEach((item, index) => {
          if (item.id == null) {
            this.addData_bank.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_bank),
          updateData: JSON.stringify(this.updateData_bank),
          deleteData: JSON.stringify(this.deleteData_bank),
          dataType: "Zywlyhxx"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getBankInfo();
          this.deleteData_bank = [];
          this.updateData_bank = [];
          this.addData_bank = [];
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接受主要往来银行删除的数据
      acceptDelRow_bank(val) {
        this.deleteData_bank.push(val);
      },

      //验证主要往来银行数据
      verify_bank(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_bank,
          this
        );
        if (rowObj.id) {
          this.updateData_bank.push(rowObj);
        }
      },

      //获取银行未结清信贷额度信息
      getYhwjqxded: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          dataType: "Yhwjqxded"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_xd = res.data.resultData.data;
        }
      },
      //保存银行未结清信贷额度信息
      saveYhwjqxded: async function () {
        this.tableData_xd.forEach((item, index) => {
          if (item.id == null) {
            this.addData_xd.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_xd),
          updateData: JSON.stringify(this.updateData_xd),
          deleteData: JSON.stringify(this.deleteData_xd),
          dataType: "Yhwjqxded"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.deleteData_xd = [];
          this.updateData_xd = [];
          this.addData_xd = [];
          this.getYhwjqxded();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接受银行未结清信贷额度删除的数据
      acceptDelRow_xd(val) {
        this.deleteData_xd.push(val);
      },

      //验证银行未结清信贷额度数据
      verify_xd(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_xd,
          this
        );
        if (rowObj.id) {
          this.updateData_xd.push(rowObj);
        }
      },



      //获取未结清银行承兑汇票信息
      getWjqyhcdhp: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          dataType: "Wjqyhcdhp"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_cdhp = res.data.resultData.data;
        }
      },
      //保存未结清银行承兑汇票信息
      saveWjqyhcdhp: async function () {
        this.tableData_cdhp.forEach((item, index) => {
          if (item.id == null) {
            this.addData_cdhp.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_cdhp),
          updateData: JSON.stringify(this.updateData_cdhp),
          deleteData: JSON.stringify(this.deleteData_cdhp),
          dataType: "Wjqyhcdhp"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.deleteData_cdhp = [];
          this.updateData_cdhp = [];
          this.addData_cdhp= [];
          this.getWjqyhcdhp();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接受未结清银行承兑汇票删除的数据
      acceptDelRow_cdhp(val) {
        this.deleteData_cdhp.push(val);
      },

      //验证未结清银行承兑汇票数据
      verify_cdhp(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_cdhp,
          this
        );
        if (rowObj.id) {
          this.updateData_cdhp.push(rowObj);
        }
      },


      //获取信用证信息
      getXyz: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          dataType: "Xyz"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_xyz = res.data.resultData.data;
        }
      },
      //保存信用证信息
      saveXyz: async function () {
        this.tableData_xyz.forEach((item, index) => {
          if (item.id == null) {
            this.addData_xyz.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_xyz),
          updateData: JSON.stringify(this.updateData_xyz),
          deleteData: JSON.stringify(this.deleteData_xyz),
          dataType: "Xyz"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.deleteData_xyz = [];
          this.updateData_xyz = [];
          this.addData_xyz= [];
          this.getXyz();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接受信用证删除的数据
      acceptDelRow_xyz(val) {
        this.deleteData_xyz.push(val);
      },

      //验证信用证数据
      verify_xyz(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_xyz,
          this
        );
        if (rowObj.id) {
          this.updateData_xyz.push(rowObj);
        }
      },



      //获取未到期的保函信息
      getWdqbh: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          dataType: "Wdqbh"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_wdqbh = res.data.resultData.data;
        }
      },
      //保存未到期的保函信息
      saveWdqbh: async function () {
        this.tableData_wdqbh.forEach((item, index) => {
          if (item.id == null) {
            this.addData_wdqbh.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_wdqbh),
          updateData: JSON.stringify(this.updateData_wdqbh),
          deleteData: JSON.stringify(this.deleteData_wdqbh),
          dataType: "Wdqbh"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.deleteData_wdqbh = [];
          this.updateData_wdqbh = [];
          this.addData_wdqbh= [];
          this.getWdqbh();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接受未到期的保函数据
      acceptDelRow_wdqbh(val) {
        this.deleteData_wdqbh.push(val);
      },

      //验证未到期的保函数据
      verify_wdqbh(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_wdqbh,
          this
        );
        if (rowObj.id) {
          this.updateData_wdqbh.push(rowObj);
        }
      },



      //---------------------------------------------------动产融资信息-------------------------------------------------
      //获取动产融资信息
      getDcdyxx: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkDcdyxx/init",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_dcdy = res.data.resultData.data;
        }
      },

      //保存动产融资信息
      saveDcdyxx: async function () {
        this.tableData_dcdy.forEach((item, index) => {
          if (item.id == null) {
            this.addData_dcdy.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_dcdy),
          updateData: JSON.stringify(this.updateData_dcdy),
          deleteData: JSON.stringify(this.deleteData_dcdy),
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkDcdyxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.deleteData_dcdy = [];
          this.updateData_dcdy = [];
          this.addData_dcdy = [];
          this.getDcdyxx();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },

      //接受动产融资删除的数据
      acceptDelRow_dcdy(val) {
        this.deleteData_dcdy.push(val);
      },

      //验证动产融资数据
      verify_dcdy(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_dcdy,
          this
        );
        if (rowObj.id) {
          this.updateData_dcdy.push(rowObj);
        }
      },

      //-----------------------------------------------------其他融资信息------------------------------------------------
      //获取其他融资信息
      getYxfz: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          dataType: "Yxfz"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.tableData_yxfz = res.data.resultData.data;
        }
      },

      //保存其他融资信息
      saveYxfz: async function () {
        this.tableData_yxfz.forEach((item, index) => {
          if (item.id == null) {
            this.addData_yxfz.push(item);
          }
        });
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          addData: JSON.stringify(this.addData_yxfz),
          updateData: JSON.stringify(this.updateData_yxfz),
          deleteData: JSON.stringify(this.deleteData_yxfz),
          dataType: "Yxfz"
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/update",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.deleteData_yxfz = [];
          this.updateData_yxfz = [];
          this.addData_yxfz = [];
          this.getYxfz();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      //接受其他融资删除的数据
      acceptDelRow_yxfz(val) {
        this.deleteData_yxfz.push(val);
      },

      //验证其他融资数据
      verify_yxfz(rowObj, rowIndex) {
        var isValid = tableValidates.validateByRow(
          rowObj,
          rowIndex,
          this.rules_yxfz,
          this
        );
        if (rowObj.id) {
          this.updateData_yxfz.push(rowObj);
        }
      },



      //获取富文本框内容
      getTextEditorCon: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token")
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkQyrzxxxj/loadData",
          params
        );
        if (res.data.resultCode == "0") {
          this.textEditorContent = res.data.resultData.data[0].qyrzxxxj;
        }
      },
      //修改富文本框内容
      changeInput(val) {
        this.textEditorContent = val;
      },
      //接受删除的数据
      acceptDelRow(val) {
        this.delRowData.push(val);
      },
      //保存小结
      saveXj: async function () {
        let params = {
          creditCode: sessionStorage.getItem("creditCode"),
          token: sessionStorage.getItem("token"),
          qyrzxxxj: this.textEditorContent
        };
        const res = await this.$http.post(
          "/hspt-web-api/data_entry/qyfxgk/qyfxgkRzxx/updateQyrzxxxj",
          params
        );
        if (res.data.resultCode == "0") {
          this.$message({message: res.data.resultMsg, type: "success"});
          this.getTextEditorCon();
        } else {
          this.$message({message: res.data.resultMsg, type: "warning"});
        }
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },

    },
    components: {
      "v-tabelAddBtn": tabelAddBtn,
      "v-tableOperation": tableOperation,
      "quill-editor": quillEditor
    }
  };
</script>

<style lang="scss">

  .text-editor .ql-editor {
    height: 300px;
  }
</style>
