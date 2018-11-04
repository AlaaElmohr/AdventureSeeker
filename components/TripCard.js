import React, { Component } from 'react';
import { Text,View, Image } from 'react-native';
import { Icon,Button } from 'react-native-elements';
import styles from '../styles/TripCard';

class TripCard extends Component {
    state = {backgroundColor:''};
  _renderItem(){
      return (this.props.content.map((content,index)=>{
          
        if(index %2 !==0 ){
            this.state.backgroundColor='#FF4F93';
           }
           if(index %2 ===0 ){
            this.state.backgroundColor='#8E51FF';
           }
          return(
            <View style={styles.containerStyle} key={index}>
            <View style={styles.infoStyle}>
              <Text style={styles.monthStyle}>{content.time.month}</Text>
              <Text style={styles.dayStyle}>{content.time.day}</Text>
            </View>
            <View style={[styles.contentStyle,{backgroundColor:this.state.backgroundColor}]}>
            <Text style={styles.titleStyle}>{content.title}</Text>
            <View style={styles.inlineStyle}>
            <Image source={content.icon} style={styles.imageStyle}/>
            <Text style={styles.spanStyle}>{content.type}</Text>
            </View>
            <View style={styles.inlineStyle}>
            <Icon name="pin" type="material-community" size={12} color="#DBDBDB"/>
            <Text style={styles.spanStyle}>{content.location}</Text>
            </View>
            <Button
            title='Confirmed'
            backgroundColor='#fff'
            titleStyle={styles.titleButtonStyle}
            buttonStyle={styles.buttonStyle}
            />
            </View>
             
           </View>
          );
      })
      )
  }
  render() {
    return (
        <View>
        {this._renderItem()}
        </View>
        
    );
  }
}

export default TripCard;