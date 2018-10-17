import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { Text,View,Image, Dimensions } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import TabViewComponent from '../components/TabViewComponent';

class AdventuresListScreen extends Component {

  static navigationOptions = {
    tabBarLabel:'Events',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="bullseye" type="material-community"  color={tintColor} />;
    },
    tabBarOptions: {
      activeTintColor: '#FF4F93',
      inactiveTintColor: '#A6A6A6',
      labelStyle: {
        fontSize: 11,
        fontFamily: 'proxima-nova'
      },
    },
  };

  render() {
    return (
      <View style={{flex:1}}>
      <View>
        <HeaderComponent title="Adventures" goBack="true" imageBackground="false"/>
      </View>
       <TabViewComponent />      
      </View>
      
      
    
    );
  }
}

export default AdventuresListScreen;
/***
 *   <View>
      <HeaderComponent title="Adventures" goBack="true" imageBackground="false"/>
     </View>
 * ** */