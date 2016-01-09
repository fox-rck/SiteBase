import React from 'react';

var Mod = React.createClass({
	componentDidMount(){
		//console.log("hello")
		
	}
	,render() {
		return (<div className={'page '+this.props.position}>
			<div className="main">
				Help
			</div>
		</div>
		)
	}
});

export default Mod;