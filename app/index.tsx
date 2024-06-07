import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Text } from '@ui-kitten/components';
import { View } from 'react-native';
import { styles } from './styles/stylesheet_home';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [visible_second_layer, setVisible_second_layer] = useState(false);
  const [choose_hp, setChoose_hp] = useState(20);
  const [player_1_hp, setPlayer_1_hp] = useState(40);
  const [player_2_hp, setPlayer_2_hp] = useState(20);

  const setHP = (val : any) => {
    setChoose_hp(val);
    resetGame(val);
  }
  const toggleButtons = () => {
    if(visible) {
      setVisible(false);
      setVisible_second_layer(false);
    }
    else {
      setVisible(true)
    }
    };
  const toggleNewButtons = () => {
    setVisible_second_layer(!visible_second_layer);
  }
  const decreasePlayer_1_hp = () => {
    setPlayer_1_hp(player_1_hp - 1);
  };
  const increasePlayer_1_hp = () => {
    setPlayer_1_hp(player_1_hp + 1);
  };
  const decreasePlayer_2_hp = () => {
    setPlayer_2_hp(player_2_hp - 1);
  };
  const increasePlayer_2_hp = () => {
    setPlayer_2_hp(player_2_hp + 1);
  };
  const resetGame = (hp: number) => {
    setPlayer_1_hp(hp);
    setPlayer_2_hp(hp);
  }
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <View style={styles.blueHalf}>
          <Text style={styles.outwardText}>{player_1_hp}</Text>
          <View style={styles.newButtonsWrapper}>
            <Button style={styles.newButton} onPress={increasePlayer_1_hp}>
              +
            </Button>
            <Button style={styles.newButton} onPress={decreasePlayer_1_hp}>
              -
            </Button>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.greenHalf}>
          <Text style={styles.inwardText}>{player_2_hp}</Text>
          <View style={styles.newButtonsWrapper}>
            <Button style={styles.newButton} onPress={decreasePlayer_2_hp}>
              -
            </Button>
            <Button style={styles.newButton} onPress={increasePlayer_2_hp}>
              +
            </Button>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button onPress={toggleButtons} style={styles.showMenuButton}>
            Show Menu
          </Button>
          {visible && (
            <>
              <Button style={[styles.sideButton, styles.leftButton]} onPress={() => toggleNewButtons()}>
                Change HP
              </Button>
              <Button style={[styles.sideButton, styles.rightButton]} onPress={() => resetGame(choose_hp)}>
                Reset game
              </Button>
            </>
          )}
          {visible_second_layer && (
            <>
              <Button style={[styles.bottomButtons, styles.leftBotButton]} onPress={() => setHP(20) }>
                20
              </Button>
              <Button style={[styles.bottomButtons, styles.middleBotButton]} onPress={() => setHP(30)}>
                30
              </Button>
              <Button style={[styles.bottomButtons, styles.rightBotButton]} onPress={() => setHP(40)}>
                40
              </Button>
            </>
          )}
        </View>
      </Layout>
    </ApplicationProvider>
  );
};

export default App;