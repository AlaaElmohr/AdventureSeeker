import React, { Component } from 'react';
import { Text,View,ImageBackground, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
const imageWidth = Dimensions.get('window').width;
import Star from './Star';
import styles from '../styles/AdventureCard';

class AdventureCard extends Component {
  state={icon:'heart-outline'};
  favourite(){
      if(this.state.icon === 'heart-outline'){
      this.setState({icon:'heart'})}
      if(this.state.icon === 'heart'){
        this.setState({icon:'heart-outline'})}
  }
  render() {

    return (
       <View style={styles.containerStyle} source={this.props.image}>
         <ImageBackground style={styles.imageStyle} source={this.props.image} imageStyle={{ borderRadius: 10 }}>
           <View style={styles.iconWrapperStyle}>
             <Icon name={this.state.icon} type="material-community" containerStyle={styles.iconContainerStyle} size={20}color='#FF4F93' onPress={()=> this.favourite() }/>
           </View>
         </ImageBackground>
        
        <View style={styles.inlineStyle}>
          <View>
            <Text  style={styles.titleStyle}>
            { this.props.title }
            </Text>
            <Text  style={styles.spanStyle}>
            { this.props.span }
            </Text>
          </View>
          <View>
          <Star rate={this.props.rate}/>
          <Text  style={styles.spanStyle}>
          { this.props.review } Reviews
          </Text>
          </View>
        </View>
            
        </View>
    );
  }
}

export default AdventureCard;
