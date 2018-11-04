import React, { Component } from 'react';
import { Text, View, ImageBackground,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import Modal from "react-native-modal";
import { Rating } from 'react-native-elements';
import { Button, Input, Icon } from 'react-native-elements'
import styles from '../styles/SignUpScreen';
import CreateProfile from '../components/CreateProfile';
import CreateStory from '../components/CreateStory';
import CreateEvent from '../components/CreateEvent';

class SignUpScreen extends Component {
 static navigationOptions = {
        header: null,
        tabBarVisible: false 
  };
  state = {
    isModalVisible: false,
  };
  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

   renderButton() {
    return (
      
      <Button
       title='Sign Up'
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
      <View style={{flex:1}}>
      <TouchableOpacity isVisible={!this.state.isModalVisible}>
      <ImageBackground source={require('../assets/images/signIn-5.jpeg')}  style={{width: '100%', height: '100%'}} >
      <LinearGradient
           colors={[  'rgba(142, 81, 255,0.7)','transparent','rgba(255, 79, 147,0.7)']}
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
        <TouchableOpacity onPress={this._toggleModal}>
          <Icon
          name='facebook'
          type='material-community'
          size={24}
          iconStyle={styles.iconStyle}
          color='#fff'
          />
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.loginStyle}>
        <Text style={styles.textStyle}>Have Account</Text>
        <Icon
          name='arrow-right'
          type='material-community'
          color='#fff'
          onPress={()=> this.props.navigation.navigate('SignIn')}
          />
     </View>
     </LinearGradient>
      </ImageBackground>
      </TouchableOpacity>
      <Modal isVisible={this.state.isModalVisible}>
      <View style={{ flex: 1,justifyContent:'flex-end'}}>
        <CreateProfile press={this._toggleModal}/>
       
      </View>
    </Modal>
     </View>
     
    );
 
  }
}

export default SignUpScreen;
/*********
 * 
 *      <Modal isVisible={this.state.isModalVisible}>
        <View style={{ flex: 1}}>
          <CreateProfile press={this._toggleModal}/>
          <TouchableOpacity onPress={this._toggleModal}>
            <Text style={{color:'#fff',marginTop:200}}>Hide me!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
 */