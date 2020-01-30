<template>	
	<div id="round">
			<div class="roundtitle">
			<ul class="roundnavbar">
				<li class="leftround">
					<span style="color: black;font-size: 25px;float: left;margin-left: 30px;margin-top: 20px; font-weight: 800;">圆 桌</span>
				</li>
				<li class="rightround">
					<span style="color: #1E90FF;font-size: 25px;float: right;margin-right: 30px;font-weight: 800;margin-top: 20px;">举办圆桌</span>
				</li>		
		</ul>
		</div>
		
		<div class="round_info">
			<div class="info" v-for="(item, index) in roundtableall" :key="index">
				<div class="roundabout">
					<!-- 图片 -->
					<div ><img :src="item.banner" class="round_img" /></div>
					</div>
					<div>
						<!-- 主题名 -->
						<h3 class="round_name">{{ item.name }}</h3>		
					</div>	
				<!-- 浏览次数 -->
				<span class="round_visitsCount">该圆桌被浏览&nbsp;{{ item.visitsCount }} 次</span>				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			roundtableall: []
		};
	},
	created() {
		this.getData();
	},
	methods: {
		getData() {
			this.axios.get('http://localhost:8080/api/roundtable/all').then(res => {
				this.roundtableall = res.data.data;
			});
		}
	}
};
</script>

<style>
	#round{
		height: 1000px;
		width: 75%;
		background: #FFFFFF;
		margin: 0 auto;
		}
.round_info {
	float: left;
	display: inline-block;
	width: auto;
	margin-top:-50px;
}
.info {	
	margin-left: 30px;
	float: left;
	background-color: white;
	position: relative;
	width: 326px;
	height: 326px;
	margin-top: 100px;
}
.round_img {
	width: 295px;
	height: 295px;
	border-radius: 10px;
}
.round_name {
	position: absolute;
	top: 250px;
	left: 5px;
	right: 5px;
	font-weight: 500;
	color: #E8E8E8;
	font-size: 18px;
}
span {
	display: block;
	margin-left: 10px;
	margin-top: 5px;
	color: gray;
	font-size: 14px;
}
.roundtitle{
	margin-top: 10px;
	
}
ul li{
	list-style: none;
}
.round_visitsCount{
	padding-top: 10px;
	font-size: 21px;
}
</style>