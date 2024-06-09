// IncreaseButton.js
import React from 'react';
import { Button } from '@ui-kitten/components';
import { styles } from '../../app/styles/stylesheet_home';

const IncreaseButton = ({ onPress }) => (
  <Button style={styles.newButton} onPress={onPress}>
    +
  </Button>
);

export default IncreaseButton;
