import React, { Component } from 'react';
import { Text,View,Dimensions,ScrollView,Image } from 'react-native';
import { Icon,Button } from 'react-native-elements'
import styles from '../styles/MyTicketScreen';
import HeaderComponent  from '../components/HeaderComponent';
const sliderWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;

class MyAdventureScreen extends Component {
    static navigationOptions = {
        header:null,
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
  render() {
    return (
      <View style={styles.containerStyle}>
        <View>
        <HeaderComponent title="My Ticket" goBack="true" imageBackground="false" navigation={this.props.navigation} />
        </View>
        <View style={styles.contentStyle}>
         <View style={styles.headerStyle}>
           <View style={styles.eventStyle}>
             <Text style={styles.eventTitleStyle}>AFRICA TOUR</Text>
           </View>
           <Text style={styles.titleStyle}>Cage Shark Diving</Text>
           <View style={styles.inlineStyle}>
           <Icon name="pin" type="material-community" size={12} color="#fff" />
           <Text style={styles.spanStyle}>Cape Town, South Africa</Text>
           </View>
         </View>
         <View style={styles.bodyStyle}>
           <View style={[styles.inlineStyle,{justifyContent:'space-between',borderBottomWidth:2,borderColor:'#F4F4F4',paddingBottom:10}]}>
           <View>
             <Text style={styles.titleBodyStyle}>Date</Text>
             <Text style={[styles.infoStyle,{fontSize:13}]}>8th Dec</Text>
           </View>
           <View>
             <Text style={styles.titleBodyStyle}>Time</Text>
             <Text style={[styles.infoStyle,{fontSize:13}]}>9:00 AM</Text>
           </View>
           </View>
           <View style={[styles.inlineStyle,{justifyContent:'space-between',alignItems:'center',marginTop:20,width:'60%',marginLeft:'20%'}]}>
           <View>
             <Text style={styles.titleBodyStyle}>Price</Text>
             <Text style={[styles.infoStyle,{fontSize:16,fontFamily:'proxima-nova-bold'}]}>$82</Text>
           </View>
           <View style={styles.lineStyle}></View>
           <View >
             <Text style={styles.titleBodyStyle}>Tickets</Text>
             <Text style={[styles.infoStyle,{fontSize:16,fontFamily:'proxima-nova-bold'}]}>02</Text>
           </View>
           </View>
           <View style={styles.imageContainerStyle}>
             <Image source={require('../assets/images/code.png')} style={styles.imageStyle} />
           </View>
           <Button
            title='Cancel Trip'
            backgroundColor='transparent'
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            titleStyle={styles.titleButtonStyle}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainerStyle}
            />
         </View>
        </View>
        
      </View>

    );
  }
}

export default MyAdventureScreen;