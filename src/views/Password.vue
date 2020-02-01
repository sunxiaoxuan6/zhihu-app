<template>
	<div class="password">
		<div class="shoujihao">
		<input id="text" type="text" value="手机号或邮箱"/><br />
		<input id="text" type="text" value="密码" />
		</div>
		<div class="forget">
			<span class="shoujihao-login">海外手机号登录</span>
			<span class="forget-password">忘记密码？</span>
		</div>
		<div class="zhihu-login">
			<button class="login">注册/登录</button>
		</div>
	
	</div>
</template>
<!-- 密码登录 -->
<script>
export default{
	name:'special',
	data(){
		return{
			specials:[],
			begin:0,
			end:6,
		};
	},
	created() {
		
	}
};
</script>
<style scoped>
	.password{
		width: 450px;
		height: 320px;
		margin-left: 730px;
		margin-top:-330px;
	}
	.shoujihao{
		width: 450px;
		float: left;
	}
	#text{
		width: 450px;
		height: 45px;
		margin-top: 10px;
		font-size: 20px;
		color: #787878;
	}
	.forget{
		float: right;
		width: 460px;
		padding-top: 18px;
	}
	.shoujihao-login{
		font-size: 20px;
		float: left;
		color: #0074da;
	}
	.forget-password{
		font-size: 20px;
		float: right;
	}
	.login{
		width: 450px;
		height: 50px;
		font-size: 20px;
		margin-top:38px ;
		background-color: #0074da;
		color: white;
		/* 圆角 */
		border-radius: 5px;
	}

</style>
