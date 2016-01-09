import Home from '../routes/home';
import Login from '../routes/login';
//import Logoff from './components/Logoff';
import About from '../routes/about';
import Help from '../routes/help';
import Dash from '../routes/dashboard';

export var routes = {
	def:{key: 'default', url:'', sidebar: false, footer: true, header: true, component: Home}
	, home:{key: 'home', url:'home', sidebar: false, footer: true, header: true, component: Home}
	, dashboard:{key: 'dashboard', url:'dashboard', sidebar: true, footer: true, header: true, component: Dash}
	, about:{key: 'about', url:'about', sidebar: false, footer: true, header: false, component: About}
	, login:{key: 'login', url:'login', sidebar: false, footer: true, header: false, component: Login}
	, help:{key: 'help', url:'help', sidebar: false, footer: false, header: true, component: Help}
}