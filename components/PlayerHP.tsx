// PlayerHP.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '@/app/styles/stylesheet_home';
import IncreaseButton from '@/components/Buttons/IncreaseButton';
import DecreaseButton from '@/components/Buttons/DecreaseButton';
import IncreaseButton_upside from './Buttons/IncreaseButton_upside';
import DecreaseButton_upside from './Buttons/DecreaseButton_upside';

type Player = {
  initialHP: number;
  playerName: string;
  textStyle: any;
  containerStyle: any;
  top?: boolean
};
const PlayerHP_upside = ({ initialHP, playerName, textStyle, containerStyle, top }: Player) => {
  const playerStyle = top? styles.Player_name : styles.Player_name_2
  const [hp, setHP] = useState(initialHP);
  const decreaseHP = () => {
    setHP(hp - 1);
  };

  const increaseHP = () => {
    setHP(hp + 1);
  };
  if (top) {
    return (
      <View style={containerStyle}>
      <Text style={playerStyle}>{playerName}</Text>
      <Text style={textStyle}>{hp}</Text>
      <View style={styles.newButtonsWrapper}>
        <IncreaseButton_upside onPress={increaseHP} />
        <DecreaseButton_upside onPress={decreaseHP} />
      </View>
    </View>  
    )
  }
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{hp}</Text>
      <Text style={playerStyle}>{playerName}</Text>
      <View style={styles.newButtonsWrapper}>
        <DecreaseButton onPress={decreaseHP} />
        <IncreaseButton onPress={increaseHP} />
      </View>
    </View>
  );
};

export default PlayerHP_upside;
