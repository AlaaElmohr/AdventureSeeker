import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { Icon } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';
import styles from '../styles/TripScreen';
import TripCardTabView from '../components/TripCardTabView';
class TripScreen extends Component {
    static navigationOptions = {
        drawerLabel:'My Trips',
        drawerIcon: ({ tintColor }) => {
          return <Icon name="bus" type="material-community"  color={tintColor} />;
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
      <HeaderComponent title="My Trips" goBack="true" imageBackground="false" navigation={this.props.navigation}/>
      <TripCardTabView />
      
      </View>
    
    );
  }
}

export default TripScreen;