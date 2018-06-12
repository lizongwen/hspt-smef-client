
import Cookies from 'js-cookie';
import Vue from 'vue';

const app = {
    state: {
		//职位ID
		postId:'1',
		// 面包屑数组
		currentPath:[
            {
                title: '首页',
                path: '/home',
                name: 'home'
            }
        ]
	},
    mutations: {
		setCurrentPath(state, pathArr){
			state.currentPath = pathArr;
		}
	}
};

export default app;
