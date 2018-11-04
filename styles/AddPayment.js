import EStyleSheet from 'react-native-extended-stylesheet';

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
    titleStyle:{
        color:'$fusciaColor',
        fontFamily: "proxima-nova-bold",
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
        marginTop:40 ,
        backgroundColor: '$purpleColor',
        width:150
      },
      buttonContainerStyle:{
        marginTop: 20,
      },
      titleButtonStyle:{
        fontFamily:'proxima-nova-bold',
        color:'$whiteColor',
        fontWeight: '400'
      },
      buttonOutlineStyle:{
        borderRadius:10,
        borderColor:'$purpleColor',
        borderWidth:1,
        marginTop:40 ,
        backgroundColor: '$whiteColor',

        width:150
      },
      titleButtonOutlineStyle:{
        fontFamily:'proxima-nova-bold',
        color:'$purpleColor',
        fontWeight: '400'
      },
      inlineStyle:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
        
      }
});

export default styles;