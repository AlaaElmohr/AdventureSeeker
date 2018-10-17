import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions,ImageBackground} from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import styles from '../styles/PickCard';

class PickCard extends Component {
    state={icon:'checkbox-marked-circle-outline'};
    pick(){
        if(this.state.icon === 'checkbox-marked-circle-outline'){
        this.setState({icon:'checkbox-marked-circle'})}
        if(this.state.icon === 'checkbox-marked-circle'){
          this.setState({icon:'checkbox-marked-circle-outline'})}
    }
  render() {
   return(
       <View style={styles.containerStyle}>
         <Image source={this.props.image} style={styles.imageStyle} />
         <View style={styles.inlineStyle}>
           <Text style={styles.titleStyle}>{this.props.title}</Text>
           <Icon   name={this.state.icon} type="material-community" containerStyle={styles.iconContainerStyle} size={20} color="#FF4F93" onPress={()=> this.pick() }/>
         </View>
       </View>
   )
  }
}

export default PickCard ;
