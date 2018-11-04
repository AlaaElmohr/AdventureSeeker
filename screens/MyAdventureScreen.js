import React, { Component } from 'react';
import { Text,View,Dimensions,ScrollView } from 'react-native';
import { Icon,Button } from 'react-native-elements'
import styles from '../styles/MyAdventureScreen';
import HeaderComponent  from '../components/HeaderComponent';
import TitleCard from '../components/TitleCard';
import Title from '../components/Title';
import Card from '../components/Card';
import Carousel from 'react-native-snap-carousel';
const sliderWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;
const Recommendation= [
  { title:'Zipilning', context: "Machu Picchu", thumbnail: require('../assets/images/a-1.png'), rate: 4},
  { title:'Gold cost surfing', context: 'Super Banks', thumbnail: require('../assets/images/a-2.jpg'),rate:5 },
  { title:"White water raw", context: "Costa Rica", thumbnail: require('../assets/images/a-3.jpg'),rate:4}

];
const Gallery = [
  { thumbnail: require('../assets/images/hiking/a1.jpeg') },
  { thumbnail: require('../assets/images/hiking/a2.jpeg') },
  { thumbnail: require('../assets/images/hiking/a3.jpeg')}
];
class MyAdventureScreen extends Component {
    static navigationOptions = {
        header:null,
        tabBarLabel:'Map',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="map" type="material-community"  color={tintColor} />;
        },
        tabBarOptions: {
          activeTintColor: '#FF4F93',
          inactiveTintColor: '#A6A6A6',
          labelStyle: {
            fontSize: 11,
            fontFamily: 'proxima-nova'
          },
        },
      };
      _renderItem ({item, index}, parallaxProps, col) {
        return (
          <Card title={item.title} span={item.span} context={item.context} image={item.thumbnail} rate={item.ra} col={col}/>
        );
    }
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={{zIndex:2}}>
        <HeaderComponent title="Adventure Detail" goBack="true" imageBackground="true" image={require('../assets/images/adventure/adventure-5.jpg')} navigation={this.props.navigation} />
        </View>
        <View style={styles.titleCardStyle}>
        <TitleCard title="Hiking" span="Peru" image={require('../assets/images/pick/a3.png')}/>
        </View>
        <ScrollView style={styles.contentStyle}>
        <View>
        <Title text="Description"/>
        <Text style={styles.titleStyle}>Get acuainted with the wonders of the incas in the exhilarating introduction to Peru. Embrace cultures past and present in the hills surrounding Cusco and delight.</Text>
        </View>
        <View>
        <View style={styles.ptop10}>    
        <Title text="Gallery"/>
        <Carousel
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth/2}
          itemHeight={200}
          data={Gallery}
          renderItem={this._renderItem}
          hasParallaxImages={true}
          windowSize={1} 
          col={1.5}
          />
        </View>
        <View style={styles.ptop10}>    
        <Title text="Top Experience"/>
        <Carousel
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth/3}
          itemHeight={itemHeight}
          data={Recommendation}
          renderItem={this._renderItem}
          hasParallaxImages={true}
          windowSize={1} 
          col={3}
          />
        </View>
        </View>
        </ScrollView>
        
      </View>

    );
  }
}

export default MyAdventureScreen;