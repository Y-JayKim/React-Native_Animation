import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableWithoutFeedback, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';


export default class HeroComponent extends Component {

	constructor(props) {
        super(props);
        this.state = {
	    component : <TouchableWithoutFeedback 
		             onPress={()=>{this.view.transitionTo({left:250})}}>
		                <Animatable.View 
		                style={{position:'absolute', width: 50, height: 75, top:260, left:150}}
		                ref={this.handleViewRef}>
		                  <Image 
		                  style={{position:'absolute', width: 50, height: 75, left:0,top:0}}
		                  source={require('./hero1.png')}/>
		                </Animatable.View>
		            </TouchableWithoutFeedback>
	   	}
    }
    componentDidMount(){
       // Start counting when the page is loaded
       this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Image style={{position:'absolute', width: 75, height: 100, left:240 ,top:240}} source={require('./hero_dead.png')}/> })
       }, 20000);
	}

	componentWillUnmount(){
	    clearTimeout(this.timeoutHandle); 
	}
	handleViewRef = ref => this.view = ref;

 

	render() {
		return (
             this.state.component
        );
	}
}
