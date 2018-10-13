import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';


export default class SmileComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
	    component : <Image style={{position:'absolute', top:180, left:135, width: 65, height: 55}} source={require('./smile.png')} />
	   }
	}

	componentDidMount(){
       // Start counting when the page is loaded
       this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Image /> })
       }, 3500);
	}

	componentWillUnmount(){
	    clearTimeout(this.timeoutHandle); 
	}

	render() {
		return (
			this.state.component
		)
	}
}
