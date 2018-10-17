import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

class ProfileScreen extends Component {
    static navigationOptions = {
        tabBarLabel:'Profile',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="account-outline" type="material-community"  color={tintColor} />;
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
      <View>
      <Text>Loka</Text>
      </View>
      
    );
  }
}

export default ProfileScreen;