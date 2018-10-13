import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

export default class FightCloudComponent extends Component {

    constructor() {
        super();
        this.state = {
        component : <Image style={{position:'absolute', left:190, top:170, width:230, height:250, opacity:0}} source={require('./fight_cloud.gif')}/>
        }
    }

    componentDidMount(){
       // Start counting when the page is loaded
       this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Image style={{position:'absolute', left:190, top:170, width:230, height:250, opacity:1}} source={require('./fight_cloud.gif')}/> })
       }, 15000);
       this.timeoutHandle2 = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Image style={{position:'absolute', left:190, top:170, width:230, height:250, opacity:0}} source={require('./fight_cloud.gif')}/> })
       }, 20000);
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