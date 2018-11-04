import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const styles = EStyleSheet.create({

  containerStyle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle:{
      color:'$whiteColor',
      fontFamily:'jenthill',
      fontSize:38
  },
  placeholderStyle:{
    fontFamily: "proxima-nova",
    textAlign:'center',
    fontSize:13
  },
  inputStyle:{
    fontFamily: "proxima-nova",
    textAlign:'center',
    fontSize:15,
    color:'rgba(225,225,225,0.3)',
  },
  formInput:{
    marginTop:30,
    width:200,
    borderColor:'rgba(225,225,225,0.9)',
    
  },
  loginStyle:{
   flexDirection:'row',
   justifyContent:'center',
   marginBottom:80
  },
  textStyle:{
    color:'$whiteColor',
    fontFamily: "proxima-nova",
    marginRight:10,
    textAlign:'center'

  },
  buttonStyle:{
    borderRadius:20,
    borderColor:'#fff',
    borderWidth:1,
    marginTop:40 ,
    backgroundColor: 'transparent',
    width:200
  },
  buttonContainerStyle:{
    marginTop: 20,
  },
  titleButtonStyle:{
    fontFamily:'proxima-nova',
    color:'$whiteColor',
    fontWeight: '400'
  },
  mtop30:{
      marginTop:60
  },
  lineStyle:{
      height:1,
      backgroundColor:'rgba(225,225,225,0.3)',
      width:100,
      marginTop:50
  },
  facebookContainerStyle:{
      borderRadius:80,
      marginTop:30,
      width:40,
      height:40,
      backgroundColor:'$facebookColor',
      alignItems: 'center',
      justifyContent: 'center',
  },
  iconStyle:{
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default styles;