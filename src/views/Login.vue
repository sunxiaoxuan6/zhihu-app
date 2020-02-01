<template>
	
	<div class="login-bar tx-center">
		<div class="zhihu-logo">
		<router-link to="/">
			<img src="https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png" class="logo" />
		</router-link>
		</div>
		<div class="zhihu-denglu">
			<ul class="zhihu-list">
				<li class="zhihu-item">
					<router-link class="password" to="/login/passwordfree">免密码登录</router-link></li>
				<li class="zhihu-item">
					<router-link class="password" to="/login/password">密码登录</router-link></li>
			</ul>
		</div>
		
		<router-view class="container"/>
		
		<div class="button">
		<div class="button-left">
			<a class="button1">未注册手机验证后自动登录</a><br />
			<a class="button1">注册即代表同意《知乎协议》《隐私保护指引》</a>
		</div>
		<div class="button-right">
			<a class="right">注册机构号</a>
		</div>
		</div>
	</div>
</template>
<!-- 登录 -->
<script>
export default{
	name:'login',
	data(){
		return {};
	},
	created() {}
};
</script>

<style scoped>
.login-bar{
	background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
	text-align: center;
	background-repeat: no-repeat;
	background-color: #b8e5f8;
	background-size: cover;
	padding-top: 50px;
	width: 100%;
	height: 100vh;
	overflow: auto;
	
}
    .logo{
		width: 150px;
		height: 100px;
		margin-bottom: 24px;
	}
	.zhihu-denglu{
	width: 500px;
	height: 395px;
	background-color: white;
	margin-left: 700px;
	}
	.zhihu-denglufangshi{
		height: 100px;
	}
	.password{
		font-size: 20px;
		padding-top: 20px;
		float: left;
	}
	.zhihu-list{
		width: 100%;
		background-color: white;
		font-size: 25px;
		line-height:40px;
		padding-left: 5px;
		box-sizing: border-box;
	}
	ul li{
		list-style: none;
	}
	
	.password{
		float: left;
		width: 150px;
		color:#000;
		text-decoration: none;
	}
	/* .password:hover{
		font-weight: 800;
	} */
	
	
	.button{
		width: 500px;
		height: 80px;
		background-color: #f4f4f4;
		margin-left: 700px;
		/* margin-top: 2px; */
	}
	
	.button-left{
		padding-left: 25px;
		padding-top: 15px;
		float: left;
		font-size: 16px;
	}
	.button1{
		color: #787878;
		float: left;
	}
	.button-right{
		padding-right: 25px;
		padding-top: 25px;
		float: right;
	}
	.right{
		float: right;
		font-size: 18px;
		color: #0074da;
	}
	
</style>
