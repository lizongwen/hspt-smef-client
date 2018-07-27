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
								 <el-button type="primary" size="medium" @click="saveJbxxData">保存</el-button>
                             </div>
							<div class="card-title">基本信息</div>
						</div>
						<div>
							<el-form class="form clearfix" size="small" :label-position="labelPosition" label-width="100px" :model="form">
								<el-row>
									 <div class="check">
									 	<span>资信评估</span>
									 </div>
									 <div class="check">
									 	<el-col>
										<el-form-item label="资信评分:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="惠国评分:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="惠国先前评级:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									 </div>
								</el-row>	
								
								<el-row>
									 <div class="check">
									 	<span>法院记录</span>
									 </div>
									 <div class="check">
									 	<el-col>
										<el-form-item label="原告诉讼记录:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="被告诉讼记录:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="被执行记录:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									 </div>
								</el-row>	
								
								<el-row>
									 <div class="check">
									 	<span>经营风险</span>
									 </div>
									 <div class="check">
									 	<el-col>
										<el-form-item label="经营异常:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="行政处罚:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="严重违反:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="欠税公告:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="股权出质:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="动产抵押:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									 </div>
								</el-row>	
							
							    <el-row>
									 <div class="check">
									 	<span>主要负责人</span>
									 </div>
									 <div class="check">
									 	<el-col>
										<el-form-item label="失信被执行人:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="原告诉讼:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="被告诉讼:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="开庭公告:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="治安处罚:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="交通处罚:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="欺诈风险数据库:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									 </div>
								</el-row>	
							
							    <el-row>
									 <div class="check">
									 	<span>公司重要事项</span>
									 </div>
									 <div class="check">
									 	<el-col>
										<el-form-item label="历史变更:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="新闻动态:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									 </div>
								</el-row>	
							
							    <el-row>
									 <div class="check">
									 	<span>财务概要（万元）</span>
									 </div>
									 <div class="check">
									 	<el-col>
										<el-form-item label="资产总额:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="负债总额:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="净资产:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="营业收入:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="净利润:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="融资规模:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									<el-col>
										<el-form-item label="资产负债率:">
											<el-input size="small" placeholder="请输入"></el-input>
						                </el-form-item>
									</el-col>
									 </div>
								</el-row>	
							
							</el-form> 
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
                                 <el-button type="default" size="medium" @click="hgpj = true">编辑</el-button>
								 <el-button type="primary" size="medium">保存</el-button>
                             </div>
							<div class="card-title">风险评估</div>
						</div>
						
						<!--惠国评级-->
						<el-dialog title="惠国评级" :visible.sync="hgpj" width="30%">
                            <el-form :model="form">
                               <el-form-item label="惠国评分" >
                                   <el-input  placeholder="请输入内容"></el-input>
                               </el-form-item>
                               <el-form-item label="先前评级" >
                                   <el-input placeholder="请输入内容"></el-input>
                               </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                               <el-button @click="hgpj = false">取 消</el-button>
                               <el-button type="primary">确 定</el-button>
                            </div>
                        </el-dialog>
						
						<div>
							<div class="assess">
								<div class="as">
									<span>资信评分</span>
									<span>相关风险度</span>
								</div>
								<div class="ss">
									<span>76.88</span>
								</div>
								<div class="se">
										<img src="../../../../image/12.png" style="left: 15px;"/>
					<div class="percent">
						<span>1</span>
						<span>100</span>
					</div>
								</div>
								<div class="es">
									<span>高风险....低于平均风险....低风险</span>
								</div>
							</div>
							<div class="assess">
								<div class="ass">惠国评级</div>
								<div class="ess">A+</div>
								<div class="ass">先前评级</div>
								<div class="ess">A-</div>
								<div class="ass">风险水平</div>
								<div class="ess">低于平均风险</div>
							</div>
						</div>


					</el-card>
				
				    <el-card class="box-card" shadow='nevner'>
				    		<div slot="header" class="clearfix">
							<div class="card-right-wrap">
                                 <el-button type="default" size="medium" @click="credit= true">编辑</el-button>
								 <el-button type="primary" size="medium">保存</el-button>
                             </div>
							<div class="card-title">资信维度结构</div>
						</div>
						<!--资信维度-->
						<el-dialog title="资信维度" :visible.sync="credit" width="30%">
                            <el-form :model="form" label-width="30%">
                               <el-form-item label="行业发展性">
                                   <el-input  placeholder="请输入内容"></el-input>
                               </el-form-item>
                               <el-form-item label="盈利能力" >
                                   <el-input placeholder="请输入内容"></el-input>
                               </el-form-item>
                                <el-form-item label="核心团队素质性" >
                                   <el-input placeholder="请输入内容"></el-input>
                               </el-form-item>
                                <el-form-item label="运营能力" >
                                   <el-input placeholder="请输入内容"></el-input>
                               </el-form-item>
                                <el-form-item label="规范性和风险性" >
                                   <el-input placeholder="请输入内容"></el-input>
                               </el-form-item>
                                <el-form-item label="成长能力" >
                                   <el-input placeholder="请输入内容"></el-input>
                               </el-form-item>
                                <el-form-item label="实力规模" >
                                   <el-input placeholder="请输入内容"></el-input>
                               </el-form-item>
                                <el-form-item label="技术与创新" >
                                   <el-input placeholder="请输入内容"></el-input>
                               </el-form-item>
                                <el-form-item label="偿债能力" >
                                   <el-input placeholder="请输入内容"></el-input>
                               </el-form-item>
                                <el-form-item label="市场与渠道" >
                                   <el-input placeholder="请输入内容"></el-input>
                               </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                               <el-button @click="credit = false">取 消</el-button>
                               <el-button type="primary">确 定</el-button>
                            </div>
                        </el-dialog>
				    
				    <div>
				    	<div class="structure">
				    		<div class="stru">
				    			<div class="str"><span>D</span></div>
				    			<div class="div"></div>
				    		</div>
				    		<div class="ture">
				    			<div class="tu">
				    				<img src="../../../../image/12.png" :style="{'left':dis1}" />
					<div class="percent">
						<span>1</span>
						<span>100</span>
					</div>
								</div>
								<div class="re">
									<span>高风险....低于平均风险....低风险</span>
								</div>
				    		</div>
				    	</div>
				    		<div class="structure">
				    		<div class="stru">
				    			<div class="str"><span>P</span></div>
				    			<div class="div"></div>
				    		</div>
				    		<div class="ture">
				    			<div class="tu">
				    				<img src="../../../../image/12.png" :style="{'left':dis2}"/>
					<div class="percent">
						<span>1</span>
						<span>100</span>
					</div>
								</div>
								<div class="re">
									<span>高风险....低于平均风险....低风险</span>
								</div>
				    		</div>
				    	</div>
				    		<div class="structure">
				    		<div class="stru">
				    			<div class="str"><span>T</span></div>
				    			<div class="div"></div>
				    		</div>
				    		<div class="ture">
				    			<div class="tu">
				    				<img src="../../../../image/12.png" :style="{'left':dis3}"/>
					<div class="percent">
						<span>1</span>
						<span>100</span>
					</div>
								</div>
								<div class="re">
									<span>高风险....低于平均风险....低风险</span>
								</div>
				    		</div>
				    	</div>
				    		<div class="structure">
				    		<div class="stru">
				    			<div class="str"><span>O</span></div>
				    			<div class="div"></div>
				    		</div>
				    		<div class="ture">
				    			<div class="tu">
				    				<img src="../../../../image/12.png" :style="{'left':dis4}"/>
					<div class="percent">
						<span>1</span>
						<span>100</span>
					</div>
								</div>
								<div class="re">
									<span>高风险....低于平均风险....低风险</span>
								</div>
				    		</div>
				    	</div>
				    		<div class="structure">
				    		<div class="stru">
				    			<div class="str"><span>R</span></div>
				    			<div class="div"></div>
				    		</div>
				    		<div class="ture">
				    			<div class="tu">
				    				<img src="../../../../image/12.png" :style="{'left':dis5}"/>
					<div class="percent">
						<span>1</span>
						<span>100</span>
					</div>
								</div>
								<div class="re">
									<span>高风险....低于平均风险....低风险</span>
								</div>
				    		</div>
				    	</div>
				    		<div class="structure">
				    		<div class="stru">
				    			<div class="str"><span>G</span></div>
				    			<div class="div"></div>
				    		</div>
				    		<div class="ture">
				    			<div class="tu">
				    				<img src="../../../../image/12.png" :style="{'left':dis6}"/>
					<div class="percent">
						<span>1</span>
						<span>100</span>
					</div>
								</div>
								<div class="re">
									<span>高风险....低于平均风险....低风险</span>
								</div>
				    		</div>
				    	</div>
				    		<div class="structure">
				    		<div class="stru">
				    			<div class="str"><span>C</span></div>
				    			<div class="div"></div>
				    		</div>
				    		<div class="ture">
				    			<div class="tu">
				    				<img src="../../../../image/12.png" :style="{'left':dis7}"/>
					<div class="percent">
						<span>1</span>
						<span>100</span>
					</div>
								</div>
								<div class="re">
									<span>高风险....低于平均风险....低风险</span>
								</div>
				    		</div>
				    	</div>
				    		<div class="structure">
				    		<div class="stru">
				    			<div class="str"><span>I</span></div>
				    			<div class="div"></div>
				    		</div>
				    		<div class="ture">
				    			<div class="tu">
				    				<img src="../../../../image/12.png" :style="{'left':dis8}"/>
					<div class="percent">
						<span>1</span>
						<span>100</span>
					</div>
								</div>
								<div class="re">
									<span>高风险....低于平均风险....低风险</span>
								</div>
				    		</div>
				    	</div>
				    		<div class="structure">
				    		<div class="stru">
				    			<div class="str"><span>S</span></div>
				    			<div class="div"></div>
				    		</div>
				    		<div class="ture">
				    			<div class="tu">
				    				<img src="../../../../image/12.png" :style="{'left':dis9}"/>
					<div class="percent">
						<span>1</span>
						<span>100</span>
					</div>
								</div>
								<div class="re">
									<span>高风险....低于平均风险....低风险</span>
								</div>
				    		</div>
				    	</div>
				    		<div class="structure">
				    		<div class="stru">
				    			<div class="str"><span>M</span></div>
				    			<div class="div"></div>
				    		</div>
				    		<div class="ture">
				    			<div class="tu">
				    				<img src="../../../../image/12.png" :style="{'left':dis10}"/>
					<div class="percent">
						<span>1</span>
						<span>100</span>
					</div>
								</div>
								<div class="re">
									<span>高风险....低于平均风险....低风险</span>
								</div>
				    		</div>
				    	</div>
				    </div>
				    
				    </el-card>
				
				    <el-card class="box-card" shadow='nevner'>
				    	<div slot="header" class="clearfix">
					<div class="card-title">授信建议</div>
					<div class="card-right-wrap">
						<el-button  type="primary" size="medium">保存</el-button>
					</div>
				</div>
				<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
				</div>
				    </el-card>
				    
				    <el-card class="box-card" shadow='nevner'>
				    	<div slot="header" class="clearfix">
					<div class="card-title">融资用途</div>
					<div class="card-right-wrap">
						<el-button  type="primary" size="medium">保存</el-button>
					</div>
				</div>
				<div class="text-editor">
					<quill-editor :value="textEditorContent" :maxSize="10240"></quill-editor>
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
    	 hgpj: false,
    	 credit:false,
    	textEditorContent: "",
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
      },
      
      	dis1:'',
      	dis2:'',
      	dis3:'',
      	dis4:'',
      	dis5:'',
      	dis6:'',
      	dis7:'',
      	dis8:'',
      	dis9:'',
      	dis10:'',
      	
     
    };
  },
  mounted() {
	  this.loadQyjbxxData();
	  this.redact();
	  this.getDist();
  },
  methods: {
  	   //点击标签页触发事件
      handleClick(tab, event) {
        //   console.log(tab, event);
      },
//    惠国评级
      redact:async function() {
      	console.log(11);
      },
      
      //资信维度距离
      getDist:async function() {
      	 let params = {
        creditCode: sessionStorage.getItem("creditCode"),
        token: sessionStorage.getItem("token")
      };
      const res = await this.$http.post(
        "/hspt-web-api/data_entry/cwzk/jbxxjzy/zxwd/list",
        params
      );
//    console.log(res.data.resultData)
       
      this.dis1 = res.data.resultData.data.dis1
      this.dis2 = res.data.resultData.data.dis2
      this.dis3 = res.data.resultData.data.dis3
      this.dis4 = res.data.resultData.data.dis4
      this.dis5 = res.data.resultData.data.dis5
      this.dis6 = res.data.resultData.data.dis6
      this.dis7 = res.data.resultData.data.dis7
      this.dis8 = res.data.resultData.data.dis8
      this.dis9 = res.data.resultData.data.dis9
      this.dis10 = res.data.resultData.data.dis10
      },
      
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
  },
  components: {
    "quill-editor": quillEditor
  }
};
</script>
<style scoped lang="scss">
@import "@/style/commonStyle.scss";
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
$width: 100%;
$display: inline-block;
.check{
	/*border: 1px solid red;*/
	width: $width;
	display: $display;
}
.check span{
	margin-left: 5%;
}
$width: 20%;
$margin-left: 10%;
.check .el-col{
	/*border: 1px solid red;*/
	width: $width;
	margin-left: $margin-left;
}
.assess{
	border: 1px solid #CCCCCC;
	width: 25%;
	height: 175px;
	float: left;
	margin-left: 4%;
	margin-bottom: 2%;
}
.ass{
	border: 1px solid #CCCCCC;
	width: 33%;
	float: left;
	padding: 5.6%;
	/*color: #1D1D1D;*/
	font-weight: bold;
}
.ess{
	border: 1px solid #CCCCCC;
	background: #F6F6F6;
	color: #1790FF;
	width: 67%;
	float: left;
	padding: 5.6%;
}
.as{
	/*border: 1px solid red;*/
	width: 100%;
	margin-top: 3%;
}
.as span{
	font-size: 15px;
	margin-left: 3%;
	
}
.as span~span{
	font-size: 13px;
	color: #A6A6A6;
	float: right;
	margin-right: 3%;
}
.ss{
	/*border: 1px solid red;*/
	width: 100%;
	text-align: center;
	font-size: 30px;
}
.se{
	/*border: 1px solid red;*/
	width: 100%;
	/*height: 35%;*/
	display: inline-block;
}

