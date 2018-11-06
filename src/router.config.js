import Home from './components/Home'
import Category from './components/Category'
import Find from './components/Find'
import Cart from './components/Cart'
import Mine from './components/Mine'


export default[{
	path:"/home",
	component:Home
},{
	path: '/',
	redirect: '/home'
}, {
	path: '*',
	redirect: '/home'
},{
	path:"/category",
	component:Category
},{
	path:'/find',
	component:Find
},{
	path:'/cart',
	component:Cart
},{
	path:'/mine',
	component:Mine
}
]