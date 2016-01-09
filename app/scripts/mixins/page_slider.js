import React from 'react';
import ReactDOM from 'react-dom';
// import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
// import AccountSlide from '../components/AccountSlide';
// import NotificationSlide from '../components/NotificationSlide';
// import EventSlide from '../components/EventSlide';

var PageSlider = {
    getInitialState: function () {
        return {
            history: [],
            pages: [],
            animating: false
        }
    },
    componentDidUpdate: function() {
        var skippedCurrentFrame = false,
            pageEl = ReactDOM.findDOMNode(this).lastChild,
            pages = this.state.pages,
            l = pages.length,
            transitionEndHandler = function() {
                console.log('transition end handler')
                pageEl.removeEventListener('transitionend', transitionEndHandler);
                pageEl.removeEventListener('mozTransitionEnd', transitionEndHandler);
                pageEl.removeEventListener('webkitTransitionEnd', transitionEndHandler);
                pages.shift();
                this.setState({pages: pages});
            }.bind(this),
            animate = function() {
                if (!skippedCurrentFrame) {
                    skippedCurrentFrame = true;
                    requestAnimationFrame(animate.bind(this));
                } else if (l > 0) {
                    pages[l - 1].position = "center transition";
                    this.setState({pages: pages, animating: false});
                    //console.log(pageEl);

                    pageEl.addEventListener('transitionend', transitionEndHandler);
                    pageEl.addEventListener('mozTransitionEnd', transitionEndHandler);
                    pageEl.addEventListener('webkitTransitionEnd', transitionEndHandler);
                }
            };

        if (this.state.animating) {
            requestAnimationFrame(animate.bind(this));
        }
    }, slidePage: function (Page, props) {
        var history = this.state.history,
            pages = this.state.pages,
            l = history.length,
            hash = window.location.hash,
            position = "center";
            console.log(history[l - 2])
        if (l === 0) {
            history.push(hash);
        } else if (hash === history[l - 2]) {
            history.pop();
            position = "left";
        } else {
            history.push(hash);
            position = "right";
        }
        console.log(position)
        pages.push({Page:Page, key:props.key, position: position});
        //this.setState({history: history, pages: pages, animating: position!=="center"});
        this.setState({history: history, pages: pages, animating: position!=="center", page:{Page:Page, key:props.key, props:props}});

    }, getPages: function(pages) {
        var ret;
        for(var cnt = 0; cnt < pages.length; cnt++){
            var Page = pages[cnt].Page;
            ret = <Page key={pages[cnt].key} position={pages[cnt].position} />;
        }
        return ret;
    }
};
export {PageSlider};