.percent{
	/*border: 1px solid black;*/
	width: 95%;
	height: 20px;
	margin-left: 2.5%;
	/*margin-top: 4%;*/
	margin-bottom: 2%;
	border-radius: 15px;
	
	background: -webkit-linear-gradient(left, #FF7770 , #74E039);
    background: -o-linear-gradient(right, #FF7770, #74E039);
    background: -moz-linear-gradient(right, #FF7770, #74E039);
    background: linear-gradient(to right, #FF7770 , #74E039);
}
.percent span{
	float: left;
	margin-left: 2%;
	color: white;
}
.percent span~span{
	float: right;
	margin-right: 2%;
	color: white;
}

.es{
	/*border: 1px solid red;*/
	width: 100%;
	text-align: center;
	font-size: 13px;
	color: #A6A6A6;
}

	.card-title{
		width: 80%;
		float: left;
		margin-top: 1%;
		font-size: 15px;
		font-weight: bold;
	}
.text-editor .ql-editor {
  height: 300px;
}
$width: 80%;
$float: left;
.el-input{
	width: $width;
	float: $float;
}
.structure{
	border: 1px solid #1790FF;
	width: 35%;
	height: 120px;
	float: left;
	margin-left: 5%;
	margin-bottom: 2%;
}
.stru{
	/*border: 1px solid red;*/
	width: 25%;
	height: 120px;
	float: left;
}
.ture{
	/*border: 1px solid red;*/
	width: 75%;
	height: 120px;
	float: left;
}
.str{
	background: #1790FF;
	width: 85%;
	height: 120px;
	text-align: center;
	float: left;
}
.str span{
	color: white;
	line-height: 120px;
	font-size: 50px;
}
.div{
    width: 0px;
    height: 0px;
    float: left;
    margin-top: 47%;
    border-width: 8px;
    border-style: dashed dashed dashed solid;
border-color: transparent transparent transparent #1790FF;
}
.tu{
	/*border: 1px solid red;*/
	width: 100%;
	/*text-align: center;*/
	margin-top: 8%;
	display: inline-block;
}
.re{
	/*border: 1px solid red;*/
	width: 100%;
	text-align: center;
	font-size: 13px;
	color: #A6A6A6;
}
img{
	position: relative;
	top: 16px;
	
}
</style>