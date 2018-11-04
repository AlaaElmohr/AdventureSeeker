import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = EStyleSheet.create({
  containerStyle:{
    backgroundColor:'#FBFBFB',
    flex:1

  },
  footerStyle:{
      position:'absolute',
      backgroundColor:'$whiteColor',
      top:SCREEN_HEIGHT-50,
      width:'100%',
      height:50,
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 3,
      marginTop:5

  },
  placeholderStyle:{
    fontFamily: "proxima-nova",
    color:'$spanColor',
    fontSize:13
  },
  inputStyle:{
    fontFamily: "proxima-nova",
    fontSize:15,
    color:'rgba(225,225,225,0.3)',
    borderWidth:0
  },
  formInput:{
    width:'50%',    
  },
});

export default styles;
