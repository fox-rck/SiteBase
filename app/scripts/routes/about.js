import React from 'react';

var Home = React.createClass({
	componentDidMount(){
		//console.log("hello")
		
	}
	,render() {
		return (<div className={'page '+this.props.position}>
			<div className="main">
				About - {this.props.position}
			</div>
		</div>
		)
	}
});

export default Home;