import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = EStyleSheet.create({
    containerStyle:{
    backgroundColor:'$whiteColor',
    padding:30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    },
    formContainerStyle:{
     marginTop:20,
    },
    imageContainerStyle:{
    alignItems:'center'
    },
    titleStyle:{
        color:'$fusciaColor',
        fontFamily: "proxima-nova-bold",
        fontSize:14,
        textAlign:'center',
        marginTop:10
      },
      iconStyle:{
        width:64,
        height:64,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10
      },
      imageStyle:{
        width:'100%',
        height:200,
        borderRadius:10,
        marginTop:10,
      },
      labelStyle:{
        color:'$spanColor',
        fontFamily: "proxima-nova-bold",
        fontSize:13,

      },
      placeholderStyle:{
        fontFamily: "proxima-nova-bold",
        color:'$blackColor',
        fontSize:13,
        marginLeft:-5
      },
      inputStyle:{
        fontFamily: "proxima-nova-bold",
        fontSize:13,
        color:'$blackColor',

      },
      formInput:{
        width:'100%',
        borderColor:'rgba(225,225,225,0.9)',
        
      },
      buttonStyle:{
        borderRadius:10,
        borderColor:'#fff',
        borderWidth:1,
        backgroundColor: '$purpleColor',
        width:300
      },
      buttonContainerStyle:{
        marginTop: 10,
        alignItems:'center'
      },
      titleButtonStyle:{
        fontFamily:'proxima-nova-bold',
        color:'$whiteColor',
        fontWeight: '400'
      },

      inlineStyle:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
        
      }
});

export default styles;