import React from 'react';

var Home = React.createClass({
	componentDidMount(){
		//console.log(Route)
		
	}
	,render() {
		return (<div className={'page '+this.props.position}>
			<div className="main">
			Home
			</div>
		</div>
		)
	}
});

export default Home;