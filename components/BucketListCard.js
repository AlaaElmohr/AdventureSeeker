import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Star from './Star';
import styles from '../styles/BucketListCard';

class BucketListCard extends Component {
    state={icon:'heart'};
    favourite(){
        if(this.state.icon === 'heart-outline'){
        this.setState({icon:'heart'})}
        if(this.state.icon === 'heart'){
          this.setState({icon:'heart-outline'})}
    }
  render() {
    return (
    <View style={styles.wrapperStyle}>
      <View style={styles.containerStyle}>
        <View style={styles.imageContainerStyle}> 
          <Image source={this.props.image} style={styles.imageStyle}/>
        </View>
        <View style={styles.infoStyle}> 
         <View style={[styles.inlineStyle]}>
          <Text style={styles.titleStyle}>{this.props.title}</Text>
          <Icon name={this.state.icon} type="material-community" containerStyle={styles.iconContainerStyle} size={20}color='#FF4F93' onPress={()=> this.favourite() }/>
         </View>
          <Text style={styles.spanStyle}>{this.props.span}</Text>
          <View style={[styles.inlineStyle,styles.ptop10]}>
          <Star rate={this.props.rate} />
          <Text style={styles.reviewStyle}>{this.props.review}</Text>
          </View>
       </View>
      </View>
    </View>
    );
  }
}

export default BucketListCard;