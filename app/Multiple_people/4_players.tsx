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
export default App;
