import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '../views/Nav.vue'
import Explore from '../views/Explore.vue'
import Special from '../views/Special.vue'
import RoundTable from '../views/RoundTable.vue'
import Recommoned from '../views/Recommoned.vue'
import Follow from '../views/Follow.vue'
import Hot from '../views/Hot.vue'
import QuestionWaiting from '../views/QuestionWaiting.vue'
import Login from '../views/Login.vue'
import Favorite from '../views/Favorite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Nav,
	children:[{
		path: '/',
		redirect: 'home'
	},
	{
		// 首页
		path: 'home',
		component:() => import('../views/Home.vue'),
		children:[
			{
				path:'/',
				redirect:'recommoned'
			},
			{
				// 推荐
				path:'recommoned',
				component:() => import('../views/Recommoned.vue')
			},
			{
				// 关注
				path:'follow',
				component: () => import('../views/Follow.vue')
			},
			{
				// 热榜
				path:'hot',
				component: () => import('../views/Hot.vue')
			}
		]
	},
	{
		// 发现
		path:'explore',
		component:() => import('../views/Explore.vue'),
	},
	{
		// 全部专题
		path:'special/all',
		component:() => import('../views/Special.vue')
	},
	{
		// 圆桌页
		path:'roundtable',
		component:() => import('../views/RoundTable.vue')
	},
	{
		// 收藏页
		path:'favorite',
		component:() => import('../views/Favorite.vue')
	},
	{
		// 等你来答
		path:'question/waiting',
		component:() => import('../views/QuestionWaiting.vue')
	}
	]
  },
  {
	  // 登录
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
