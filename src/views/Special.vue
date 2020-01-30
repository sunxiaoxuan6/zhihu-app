<template>
	<div id="special">
			<div class="topic-head">
				<img  class="pic-all" src="../assets/image/zuixin.jpg" />
				<span class="SpecialListPage-title">全部专题</span>
				<span class="SpecialListPage-count">共有489个专题</span>
			</div>
			
			<div class="container">
				<div class="row" v-for="(item,index) in speciales" :key="index">
					<div class="left">
						<img :src="item.banner" alt="" ></div>
					<div class="right">
						<div class="w-row">
							<h3 style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{item.title}}</h3>
							<button class="button"><h4>关注专题</h4></button></div>
						<p class="meta">{{item.updated}}更新·{{item.viewCount}}次浏览</p>
						<p class="introduction">{{item.introduction}}</p>
						<span v-for="(section,index) in item.sections" :key="index" class="section">
							{{section.sectionTitle}}
						</span>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		data(){
			return{
				speciales:[]
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special/all').then(res =>{
				console.log(res);
				this.speciales = res.data.data;
			});
		}
	};
</script>

<style scoped>
	#special{
		width: 100%;
	}
	
	.topic-head{
		background-color: white;
		height: 100px;
		width: 100%;
		margin-top: 1px;
	}
	
	.container{
		display: block;
		margin: auto;
		width: 1430px;
		margin-top: 10px;
    	}
		.row{background-color: white;
			display: flex;
			height: 300px;
			margin:20px;
			border-radius: 10px;
		}
		.left{
			width: 45%;
			text-align: center;
		}
		.left img{
			width: 90%;
			margin-top: 25px;
			height: 250px;
			border-radius: 10px;
		}
		.right{
			margin-top: 20px;
			width: 60%;
			margin-right: 20px;
		}
		.w-row h3{
			width: 100%;
			padding-top: 25px;
			font-size: 24px;
		}
		.button{
			width: 110px;
			border: none;
			background-color: rgb(235,245,255);
			color: rgb(30,134,255);
			font-size: 18px;
			height: 45px;
			border-radius: 5px;
			position: absolute;
			left: 1500px;
			}
		.meta{
			margin-top: 30px;
			color: darkgray;
			font-size: 18px;
		}
		.introduction{
			margin-top: 20px;
			margin-bottom: 10px;
			font-size: 23px;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;/*重点，不能用block等其他*/
			-webkit-line-clamp: 2;/*重点IE和火狐不支持*/
			-webkit-box-orient: vertical;/*重点*/
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
	
	.pic-all{
		float: left;
		margin-left: 250px;
		margin-top: 15px;
		width: 80px;
		height: 70px;
	}
	.SpecialListPage-title{
		padding-top: 18px;
		padding-left: 20px;
		font-size: 38px;
		font-weight: 800;
		float: left;
		color: #000000;
	}
	.SpecialListPage-count{
		padding-top: 27px;
		font-size: 25px;
		float: left;
		padding-left: 30px;
	}
</style>