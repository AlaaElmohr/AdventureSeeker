import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = EStyleSheet.create({ 
    imageStyle:{
     height:200,
     width:SCREEN_WIDTH /2-20,
    },
    containerStyle:{
      paddingLeft:10
     },
    titleStyle:{
      color:'$whiteColor',
      fontFamily:'proxima-nova-bold',
   
    },
    spanStyle:{
      color:'$whiteColor',
      fontFamily:'proxima-nova',   
       },
});

export default styles;