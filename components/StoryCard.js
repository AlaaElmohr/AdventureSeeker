import React, { Component } from 'react';
import { Text,View,Image, Dimensions,ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';
import Star from './Star';
import styles from '../styles/StoryCard';

class StoryCard extends Component {

  render() {

    return (
      <ImageBackground source={this.props.image}  style={styles.imageStyle} imageStyle={{ borderRadius: 10 }}>
      <LinearGradient
           colors={['transparent','rgba(0,0, 0,0.8)']}
           style={{
             position: 'absolute',
             left: 0,
             right: 0,
             bottom: 0,
             height: 100,
           }}>
      <View style={styles.containerStyle}>
      <Text style={styles.spanStyle}>{this.props.span}</Text>
      <Text style={styles.titleStyle}>{this.props.title}</Text>
      <Star rate={this.props.rate} />
      </View>
      
     </LinearGradient>
      </ImageBackground>
    );
  }
}

export default StoryCard;
