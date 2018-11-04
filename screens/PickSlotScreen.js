import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import { Icon, Button,Badge  } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';

import HeaderComponent from '../components/HeaderComponent';
import Title from '../components/Title';
import styles from '../styles/PickSlotScreen';

class PickPlotScreen extends Component {
    static navigationOptions = {
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
    constructor(props) {
      super(props);
      this.state = {
        selectedStartDate: null,
        count:0,
      };
      this.onDateChange = this.onDateChange.bind(this);
    }
   
    onDateChange(date) {
      this.setState({
        selectedStartDate: date,
      });
    }
    renderBatch(params){
      return(
      <Badge containerStyle={{ backgroundColor: 'transparent',borderColor:params.color,borderWidth:1,marginTop:10,padding:30,height:40}}>
      <Text style={{color:params.color,fontFamily:'proxima-nova'}}>{params.text}</Text>
     </Badge>
      )
    }
    render() {
      const { selectedStartDate } = this.state;
      const startDate = selectedStartDate ? selectedStartDate.toString() : '';
      
    return (
      <ScrollView stickyHeaderIndices={[0]} style={styles.containerStyle}>
        <View>
            <HeaderComponent title="Pick Your Slot" goBack="true" imageBackground="false" navigation={this.props.navigation} />
        </View>
        <View style={styles.contentStyle}>
        <View>
         <View style={{paddingLeft:20}}>
           <Title text="Select date" />
          </View>
          <View style={styles.CalendarStyle}>
          <CalendarPicker
          onDateChange={this.onDateChange}
        />
        </View>
 
        </View>
        <View style={styles.padding20}>
         <Title text="Select your batch" />
         <View style={styles.inlineStyle}>
           {this.renderBatch({color:'#FF4F93',text:'9:00-10:30'})}
           {this.renderBatch({color:'#FF4F93',text:'9:00-10:30'})}
         </View>
         <View style={styles.inlineStyle}>
         {this.renderBatch({color:'#A6A6A6',text:'9:00-10:30'})}
         {this.renderBatch({color:'#A6A6A6',text:'9:00-10:30'})}
       </View>
       <View style={styles.inlineStyle}>
       {this.renderBatch({color:'#FF4F93',text:'9:00-10:30'})}
       {this.renderBatch({color:'#FF4F93',text:'9:00-10:30'})}
     </View>
          
        </View>
        <View style={[styles.inlineStyle,styles.padding20]}>
          <Title text="Amount Of Texts" />
          <View style={styles.ticketStyle}>
          <Icon
          
          name='minus-circle-outline'
          type='material-community'
          color='#000'
          onPress={()=>{this.state.count-1}}
          />
          <Text style={styles.countStyle}>{this.state.count}</Text>
          <Icon
          name='plus-circle-outline'
          type='material-community'
          color='#000'
          onPress={()=>{this.state.count+1}}
        />
          </View>
        </View>
        <Button
        title='Book Slots'
        titleStyle={styles.titleButtonStyle}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainerStyle}
        />
         
         
        </View>
      </ScrollView>
    );
  }
}

export default PickPlotScreen;