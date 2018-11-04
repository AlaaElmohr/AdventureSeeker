import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
    padding20:{
    padding:20
    },
    inlineStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
      },
      titleStyle:{
        fontFamily:'proxima-nova-bold',
        fontSize:15,
        color:'$blackColor'
      },
      containerStyle:{
        backgroundColor:'$whiteColor',
        flex:1
      },
      imageStyle:{
          height:64,
          width:64,
          alignItems:'center',
        justifyContent:'center',
      },
      contentStyle:{
        marginTop:20
      },
      countStyle:{
        fontFamily:'proxima-nova',
        color:'$blackColor',
        paddingLeft:20,
        paddingRight:20,
      },
      ticketStyle:{
        flexDirection:'row',
        
        justifyContent:'space-between',
        alignItems:'center',
        
      },
      CalendarStyle:{
        padding:20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 1,
        marginTop:10
      },
      buttonStyle:{
        borderRadius:10,
        borderColor:'#fff',
        borderWidth:1,
        backgroundColor: '$purpleColor',
        width:'90%',
        height:60
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

});

export default styles;