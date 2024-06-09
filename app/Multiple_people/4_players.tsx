import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.quadrant}>
        <Text style={styles.text}>20</Text>
      </View>
      <View style={[styles.quadrant, styles.blue]}>
        <Text style={styles.text}>20</Text>
      </View>
      <View style={[styles.quadrant, styles.red]}>
        <Text style={styles.text_bottom}>20</Text>
      </View>
      <View style={[styles.quadrant, styles.white]}>
        <Text style={styles.text_bottom}>20</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quadrant: {
    width: '50%',
    height: '50%',
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
  white: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'black', // Adjust the color if necessary for visibility
    transform: [{rotate: '180deg'}],
},
  text_bottom: {
    fontSize: 20,
    color: 'black', // Adjust the color if necessary for visibility
  },
});

export default App;
