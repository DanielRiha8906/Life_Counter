import React from 'react';
import { Button } from '@ui-kitten/components';
import { styles } from '@/app/styles/stylesheet_home';
import * as Icons from "react-native-heroicons/outline";

const ColorPicker = ({ changeColors, toggleColors, colors, red }: any) => {
  return (
    <>
      <Button onPress={toggleColors} style={styles.colorButton}>
        <Icons.EyeDropperIcon />
      </Button>
      {colors && (
        <>
          <Button style={styles.NewButton1} onPress={() => changeColors()}>
            <Icons.SunIcon />
          </Button>
          <Button style={styles.NewButton2} onPress={() => changeColors()}>
            <Icons.BoltIcon />
          </Button>
          <Button style={styles.NewButton3} onPress={() => changeColors()}>
            <Icons.ChatBubbleOvalLeftIcon />
          </Button>
          <Button style={styles.NewButton4} onPress={() => changeColors()}>
            <Icons.CpuChipIcon />
          </Button>
          <Button style={styles.NewButton5} onPress={() => changeColors()}>
            <Icons.CursorArrowRippleIcon />
          </Button>
        </>
      )}
    </>
  );
};

export default ColorPicker;
