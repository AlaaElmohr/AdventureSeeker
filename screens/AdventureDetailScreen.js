import React, { Component } from 'react';
import { Text,View,Image,ScrollView,Dimensions,ImageBackground  } from 'react-native';
import { LinearGradient } from 'expo';
import styles from '../styles/AdventureDetailScreen';
import TitleWithIcon from '../components/TitleWithIcon';
import FooterComponent from '../components/FooterComponent';

const footerHeihgt = Dimensions.get('window').height;

class AdventureDetailScreen extends Component {
    static navigationOptions = {
        header:null,
        tabBarVisible: false 
      };

  render() {
    return (
        <ImageBackground source={require('../assets/images/a-2.jpg')}  style={{width: '100%', height: '100%'}}>
        <LinearGradient
             colors={['transparent','rgba(0,0, 0,0.8)']}
             style={{
               position: 'absolute',
               left: 0,
               right: 0,
               bottom: 0,
               height: 200,
             }}>
        <View style={{padding:20}}>
        <Text style={styles.titleStyle}>Gold Coast Surfing</Text>
        <View style={styles.ptop10}>
        <TitleWithIcon icon="pin" type="material-community" title="Super Banks" colorIcon="#A6A6A6" colorTitle="#fff"/>
        </View>
        <View style={styles.ptop10}>
        <TitleWithIcon icon="clock" type="material-community" title="2.5 hours totally" colorIcon="#A6A6A6" colorTitle="#fff"/>
        </View>
        </View>
         <FooterComponent title="Learn More" theme="light"/>

        
       </LinearGradient>
        </ImageBackground>
    );
  }
}

export default AdventureDetailScreen;
