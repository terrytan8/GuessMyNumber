import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground ,SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
export default function App() {

  const [userNumber , setUserNumber] = useState();
  const [gameIsOver, setGameisOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState();

   const [fontsLoaded] = useFonts ({
    'mon-serrat-bold': require ('./assets/fonts/Montserrat-Bold.ttf'),
    'mon-serrat': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>;
  }

  function pickedNumberHandler (pickedNumber){
    setUserNumber(pickedNumber);
    setGameisOver (false);
  }

  function gameOverHandler ( numberOfRounds){
    setGameisOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler (){
    setUserNumber (null);
    setGuessRounds (0);
  }

  let screen = <StartGameScreen onPickedNumber = {pickedNumberHandler}/>
  if (userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler}/>
  }
  if (gameIsOver && userNumber){
    screen = <GameOverScreen userNumbers={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }
  return (
    <>
    <StatusBar style='dark'/>
    <LinearGradient colors={['#fbf99e','#cc9411']} style ={styles.backgroundStyle} 
    >
      <ImageBackground source={require ('./assets/images/background.jpg')}
      resizeMode = 'cover'
      style = {styles.backgroundStyle}
      imageStyle ={styles.backgroundImage}
      >
      <SafeAreaView style = {styles.backgroundStyle}>
      {screen}
      </SafeAreaView>
      
      </ImageBackground>
    </LinearGradient>
    </>
    
  );
}

const styles = StyleSheet.create({

  backgroundStyle:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.15
  }
  
});
