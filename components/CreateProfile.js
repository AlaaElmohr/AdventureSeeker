import React, { Component } from 'react';
import { Text,View,Image, Dimensions,TouchableOpacity } from 'react-native';
import { Icon, FormLabel, FormInput, FormValidationMessage,Input,Button  } from 'react-native-elements';
import { ImagePicker } from 'expo';
const imageWidth = Dimensions.get('window').width;
import styles from '../styles/CreateProfile';


class CreateProfile extends Component {
  state = {
    image: null,
    height:100
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
            <Image source={require('../assets/images/avatar.jpg')}  style={[styles.imageStyle,{height:this.state.height}]} />
          </TouchableOpacity>
          <Image source={{ uri: image }}  style={[styles.imageStyle,{height:100}]} />
         
       </View>
       <Text style={styles.titleStyle}>Create Profile</Text>

        <View style={styles.formContainerStyle}>
         <Text style={styles.labelStyle}>Full Name </Text>
         <Input
         placeholder='Allison Doe'
         placeholderTextColor="#000"
         placeholderStyle={styles.placeholderStyle}
         inputStyle={styles.inputStyle}
         inputContainerStyle={styles.formInput}
         />
        </View>
        <View style={styles.formContainerStyle}>
        <Text style={styles.labelStyle}>Age</Text>
         <Input
         placeholder='21 years old'
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

export default CreateProfile;
/***
 * source={require('../assets/images/avatar.jpg')}
 * *** */