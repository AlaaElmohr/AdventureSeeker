import React, { Component } from 'react';
import { Text,View,ImageBackground, Dimensions } from 'react-native';
import { Icon, FormLabel, FormInput, FormValidationMessage,Input,Button  } from 'react-native-elements';
const imageWidth = Dimensions.get('window').width;
import styles from '../styles/AddPayment';

class AddPayment extends Component {

  render() {
    return (
       <View style={styles.containerStyle}>
       <Text style={styles.titleStyle}>Enter Details</Text>
       <View style={styles.formContainerStyle}>
        <Text style={styles.labelStyle}>Name On Card</Text>
        <Input
        placeholder='Allison Doe'
        placeholderTextColor="#000"
        placeholderStyle={styles.placeholderStyle}
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.formInput}
        />
       </View>
       <View style={styles.formContainerStyle}>
       <Text style={styles.labelStyle}>Card Number</Text>
        <Input
        placeholder='XXXX XXXX XXXX'
        placeholderTextColor="#000"
        placeholderStyle={styles.placeholderStyle}
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.formInput}
        />
      </View>
       <View style={styles.inlineStyle}>
        <View style={styles.formContainerStyle}>
        <Text style={styles.labelStyle}>Expirty Date</Text>
        <Input
        placeholder='08/2018'
        placeholderTextColor="#000"
        placeholderStyle={styles.placeholderStyle}
        inputStyle={styles.inputStyle}
        inputContainerStyle={[styles.formInput,{width:150}]}
        />
       </View>
       <View style={styles.formContainerStyle}>
       <Text style={styles.labelStyle}>Expirty Date</Text>
       <Input
       placeholder='08/2018'
       placeholderTextColor="#000"
       placeholderStyle={styles.placeholderStyle}
       inputStyle={styles.inputStyle}
       inputContainerStyle={[styles.formInput,{width:150}]}
       />
      </View>
      </View>
       
       
       <View style={styles.inlineStyle}>
       <Button
       title='Cancel'
       onPress={()=>this.props.press()}
       titleStyle={styles.titleButtonOutlineStyle}
       buttonStyle={styles.buttonOutlineStyle}
       containerStyle={styles.buttonContainerStyle}
       />
       <Button
       title='Pay'
       titleStyle={styles.titleButtonStyle}
       buttonStyle={styles.buttonStyle}
       containerStyle={styles.buttonContainerStyle}
       />
       </View>

         
         
            
      </View>
    );
  }
}

export default AddPayment;
/********
 * <View>
       <Input
        placeholder='Allison Doe'
        placeholderStyle={styles.placeholderStyle}
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.formInput}
       />
       </View>
       <View style={styles.inlineStyle}>
       <Input
       placeholder='Allison Doe'
       placeholderStyle={styles.placeholderStyle}
       inputStyle={styles.inputStyle}
       inputContainerStyle={styles.formInput}
      />
      <Input
      placeholder='Allison Doe'
      placeholderStyle={styles.placeholderStyle}
      inputStyle={styles.inputStyle}
      inputContainerStyle={styles.formInput}
     />
       </View>
 * **** */