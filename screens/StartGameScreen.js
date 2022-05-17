import { StyleSheet, Dimensions, KeyboardAvoidingView,
     View,TextInput,Button,Alert, useWindowDimensions,ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import {useState} from'react';
import Colors from '../constants/Color';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickedNumber}){
    const [enteredNumber, setEnteredNumber] = useState ('');

    const {width , height} = useWindowDimensions(); // for dynamic dimension

    function numberInputHandler(inputText){
        setEnteredNumber (inputText);
    }

    function resetInputHandler (){
        setEnteredNumber('')
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >99){
            Alert.alert('Invalid number','Number has to be a number between 0 - 99',
            [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
            );
            return;
        }
        onPickedNumber (chosenNumber);
    }

    const marginTopDistance = height < 400 ? 30 :100;

    return(
        // when keyboard is open u can slide ur screen
    <ScrollView style = {styles.screen}>
    <KeyboardAvoidingView style = {styles.screen} behavior ='position'>
    <View style ={[styles.rootContainer,{marginTop: marginTopDistance}]}>
        <Title>Guess My Number ?</Title>
    <Card>
        <InstructionText>
        Enter a Number
        </InstructionText>
        <TextInput 
        style = {styles.textInput} 
        maxLength ={2}
        keyboardType ='number-pad'
        autoCapitalize='none'
        autoCorrect = {false}
        value = {enteredNumber}
        onChangeText = {numberInputHandler}
        />
        <View style = {styles.buttonsContainer}>
            <View style = {styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>
            Reset</PrimaryButton>
            </View>
            <View style = {styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>
            Confirm
        </PrimaryButton>
            </View>
        
        </View>

    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
)
    

}



export default StartGameScreen;

//const height = Dimensions.get('window').height; 要放在上面的function

const styles = StyleSheet.create({

    screen:{
        flex:1,
        
    },

    
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:24,
        padding: 16,
        marginTop:100,
        borderRadius:6,
        backgroundColor:Colors.secondary500,
        elevation:4, //For shadow for android only
        shadowColor:'black',
        shadowOffset:{width: 0,height: 2},
        shadowOpacity: 0.25,
        shadowRadius:6, // This four is for IOS
    },
    textInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:'white',
        borderBottomWidth:2,
        color:'white',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:12
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    },
    rootContainer:{
        flex:1,
       // marginTop:height < 400 ? 30 : 100,
        alignItems:'center'
    },
    

});