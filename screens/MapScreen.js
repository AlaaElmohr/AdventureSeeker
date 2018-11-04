import React, { Component } from 'react';
import { Text,Dimensions,View } from 'react-native';
import { Icon } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { MapView, PROVIDER_GOOGLE } from 'expo';
import HeaderComponent from  '../components/HeaderComponent';
import MapCard from '../components/MapCard';
import styles from '../styles/MapScreen';
import mapStyle  from '../styles/mapStyle';
const sliderWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;


const entries = [
  { title:'Carribean Thrills', span: "4.5", context: "Surfing in cold water is way different than the warm caribbean waves.",rate:5, image: require('../assets/images/hiking/a1.jpeg') },
  { title:'Discover awe Thrills!',span: "5", context: 'Fill your life with Adventures, not things.Hash Trails helps you fine daring thrills all over the world.',rate:5 ,  image: require('../assets/images/hiking/a2.jpeg') },
  { title:"Wander don't Wonder!",span: "1", context: "life's meant for good friends, and great adventures, share your favourite spots with amigo!",rate:4 ,image: require('../assets/images/hiking/a3.jpeg')}
];
class MapScreen extends Component {
    static navigationOptions = {
        drawerLabel:'Map',
        drawerIcon: ({ tintColor }) => {
          return <Icon name="map" type="material-community"  color={tintColor} />;
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
      _renderItem ({item, index}, parallaxProps, col) {
        return (
          <MapCard title={item.title} span={item.span} context={item.context} image={item.image} rate={item.rate} col={col}/>
        );
    }
  render() {
    return (
      <View style={styles.containerStyle}>
       <View>
        <HeaderComponent title="Map" goBack="true" imageBackground="false" navigation={this.props.navigation} />
       </View>

       <MapView
       style={{marginTop:-10,flex:1,zIndex:-1 }}
       customMapStyle={mapStyle}
       provider={PROVIDER_GOOGLE}
       initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
        }}
       />
       <View style={{position:'absolute',width:'100%',height:'100%',top:itemHeight-200,bottom:0,zIndex:10}}>
       <Carousel
       sliderWidth={sliderWidth}
       itemWidth={sliderWidth-100}
       itemHeight={itemHeight}
       data={entries}
       renderItem={this._renderItem}
       hasParallaxImages={true}
       windowSize={1} 
       col={3}
       />
       </View>

     
      </View>
    );
  }
}

export default MapScreen;