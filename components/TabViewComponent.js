
import React, { Component } from 'react';
import { Text,View,Image, Dimensions,ScollV } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import AdventureCard from './AdventureCard';

const FirstRoute = () => (
  <View style={{ backgroundColor:'#fff'}}>
   <AdventureCard title="Dirt Mania" span="paima, Mallorca" rate="4" review="446" image={require('../assets/images/adventure/adventure-3.jpg')} />
   <AdventureCard title="Gold Cost Surfing" span="Super Bank, Australia" rate="5" review="801" image={require('../assets/images/adventure/adventure-2.jpg')} />
   <AdventureCard title="Dirt Mania" span="paima, Mallorca" rate="3" review="102" image={require('../assets/images/adventure/adventure-1.jpg')} />

  </View>
);
const SecondRoute = () => (
  <View style={{ backgroundColor:'#fff'}}>
  <AdventureCard title="Dirt Mania" span="paima, Mallorca" rate="4" review="446" image={require('../assets/images/adventure/adventure-4.jpg')} />
   <AdventureCard title="Gold Cost Surfing" span="Super Bank, Australia" rate="5" review="801" image={require('../assets/images/adventure/adventure-5.jpg')} />
   <AdventureCard title="Dirt Mania" span="paima, Mallorca" rate="3" review="102" image={require('../assets/images/adventure/adventure-6.jpg')} />
   <AdventureCard title="Dirt Mania" span="paima, Mallorca" rate="4" review="446" image={require('../assets/images/adventure/adventure-7.jpg')} />
  </View>
);
class TabViewComponent extends Component {
    state = {
        index: 0,
        routes: [
          { key: 'trending', title: 'Trending' },
          { key: 'nearby', title: 'Nrearby' },
        ],
      };
   
render(){
   
    return(
        <TabView
        style={{flex:1,paddingLeft:10,paddingRight:10}}
        navigationState={this.state}
        renderScene={SceneMap({
          trending: FirstRoute,
          nearby: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width,height:0 }}
        scrollable={true}
      />
    );
}
}
export default TabViewComponent;