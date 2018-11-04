import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import { Icon,Input } from 'react-native-elements'
import styles from '../styles/ChatScreen';
import HeaderComponent from '../components/HeaderComponent';
import ChatCard from '../components/ChatCard';
class ChatScreen extends Component {
  static navigationOptions = {
    tabBarLabel:'Chat',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="forum" type="material-community"  color={tintColor} />;
    },
    tabBarOptions: {
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
      <View>
       <HeaderComponent title="Allision Doe" span="Online now" goBack="true" imageBackground="false" navigation={this.props.navigation}/>
      </View>
      <ScrollView>
        <ChatCard content="lorem ipsum dolar"  toImage={require('../assets/images/profile/a2.jpg')} mode="recived"/>
        <ChatCard content="Ut enim ad minim veniam quis nostrud execritation" fromImage={require('../assets/images/profile/a1.jpeg')}  mode="sent"/>
        <ChatCard content="Ut enim ad minim veniam quis nostrud execritation"  toImage={require('../assets/images/profile/a2.jpg')} mode="recived"/>
        <ChatCard content="Ut enim ad minim veniam quis nostrud execritation.Duis aute lrue dolor in at in" fromImage={require('../assets/images/profile/a1.jpeg')}  mode="sent"/>
        <ChatCard content="Ut enim ad minim veniam quis nostrud execritation"  toImage={require('../assets/images/profile/a2.jpg')} mode="recived"/>
        <ChatCard content="Ut enim ad minim veniam quis nostrud execritation.Duis aute lrue dolor in at in" fromImage={require('../assets/images/profile/a1.jpeg')}  mode="sent"/>
        <ChatCard content="Ut enim ad minim veniam quis nostrud execritation"  toImage={require('../assets/images/profile/a2.jpg')} mode="recived"/>
        <ChatCard content="Ut enim ad minim veniam quis nostrud execritation.Duis aute lrue dolor in at in" fromImage={require('../assets/images/profile/a1.jpeg')}  mode="sent"/>
      </ScrollView>
      <View style={styles.footerStyle}>
         <Input
            placeholder='Type your message...'
            placeholderStyle={styles.placeholderStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.formInput}
            />
         <Icon
            name='paperclip'
            type="material-community"
            color='#000'
            containerStyle={{ marginRight:20}}
         />
         <Icon
            name='send'
            type="material-community"
            color='#FF4F93'
            containerStyle={{ marginRight:20}}
           />
      </View>
    
    </View>
    );
  }
}

export default ChatScreen;