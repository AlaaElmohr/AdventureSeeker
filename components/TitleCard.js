import React, { Component } from 'react';
import { Text,View, Image } from 'react-native';

import styles from '../styles/TitleCard';

class TitleCard extends Component {

  render() {
    return (
      <View style={styles.inlineStyle}>
        <View >
            <Text style={styles.spanStyle}>{this.props.span}</Text>
            <Text style={styles.titleStyle}>{this.props.title}</Text>
        </View>
        <View>
            <Image source={this.props.image}  style={styles.imageStyle}/>
        </View> 
      </View>
    );
  }
}

export default TitleCard;
