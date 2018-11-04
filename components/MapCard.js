import React, { Component } from 'react';
import { View, Text,Image} from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import styles from '../styles/MapCard';
import Star from './Star';

class MapCard extends Component {
  render() {
   return(
    <View style={styles.containerStyle}>
    <Image
      source={this.props.image}
      style={styles.imageStyle}
    />
    <View style={styles.contentStyle}>
    <Text style={styles.title} style={styles.titleStyle} >
    { this.props.title }
    </Text>
    <Star rate={this.props.rate} />
    <View style={styles.inlineStyle}>
    <Icon
    size={14}          
    name='map-marker-circle'
    type='material-community'
    color='#FF4F93'
    />

    <Text style={styles.span} style={styles.spanStyle} >
    { this.props.span } Miles
     </Text>
    </View>
   
  
    <Text style={styles.context}  style={styles.contextStyle} numberOfLines={3}>

      { this.props.context }
    </Text>

    </View>
    
 </View>
   )
  }
}

export default MapCard ;
