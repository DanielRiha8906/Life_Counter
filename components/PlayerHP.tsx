import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '@/app/styles/stylesheet_home';
import IncreaseButton from '@/components/Buttons/IncreaseButton';
import DecreaseButton from '@/components/Buttons/DecreaseButton';
import IncreaseButton_upside from './Buttons/IncreaseButton_upside';
import DecreaseButton_upside from './Buttons/DecreaseButton_upside';

type Player = {
  initialHP: number;
  setHP: (hp: number) => void;
  playerName: string;
  textStyle: any;
  containerStyle: any;
  top?: boolean;
};

const PlayerHP = ({ initialHP, setHP, playerName, textStyle, containerStyle, top }: Player) => {
  const playerStyle = top ? styles.Player_name : styles.Player_name_2;
  const [hp, updateHP] = useState(initialHP);

  useEffect(() => {
    updateHP(initialHP);
  }, [initialHP]);

  const decreaseHP = () => {
    const newHP = hp - 1;
    updateHP(newHP);
    setHP(newHP);
  };

  const increaseHP = () => {
    const newHP = hp + 1;
    updateHP(newHP);
    setHP(newHP);
  };

  return (
    <View style={containerStyle}>
      {top ? (
        <>
          <Text style={playerStyle}>{playerName}</Text>
          <Text style={textStyle}>{hp}</Text>
          <View style={styles.newButtonsWrapper}>
            <IncreaseButton_upside onPress={increaseHP} />
            <DecreaseButton_upside onPress={decreaseHP} />
          </View>
        </>
      ) : (
        <>
          <Text style={textStyle}>{hp}</Text>
          <Text style={playerStyle}>{playerName}</Text>
          <View style={styles.newButtonsWrapper}>
            <DecreaseButton onPress={decreaseHP} />
            <IncreaseButton onPress={increaseHP} />
          </View>
        </>
      )}
    </View>
  );
};

export default PlayerHP;
