<template>
	<div class="password-free">
		
		<div class="shoujihao">
		
		</div>
		<div class="forget">
			<span class="forget-password">接收语音验证码</span>
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
	.password-free{
		width: 450px;
		height: 320px;
		margin-left: 730px;
		margin-top: -400px;
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
	
	.forget{
		float: right;
		width: 460px;
		padding-top: 18px;
		padding-right: 5px;
	}
	.forget-password{
		font-size: 20px;
		float: right;
	}
</style>
