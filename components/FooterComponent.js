import React, { Component } from 'react';
import { Text,View,Image, Dimensions } from 'react-native';
import { Icon,Button } from 'react-native-elements';
import Star from './Star';
import styles from '../styles/Footer';
const footerHeihgt = Dimensions.get('window').hight;

class FooterComponent  extends Component {
    constructor(props){
        super(props);
        state={backgroundColor:'',titleColor:'',spanColor:'',buttonBackground:'',buttonTitle:''}
    }
    componentWillMount(){
     if(this.props.theme === 'dark'){
         this.setState({backgroundColor:'#fff',titleColor:'#000',spanColor:'#A6A6A6',buttonBackground:'#8E51FF',buttonTitle:'#fff'})
     }
     if(this.props.theme === 'light'){
        this.setState({backgroundColor:'transparent',titleColor:'#fff',spanColor:'#fff',buttonBackground:'#fff',buttonTitle:'#000'})
    }
     
    }
render(){
    
    return(
       <View style={[styles.containerStyle,{backgroundColor:this.state.backgroundColor}]}>
        <View style={styles.inlineStyle}>
         <View>
          <Text style={[styles.titleStyle,{color:this.state.titleColor}]}>1.5 Hours</Text>
          <View style={styles.inlineStyle}>
           <View style={styles.starContainerStyle}>
            <Star rate="3"/>
           </View>
           <Text style={[styles.spanStyle,{color:this.state.spanColor}]}>808 review</Text>
          </View>
         </View>
         <Button
          large
          title={this.props.title}
          titleStyle={[styles.titleButtonStyle,{color:this.state.buttonTitle}]}
          buttonStyle={[styles.buttonStyle,{backgroundColor:this.state.buttonBackground}]}
         />
        </View>
        </View>
    );
}
}
export default FooterComponent ;