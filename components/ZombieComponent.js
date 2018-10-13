import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';


export default class ZombieComponent extends Component {
	constructor(props){
	   super(props)
	   this.state = {
	    component : <Image style={[{position:'absolute', width: 50, height: 75, opacity: 0}, this.props.style1]} source={this.props.image_id}/>
	   }
	}

	componentDidMount(){
       // Start counting when the page is loaded
       this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Image style={[this.props.style1, {position:'absolute', width: 50, height: 75, opacity: 1}]} source={this.props.image_id}/> })
       }, 10000);
       this.timeoutHandle2 = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Image style={[this.props.style2, {position:'absolute', width: 50, height: 75, opacity: 1}]} source={this.props.image_id}/> })
       }, 13000);
       this.timeoutHandle3 = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Image style={[this.props.style3, {position:'absolute', width: 50, height: 75, opacity: 1}]} source={this.props.image_id}/> })
       }, 20000);
	}

	componentWillUnmount(){
	    clearTimeout(this.timeoutHandle); 
	    clearTimeout(this.timeoutHandle2); 
	    clearTimeout(this.timeoutHandle3); 
	}
	
	render() {
		return (
			this.state.component
		)
	}
}


