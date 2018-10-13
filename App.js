import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import ZombieComponent from './components/ZombieComponent';
import ExclamationComponent from './components/ExclamationComponent';
import SmileComponent from './components/SmileComponent';
import FirstZombieComponent from './components/FirstZombieComponent';
import HeroComponent from './components/HeroComponent';
import FightCloudComponent from './components/FightCloudComponent';
import TheEndComponent from './components/TheEndComponent';

export default class App extends React.Component {

  render() {
    var Img1 = require("./left_zombie.gif");
    var Img2 = require("./right_zombie.gif");
    var z_t = [260,380,550,190,380,550];
    var z_l = [290,300,250,50,50,100]; 
    var z_t2 = [260,290,290,190,380,260];
    var z_l2 =[290,260,230,50,50,200];
    var z_t3 = [260,330,330,190,380,260];
    var z_l3 =[300,260,230,50,50,170];

    return (
      
      <View style={{position:'absolute', top:0, left:0, width: '100%', height:'100%'}}>
        <Image
          style={{position:'absolute', top:0, left:0, width: '100%', height:'100%',zIndex:0}}
          source={require('./img/desert_background.png')}
        />
        <HeroComponent />
        <FirstZombieComponent style1={{top:z_t[3], left:z_l[3]}}/>
        <FirstZombieComponent style1={{top:z_t[4], left:z_l[4]}}/>
        <ExclamationComponent />
        <SmileComponent />
        <ZombieComponent style1={{top:z_t[0], left:z_l[0]}} image_id= {Img1} style2={{top:z_t2[0], left:z_l2[0]}} style3={{top:z_t3[0], left:z_l2[0]}}image_id= {Img1}/>
        <ZombieComponent style1={{top:z_t[1], left:z_l[1]}} image_id= {Img1} style2={{top:z_t2[1], left:z_l2[1]}} style3={{top:z_t3[1], left:z_l2[1]}}image_id= {Img1}/>
        <ZombieComponent style1={{top:z_t[2], left:z_l[2]}} image_id= {Img1} style2={{top:z_t2[2], left:z_l2[2]}} style3={{top:z_t3[2], left:z_l2[2]}}image_id= {Img2}/>
        <ZombieComponent style1={{top:z_t[5], left:z_l[5]}} image_id= {Img2} style2={{top:z_t2[5], left:z_l2[5]}} style3={{top:z_t3[5], left:z_l2[5]}}image_id= {Img2}/>
        <FightCloudComponent />
        <TheEndComponent />
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