import React, { Component } from 'react';
import { Text,View,Image, Dimensions, TouchableOpacity  } from 'react-native';
import { ImagePicker } from 'expo';

import { Icon, FormLabel, FormInput, FormValidationMessage,Input,Button, Rating  } from 'react-native-elements';
const imageWidth = Dimensions.get('window').width;
import styles from '../styles/CreateStory';

class CreateStory extends Component {
  state = {
    image: null,
    height:200
  };
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri,height:0});
    }
  };
  render() {
    let { image } = this.state;
    return (
        <View style={styles.containerStyle}>
        <View style={styles.imageContainerStyle}>
          <TouchableOpacity onPress={this._pickImage}>
            <Image source={require('../assets/images/a-2.jpg')}  style={[styles.imageStyle,{height:this.state.height}]} />
          </TouchableOpacity>
          <Image source={{ uri: image }}  style={[styles.imageStyle,{height:200}]} />
         
       </View>
 
       <Text style={styles.titleStyle}>Create Story</Text>

        <View style={styles.formContainerStyle}>
         <Text style={styles.labelStyle}>Which Type? </Text>
         <Input
         placeholder='Scuba Diving'
         placeholderTextColor="#000"
         placeholderStyle={styles.placeholderStyle}
         inputStyle={styles.inputStyle}
         inputContainerStyle={styles.formInput}
         />
        </View>
  
        <View style={styles.formContainerStyle}>
        <Text style={styles.labelStyle}>Tell us about it </Text>
         <Input
         placeholder='Get acuainted with the wonders of the incas in the exhilarating introduction to Peru......'
         placeholderTextColor="#000"
         placeholderStyle={styles.placeholderStyle}
         inputStyle={styles.inputStyle}
         inputContainerStyle={styles.formInput}
         />
       </View>
        <View style={styles.inlineStyle}>
         <View style={styles.formContainerStyle}>
         <Text style={styles.labelStyle}>City</Text>
         <Input
         placeholder='Amestrdam'
         placeholderTextColor="#000"
         placeholderStyle={styles.placeholderStyle}
         inputStyle={styles.inputStyle}
         inputContainerStyle={[styles.formInput,{width:150}]}
         />
        </View>
        <View style={styles.formContainerStyle}>
        <Text style={styles.labelStyle}>Country</Text>
        <Input
        placeholder='Netherland'
        placeholderTextColor="#000"
        placeholderStyle={styles.placeholderStyle}
        inputStyle={styles.inputStyle}
        inputContainerStyle={[styles.formInput,{width:150}]}
        />
       </View>
       </View>
       <View style={[styles.formContainerStyle,{justifyContent:'flex-start',alignItems:'flex-start'}]}>
       <Text style={styles.labelStyle}>Your Rate</Text>
        <Rating
          type="star"
          ratingCount={5}
          fractions={2}
          startingValue={1.57}
          imageSize={20}
          style={{marginTop:10}}
          onFinishRating={this.ratingCompleted}
        />
      </View>
        
        <View style={styles.inlineStyle}>
        <Button
        onPress={()=>this.props.press()}
        title='Share'
        titleStyle={styles.titleButtonStyle}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainerStyle}
        />
        </View>
 
          
          
             
       </View>
    );
  }
}

export default CreateStory;