import React, { Component } from 'react';
import { Text,View,Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
const imageWidth = Dimensions.get('window').width;
import styles from '../styles/ChatCard';

class ChatScreen extends Component {
    constructor(props){
        super(props);
        state=[{backgroundColor:'',color:'',borderTopLeftRadius: 0,borderTopRightRadius: 0,borderBottomLeftRadius: 0,borderBottomRightRadius: 0}];
    }
    componentWillMount(){
     if(this.props.mode === 'recived'){
         this.setState({backgroundColor:'#fff',color:'#000',alignItems:'flex-start',borderTopRightRadius: 20,borderBottomLeftRadius: 20})
     }
     if(this.props.mode === 'sent'){
        this.setState({backgroundColor:'#8E51FF',color:'#fff',alignItems:'flex-end',borderTopLeftRadius:20,borderBottomRightRadius: 20})
    }
    }
    renderImage(type){
        if(type === 'recived' && type=== this.props.mode){
            return(
                <Image source={this.props.toImage} style={styles.imageStyle} />
            )
        }
        if(type === 'sent' && type=== this.props.mode){
            return(
                <Image source={this.props.fromImage} style={styles.imageStyle} />
            )
        }
       }
  render() {
  
    return (
    <View style={{'alignItems':this.state.alignItems,paddingLeft:10,paddingRight:50}}>
     <View style={[styles.inlineStyle]}>
      {this.renderImage('recived')}
      <View style={[styles.containerTextStyle,{'backgroundColor':this.state.backgroundColor,borderTopLeftRadius:this.state.borderTopLeftRadius , borderTopRightRadius:this.state.borderTopRightRadius ,borderBottomLeftRadius: this.state.borderBottomLeftRadius,borderBottomRightRadius:this.state.borderBottomRightRadius}]}>
       <Text style={[styles.contentStyle,{'color':this.state.color}]}>{this.props.content}</Text>
      </View>
      {this.renderImage('sent')}
     </View>
     </View>
    );
  }
}

export default ChatScreen;
