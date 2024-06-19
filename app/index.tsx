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

  const [playerHP, setPlayerHP] = useState({
    player1: 20,
    player2: 20,
  });
  const resetGame = (hp: number) => {
    setPlayerHP({
      player1: hp,
      player2: hp,
    });
  };
  const setHP = (val: number) => {
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

  
  const chooseNumberOfPlayers = () => {
    setVisible_choose_number_of_players(!visible_choose_number_of_players);
  };

  return (
    <>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <PlayerHP
          initialHP={playerHP.player1}
          playerName="Player 1"
          setHP={(hp) => setPlayerHP((prev) => ({ ...prev, player1: hp }))}
          textStyle={styles.outwardText}
          containerStyle={styles.blueHalf}
          top = {true}
        />
        <View style={styles.separator} />
        <PlayerHP
          initialHP={playerHP.player2}
          playerName="Player 2"
          setHP={(hp) => setPlayerHP((prev) => ({ ...prev, player2: hp }))}
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
    </>
  );
};

export default App;
