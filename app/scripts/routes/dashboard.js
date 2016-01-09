import React from 'react';

var Mod = React.createClass({
	componentDidMount(){
		//console.log(Route)
		//this.props.history.pushState(null,'about');
	}
	,render() {
		return (<div className={'page '+this.props.position}>
			<div className="main">
				Dashboard
			</div>
		</div>
		)
	}
});

export default Mod;