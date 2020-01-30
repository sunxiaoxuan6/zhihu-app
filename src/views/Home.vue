<template>
		<div class="home">
			<div class="home-left" >
				<img src="../assets/image/top.jpg" id="top" />
				<div class="home-left-top">
					<router-link to="/home/recommoned" class="home-left-a">推荐</router-link>
					<router-link to="/home/follow" class="home-left-a">关注</router-link>
					<router-link to="/home/hot" class="home-left-a">热榜</router-link>
				</div>
					<router-view class="home-router"/>
			</div>
			<div class="home-right">
				<div class="home-right-top">
					<div class="right-top1">
						<div class="rigth-top-div">
							<img src="../assets/image/写回答.jpg" id="img-1"/>
							<p>写回答</p>
						</div>
						<div class="rigth-top-div"><img src="../assets/image/写文章.jpg" id="img-1"/>
							<p>写文章</p></div>
						<div class="rigth-top-div"><img src="../assets/image/写想法.jpg" id="img-1"/>
							<p>写想法</p></div>
					</div>
					<div class="right-top2">
						<div class="rigth-top-div2"><img src="../assets/image/发视频.jpg" id="img-1"/>
							<p>发视频</p></div>
						<div class="rigth-top-div2"><img src="../assets/image/稍后答.jpg" id="img-1"/>
							<p>稍后答</p></div>
						<div class="rigth-top-div2"><img src="../assets/image/草稿.jpg" id="img-1"/>
							<p>草稿箱</p></div>
					</div>
				</div>
				
				<div class="home-right-mid">
					<div class="rigth-mid-div">
						<img src="../assets/image/创作者.jpg" id="img-2"/>
						<a class="chuangzuo">创作者中心</a>
						<a class="kaitong">去开通</a>
						<img id="jiantou" src="../assets/image/箭头.jpg" />
					</div>
				</div>
				
				<div class="home-right-bottom">
					<div class="right-top1">
						<div class="rigth-top-div">
							<img src="../assets/image/Live.jpg" id="img-1"/>
							<p>Live</p>
						</div>
						<div class="rigth-top-div"><img src="../assets/image/书店.jpg" id="img-1"/>
							<p>书店</p></div>
						<div class="rigth-top-div"><img src="../assets/image/圆桌.jpg" id="img-1"/>
							<p>圆桌</p></div>
					</div>
					<div class="right-top2">
						<div class="rigth-top-div2"><img src="../assets/image/专栏.jpg" id="img-1"/>
							<p>专栏</p></div>
						<div class="rigth-top-div2"><img src="../assets/image/付费资讯.jpg" id="img-1"/>
							<p>付费资讯</p></div>
						<div class="rigth-top-div2"><img src="../assets/image/百科.jpg" id="img-1"/>
							<p>百科</p></div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
</script>

<style scoped="scoped"> 
#top{
		padding-left: 150px;
	}
	.home{
		display: flex;
	}
	.home-router{
		width: 10px;
		height: 10px;
		margin: 1;
	}
	.home-left{
		width: 100%;
	}
	
	.home-right{
		padding-right: 130px;
		width: 100%;
	}
	.home-left-top{
		padding-top: 20px;
		width: 1040px;
		height: 65px;
		border: 1px solid #e0e0e0;
		background-color: white;
		margin-left: 150px;
		margin-top: 10px;
	}
	.home-left-a{
		margin-left: 80px;
		font-size: 23px;
	}
	.home-right-top{
		margin-left: 18px;
		height: 260px;
		width: 90%;
		background-color: white;
		border: 1px solid #e0e0e0;
	}
	.home-right-mid{
		height: 100px;
		width: 90%;
		margin: 3%;
		background-color: white;
		border: 1px solid #e0e0e0;
	}
	.home-right-bottom{
		height: 260px;
		width: 90%;
		background-color: white;
		margin: 3%;
		border: 1px solid #e0e0e0;
	}
	.right-top1{
		float: left;
		width: 100%;
		height: 50%;
		background: white;
	}
	/* .rigth-top-wenda{
		
	} */
	.right-top2{
		float: left;
		width: 100%;
		height: 50%;
		background: white;
	}
	#img-1{
		width: 30px;
		height: 30px;
	}
	.rigth-top-div{
		float: left;
		text-align: center;
		width: 125px;
		height: 100px;
		margin-top: 30px;
		margin-left: 33px;
		font-size: 25px;
	}
	.rigth-top-div2{
		float: left;
		text-align: center;
		width: 125px;
		height: 100px;
		margin-top: 25px;
		margin-left: 33px;
		font-size: 25px;
	}
	
	.rigth-mid-div{
		float: left;
		width: 520px;
		height: 80px;
		padding-top: 30px;
		padding-left: 50px;
	}
	#img-2{
		width: 25px;
		height: 25px;
	}
	.chuangzuo{
		font-size: 23px;
		padding-left: 20px;
		color: #838B83;
	}
	.kaitong{
		font-size: 23px;
		padding-left: 200px;
		color: #0084FF;
	}
	#jiantou{
		padding-left: 15px;
	}
</style>