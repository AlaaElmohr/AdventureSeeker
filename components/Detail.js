import React, { Component } from 'react';
import { Text,View,Image, Dimensions, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { MapView, PROVIDER_GOOGLE } from 'expo';
import mapStyleGray  from '../styles/mapStyleGray';

import TitleWithIcon from './TitleWithIcon';
const sliderWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;
import styles from '../styles/Detail';
const slider=[{image:require('../assets/images/surfing/surfing-1.jpg')},{image:require('../assets/images/surfing/surfing-2.jpg')},{image:require('../assets/images/surfing/surfing-3.jpg')}]
class Detail extends Component {
    _renderItem ({item, index}) {
        return (
          <Image  source={item.image} style={styles.sliderStyle} />
        );
    }
  render() {
   
    return (
    <ScrollView >
       <View style={styles.wrapperStyle}>  
         
         <View style={styles.containerStyle}>
         <View>
           <TitleWithIcon image={require('../assets/images/icons/surfing-1.png')} title="About" colorIcon="#FF4F93" colorTitle="#000"/>
         </View>
         <View>
          <Text style={styles.contextStyle}>{this.props.context}</Text>
         </View>
         <Carousel
          sliderWidth={sliderWidth-100}
          itemWidth={sliderWidth/3}
          itemHeight={itemHeight}
          data={slider}
          renderItem={this._renderItem}
          windowSize={1} 
          />
         <View style={{marginTop:20}}>
         <TitleWithIcon icon="dollar" title="Price" type="font-awesome" colorIcon="#FF4F93" colorTitle="#000"/>
         <View style={styles.inlineStyle}>
           <Text style={styles.contextStyle}>Group Package</Text>
           <Text style={styles.priceStyle}>${this.props.price.group}</Text>
         </View>
         <View style={styles.inlineStyle}>
         <Text style={styles.contextStyle}>person Package</Text>
         <Text style={styles.priceStyle}>${this.props.price.person}</Text>
       </View>
       </View>
      
             
       </View>
       </View>
       <MapView
       style={{height:200}}
       customMapStyle={mapStyleGray}

        initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,       
       }}
       provider = { MapView.PROVIDER_GOOGLE }
       /> 
    </ScrollView>
    );
  }
}

export default Detail;
