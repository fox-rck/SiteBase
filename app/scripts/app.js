'use strict';

import React from 'react';
import {render} from 'react-dom';
import {PageSlider} from './mixins/page_slider';
import {router} from './utilities/router';
import {routes} from './configs/routes';
import _ from 'lodash';
//Components
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
require('velocity-animate');
require('velocity-animate/velocity.ui');
var Velocity = require('velocity-react');
var VelocityTransitionGroup = Velocity.VelocityTransitionGroup;


var App = React.createClass({
    mixins: [PageSlider],
    componentDidMount: function() {
        var that = this;
        // Loop through all the routes in the config
        _.each(Object.keys(routes), function(key) {
            var state = routes[key];
            router.addRoute(state.url, function() {
                this.slidePage(state.component, state);
            }.bind(that));
        });
        router.start();
    }
    ,render: function () {
        let bod = <div>Loading...</div>;
        if (this.state.page) {
            console.log(this.state.page)
            let props = this.state.page.props;
            let headComp = props.header ? <Header /> : "";
            let footComp = props.footer ? <Footer /> : "";
            let headerSpacer = props.header ? <div className="header-pad" /> : "";
            let sidebarComp = props.sidebar ? <Sidebar /> : "";
            bod = <div>
                <VelocityTransitionGroup enter={{style:{height:0,top:'-300px', position:'fixed'}, animation:{height: 56, top:0}, duration:500, ease:'easeOut'}} leave={{style:{height:56, top:0}, animation:{height: 0, top:'-300px'}, duration:500, ease:'easeIn'}}>
                    {headComp}
                </VelocityTransitionGroup>
                <div className="app-wrapper">
                    <VelocityTransitionGroup enter={{style:{height:0}, animation:{height: 56}, duration:500, ease:'easeOut'}} leave={{style:{height:56}, animation:{height: 0}, duration:500, ease:'easeIn'}}>
                        {headerSpacer}
                    </VelocityTransitionGroup>
                    <div className="app-main">
                        <div className="inline-sidebar">
                            <VelocityTransitionGroup enter={{style:{width:0,left:'-300px', position:'relative'}, animation:{width: 300, left:0}, duration:500, ease:'easeOut'}} leave={{style:{width:300, left:0}, animation:{width: 0, left:'-300px'}, duration:500, ease:'easeIn'}}>
                                {sidebarComp}
                            </VelocityTransitionGroup>
                        </div>
                        <div className="route-wrapper">
                            <div className="pageslider-container content">
                                {this.getPages(this.state.pages)}
                            </div>
                        </div>
                    </div>
                    <VelocityTransitionGroup enter={{animation:'slideDown'}} leave={{animation:'slideUp'}}>
                        {footComp}
                    </VelocityTransitionGroup>
                  
                </div>
            </div>;
            }
        return (bod);
    }
});

render(<App/>, document.getElementById('app'));