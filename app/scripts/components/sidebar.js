import React from 'react';

var Home = React.createClass({
	componentDidMount(){
		//console.log(Route)
		
	}
	,render() {
		return (
			<div>
			<ul className="nav">
							<li>
								<a href="#doc_menu_components" data-toggle="collapse" className="waves-attach waves-effect">Collections</a>
								<ul id="doc_menu_components" className="collapse in menu-collapse">
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
								</ul>
							</li>
						</ul>
			</div>
		)
	}
});

export default Home;