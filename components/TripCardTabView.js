import React, { Component } from 'react';
import { Text,View, Image,Dimensions } from 'react-native';
import { Icon,Button } from 'react-native-elements';
import styles from '../styles/TripCard';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Timeline from 'react-native-timeline-listview';

data = [
  { title: 'Dec 6-12',span:'This week', content: [{title:'Cage Shark Diving',icon:require('../assets/images/pick/a2.png'),type:'Scuba Diving',location:'Cape Town,South Africa',time:{day:'8',month:'Thu'}},{title:'White Water Rafting',icon:require('../assets/images/pick/a1.png'),type:'Rafting',location:'Cape Town,South Africa',time:{day:'8',month:'Thu'}}]},
  { title: 'Dec 6-12',span:'Next week', content: [{title:'Cage Shark Diving',icon:require('../assets/images/pick/a2.png'),type:'Scuba Diving',location:'Cape Town,South Africa',time:{day:'8',month:'Thu'}},{title:'White Water Rafting',icon:require('../assets/images/pick/a1.png'),type:'Rafting',location:'Cape Town,South Africa',time:{day:'8',month:'Thu'}}]},
]
const FirstRoute = () => (
  <View style={{ backgroundColor:'#fff'}}>
    <Timeline 
    style={{width:'95%'}}
    circleSize={20}
    circleColor='#fff'
    lineColor='#DBDBDB'
    timeContainerStyle={{marginTop: 10,marginLeft:-50}}
    data={data}
    />
  </View>
);
const SecondRoute = () => (
  <View style={{ backgroundColor:'#fff'}}>
    <Timeline 
    style={{width:'95%'}}
    circleSize={20}
    circleColor='#fff'
    lineColor='#F1F1F1'
    data={data}
    />
   </View>
);
class TripCardTabView extends Component {
    state = {
        backgroundColor:'',
        index: 0,
        routes: [
          { key: 'upcoming', title: 'Upcomping' },
          { key: 'completed', title: 'Completed' },
        ],
      };

  render() {
    return (
        <TabView
        style={{flex:1,paddingLeft:10,paddingRight:10}}
        navigationState={this.state}
        renderScene={SceneMap({
          upcoming: FirstRoute,
          completed: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width,height:0 }}
        scrollable={true}
      />
        
    );
  }
}

export default TripCardTabView;