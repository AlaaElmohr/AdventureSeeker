import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Icon,Button } from 'react-native-elements'
import HeaderComponent from'../components/HeaderComponent';
import styles from '../styles/ProfileScreen';
import StoryCard from '../components/StoryCard';

class ProfileScreen extends Component {
    static navigationOptions = {
      drawerLabel:'Profile',
      drawerIcon: ({ tintColor }) => {
          return <Icon name="account-outline" type="material-community"  color={tintColor} />;
        },
        contentOptions: {
          activeTintColor: '#FF4F93',
          inactiveTintColor: '#A6A6A6',
          labelStyle: {
            fontSize: 11,
            fontFamily: 'proxima-nova-bold'
          },
        },
      };

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={{zIndex:1}}>
        <HeaderComponent  goBack="true" imageBackground="true" image={require('../assets/images/profile/a1.jpeg')} navigation={this.props.navigation} />
        </View>
        <View style={styles.contentStyle}>
          <View style={styles.profileInfoStyle}>
            <Text style={styles.titleStyle}>Allison Doe</Text>
            <View style={[styles.inlineStyle,styles.p40]}>
              <View>
               <Text style={styles.numberStyle}>800</Text>
               <Text style={styles.spanStyle}>Stories</Text>
              </View>
              <View>
              <Text style={styles.numberStyle}>11.2K</Text>
              <Text style={styles.spanStyle}>Followers</Text>
             </View>
             <View>
             <Text style={styles.numberStyle}>555</Text>
             <Text style={styles.spanStyle}>Following</Text>
            </View>
            </View>
            <View style={styles.inlineStyle}>
            <Button 
              title="Follow"
              large
              titleStyle={styles.titleButtonStyle}
              buttonStyle={styles.buttonStyle}
            />
            <Button
              title="Message"
              large
              titleStyle={styles.titleButtonOutlineStyle}
              buttonStyle={styles.buttonOutlineStyle}
            />
            </View>
            </View>
            </View>
            <Text style={[styles.titleStoryStyle,styles.ptop10,styles.pleft15]}>All Stories</Text>
            <ScrollView style={styles.storyContainerStyle}>
            <View style={{marginTop:10}}>
             
             <View style={styles.storyStyle}>
              <StoryCard title="Scuba Diving" span="Peru" rate="4" image={require('../assets/images/adventure/adventure-11.jpeg')}/>
              <StoryCard title="Skiing " span="Canada" rate="5" image={require('../assets/images/adventure/adventure-10.jpeg')}/>

             </View>
            
 
            </View>
            </ScrollView>
         
      </View>
      
    );
  }
}

export default ProfileScreen;