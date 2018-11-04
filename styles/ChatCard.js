import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = EStyleSheet.create({
    inlineStyle:{
        flexDirection:'row',
        width:SCREEN_WIDTH-90,
        marginTop:10
      },
      contentStyle:{
        fontFamily:'proxima-nova',
        fontSize:13,
        marginBottom:10
      },
      containerTextStyle:{
        width:SCREEN_WIDTH-90,
        marginTop:5,
        borderWidth: 1,

        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 7,
        padding:10
      },
      imageStyle:{
          height:40,
          width:40,
          borderRadius:80
      }
});

export default styles;
