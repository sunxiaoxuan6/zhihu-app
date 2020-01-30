<template>
	<div>
		<div class="container">
			<!-- 专题 -->
			<div class="row">
				<div class="banner">
					<i class="iconfont"><img src="../assets/image/zuixin.jpg" id="img"/></i>
					<h2>最新专题</h2>
				</div>
				<div class="row1">
				<div class="card" v-for="(item,index) in specials" :key="index">
						<img :src="item.banner" alt="" class="card-head">
						<div class="b1">
						<div class="card-body flex">
							<div class="left">
								<div class="left1">
							<h3>{{item.title}}</h3>
							</div>
							<p class="meta">{{item.updated}}更新,{{item.viewCount}}浏览</p>
							</div>
						<div class="right">
							<button class="btn_gz">关注专题</button>
						</div>
						</div>
						</div>
						<p class="introduction">{{item.introduction}}</p>
						<div class="card-buttom">
						<span v-for="(section,index) in item.sections" :key="index" class="section flex">
							{{section.sectionTitle}}
						</span>
						</div>
					</div> 
					</div>
					
					<button class="center"><router-link to="/special/all" class="l">查看更多专题 ></router-link></button>
			</div>
			
			<!-- 圆桌 -->
			<div class="row">
				<div class="banner">
					<i class="iconfont"><img src="../assets/image/yuanzhuo.jpg"  id="img"/></i>
					<h2>圆桌讨论</h2>
				</div>
				<div class="row1">
				<div class="card" v-for="(item,index) in roundTables" :key="index">
						<div class="cards-head">
								<img :src="item.banner" alt="" class="card-background">
							<div class="card-main">
								<p class="name">{{item.name}}</p>
								<p class="includeCount">{{item.visitsCount}}人访问,{{item.includeCount}}人参与</p>
							</div>
							<div class="card-btn">
								<button class="btn_gz">关注圆桌</button>
							</div>
							</div>
							<a class="introduction">
							啊啊啊啊啊啊啊啊
							</a>
							<a class="meta1">
							421 个回答</a>
							<a class="introduction">
						啊啊啊啊啊啊
							</a>
							<a class="meta1">
							540 个回答</a>
							<a class="introduction">
						啊啊啊啊啊啊啊
							</a>
							<a class="meta1">
							230 个回答</a>
						<div class="card-buttom">
						<span v-for="(section,index) in item.sections" :key="index" class="section flex">
							{{section.sectionTitle}}
						</span>
						</div>
					</div> 
					
					</div>
					<button class="center"><router-link to="/roundTable" class="l">查看更多圆桌></router-link></button>
			</div>
			
			<!-- 收藏  -->
			<div class="row">
				<div class="banner">
					<i class="iconfont"><img src="../assets/image/收藏夹.jpg"  id="img"/></i>
					<h2>热门收藏夹</h2>
				</div>
				<div class="row1">
				<div class="card-shoucang" v-for="(item,index) in favorites" :key="index">
					<div class="b1-shoucang">
						<div class="cards-head-shoucang">
						 <div class="card-btn-shoucang">
							<button class="btn_gz_shoucang">关注收藏夹</button>
						 </div>
					<div class="card-body-shoucang">
						<div class="top-shoucang">
							
						    <p class="meta-shoucang">
								<img :src="item.creatorAvatar" alt="" class="card-head-shoucang" />
								<a class="zuozhe">{{item.creatorName}}</a>
								<span class="chuangjian">创建</span>
								<span id="fenge">|</span>
								<span class="guanzhu">{{item.followers}}人关注</span>
							</p>
						</div>
						<div class="title-shoucang">
							<p>
							<h3 class="title">{{item.questionTitle}}</h3>
							</p>
						</div>
						<div class="zhongbu">
							<p>
							<a class="author-name">{{item.answerAuthorName}}:</a>
							<a class="answer-content">{{item.answerContent}}</a>
							</p>
						</div>
						<div class="dibu">
								<span class="huida">回答</span>
								<span  class="zantong" >{{item.totalCount}}赞同</span>
								<span class="pinglun"> {{item.commentCount}}评论</span>
						</div>
						<div class="yishoucang">
								<span class="shoucang" >已收藏  {{item.voteupCount}}条内容</span>
								<img src="../assets/image/箭头.jpg"  class="img-shoucang"/></div>
						</div>
					    
					</div>
					</div>
				</div> 
			</div>
			<button class="center"><router-link to="/favorite" class="l">查看更多收藏夹></router-link></button>
			</div>
			
			
			
			
			
			
			
			
			
			
			
			<!-- 专题栏 -->
			<div class="row">
				<div class="banner">
					<i class="iconfont"><img src="../assets/image/zhuantilan.jpg"  id="img"/></i>
					<h2>专栏</h2>
				</div>
				<div class="row1">
				<div class="card-zhuanlan" v-for="(item,index) in columns" :key="index">
					<div class="card-btn-zhuanlan">
						<a :href="item.url">
						<button class="btn_gz_zhuanlan">进入专栏</button></a>
					</div>
					<div class="zhuanlan-touxiang">
						<img :src="item.imageUrl" alt="" class="touxiang" />
					</div>
					<div class="zhuanlan-title">
						<p>
							<h3 class="zhuanlan-titles">{{item.title}}</h3>
						</p>
						<a class="zhuanlan-guanzhu">{{item.followers}}关注 </a>
						<a class="zhuanlan-wenzhang"> {{item.articlesCount}}文章</a>
					</div>
					<div class="zhuanlan-description">
						<a class="zhuanlan-neirong"> {{item.description}}</a>
					</div>
				</div> 
			</div>
			<div class="center-zhuantilan1">
			<a href="https://zhuanlan.zhihu.com/" >
			<button class="center-zhuantilan">查看更多专栏></button></a>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'hot',
	data(){
		return{
			specials:[],
			roundTables:[],
			favorites:[],
			columns:[]
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/special').then(res =>{
			console.log(res);
			this.specials = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/roundtable').then(res =>{
			console.log(res);
			this.roundTables = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/favorite').then(res =>{
			console.log(res);
			this.favorites = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/columns').then(res =>{
			console.log(res);
			this.columns = res.data.data;
		});
	}
};
</script>

