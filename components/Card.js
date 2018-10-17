import React, { Component } from 'react';
import { Text,View,Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
const imageWidth = Dimensions.get('window').width;
import Star from './Star';
import styles from '../styles/Card';

class Card extends Component {
    stars=[];
    constructor(props){
        super(props);
        state={col:'',height:100}
    }
  
    componentWillMount(){
      if(this.props.span != null ){
          this.setState({col:3,height:150})
      }
      else{
        this.setState({col:1.5,height:100})
      }
    }
    
    renderRating(count){
    return(<Star rate={count}/>);
    }
  render() {

    return (
       <View style={styles.containerStyle}>
            <Image
              source={this.props.image}
              style={[styles.imageStyle,{height:this.state.height,width:imageWidth/this.props.col}]}
            />
            <Text style={styles.span} style={styles.spanStyle} numberOfLines={2}>
              { this.props.span }
            </Text>
            <Text style={styles.title} style={styles.titleStyle} numberOfLines={2}>
              { this.props.title }
            </Text>
            <Text style={styles.context}  style={styles.contextStyle} numberOfLines={2}>
              { this.props.context }
            </Text>
            <View style={styles.starContainerStyle}>
              {this.renderRating(this.props.rate)}
            </View>
            
         </View>
    );
  }
}

export default Card;
