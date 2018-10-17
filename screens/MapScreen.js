import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements'


class MapScreen extends Component {
    static navigationOptions = {
        tabBarLabel:'Map',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="map" type="material-community"  color={tintColor} />;
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

export default MapScreen;