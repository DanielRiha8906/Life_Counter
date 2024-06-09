// DecreaseButton.js
import React from 'react';
import { Button } from '@ui-kitten/components';
import { styles } from '../../app/styles/stylesheet_home';

const DecreaseButton = ({ onPress }) => (
  <Button style={styles.newButton} onPress={onPress}>
    -
  </Button>
);

export default DecreaseButton;
