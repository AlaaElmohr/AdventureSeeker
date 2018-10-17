import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    inlineStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:4,
        margin:10
       },
       titleStyle:{
         color:'$blackColor',
         fontFamily:'proxima-nova-semibold',
         fontSize:14,
       },
       spanStyle:{
         color:'$spanColor',
         fontFamily:'proxima-nova',
         fontSize:13,
       },
       imageStyle:{
           height:150,
           borderRadius:30
       },
       containerStyle:{
           marginTop:10,
           borderColor:'$borderColor',
           borderWidth:1,
           borderTopWidth:0,
           borderLeftWidth:0,
           borderRightWidth:0,   
            
       },
       iconWrapperStyle:{
         justifyContent:'flex-end',
         alignItems:'flex-end',
         paddingRight:30, 
         paddingTop:30,

       },
       iconContainerStyle:{
        backgroundColor:'$whiteColor',
        opacity:0.7,
        borderRadius:80,
        width:40,
        height:40,
        justifyContent:'center',
         alignItems:'center',

       }
       


});

export default styles;