import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import styles from '../styles/WelcomeScreen';
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
 
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <View style={styles.bottomContainer}>
          <Button
            title="Let's get Started"
            raised
            titleStyle={styles.titleButtonStyle}
            buttonStyle={styles.buttonStyle}
            onPress={this.props.onComplete}
          />
      </View>
      );
    }
    else{
      return (
       <Icon
          containerStyle={styles.iconContainerStyle}
          raised
          name='arrow-right'
          type='font-awesome'
          color='#000'
           />
      )
    }
  }


  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View style={styles.wrapperStyle} key={slide.title}>
        <View
          key={slide.title}
          style={styles.slideStyle}
        >
          <Image source={slide.image} />
          <Text style={styles.titleStyle}>{slide.title}</Text>
          <View style={styles.borderStyle}></View>
          <Text style={styles.textStyle}>{slide.text}</Text>
        </View>
        <View key={slide.title}>
         {this.renderLastSlide(index)}
        </View>
        </View>

       
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
      >
       {this.renderSlides()}
      </ScrollView>
    );
  }
}

export default Slides;
