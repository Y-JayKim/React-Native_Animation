import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import ZombieComponent from './components/ZombieComponent';
import ExclamationComponent from './components/ExclamationComponent';
import SmileComponent from './components/SmileComponent';
import FirstZombieComponent from './components/FirstZombieComponent';
import HeroComponent from './components/HeroComponent';
// import MyScene from './components/Myscene';




export default class App extends React.Component {
  

  render() {
    var Img1 = require("./left_zombie.gif");
    var Img2 = require("./right_zombie.gif");
    var zombie_top = [190,380,550,190,380,550];
    var zombie_left = [250,300,250,50,50,100];
    var hero_position = [120,150];

    return (
      
      <View style={{position:'absolute', top:0, left:0, width: '100%', height:'100%'}}>
        <Image
          style={{position:'absolute', top:0, left:0, width: '100%', height:'100%',zIndex:0}}
          source={require('./img/desert_background.png')}
        />
        <HeroComponent />
        <FirstZombieComponent style1={{top:zombie_top[3], left:zombie_left[3]}}/>
        <FirstZombieComponent style1={{top:zombie_top[4], left:zombie_left[4]}}/>
        <ExclamationComponent />
        <SmileComponent />
        <ZombieComponent style1={{top:zombie_top[0], left:zombie_left[0]}} image_id= {Img1} waiting_time={20000}/>
        <ZombieComponent style1={{top:zombie_top[1], left:zombie_left[1]}} image_id= {Img1} waiting_time={20000}/>
        <ZombieComponent style1={{top:zombie_top[2], left:zombie_left[2]}} image_id= {Img1} waiting_time={20000}/>
        <ZombieComponent style1={{top:zombie_top[5], left:zombie_left[5]}} image_id= {Img2} waiting_time={20000}/>

      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// <View style={{position:'absolute', top:0, left:0, width: '100%', height:'100%'}}>
//         <Image
//           style={{position:'absolute', top:0, left:0, width: '100%', height:'100%',zIndex:0}}
//           source={require('./img/desert_background.png')}
//         />
        
//         <ExclamationComponent style1={{position:'absolute', opacity:100}}/>
//         <SmileComponent style1={{position:'absolute', opacity:0}}/>
//         <ZombieComponent style1={{position:'absolute', top:zombie_top[0], left:zombie_left[0], opacity:zombie_opacity[0]}} image_id= {Img1}/>
//         <ZombieComponent style1={{position:'absolute', top:zombie_top[1], left:zombie_left[1], opacity:zombie_opacity[1]}} image_id= {Img1}/>
//         <ZombieComponent style1={{position:'absolute', top:zombie_top[2], left:zombie_left[2], opacity:zombie_opacity[2]}} image_id= {Img1}/>
//         <ZombieComponent style1={{position:'absolute', top:zombie_top[3], left:zombie_left[3], opacity:zombie_opacity[3]}} image_id= {Img2}/>
//         <ZombieComponent style1={{position:'absolute', top:zombie_top[4], left:zombie_left[4], opacity:zombie_opacity[4]}} image_id= {Img2}/>
//         <ZombieComponent style1={{position:'absolute', top:zombie_top[5], left:zombie_left[5], opacity:zombie_opacity[5]}} image_id= {Img2}/>
//         <HeroComponent style1={{position:'absolute', top:hero_position[0], left:hero_position[1]}}/>

//       </View>