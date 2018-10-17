import React, { Component } from 'react';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { title:'Escape The Ordinary!', text: "Pack everything you need,Let's hit the Road.Life's too short for worring and waiting.", image: require('../assets/images/E.png') },
  { title:'Discover awe Thrills!', text: 'Fill your life with Adventures, not things.Hash Trails helps you fine daring thrills all over the world.', image: require('../assets/images/D.png') },
  { title:"Wander don't Wonder!", text: "life's meant for good friends, and great adventures, share your favourite spots with amigo!", image: require('../assets/images/W.png') }
];

class WelcomeScreen extends Component {
  static navigationOptions = {
        header: null,
        tabBarVisible: false 

  };
  onSlidesComplete = () => {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;
