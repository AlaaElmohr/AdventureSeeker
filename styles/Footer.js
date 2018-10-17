import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
    inlineStyle:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     padding:4
    },
    buttonStyle:{
       
    },
    containerStyle:{
       height:80,
       padding:10,
       borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    titleStyle:{
      fontFamily:'proxima-nova-semibold',
      fontSize:15,
    },
    spanStyle:{
      fontFamily:'proxima-nova',
      fontSize:14,
    },
    titleButtonStyle:{
        fontFamily:'proxima-nova-bold',
      },
      starContainerStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    } 
});

export default styles;