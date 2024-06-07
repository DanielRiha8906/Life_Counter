import { StyleSheet } from 'react-native';

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
      position: 'relative', // Ensure relative positioning for absolute children
    },
    greenHalf: {
      flex: 1,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', // Ensure relative positioning for absolute children
    },
    separator: {
      height: 1,
      backgroundColor: 'white',
    },
    buttonWrapper: {
      position: 'absolute',
      width: '100%',
      top: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    showMenuButton: {
      bottom: 20,
    },
    sideButton: {
      position: 'absolute',
      bottom: 20, // Adjust this value to center the side buttons vertically
    },
    leftButton: {
      left: 20,
    },
    rightButton: {
      right: 20,
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
      bottom: 0, // Adjust this value to position the buttons vertically
    },
    newButton: {
      bottom: 20, // Adjust this value to control the spacing between the buttons and the numbers
    },
});
