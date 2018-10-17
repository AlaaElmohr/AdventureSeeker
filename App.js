import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from "expo";
import { createBottomTabNavigator , createStackNavigator} from 'react-navigation';

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
import CityDetailScreen from './screens/CityDetailScreen';
import AdventureDetailScreen from './screens/AdventureDetailScreen';
import AdventureDetailAboutScreen from './screens/AdventureDetailAboutScreen';

import DestinationsListScreen from './screens/DestinationsListScreen';

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
    const RootStack = createBottomTabNavigator({
     // Welcome: { screen: WelcomeScreen },
      //SignUp: { screen: SignUpScreen },
      //SignIn: { screen: SignInScreen },
      //sPickAdventures: { screen: PickAdventuresScreen },
      Main: {
        screen: createBottomTabNavigator({
          Explore: {   
            screen: createStackNavigator({
            DestinationsList: { screen: DestinationsListScreen },
            CityDetail: { screen: CityDetailScreen },
            Explore: { screen: ExploreScreen },
            AdventureDetail: { screen: AdventureDetailScreen },
            AdventureDetailAbout: { screen: AdventureDetailAboutScreen },
          },{
            navigationOptions: {
              tabBarVisible: false 
            }}
          )
          
         },
          //PickAdventures: { screen: PickAdventuresScreen },
          //AdventuresList: { screen: AdventuresListScreen },

          //Map: { screen: MapScreen},
          //Trip: { screen: TripScreen },
          //Profile: { screen: ProfileScreen },
         
        }, {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          },
          navigationOptions: {
            tabBarVisible: true
          },
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false 
      },
      lazyLoad: true
    });
    

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


/*******
 *     Explore: {   
            screen: createStackNavigator({

            Explore: { screen: ExploreScreen },

            AdventureDetail: { screen: AdventureDetailScreen },
            AdventureDetailAbout: { screen: AdventureDetailAboutScreen },
            DestinationsList: { screen: DestinationsListScreen },
            CityDetail: { screen: CityDetailScreen },
            
          },{
            navigationOptions: {
              tabBarVisible: false 
            }}
          )
          
         },
 * *** */