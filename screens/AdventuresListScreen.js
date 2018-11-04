import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { Text,View,Image, Dimensions } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import TabViewComponent from '../components/TabViewComponent';

class AdventuresListScreen extends Component {

  static navigationOptions = {
    drawerLabel:'Events',
    drawerIcon: ({ tintColor }) => {
      return <Icon name="bullseye" type="material-community"  color={tintColor} />;
    },
    contentOptions: {
      activeTintColor: '#FF4F93',
      inactiveTintColor: '#A6A6A6',
      labelStyle: {
        fontSize: 11,
        fontFamily: 'proxima-nova-bold'
      },
    },
  };

  render() {
    return (
      <View style={{flex:1}}>
      <View>
        <HeaderComponent title="Adventures" goBack="false" imageBackground="false" navigation={this.props.navigation}/>
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