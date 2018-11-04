import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import styles from '../styles/BucketListScreen';
import HeaderComponent from '../components/HeaderComponent';
import BucketListCard from '../components/BucketListCard';
class BucketListScreen extends Component {
  static navigationOptions = {
    tabBarLabel:'Saved',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="heart" type="material-community"  color={tintColor} />;
    },
    tabBarOptions: {
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
    <View style={styles.containerStyle}>
     <View>
       <HeaderComponent title="BucketList" goBack="true" imageBackground="false" navigation={this.props.navigation}/>
     </View>
     <View style={styles.contentStyle}>
      <BucketListCard rate="5" span="Carrera, Turkey" title="Hot Air Ballon" review="8,876" image={require('../assets/images/adventure/adventure-13.jpeg')}/>
      <BucketListCard rate="4" span="Carrera, Turkey" title="Glacier Trek" review="8,876" image={require('../assets/images/adventure/adventure-7.jpg')}/>
      <BucketListCard rate="5" span="Carrera, Turkey" title="Scunba Diving" review="8,876" image={require('../assets/images/adventure/adventure-8.jpeg')}/>
      <BucketListCard rate="3" span="Carrera, Turkey" title="Cycling" review="8,876" image={require('../assets/images/adventure/adventure-12.jpeg')}/>

      </View>
    </View>
    );
  }
}

export default BucketListScreen;