<template>
	<div id="special">
			<div class="favorite-head">
				<img  class="favorite-all" src="../assets/image/收藏夹.jpg" />
				<span class="favorite-title">热门收藏夹</span>
			</div>
			<div class="container">
				<div class="row" v-for="(item,index) in favorites" :key="index">
					<div class="left">
						<div class="left-title">
							<span class="titles">
								{{item.title}}
							</span>
						</div>
						<br /><br /><br /><br /><br />
						<div class="left-creator">
							<img :src="item.creatorAvatar" alt="" class="creator-avatar" />
							<a class="creator-name">{{item.creatorName}}</a>
							<a class="creator-chaungjian">创建</a>
						</div>
						<div class="creator-guanzhu">
							<samp class="creator-followers">{{item.followers}}人关注</samp>
						</div>
					</div>
					
					
					<div class="right">
						<div class="w-row">
							<h3 style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; padding-top: 25px;">{{item.questionTitle}}</h3>
						</div>
						<button class="button"><h4>关注收藏夹</h4></button>
						<div class="content-shoucang">
						     <span class="author-name">{{item.answerAuthorName}}: {{item.answerContent}}</span>
						</div>
						<div class="huida-shoucang">
								<samp class="huida">回答</samp>
								<samp  class="zantong" >{{item.totalCount}}赞同</samp>
								<samp class="pinglun"> {{item.commentCount}}评论</samp>
						</div>
						<div class="dibu-yishoucang">
							<span class="shoucang" >已收藏  {{item.voteupCount}}条内容</span>
							<img src="../assets/image/箭头.jpg"  class="img-shoucang"/>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		data(){
			return{
				favorites:[]
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/favorite/all').then(res =>{
				console.log(res);
				this.favorites = res.data.data;
			});
		}
	};
</script>

<style scoped>
	#special{
		width: 100%;
	}
	
	.container{
		display: block;
		margin: auto;
		width: 85%;
		margin-top: 10px;
    	}
		.row{
			background-color: white;
			display: flex;
			height: 300px;
			margin:20px;
			border-radius: 10px;
		}
		.w-row{
			
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp:1;
			-webkit-box-orient: vertical;
		}
		.left{
			width: 45%;
			text-align: center;
			float: left;
		}
		.left-title{
			margin-top: 40px;
			float: left;
			padding-left: 35px;
		}
		.titles{
			font-size: 28px;
			font-weight: 800;
			color: #000000;
		}
		.left-creator{
			padding-left: 50px;
			padding-top: 20px;
			float: left;
		}
		.creator-guanzhu{
			padding-top: 125px;
			padding-left: 60px;
			color: #808080;
		}
		.creator-followers{
			font-size: 22px;
		}
		.creator-name{
			font-size: 26px;
			padding-left: 15px;
		}
		.creator-chaungjian{
			font-size: 22px;
			padding-left: 5px;
			color: #808080;
		}
		.creator-avatar{
			width: 45px;
			height: 45px;
			float: left;
		}
		.right{
			margin-top: 20px;
			width: 1400px;
			margin-right: 20px;
		}
		.w-row h3{
			width: 100%;
			padding-top: 10px;
			font-size: 24px;
		}
		.button{
			width: 165px;
			border: none;
			background-color: rgb(235,245,255);
			color: rgb(30,134,255);
			font-size: 19px;
			height: 55px;
			border-radius: 5px;
			position: absolute;
			left: 200px;
			margin-top: 128px;
			}
		.meta{
			margin-top: 30px;
			color: darkgray;
			font-size: 18px;
		}
	
		.section{
			float: left;
			background-color: rgb(246,246,246);
			width: auto;
			margin-right: 10px;
			padding: 2px;
			font-size: 13px;
			border-radius: 5px;
			height: auto;
			font-size: 18px;
		}
		
		
		.favorite-head{
			background-color: white;
			height: 150px;
			width: 100%;
			margin-top: 1px;
		}
		
		.favorite-all{
			float: left;
			margin-left: 200px;
			margin-top: 40px;
			width: 60px;
			height: 60px;
		}
		.favorite-title{
			padding-top: 40px;
			padding-left: 280px;
			font-size: 45px;
			font-weight: 800;
			color: #000000;
		}
		.content-shoucang{
			padding-top: 10px;
			color: #696969;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp:3;
			-webkit-box-orient: vertical;
			float: left;
		}
		.author-name{
			font-size: 20px;
			float: left;
		}
		.answer-content{
			font-size: 20px;
		}
		.huida-shoucang{
			padding-top: 100px;
			padding-left: 10px;
		}
		.huida{
			font-size: 18px;
			float: left;
			color: #A9A9A9;
		}
		.zantong{
			font-size: 18px;
			float: left;
			padding-left: 20px;
			color: #A9A9A9;
		}
		.pinglun{
			font-size: 18px;
			padding-top: 733px;
			padding-left: 20px;
			color: #A9A9A9;
		}
		.dibu-yishoucang{
			margin-left: -10px;
			padding-top: 18px;
		}
		.shoucang{
			font-size: 25px;
		    float: left;
		}
		.img-shoucang{
			padding-left: 30px;
			padding-top: 15px;
		}
</style>