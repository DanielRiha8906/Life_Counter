// App.js
import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { View } from 'react-native';
import { styles } from '@/app/styles/stylesheet_home';
import MenuButtons from '@/components/menu_buttons';
import PlayerHP from '@/components/PlayerHP';
const App = () => {
  const [visible, setVisible] = useState(false);
  const [visible_choose_HP, setVisible_choose_HP] = useState(false);
  const [choose_hp, setChoose_hp] = useState(20);
  const [visible_choose_number_of_players, setVisible_choose_number_of_players] = useState(false);

  const setHP = (val : any) => {
    setChoose_hp(val);
    resetGame(val);
  };

  const toggleButtons = () => {
    setVisible(!visible);
    if (visible) {
      setVisible_choose_HP(false);
      setVisible_choose_number_of_players(false);
    }
  };

  const toggleNewButtons = () => {
    setVisible_choose_HP(!visible_choose_HP);
  };

  const resetGame = (hp: any) => {
    setChoose_hp(hp);
  };

  const chooseNumberOfPlayers = () => {
    setVisible_choose_number_of_players(!visible_choose_number_of_players);
  };

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <PlayerHP
          initialHP={40}
          playerName="Player 1"
          textStyle={styles.outwardText}
          containerStyle={styles.blueHalf}
          top = {true}
        />
        <View style={styles.separator} />
        <PlayerHP
          initialHP={20}
          playerName="Player 2"
          textStyle={styles.inwardText}
          containerStyle={styles.greenHalf}
          top = {false}
        />
        <MenuButtons
          visible={visible}
          toggleButtons={toggleButtons}
          visible_choose_HP={visible_choose_HP}
          toggleNewButtons={toggleNewButtons}
          visible_choose_number_of_players={visible_choose_number_of_players}
          chooseNumberOfPlayers={chooseNumberOfPlayers}
          setHP={setHP}
          choose_hp={choose_hp}
          resetGame={resetGame}
        />
      </Layout>
    </ApplicationProvider>
  );
};

export default App;
