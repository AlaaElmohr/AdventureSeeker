import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    buttonStyle:{
        borderRadius:5,
        borderColor:'#fff',
        borderWidth:1,
        marginTop:10,
        width:90,
        height:30,
        backgroundColor: '#fff',
      },
      titleButtonStyle:{
        fontFamily:'proxima-nova-bold',
        color:'$blackColor',
        fontSize:12
      },
      imageStyle:{
        width:16,
        height:16,
    },
    infoStyle:{
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },
    contentStyle:{
       padding:20,
       overflow: 'hidden',
       borderTopRightRadius: 10, 
       borderTopLeftRadius: 0,
       borderBottomLeftRadius: 0,
       borderBottomRightRadius: 10
    
    },
     containerStyle:{
      
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-around',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#eee',
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        },
    inlineStyle:{
        flexDirection:'row',
        marginTop:5
      },
      titleStyle:{
          fontFamily:'proxima-nova-bold',
          color:'$whiteColor',
          fontSize:14,
          marginBottom:20
      },
      dayStyle:{
          fontFamily:'proxima-nova-bold',
          color:'$spanColor',
          fontSize:30,
       },
       monthStyle:{
        fontFamily:'proxima-nova-bold',
        color:'$spanColor',
        fontSize:15,
     },
       spanStyle:{
          fontFamily:'proxima-nova',
          color:'$whiteColor',
          fontSize:12,
          marginLeft:10
          
       },
});

export default styles;