<style  scoped="scoped">
	.banner{
		width: 100%;
		margin-bottom: 10px;
		margin-top: 50px;
		height: 60px;
		display: flex;
		align-items: center;
		font-size: 25px;
		margin-left: 200px;
	}
	#img{
		margin-top: 10px;
		width: 60px;
		height: 60px;
	}
	.iconfont{
		color: rgb(0,132,255);
		font-size: 32px;
		margin-right:10px;
	}
	.row1{
	margin: 0 auto;
	margin-left: 150px;
	margin-right: 150px;
	display: flex;
	flex-wrap: wrap;
	}
	.left{
		width: 60%;
		
	}
	.b1{
		 position: relative;
		border-radius: 4px;
		-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
		box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
		overflow: hidden;
	}
	.left1{
		cursor: pointer;
	}
	.right{
		width: 40%;
		margin-right: 20px;
		margin-bottom: 30px;
		margin-top: 30px;
	}
	.card{
		border: 2px solid #d6d6d6;
		border-radius: 8px;
		width: 720px;
		height: 500px;
		margin-bottom: 30px;
		margin: 0vh auto 0;
		margin-top: 20px;
		box-shadow: 2px 5px 5px #aaa;
		margin-left: 50px;
	}	
	.card-shoucang{
		border: 2px solid #d6d6d6;
		border-radius: 8px;
		width: 720px;
		height: 380px;
		margin-bottom: 30px;
		margin: 0vh auto 0;
		margin-top: 20px;
		box-shadow: 2px 5px 5px #aaa;
		margin-left: 50px;
	}	
	.card-zhuanlan{
		border: 2px solid #d6d6d6;
		border-radius: 8px;
		width: 365px;
		height: 505px;
		margin-bottom: 30px;
		margin: 0vh auto 0;
		margin-top: 20px;
		margin-left: 25px;
	}	
	.card-head{
		width: 100%;
		height: 300px;
	}
	.cards-head{
		position: relative;
		height: 240px;
		background-image: linear-gradient(to right, rgb(255, 0,0, 44) 0%, rgba(255, 215, 40, 10) 100%);
		
	}
	.card-background{
		float: right;
		width: 300px;
		height: 100%;
		
	}
	.card-main{
		position: relative;
		width: 320px;
		padding: 68px 24px 24px;
	}
	.card-btn{
		position: absolute;
		right: 25px;
		bottom: 24px;
		background-color: white;
		/* 圆角 */
		border-radius: 5px;
	}
	.card-body{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 20px;
	}
	.btn_gz{
		font: inherit;
		cursor: pointer;
		border: none;
		height: 34px;
		border-radius: 3px;
		font-size: 18px;
		font-weight: 800;
		width: 102px;
		color: #0084ff;
		float: right;
		background: #C6E2FF;
		text-align: center;
	}
	.introduction{
		display: flex;
		margin-top: 15px;
		margin-left: 15px;
		cursor: pointer;
		font-size: 18px;
	}
	.meta1{
		color: #838B83;
		font-size: 15px;
		text-align: top;
		margin-left: 15px;
	}
	.name{
		font-size: 28px;
		font-weight: 660;
		color: white;
		margin-bottom: 30px;
			cursor: pointer;
	}
	.includeCount{
		font-size: 20px;
		font-weight: 660;
		color: white;
	}
	.col-6{
		flex: 0 0 50%;
		img{
			width: 100%;
			height: 100%;
			padding: 5px;
			cursor: pointer;
		}
	}
	.meta{
		padding-top: 10px;
		color:  #8590a6;
		font-size: 18px;
		text-align: top;
	}
	.center{
		    -webkit-box-align: center;
    align-items: center;
    padding: 0 14px 0 24px;
    height: 48px;
	width: 250px;
    background-color: #fff;
    border-radius: 25px;
    color: #8590a6;
    cursor: pointer;
    font-weight: 600;
	margin-left: 835px;
	margin-right: 670px;
	margin-top: 30px;
	text-align: center;
	font-size: 20px;
	}
	
	
	
	
	
	
	.cards-head-shoucang{
		position: relative;
		height: 240px;
	}
	
   .card-btn-shoucang{
		position: absolute;
		margin-top: 30px;
		right: 25px;
		background-color: white;
		/* 圆角 */
		border-radius: 5px;
	}
	.btn_gz_shoucang{
		font: inherit;
		cursor: pointer;
		border: none;
		height: 45px;
		border-radius: 3px;
		font-size: 20px;
		font-weight: 800;
		width: 130px;
		color: #0084ff;
		float: right;
		background: #C6E2FF;
		text-align: center;
	}
	
	.left1-shoucang{
		padding-left: 30px;
		font-size: 25px;
		padding-top: 30px;
	}
	.meta-shoucang{
		width: 100%;
		padding-left: 30px;
		padding-top: 20px;
		float: left;
	}
	.card-head-shoucang{
		float: left;
		width: 40px;
		height: 40px;
	}
	.zuozhe{
		padding-top: 3px;
		float: left;
		font-size: 23px;
		padding-left: 15px;
		color: #787878;
	}
	.chuangjian{
		padding-top: 3px;
		font-size: 18px;
		float: left;
	}
	#fenge{
		padding-left: 10px;
		float: left;
		padding-top: 5px;
	}
	.guanzhu{
		float: left;
		padding-left: 10px;
		padding-top: 3px;
		font-size: 18px;
	}
	.title-shoucang{
		padding-top: 100px;
		padding-left: 30px;
	}
	.title{
		font-size: 22px;
	}
	.author-name{
		font-size: 20px;
		color:#787878;
	}
	.answer-content{
		font-size: 20px;
		padding-left: 8px;
		color:#787878;
	}
	.zhongbu{
		padding-top: 10px;
		padding-left: 30px;
	}
	
	.dibu{
		padding-top: 10px;
		padding-left: 20px;
		width: 450px;
	}
	.huida{
		font-size: 15px;
		float: left;
	}
	.zantong{
		font-size: 15px;
		float: left;
	}
	.pinglun{
		font-size: 15px;
		padding-left: 120px;
	}
	
	
	.yishoucang{
		padding-top: 20px;
		padding-left: 20px;
		float: left;
	}
	.shoucang{
		font-size: 23px;
		float: left;
	}
	.img-shoucang{
		padding-left: 30px;
		padding-top: 15px;
	}
	
	
	
	/* 专栏 */
	.btn_gz_zhuanlan{
		font: inherit;
		cursor: pointer;
		border: none;
		height: 45px;
		font-size: 20px;
		font-weight: 800;
		margin-top: 420px;
		margin-left: 122px;
		width: 130px;
		color: #0084ff;
		background: #C6E2FF;
		text-align: center;
		
	}
	
	.zhuanlan-touxiang{
		margin-top: -420px;
		margin-left: 128px;
	}
	.touxiang{
		width: 110px;
		height: 110px;
		/* 圆角 */
		border-radius: 55px;
	}
	.zhuanlan-title{
		text-align: center;
		padding-top: 10px;
	}
	.zhuanlan-titles{
		font-size: 26px;
	}
	.zhuanlan-guanzhu{
		font-size: 20px;
		color: #999999;
	}
	.zhuanlan-wenzhang{
		font-size: 20px;
		color: #999999;
	}
	.zhuanlan-description{
		padding-top: 45px;
		text-align: center;
	}
	.zhuanlan-neirong{
		font-size: 25px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient: vertical;
	}
	.center-zhuantilan{
    -webkit-box-align: center;
	align-items: center;
	padding: 0 14px 0 24px;
	height: 48px;
	width: 250px;
	background-color: #fff;
	border-radius: 25px;
	color: #8590a6;
	cursor: pointer;
	font-weight: 600;
	margin-left: 835px;
	margin-right: 670px;
	margin-top: 30px;
	text-align: center;
	font-size: 20px;
	}
	.center-zhuantilan1{
		height: 200px;
	}
</style>