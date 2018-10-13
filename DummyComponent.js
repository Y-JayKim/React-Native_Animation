import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableWithoutFeedback, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class DummyComponent extends Component {
    constructor(props) {
        super(props);
        this.bounceAndRun = this.bounceAndRun.bind(this);
    }

    handleViewRef = ref => this.view = ref;
    bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

    bounceAndRun(){
        this.bounce
    }

    render() {
        return (
             <TouchableWithoutFeedback 
             style={{position:'absolute', left:100,top:100}}
             onPress={()=>{this.view.transitionTo({left:500})}}>
                <Animatable.View 
                style={{position:'absolute', left:100,top:100}}
                ref={this.handleViewRef}>
                  <Image source={require("./hero1.png")}/>
                </Animatable.View>
            </TouchableWithoutFeedback>
        );
    }
}