import React from 'react';

var Home = React.createClass({
	componentDidMount(){
		//console.log(Route)
		
	}
	,render() {
		return (
			<header className="header header-brand">
				<ul className="nav nav-list">
					<li>
						<a onClick={this.close} href="#home" className="waves-attach waves-effect">Home</a>
					</li>
					<li>
						<a onClick={this.close} href="#about" className="waves-attach waves-effect">About</a>
					</li>
					<li>
						<a onClick={this.close} href="#login" className="waves-attach waves-effect">Login</a>
					</li>
					<li>
						<a onClick={this.close} href="#help" className="waves-attach waves-effect">Help</a>
					</li>
					<li>
						<a onClick={this.close} href="#dashboard" className="waves-attach waves-effect">Dashboard</a>
					</li>
				</ul>
			</header>
		)
	}
});

export default Home;