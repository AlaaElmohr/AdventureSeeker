import React, { Component } from 'react';
import { Text, View, Dimensions,ScrollView } from 'react-native';
import { Icon,Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

import HeaderComponent  from '../components/HeaderComponent';
import Title from '../components/Title';
import Card from '../components/Card';
import styles from '../styles/ExploreScreen';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
const sliderWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;
const entries = [
  { title:'Carribean Thrills', span: "180+ Experience", context: "Surfing in cold water is way different than the warm caribbean waves.", thumbnail: require('../assets/images/signIn.jpeg') },
  { title:'Discover awe Thrills!',span: "180+ Experience", context: 'Fill your life with Adventures, not things.Hash Trails helps you fine daring thrills all over the world.', thumbnail: require('../assets/images/signIn-2.jpeg') },
  { title:"Wander don't Wonder!",span: "180+ Experience", context: "life's meant for good friends, and great adventures, share your favourite spots with amigo!", thumbnail: require('../assets/images/signIn-3.jpeg')}
];
const Recommendation= [
  { title:'Zipilning', context: "Machu Picchu", thumbnail: require('../assets/images/a-1.png'), rate: 4},
  { title:'Gold cost surfing', context: 'Super Banks', thumbnail: require('../assets/images/a-2.jpg'),rate:5 },
  { title:"White water raw", context: "Costa Rica", thumbnail: require('../assets/images/a-3.jpg'),rate:4}

];


class ExploreScreen extends Component {

    static navigationOptions = {
  
        header:null,
        drawerLabel:'Explore',
        drawerIcon: ({ tintColor }) => {
          return <Icon name="apple-safari" type="material-community"  color={tintColor} />;
        },
        contentOptions: {
          activeTintColor: '#FF4F93',
          inactiveTintColor: '#A6A6A6',
          labelStyle: {
            fontSize: 11,
            fontFamily: 'proxima-nova'
          }
        
        },
      };

     _renderItem ({item, index}, parallaxProps, col,navigate) {
        return (
          <View>
          <Card title={item.title} span={item.span} context={item.context} image={item.thumbnail} rate={item.rate} col={col} OnPress={ ()=> this.goTo}/>
          </View>
          );
    }
  render() {
    return (
    
        
        <ScrollView stickyHeaderIndices={[0]} style={styles.containerStyle}>
        <View>
         <HeaderComponent title="Home" goBack="false" imageBackground="false" navigation={this.props.navigation}/>
        </View>
        <View style={[styles.contentStyle,styles.inlineStyle]}>       
        <Title text="Explore Adventures"/>
        <Button title="View all" titleStyle={styles.titleButtonStyle} buttonStyle={styles.buttonStyle} color="#FF4F93" onPress={()=>{this.props.navigation.navigate('DestinationsList')}}/>
        </View>
        <View style={{marginLeft:-35}}>

        <Carousel
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth-100}
          itemHeight={itemHeight}
          data={entries}
          renderItem={this._renderItem}
          hasParallaxImages={true}
          windowSize={1} 
          col={1.5}
          />
        </View>
        <View style={[styles.contentStyle,styles.inlineStyle]}>       
        <Title text="Recommendation for you"/>
        <Button title="View all" titleStyle={styles.titleButtonStyle} buttonStyle={styles.buttonStyle} color="#FF4F93" onPress={()=>{this.props.navigation.navigate('AdventuresList')}}/>
        </View>
        <View>
        <Carousel  
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth/3}
          itemHeight={itemHeight}
          data={Recommendation}
          renderItem={this._renderItem}
          hasParallaxImages={true}
          windowSize={1} 
          col={3}
          navigate={this.props.navigation}
          />
        </View>
        <View style={[styles.contentStyle,styles.inlineStyle]}>       
        <Title text="Explore Adventures"/>
        <Button title="View all" titleStyle={styles.titleButtonStyle} buttonStyle={styles.buttonStyle} color="#FF4F93"/>
        </View>
        <View style={{marginLeft:-35}}>
        <Carousel
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth-100}
          itemHeight={itemHeight}
          data={entries}
          renderItem={this._renderItem}
          hasParallaxImages={true}
          windowSize={1} 
          col={1.5}
          />
        </View>
    </ScrollView>
    );
  }
}

export default ExploreScreen;
