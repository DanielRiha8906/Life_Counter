// IncreaseButton.js
import React from 'react';
import { Button } from '@ui-kitten/components';
import { styles } from '@/app/styles/stylesheet_home';
import * as Icons from "react-native-heroicons/outline";

const IncreaseButton = ({ onPress }: any) => (
  <Button style={styles.newButton} onPress={onPress}>
    <Icons.PlusCircleIcon/>
  </Button>
);

export default IncreaseButton;
