import React from 'react';
import { Animated, Text, View } from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        component : <View></View>
        }
    }
    componentDidMount(){
       // Start counting when the page is loaded
       this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                                              <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>The END</Text>
                                            </FadeInView>
                                        </View> })
       }, 20000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutHandle); 
    }
    handleViewRef = ref => this.view = ref;

  render() {
    return (
      this.state.component
    )
  }
}