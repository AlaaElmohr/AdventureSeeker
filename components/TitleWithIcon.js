import React, { Component } from 'react';
import { Text,View,Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../styles/TitleWithIcon';

class TitleWithIcon extends Component {
   renderIcon(){
       if(this.props.icon){
         return(
            <Icon name={this.props.icon} type={this.props.type} size={15} color={this.props.colorIcon} />
         );  
       }
       else{
          return(
            <Image source={this.props.image}/>
          );
       }
   }
   
  render() {

    return (
       <View style={styles.inlineStyle}>  
         {this.renderIcon()}
         <Text style={[styles.titleStyle,{color:this.props.colorTitle}]}>{this.props.title}</Text>
         
       </View>
    );
  }
}

export default TitleWithIcon;
