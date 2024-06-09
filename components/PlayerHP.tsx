// PlayerHP.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@ui-kitten/components';
import { styles } from '../app/styles/stylesheet_home';
import IncreaseButton from './Buttons/IncreaseButton';
import DecreaseButton from './Buttons/DecreaseButton';

const PlayerHP_upside = ({ initialHP, playerName, textStyle, containerStyle }) => {
  const [hp, setHP] = useState(initialHP);

  const decreaseHP = () => {
    setHP(hp - 1);
  };

  const increaseHP = () => {
    setHP(hp + 1);
  };

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{hp}</Text>
      <Text style={styles.Player_name}>{playerName}</Text>
      <View style={styles.newButtonsWrapper}>
        <IncreaseButton onPress={increaseHP} />
        <DecreaseButton onPress={decreaseHP} />
      </View>
    </View>
  );
};

export default PlayerHP_upside;
