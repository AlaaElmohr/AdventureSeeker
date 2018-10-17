import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { Button } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';
import PickCard from '../components/PickCard';
import styles from '../styles/PickAdventuresScreen';
class PickAdventuresScreen extends Component {
  static navigationOptions = {
        header: null,
        tabBarVisible:false
  };

  render() {
    return (
      <View>
        <View>
        <HeaderComponent title="Pick your Adventure" goBack="true" imageBackground="false"/>
       </View>
       <View>
        <View style={styles.inlineStyle}>
        <PickCard title="Canoeing" image={require('../assets/images/pick/a1.png')}/>
        <PickCard title="Scuba Diving" image={require('../assets/images/pick/a2.png')}/>

        </View>
        <View style={styles.inlineStyle}>
        <PickCard title="Hiking" image={require('../assets/images/pick/a3.png')}/>
        <PickCard title="Skiing" image={require('../assets/images/pick/a4.png')}/>

        </View>
        <View style={styles.inlineStyle}>
        <PickCard title="Camping" image={require('../assets/images/pick/a5.png')}/>
        <PickCard title="Sky Diving" image={require('../assets/images/pick/a6.png')}/>

        </View>
        <View>
        <Button
          title="Explore"
          raised
          titleStyle={styles.titleButtonStyle}
          buttonStyle={styles.buttonStyle}
        />
        </View>
       </View>
      </View>
    );
  }
}

export default PickAdventuresScreen;