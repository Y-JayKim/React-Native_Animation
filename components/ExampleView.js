import React, {Component} from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export default class ExampleView extends Component {
    handleTextRef = ref => this.text = ref;

    render() {
        var fromValues = {fontSize:1}
        var toValues = {fontSize:20}
        return (
            <TouchableWithoutFeedback onPress={() => this.text.transition(fromValues,toValues,2000,'esa-out')}>
                <Animatable.Text ref={this.handleTextRef}>Fade me!</Animatable.Text>
            </TouchableWithoutFeedback>
        );
    }
}