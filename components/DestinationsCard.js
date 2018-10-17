import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions,ImageBackground} from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import styles from '../styles/DestinationsCard';

class DestinationsCard extends Component {
  renderImage(type){
   let result = ((this.props.index %2 ==0) ? 'even' : 'odd');
   if(result===type){
     return <Image source={this.props.image} style={styles.imageStyle} />
   }
  }
  render() {
   return(
       <View style={styles.containerstyle}>
         {this.renderImage('even')}
         <View style={styles.contentStyle}>
           <Text style={styles.spanStyle}>{this.props.span}</Text>
           <Text style={styles.titleStyle}>{this.props.title}</Text>
           <Text style={styles.descStyle}>{this.props.desc}</Text>
           <Text style={styles.priceStyle}>From ${this.props.price}</Text>
         </View>
         {this.renderImage('odd')}   
       </View>
   )
  }
}

export default DestinationsCard ;
