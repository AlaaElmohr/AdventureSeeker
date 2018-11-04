import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions,ImageBackground} from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';


import styles from '../styles/Header';

class HeaderComponent extends Component {
  constructor(props){
    super(props);
    state={ height:300,background:'$whiteColor',color:'',display:'' }
  }
  componentWillMount(){
   if(this.props.imageBackground === 'true'){
     this.setState({height:300,alignItems:'flex-start',paddingTop:40})
   }
   if(this.props.imageBackground === 'false'){
    this.setState({height:100,alignItems:'center',paddingTop:20})
   }
  }
  displayText(){
    if(this.props.imageBackground === 'false'){
     return(
       <View>
       <Text style={styles.titleStyle}>{this.props.title}</Text>
       <Text style={styles.spanStyle}>{this.props.span}</Text>
       </View>
       )
    }
   
    
  }
  displayIcon(){
   if(this.props.goBack === 'true'){
    return(<Icon type="material-community" name='arrow-left' color='#000' iconStyle={styles.iconMenuStyle}  onPress={() => this.props.navigation.goBack()} />)
   }
  if(this.props.goBack === 'false'){
    return(<Icon name="menu" type="material-community"  color='#000' iconStyle={styles.iconMenuStyle} onPress={()=>{this.props.navigation.openDrawer()}}/>)
   }
  }
  renderContent(){
    return(
    <View style={[styles.containerStyle,{alignItems:this.state.alignItems,paddingTop:this.state.paddingTop}]}>
    {this.displayIcon()}
    {this.displayText()}
    <Icon
    name='magnify'
    size={24}
    color='#000'
    type="material-community"
    iconStyle={styles.iconSearchStyle}
    />
   </View>)
  }
  render() {
    if(this.props.imageBackground==='true'){
    return(
      <ImageBackground style={[styles.wrapperStyle,{height:this.state.height}]} source={this.props.image}>
         {this.renderContent()}
      </ImageBackground>
    );
    }
    if(this.props.imageBackground === 'false'){
      return(
      <View style={[styles.wrapperStyle,{height:this.state.height}]}>
       {this.renderContent()}
      </View>
      )
    }
  }
}

export default HeaderComponent ;
