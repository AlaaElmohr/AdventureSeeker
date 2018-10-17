import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { Icon } from 'react-native-elements'
import HeaderComponent  from '../components/HeaderComponent';
import DestinationsCard from '../components/DestinationsCard';

class DestinationsListScreen extends Component {
    static navigationOptions = {
        header:null,
        tabBarVisible: false  
      };

  render() {
    return (
      <View style={{ backgroundColor:'#fff',flex:1}}>
       <View>
        <HeaderComponent title="Adventure Detail" goBack="true" imageBackground="false" navigation={this.props.navigation} />
       </View>
       <View>
       <View style={{paddingLeft:10,paddingRight:10}}>
        <DestinationsCard title="Lake Louis" price="12" desc="Lake Louis is a Reflection of beauty and Known ..." span="Canada" image={require('../assets/images/adventure/adventure-4.jpg')} index="0"/>
        <DestinationsCard title="Machu Picchu" price="12" desc="Lake Louis is a Reflection of beauty and Known ..." span="Peru" image={require('../assets/images/adventure/adventure-5.jpg')} index="1"/>
        <DestinationsCard title="El Yunque" price="12" desc="Lake Louis is a Reflection of beauty and Known ..." span="Pueto Rico" image={require('../assets/images/adventure/adventure-6.jpg')} index="2"/>
        <DestinationsCard title="Braulio Carrillo" price="12" desc="Lake Louis is a Reflection of beauty and Known ..." span="Costa Rica" image={require('../assets/images/adventure/adventure-7.jpg')} index=""/>

        </View>
        </View>

      </View>
    );
  }
}

export default DestinationsListScreen;