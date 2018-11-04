import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    wrapperStyle:{
    },
    infoStyle:{
        justifyContent:'center',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:10,
        elevation:1
        },
    ptop10:{
        marginTop:10
    },
    containerStyle:{
    marginTop:15,
    flexDirection:'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#eee',
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    },
    iconContainerStyle:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    imageStyle:{
        width:110,
        height:110,
        borderRadius:10,       
    },
  
    inlineStyle:{
        flexDirection:'row',
        width:'100%',
      },
      titleStyle:{
          fontFamily:'proxima-nova-bold',
          color:'$blackColor',
      },
      reviewStyle:{
          fontFamily:'proxima-nova',
          color:'$blackColor',
          fontSize:11,
       },
       spanStyle:{
          fontFamily:'proxima-nova',
          color:'$spanColor',
          
       },

});

export default styles;