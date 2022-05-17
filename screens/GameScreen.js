import { View,Text ,StyleSheet, Alert ,FlatList,useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Color";
import{useState, useEffect} from 'react'
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import {AntDesign} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween (min, max, exclude){
    const rndNum = Math.floor (Math.random() * (max-min))+ min;

    if (rndNum === exclude){
        return generateRandomBetween (min.max.exclude);
    }else{
        return rndNum;
    }
}
let minBoundary =1;
let maxBoundary = 100;


function GameScreen ({userNumber , onGameOver}){
    const initialGuess = generateRandomBetween (1,100,userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState ([initialGuess]);
    const {width , height} = useWindowDimensions();

    useEffect(()=>{
        if (currentGuess === userNumber){
            onGameOver(guessRounds.length);

        }
    } ,[currentGuess,userNumber,onGameOver]); // IF this 3 change, will run is function

    useEffect(()=>{
        minBoundary =1,
        maxBoundary = 100
    },[]);
    function nextGuessHandler (direction){ // 'lower', 'greater'

        if ((direction === 'lower' && currentGuess <userNumber)||
            (direction === 'greater' && currentGuess > userNumber)
        )
        {
            Alert.alert ("don't lie !",'You know that this is wrong...',
            [{text:'Sorry!', style:'cancel'}]
            )
            return;
        }
        if (direction ==='lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess +1;
           
    }
    const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds =>[newRndNumber, ...prevGuessRounds]);
}

const guessRoundsListLength = guessRounds.length;

let content = (
    <>
    <NumberContainer>
        {currentGuess}
    </NumberContainer>
    <Card>
        <InstructionText style = {styles.instructionText}>Higher or Lower?</InstructionText>
        <View style = {styles.buttonsContainer}>
            <View style = {styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
            <AntDesign name="plus" size={24} color="black" />
            </PrimaryButton>
            </View>
       
        <View style = {styles.buttonContainer}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
        <Ionicons name="remove" size={24} color="black" />
        </PrimaryButton>
        </View>
        
        </View>
       
    </Card>
    </>
)
    

if (width >500){
   

    content =<>
    
    
    <View style = {styles.buttonsContainerWide}>
            <View style = {styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
            <AntDesign name="plus" size={24} color="black" />
            </PrimaryButton>
            </View>
            <NumberContainer>{currentGuess}</NumberContainer>
        <View style = {styles.buttonContainer}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
        <Ionicons name="remove" size={24} color="black" />
        </PrimaryButton>
        </View>
        
        </View>
    

    
    </> 

}

 return (
<View style = {styles.screen}>
    <Title>Opponent Guest !</Title>
    
    {content}
    <View>
        {/*guessRounds.map (guessRound => <Text key={guessRound}>{guessRound}</Text>)*/
        <FlatList  style = {styles.listContainer}
        data ={guessRounds} 
        renderItem={(itemData)=><GuessLogItem roundsNumber ={guessRoundsListLength -itemData.index} guess ={itemData.item}/>}
        keyExtractor ={(item) => item}
        />
        }
    </View>
 </View>
 
 
 )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
        alignItems:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:Colors.secondary500,
        textAlign:'center',
        borderWidth:2,
        borderColor:Colors.secondary500,
        padding:8,

    },
    buttonsContainerWide:{
        flexDirection:'row',
        alignItems:'center'
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    },
    instructionText:{
        marginBottom:12,
    },
    listContainer:{
        flex:1,
        padding:16
    }
  });