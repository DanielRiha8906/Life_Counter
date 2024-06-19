  // App.js
  import React, { useState } from 'react';
  import * as eva from '@eva-design/eva';
  import { ApplicationProvider, Button, Layout, Text } from '@ui-kitten/components';
  import { Alert, View } from 'react-native';
  import { styles } from '@/app/styles/stylesheet_home';
  import MenuButtons from '@/components/menu_buttons';
  import PlayerHP from '@/components/PlayerHP';
  import Nav from '@/components/nav';
  import { players } from '@/types/types';
  import * as DB from '@/components/db/db';


const App = () => {
  const [visible, setVisible] = useState(false);
  const [visible_choose_HP, setVisible_choose_HP] = useState(false);
  const [visible_winner, setVisible_winner] = useState(false);
  const [choose_hp, setChoose_hp] = useState(20);
  const [visible_choose_number_of_players, setVisible_choose_number_of_players] = useState(false);
  const [winner, setWinner] = useState<number>(0);
  const [playerHP, setPlayerHP] = useState<players>({
    player1: 20,
    player2: 20,
  });
  const resetGame = (hp: number) => {
    DB.createTable();
    
    // Determine the winner based on current HP
    const newWinner = playerHP.player1 > playerHP.player2 ? 0 : 1;
    
    // Hide winner selection initially
    setVisible_winner(true);
    setTimeout(() => {
      setVisible_choose_HP(true);
    }, 500);
    
    DB.addMatch(playerHP, newWinner);
    
    // Set player HPs to the chosen value
    setPlayerHP({
      player1: hp,
      player2: hp,
    });
    
    // Set the winner state
    setWinner(newWinner);
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
      <Nav/>
      <View style={styles.separator}>
        <Text style={styles.winnerText}>Choose Winner</Text>
        <Button onPress={() => setWinner(0)}>Player 1</Button>
        <Button onPress={() => setWinner(1)}>Player 2</Button>
      </View>
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
