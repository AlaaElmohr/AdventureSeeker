import React, { Component } from 'react';
import { Text,View,Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

class Star extends Component {
    stars=[];
    renderRating(count){
        this.stars=[];
       for(let i=0;i<count;i++){
           this.stars.push((<Icon key={i} name='star' type='material-community' color='#FEE500' size={15} />));
       }
       for(let i=count;i<5;i++){
        this.stars.push((<Icon key={i} name='star-outline' type='material-community' color='#FEE500' size={15}/>));
    }
    
   return(this.stars);
   }
   
render(){
    
    return(
        <View style={{flexDirection:'row'}}>
         {this.renderRating(this.props.rate)}
        </View>
    );
}
}
export default Star;