import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bottomButtons: {
      position: 'absolute',
      top: 40,      
    },
    leftBotButton: {
      position: 'absolute',
      left: 100
    },
    middleBotButton: {
      position: 'absolute',

    },
    rightBotButton: {
      position: 'absolute',
      right: 100
    },
    blueHalf: {
      flex: 1,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', 
    },  
    greenHalf: {
      flex: 1,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', 
    },
    separator: {
      height: 0,
      backgroundColor: 'white',
    },
    buttonWrapper: {
      position: 'absolute',
      width: '100%',
      top: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    showMenuButton: {
      bottom: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    sideButton: {
      position: 'absolute',
      bottom: 20, 
    },
    ChooseHP: {
      left: 20,
    },
    Restart: {
      right: 10,
    },
    outwardText: {
      color: 'white',
      fontSize: 86,
      transform: [{ rotate: '180deg' }],
    },
    inwardText: {
      color: 'white',
      fontSize: 86,
    },
    newButtonsWrapper: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
  },
    newButton: {
      bottom: 20, 
    },
    newButton_upside: {
      bottom: 340,
    },
    Players: {
      right: 80,
    },
    Player_name: {
      color: "white",
      fontSize: 24,
      transform: [{rotate: '180deg'}],
    },
    Player_name_2: {
      color: "white",
      fontSize: 24,
    },
    row: {
      flexDirection: 'row',
      flex: 1,
    },
    quadrant: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
    },
    blue: {
      backgroundColor: 'blue',
    },
    red: {
      backgroundColor: 'red',
    },
    black: {
      backgroundColor: 'black',
    },
    text: {
      fontSize: 20,
      color: 'black', // Adjust the color if necessary for visibility
      transform: [{ rotate: '180deg' }],
    },
    text_bottom: {
      fontSize: 20,
      color: 'black', // Adjust the color if necessary for visibility
    },
    archive: {
      position: 'absolute',
      top: 415,
      right: 275,
      width: 50,
      height: 50,
      padding: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      zIndex:10
    },
    winnerText: {
      color: 'white',
      fontSize: 86,

    },
    container_archive: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f8f8f8',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    card: {
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    resetButton: {
      marginTop: 16,
    },
    colorButton: {
      position: 'absolute',
      top: 450,
      right: 0,
      width: 50,
      height: 50,
      padding: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      zIndex:100
    },
    NewButton5: {
      position: 'absolute',
      top: 500,
      right: 200,
      width: 50,
      height: 50,
      padding: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      zIndex:100
    },
    NewButton4: {
      position: 'absolute',
      top: 500,
      right: 100,
      width: 50,
      height: 50,
      padding: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      zIndex:100
    },
    NewButton3: {
      position: 'absolute',
      top: 500,
      right: 0,
      width: 50,
      height: 50,
      padding: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      zIndex:100
    },
    NewButton2: {
      position: 'absolute',
      top: 500,
      right: 0,
      width: 50,
      height: 50,
      padding: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      zIndex:100
    },
    NewButton1: {
      position: 'absolute',
      top: 600,
      right: 100,
      width: 50,
      height: 50,
      padding: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      zIndex:100
    },
    newButtonsWrapper_red: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: 'red',
    },
    redHalf: {
      flex: 1,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', 
    },
  });
