import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HALF_WIDTH= SCREEN_WIDTH / 2;

const styles = EStyleSheet.create({
    p40:{
        paddingLeft:40,
        paddingRight:40
    },
    inlineStyle:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10,
     
    },
    storyStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
        
       
      },
    titleStoryStyle:{
        fontFamily:'proxima-nova-bold',
        color:'$blackColor',
    },
    numberStyle:{
        fontFamily:'proxima-nova-semibold',
        color:'$fusciaColor',
     },
     spanStyle:{
        fontFamily:'proxima-nova',
        color:'$spanColor',
        marginTop:5
     },
     containerStyle:{
        flex:1,
        position:'absolute',
        width:'100%',
        height:'100%'
        
     },
     profileInfoStyle:{
         marginTop:10
     },
     titleStyle:{
        textAlign:'center',
        fontFamily:'proxima-nova-bold',
        color:'$blackColor',
        fontSize:20   
     },
     storyContainerStyle:{
        paddingLeft:15,
        paddingRight:15,
        
     },
     contentStyle:{
         zIndex:2,
         marginTop:-50,
        backgroundColor:'$whiteColor',
       
        borderWidth: 1,
        borderBottomWidth:0,
        borderBottomColor: '$whiteColor' ,
        borderRadius: 20,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
     },

     ptop10:{
         marginTop:10
     },
     pleft15:{paddingLeft:15},
     buttonStyle:{
        backgroundColor:'$purpleColor',
        width:HALF_WIDTH-20,
        height:60,
        borderWidth:0,
        borderRadius:10,
        marginBottom:20,
        paddingRight:20,
        paddingLeft:20,
       
    },
    titleButtonStyle:{
      fontFamily:'proxima-nova-bold',
      color:'$whiteColor',
    },
    buttonOutlineStyle:{
        width:HALF_WIDTH-20,
        height:60,
        borderRadius:10,
        backgroundColor:'transparent',
        borderColor:'$purpleColor',
        borderWidth:1,
        marginBottom:20,
        paddingRight:20,
        paddingLeft:20,
       
    },
    titleButtonOutlineStyle:{
      fontFamily:'proxima-nova-bold',
      color:'$purpleColor',
    },

});

export default styles;