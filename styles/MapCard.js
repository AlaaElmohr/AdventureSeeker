import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
    titleStyle:{
        color:'$blackColor',
        fontFamily:'proxima-nova-bold',
        fontSize:13,
        marginTop:5
        
     },
     spanStyle:{
      color:'$spanColor',
      fontFamily:'proxima-nova',
      fontSize:10,
      marginLeft:10
      
     },
     contextStyle:{
      color:'$paragraphColor',
      fontFamily:'proxima-nova',
      fontSize:10,
      marginTop:5,
      width:'45%'
     },
     inlineStyle:{
        flexDirection:'row',
     },
     imageStyle:{
      width:100,
      height:100,
      borderRadius:10,
     },
     contentStyle:{
     marginLeft:10,
     flexWrap: 'wrap'
     },
     containerStyle:{
        padding:10,
        backgroundColor:'$whiteColor',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
     }

});

export default styles;