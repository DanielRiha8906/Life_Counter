// IncreaseButton.js
import React from 'react';
import { Button } from '@ui-kitten/components';
import { styles } from '@/app/styles/stylesheet_home';
import * as Icons from "react-native-heroicons/outline";

const IncreaseButton_upside = ({ onPress }: any) => (
  <Button style={styles.newButton_upside} onPress={onPress}>
    <Icons.PlusCircleIcon/>
  </Button>
);

export default IncreaseButton_upside;
