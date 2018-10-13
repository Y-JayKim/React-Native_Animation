import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableWithoutFeedback, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';


export default class HeroComponent extends Component {

	constructor(props) {
		super(props);
	}
	handleViewRef = ref => this.view = ref;
    bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
	render() {
		return (
             <TouchableWithoutFeedback 
             style={[{position:'absolute', width: 50, height: 75, top:120, left:150}]}
             onPress={()=>{this.view.transitionTo({left:500})}}>
                <Animatable.View 
                style={[{position:'absolute', width: 50, height: 75, top:120, left:150}]}
                ref={this.handleViewRef}>
                  <Image 
                  style={[{position:'absolute', width: 50, height: 75, top:120, left:150}]}
                  source={require('./hero1.png')}/>
                </Animatable.View>
            </TouchableWithoutFeedback>
        );
		
	}
}
