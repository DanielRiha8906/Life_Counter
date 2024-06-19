// DecreaseButton.js
import React from 'react';
import { Button } from '@ui-kitten/components';
import { styles } from '@/app/styles/stylesheet_home';
import * as Icons from "react-native-heroicons/outline";

const DecreaseButton = ({ onPress }: any) => (
  <Button style={styles.newButton} onPress={onPress}>
    <Icons.MinusCircleIcon/>
  </Button>
);

export default DecreaseButton;
