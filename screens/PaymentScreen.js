import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon,CheckBox } from 'react-native-elements'
import styles from '../styles/PaymentScreen';
import HeaderComponent from '../components/HeaderComponent';
import { LinearGradient } from 'expo';
import Modal from "react-native-modal";

import AddPayment from '../components/AddPayment';

class PaymentScreen extends Component {
    static navigationOptions = {
        tabBarLabel:'Map',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="map" type="material-community"  color={tintColor} />;
        },
        tabBarOptions: {
          activeTintColor: '#FF4F93',
          inactiveTintColor: '#A6A6A6',
          labelStyle: {
            fontSize: 11,
            fontFamily: 'proxima-nova'
          },
        },
      };
      state = {
        isModalVisible: false,
        checked:true
      };
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
  render() {
    return (
      <View style={styles.containerStyle}>
      <TouchableOpacity isVisible={!this.state.isModalVisible}>
      <View>
      <HeaderComponent title="My Trip" goBack="true" imageBackground="false"/>
     </View>
     <View style={styles.headerStyle}>
         <LinearGradient
         start={{x: 0, y: 0}} end={{x: 1, y: 0}}
         colors={['#FF566B','#FF7AC5']}
         style={{
         position: 'absolute',
         left: 0,
         right: 0,
         bottom: 0,
         height: '100%',
         justifyContent:'center',
         alignItems:'center'
         }}>
         <Text style={styles.priceStyle}>$62.88</Text>
         </LinearGradient>
     </View>
     <View style={styles.contentStyle}>
      <Text style={styles.titleStyle}>Terms & Conditions</Text>
      <View style={styles.inlineStyle}>
       <Text style={styles.descStyle}>By clicking you agree to oriils agreement and privacy policy</Text>
       <CheckBox
         checkedColor='#FF4F93'
         checked={this.state.checked}
         />
      </View>
      <Text style={styles.titleStyle}>Select Payment Methods</Text>
      <View style={styles.cardListStyle}>
        <View style={styles.inlineStyle}>
        <Icon name="credit-card" type="font-awesome" color="#000" size={23}/>
         <Text style={styles.cardTitleStyle}>Credit / Debit</Text>
        </View>
        <TouchableOpacity onPress={this._toggleModal}>
          <Icon name="chevron-right" type="material-community" color="#FF4F93" size={28}/>     
          </TouchableOpacity>

      </View>
      <View style={styles.cardListStyle}>
        <Image source={require('../assets/images/paypal.png')} style={styles.imageStyle} />
          <Icon name="chevron-right" type="material-community" color="#FF4F93" size={23} />
       
      </View>

     </View>
      </TouchableOpacity>
      <Modal isVisible={this.state.isModalVisible}>
      <View style={{ flex: 1,justifyContent:'flex-end'}}>
          <AddPayment press={this._toggleModal}/>
          <TouchableOpacity onPress={this._toggleModal}>
            <Text style={{color:'#fff',marginTop:200}}>Hide me!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    );
  }
}

export default PaymentScreen;