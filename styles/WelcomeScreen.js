import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const styles = EStyleSheet.create({
  wrapperStyle:{
    width: SCREEN_WIDTH,
    height:SCREEN_HEIGHT,
    backgroundColor:'$whiteColor'
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  titleStyle:{
      color:'$blackColor',
      fontFamily:'proxima-nova',
      fontSize:18,
      marginTop:20
  },
  borderStyle:{
      backgroundColor:'$fusciaColor',
      height:3,
      width:50,
      marginTop:10
  },
  textStyle:{
    color:'$paragraphColor',
    fontFamily:'proxima-nova',
    fontSize:16,
    textAlign:'center',
    marginTop:20,
    width:300
  },
  bottomContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonStyle:{
      backgroundColor:'$purpleColor',
      marginBottom:20,
      paddingRight:20,
      paddingLeft:20,
     
  },
  titleButtonStyle:{
    fontFamily:'proxima-nova',
    color:'$whiteColor',
  },
  iconContainerStyle:{
    alignItems: 'flex-end',
      
      
  },

});

export default styles;