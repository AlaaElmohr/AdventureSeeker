import React, { Component } from 'react';
import { Text,View,Image,ScrollView,Dimensions  } from 'react-native';
import { Icon } from 'react-native-elements'
import styles from '../styles/AdventureDetailAboutScreen';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent  from '../components/HeaderComponent';
import Detail  from '../components/Detail';
const footerHeihgt = Dimensions.get('window').height;

class AdventureDetailAboutScreen extends Component {
    static navigationOptions = {
        header:null,
        tabBarVisible: false 
      };

  render() {
    return (
      <View style={styles.containerStyle}>
        <ScrollView  stickyHeaderIndices={[0]}  >

        <View>
        <HeaderComponent title="Adventureeeeeee Detail" goBack="true" imageBackground="true" image={require('../assets/images/a-2.jpg')} navigation={this.props.navigation} />
        </View>
        <View style={{marginTop:-70,justifyContent:'center',alignItems:'center'}}>
        <View style={styles.mainIconContainerStyle}>
        <Image style={styles.mainIconStyle} source={require('../assets/images/icons/surfing-2.png')}/>
        </View>
        <View style={styles.detailStyle}>
        <Detail type="surfing" context="The Superbank's break is at the very top of do surf experience for serious surfers.And should you have the good fortune to get on wave" price={{'group':640,'person':64}} hour="2.5" location="Canada"/>
        </View>
        </View>
        
      </ScrollView>
      <View style={{position: 'absolute',bottom: 0, top: footerHeihgt-80, width: '100%',zIndex:10}}>
          <FooterComponent title="Pick Slots" theme="dark" navigateTo="PickSlot" />
        </View>
      </View>
    );
  }
}

export default AdventureDetailAboutScreen;
