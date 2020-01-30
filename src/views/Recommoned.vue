<template>
	<div class="recommoned">
		<span>推荐</span>
	</div>
</template>
<!-- 推荐 -->
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
		this.axios.get('http://localhost:8080/api/special/all').then(res =>{
						console.log(res);
						this.specials = res.data.data;
					});
	}
};
</script>
<style scoped>
	.recommoned{
		margin-left: 150px;
		padding-top: 10px;
		margin-top: -10px;
		width: 1040px;
		height: 1000px;
		background-color: white;
	}
	span{
		font-size: 30px;
	}
</style>
