import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Text } from '@ui-kitten/components';
import { View } from 'react-native';
import { styles } from './styles/stylesheet_home';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [visible_choose_HP, setVisible_choose_HP] = useState(false);
  const [choose_hp, setChoose_hp] = useState(20);
  const [player_1_hp, setPlayer_1_hp] = useState(40);
  const [player_2_hp, setPlayer_2_hp] = useState(20);
  const [visible_choose_number_of_players, setVisible_choose_number_of_players] = useState(false);
  const setHP = (val : any) => {
    setChoose_hp(val);
    resetGame(val);
  }
  const toggleButtons = () => {
    if(visible) {
      setVisible(false);
      setVisible_choose_HP(false);
      setVisible_choose_number_of_players(false);
    }
    else {
      setVisible(true)
    }
    };
  const toggleNewButtons = () => {
    setVisible_choose_HP(!visible_choose_HP);
  }
  const resetGame = (hp: number) => {
    setPlayer_1_hp(hp);
    setPlayer_2_hp(hp);
  }
  const chooseNumberOfPlayers = () => {
    setVisible_choose_number_of_players(!visible_choose_number_of_players);
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
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <View style={styles.blueHalf}>
          <Text style={styles.outwardText}>{player_1_hp}</Text>
          <Text style={styles.Player_name}>Player 1</Text>
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
        <Text style={styles.Player_name_2}>Player 2</Text>
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
              <Button style={[styles.sideButton, styles.ChooseHP]} onPress={() => toggleNewButtons()}>
                HP
              </Button>
              <Button style={[styles.sideButton, styles.Restart]} onPress={() => resetGame(choose_hp)}>
                Again
              </Button>
              <Button style={[styles.sideButton, styles.Players]} onPress={() => chooseNumberOfPlayers()}>
                Ppl
              </Button>
            </>
          )}
          {visible_choose_HP && (
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
          {visible_choose_number_of_players && (
            <>
              <Button style={[styles.bottomButtons, styles.leftBotButton]} onPress={() => alert("2 players")}>
                2
              </Button>
              <Button style={[styles.bottomButtons, styles.middleBotButton]} onPress={() => alert("3 players")}>
                3
              </Button>
              <Button style={[styles.bottomButtons, styles.rightBotButton]} onPress={() => alert("4 players")}>
                4
              </Button>
            </>
          )}
          
        </View>
      </Layout>
    </ApplicationProvider>
  );
};

export default App;