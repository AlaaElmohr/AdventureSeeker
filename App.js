import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView,Dimensions, Image } from 'react-native';
import { AppLoading } from "expo";
import { createBottomTabNavigator , createStackNavigator,createDrawerNavigator, DrawerItems} from 'react-navigation';

import { fontAssets } from './helpers';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import PickAdventuresScreen from './screens/PickAdventuresScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import TripScreen from './screens/TripScreen';
import AdventuresListScreen from './screens/AdventuresListScreen';
import ExploreScreen from './screens/ExploreScreen';
import MyAdventureScreen from './screens/MyAdventureScreen';
import AdventureDetailScreen from './screens/AdventureDetailScreen';
import AdventureDetailAboutScreen from './screens/AdventureDetailAboutScreen';
import BucketListScreen from './screens/BucketListScreen';
import DestinationsListScreen from './screens/DestinationsListScreen';
import ChatScreen from './screens/ChatScreen';
import MyTicketScreen from './screens/MyTicketScreen';
import PaymentScreen from './screens/PaymentScreen';
import PickSlotScreen from './screens/PickSlotScreen';

EStyleSheet.build(Colors);
export default class App extends React.Component {
   state = {
    fontLoaded: false,
    ready: false,
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    const CustomDrawerComponent = (props) => (
     <SafeAreaView style={{flex:1}}>
     <View style={{height: 250}}>
      <Image source={require('./assets/images/logo.jpg')}  style={{width: '100%', height: 250}} />
     </View>

      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
     </SafeAreaView>
    );
    const RootStack = 
    createDrawerNavigator({
     Welcome: { screen: WelcomeScreen },
     SignUp: { screen: SignUpScreen },
     SignIn: { screen: SignInScreen },
     PickAdventures: { screen: PickAdventuresScreen },
     Main: {
      screen:createDrawerNavigator({
      Explore: { 
        screen: ExploreScreen ,
        main:{
        screen: createStackNavigator({
        Explore: { screen: ExploreScreen },
        DestinationsList: { screen: DestinationsListScreen },
        AdventureDetail: { screen: AdventureDetailScreen },
        AdventureDetailAbout: { screen: AdventureDetailAboutScreen },
      })}},
      AdventuresList: { screen: AdventuresListScreen },
      Map: { screen: MapScreen},
      Trip: { screen: TripScreen },
      Profile: { screen: ProfileScreen },
      Chat:{screen:ChatScreen},
      BucketList:{screen:BucketListScreen}
    },{
      contentComponent:CustomDrawerComponent,
      contentOptions: {
        activeTintColor: '#FF4F93',
        inactiveTintColor: '#A6A6A6',
        labelStyle: {
          fontSize: 13,
          fontFamily: 'proxima-nova-bold'
        },
      },
    })
  }
})
    

    if(!this.state.fontLoaded){
      return (
        <View>
        <Text>
           <AppLoading />
        </Text>
        </View>
      );
    }
    return (
       <RootStack />
    );
  }
}
