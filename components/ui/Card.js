import { StyleSheet,View, Dimensions} from 'react-native';
import { exp } from 'react-native/Libraries/Animated/Easing';
import Colors from '../../constants/Color';

function Card ({children}){
    return(
        <View style = {styles.inputContainer}>
            {children}
        </View>

    )
}

export default Card;







const {width} = Dimensions.get('window').width;





const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:24,
        padding: 16,
        marginTop:width < 380 ?18 :36,
        borderRadius:6,
        backgroundColor:Colors.secondary500,
        elevation:4, //For shadow for android only
        shadowColor:'black',
        shadowOffset:{width: 0,height: 2},
        shadowOpacity: 0.25,
        shadowRadius:6, // This four is for IOS
    },
});