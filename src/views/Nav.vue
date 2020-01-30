<template>
	<div>
		<div class="nav gutter">
			<div class="nav-bar">
				<ul class="nav-list flex-left">
					<li class="nav-item">
						<img src="../assets/image/zhihu.jpg"/></li>
					<li class="nav-item">
						<router-link class="router" to="/home">首页</router-link></li>
					<li class="nav-item">
						<router-link class="router" to="/explore">发现</router-link></li>
					<li class="nav-item">
						<router-link class="router" to="/question/waiting">等你来答</router-link></li>
					<li class="nav-item">
						<input id="text" type="text" value="怎么跟家里老人解释肺炎？"/>
				    </li>
					 <li class="nav-item"><input id='btn' type="button" value="提问">
					 </li>
					 <li class="nav-item">
						 <img src="../assets/image/00.jpg" id="img"/>
					 </li>
					  <li class="nav-item">
						  <img src="../assets/image/11.jpg" id="img"/>
					  </li>
					<li class="nav-item abs-center-right">
						<router-link class="router" to="/login">登录</router-link></li>
			    </ul>
			</div>
		</div>
		
		<router-view class="container"/>
	</div>	
</template>

<script>
export default{
	name:'nav',
	data(){
		return {
			flag:true,
			token:this.$store.state.token,
			user:this.$store.state.user
		};
	},
	created() {}
};
</script>

<style scoped>
	.hy-nav-container {
		height: 100px;
		width: 100%;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #efefef;
	}

	.router{
		float: left;
		width: 150px;
		color:#999999;
		text-decoration: none;
	}
	.router:link{
		color:#999999;
	}
	.router:hover{
		color: black;
	}
	#text{
		height: 45px;
		width: 450px;
		font-size: 20px;
		color:#999999;;
	}
    #btn{
		height: 45px;
		width: 90px;
		font-size: 23px;
		background: #0084FF;
		color: white;
	} 
	#img{
		height: 45px;
		width: 50px;
	}
    .roter-link-active{
	border-bottom: 2px solid #fff
    }
	.nav-bar{
		height: 80px;
		background: white;
		position: relative;
		#logo{
	  		height: 30px;
			width: 60px;
			position: absolute;
			left:30px;
			top:20px;
		}
	}
	.gutter{
		position: relative;
		margin-bottom: 10px;
	}
	.nav-list{
		height: 60px;
		width: 100%;
		background-color: white;
		font-size: 25px;
		text-align: center;
		line-height:60px;
		box-sizing: border-box;
	}
	ul li{
		list-style: none;
		float: left;
		width: 50px;
	}
	li:nth-child(1){
		margin-top: 15px;
		margin-left:200px;
	}
	li:nth-child(2){
		margin-top: 10px;
		margin-left:30px;
	}
	li:nth-child(3){
		margin-top: 10px;
		margin-left:40px;
	}
	li:nth-child(4){
		margin-top: 10px;
		margin-left:60px;
	}
	li:nth-child(5){
		margin-top: 10px;
		margin-left:120px;
	}
	li:nth-child(6){
		margin-top: 10px;
		margin-left:420px;
	}
	li:nth-child(7){
		margin-top: 20px;
		margin-left:300px;
	}
	li:nth-child(8){
		margin-top: 20px;
		margin-left:50px;
	}
	li:nth-child(9){
		margin-top: 10px;
		margin-left:1px;
	}
</style>
