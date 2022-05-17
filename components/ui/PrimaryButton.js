import{View,Text,Pressable,StyleSheet} from 'react-native';
import { Children } from 'react/cjs/react.development';
import Colors from '../../constants/Color';

function PrimaryButton({children , onPress}){

    
    return (
    <View style= {styles.buttonOuterContainer}>
    <Pressable 
    style={({pressed})=> pressed ? // if pressed, then do this 2 style IOS/Android
    [styles.pressed,styles.buttonInnerContainer] :
    styles.buttonInnerContainer} 
    onPress={onPress} 
    android_ripple ={{color:'white'}}>
     
        <Text style={styles.buttonText}>
            {children}
        </Text>
    
    </Pressable>
    </View>
    );

}

export default PrimaryButton;


const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden',
    },
    buttonInnerContainer:{
        backgroundColor:Colors.primary500,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:4,
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    // for IOS
    pressed:{
        opacity:0.75,
    },

});