import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements'


class TripScreen extends Component {
    static navigationOptions = {
        tabBarLabel:'My Trips',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="bus" type="material-community"  color={tintColor} />;
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
      <Text>Loka</Text>
    );
  }
}

export default TripScreen;