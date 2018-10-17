import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';
import { Button, Input, Icon } from 'react-native-elements'
import styles from '../styles/SignUpScreen';

class SignInScreen extends Component {
 static navigationOptions = {
        header: null,
        tabBarVisible: false 
  };
   renderButton() {
    return (
      <Button
        onPress={()=> this.props.navigation.navigate('Main')}
       title='Sign In'
       backgroundColor='transparent'
       loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
       titleStyle={styles.titleButtonStyle}
       buttonStyle={styles.buttonStyle}
       containerStyle={styles.buttonContainerStyle}
       />
    );
  }
  render() {
    return (
    <ImageBackground source={require('../assets/images/signIn-5.jpeg')}  style={{width: '100%', height: '100%'}}>
    <LinearGradient
         colors={[ 'rgba(255, 79, 147,0.7)','transparent','rgba(142, 81, 255,0.7)']}
         style={{
           position: 'absolute',
           left: 0,
           right: 0,
           bottom: 0,
           height: '100%',
         }}>
      
      <View style={styles.containerStyle}>
       <View>
       <Text style={styles.titleStyle}>Adventuro</Text>
       </View>
       <View>
       <Input
        placeholder='Email'
        placeholderStyle={styles.placeholderStyle}
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.formInput}
        
       />
       </View>
       <View>
       <Input
        className={styles.mtop30}
        placeholder='Password'
        placeholderStyle={styles.placeholderStyle}
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.formInput}
       />
       </View>
       <View>
          {this.renderButton()}
       </View>
       <View style={styles.lineStyle}>

       </View>
      <View style={styles.facebookContainerStyle}>
        <Icon
        name='facebook'
        type='material-community'
        size={24}
        iconStyle={styles.iconStyle}
        color='#fff'
        />
      </View>
      </View>

   </LinearGradient>
    </ImageBackground>
    );
  }
}

export default SignInScreen;
