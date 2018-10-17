import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements'
import styles from '../styles/CityDetailScreen';
import HeaderComponent  from '../components/HeaderComponent';


class CityDetailScreen extends Component {
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
        <HeaderComponent title="Adventure Detail" goBack="true" imageBackground="false" navigation={this.props.navigation} />

    );
  }
}

export default CityDetailScreen;