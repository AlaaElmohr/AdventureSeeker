import React, { Component } from 'react';
import { Text,View,Image, Dimensions } from 'react-native';
import { Icon, FormLabel, FormInput, FormValidationMessage,Input,Button  } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import styles from '../styles/CreateEvent';
const sliderWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;
const gallery = [
    { image: require('../assets/images/pick/a1.png') },
    { image: require('../assets/images/pick/a2.png') },
    { image: require('../assets/images/pick/a3.png') },
    { image: require('../assets/images/pick/a4.png') },
    { image: require('../assets/images/pick/a5.png') },
    { image: require('../assets/images/pick/a6.png') },

  ];
class CreateEvent extends Component {
    _renderItem ({item, index}, parallaxProps, col) {
        return (
          <Image  source={item.image} style={styles.iconStyle}/>
        );
    }
render(){
    return(
        <View style={styles.containerStyle}>
           <Text style={styles.titleStyle}>Create Event</Text>
    
            <View style={styles.formContainerStyle}>
             <Text style={styles.labelStyle}>Choose a Type</Text>
             <Carousel
             sliderWidth={sliderWidth}
             itemWidth={sliderWidth/4}
             itemHeight={itemHeight}
             data={gallery}
             renderItem={this._renderItem}
             hasParallaxImages={true}
             windowSize={1} 
              />
            </View>
            <View style={styles.formContainerStyle}>
            <Text style={styles.labelStyle}>About</Text>
             <Input
             placeholder='Get acuainted with the wonders of the incas in the exhilarating introduction to Peru .....'
             placeholderTextColor="#000"
             placeholderStyle={styles.placeholderStyle}
             inputStyle={styles.inputStyle}
             inputContainerStyle={styles.formInput}
             />
           </View>
           <View style={styles.inlineStyle}>
             <View style={styles.formContainerStyle}>
             <Text style={styles.labelStyle}>How Much?</Text>
             <Input
             placeholder='12$'
             placeholderTextColor="#000"
             placeholderStyle={styles.placeholderStyle}
             inputStyle={styles.inputStyle}
             inputContainerStyle={[styles.formInput,{width:150}]}
             />
            </View>
            <View style={styles.formContainerStyle}>
            <Text style={styles.labelStyle}>How Long?</Text>
            <Input
            placeholder='1 Hour'
            placeholderTextColor="#000"
            placeholderStyle={styles.placeholderStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={[styles.formInput,{width:150}]}
            />
           </View>
           </View>
            <View style={styles.inlineStyle}>
             <View style={styles.formContainerStyle}>
             <Text style={styles.labelStyle}>City</Text>
             <Input
             placeholder='Alexanderia'
             placeholderTextColor="#000"
             placeholderStyle={styles.placeholderStyle}
             inputStyle={styles.inputStyle}
             inputContainerStyle={[styles.formInput,{width:150}]}
             />
            </View>
            <View style={styles.formContainerStyle}>
            <Text style={styles.labelStyle}>Country</Text>
            <Input
            placeholder='Egypt'
            placeholderTextColor="#000"
            placeholderStyle={styles.placeholderStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={[styles.formInput,{width:150}]}
            />
           </View>
           </View>
            
            
            <View style={styles.inlineStyle}>
            <Button
            onPress={()=>this.props.press()}
            title='Create'
            titleStyle={styles.titleButtonStyle}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainerStyle}
            />
            </View>
     
              
              
                 
           </View>
        );

    }
}
export default CreateEvent;