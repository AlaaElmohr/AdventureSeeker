import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
const sliderWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
    wrapperStyle:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
    },
    containerStyle:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        padding:20,
    },
    contextStyle:{
        fontFamily:'proxima-nova',
        color:'$paragraphColor',
        fontSize:13,
        marginTop:10,
        marginBottom:10
    },
    sliderStyle:{
        borderRadius:10,
        height:100,
        width:sliderWidth/3
    },
    inlineStyle:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    priceStyle:{
        color:'$fusciaColor',
        fontFamily:'proxima-nova-semibold',

    }

});

export default styles;