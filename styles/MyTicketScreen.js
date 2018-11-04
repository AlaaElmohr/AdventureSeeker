import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = EStyleSheet.create({
    lineStyle:{
        width:2,
        height:50,
        backgroundColor:'#F4F4F4'
    },
    buttonStyle:{
        borderRadius:10,
        borderColor:'#fff',
        borderWidth:1,
        backgroundColor: '$purpleColor',
        width:200
      },
      buttonContainerStyle:{
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center'
      },
      titleButtonStyle:{
        fontFamily:'proxima-nova-bold',
        color:'$whiteColor',
        fontWeight: '400'
      },
    imageContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
    },
    imageStyle:{
     width:400,
     height:50
    },
    inlineStyle:{
        flexDirection:'row',
        padding:4
      },
      titleStyle:{
        fontFamily:'proxima-nova-bold',
        fontSize:17,
        color:'$whiteColor',
        marginTop:10
      },
      eventStyle:{
       backgroundColor:'$fusciaColor',
       padding:5,
       borderTopRightRadius: 0, 
       borderTopLeftRadius: 10,
       borderBottomLeftRadius: 0,
       borderBottomRightRadius: 10,
       width:120,

      },
      eventTitleStyle:{
        
        fontFamily:'proxima-nova',
        fontSize:13,
        color:'$whiteColor'
      },
      spanStyle:{
        fontFamily:'proxima-nova',
        fontSize:13,
        color:'$whiteColor',
        marginLeft:5
      },
      containerStyle:{
        flex:1,
        backgroundColor:'$whiteColor',
       
      },
      titleBodyStyle:{
        fontFamily:'proxima-nova-bold',
        fontSize:13,
        color:'$fusciaColor',
      },
      infoStyle:{
        fontFamily:'proxima-nova',
        color:'$blackColor',
      },
      largeFont:{
        fontSize:16
      },
      smallFont:{
        fontSize:13
      },
      bodyStyle:{
        backgroundColor:'$whiteColor',
        padding:30,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
      },
      headerStyle:{
       backgroundColor:'$purpleColor',
       padding:30,
       borderRadius: 20, 
       borderColor: '#ddd',
       borderWidth: 1,
       borderBottomWidth: 0,
       borderRightWidth: 0,
       borderLeftWidth: 0,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity: 0.8,
       shadowRadius: 2,
       elevation: 3,
      },
      contentStyle:{
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:'5%'
        
      },
      imageStyle:{
          height:64,
          width:64,
          alignItems:'center',
        justifyContent:'center',
      }

});

export default styles;