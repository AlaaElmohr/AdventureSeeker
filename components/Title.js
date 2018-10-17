import React, { Component } from 'react';
import { Text,View } from 'react-native';

import styles from '../styles/Title';

class Title extends Component {

  render() {
    return (
      <View>
         <View style={styles.lineStyle}></View>
         <Text style={styles.titleStyle}>{this.props.text}</Text>
      </View>
    );
  }
}

export default Title;
