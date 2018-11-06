import Home from './components/Home'

export default[{
	path:"/home",
	component:Home
},{
	path: '/',
	redirect: '/home'
}, {
	path: '*',
	redirect: '/home'
}]