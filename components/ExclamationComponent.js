import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';


export default class ExclamationComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
	    component : <Image />
	   }
	}

	componentDidMount(){
       // Start counting when the page is loaded
       this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Image style={{position:'absolute', top:180, left:150, width: 60, height: 60}} source={require('./exclamation.png')} /> })
       }, 4500);

       this.timeoutHandle2 = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Image style={{position:'absolute', top:180, left:150, width: 60, height: 60, opacity:0}} source={require('./exclamation.png')} /> })
       }, 9500);
	}

	componentWillUnmount(){
	    clearTimeout(this.timeoutHandle); 
	    clearTimeout(this.timeoutHandle2); 
	}

	render() {
		return (
			this.state.component
		)
	}
}
