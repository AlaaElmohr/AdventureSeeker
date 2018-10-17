import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = EStyleSheet.create({
    inlineStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:4
      },
      titleStyle:{
        fontFamily:'proxima-nova-bold',
        fontSize:15,
        color:'$blackColor'
      },
      containerStyle:{
        width:SCREEN_WIDTH/2-20,
        backgroundColor:'$whiteColor',
        marginTop:5,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 7,
        padding:20
      },
      imageStyle:{
          height:64,
          width:64,
          alignItems:'center',
        justifyContent:'center',
      }

});

export default styles;