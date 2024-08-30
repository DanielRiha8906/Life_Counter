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
  const [choose_hp, setChoose_hp] = useState(40);
  const [visible_choose_number_of_players, setVisible_choose_number_of_players] = useState(false);
  const [winner, setWinner] = useState<number>(0);

  // Initialize player HPs for 4 players
  const [playerHP, setPlayerHP] = useState<players>({
    player1: 40,
    player2: 40,
    player3: 40,
    player4: 40,
  });

  const resetGame = (hp: number) => {
    DB.createTable();
    
    // Determine the winner based on current HP
    const maxHP = Math.max(playerHP.player1, playerHP.player2, playerHP.player3 || 0 , playerHP.player4 || 0);
    let newWinner = 0;

    if (playerHP.player1 === maxHP) {
      newWinner = 0;
    } else if (playerHP.player2 === maxHP) {
      newWinner = 1;
    } else if (playerHP.player3 === maxHP) {
      newWinner = 2;
    } else if (playerHP.player4 === maxHP) {
      newWinner = 3;
    }

    DB.addMatch(playerHP, newWinner);
    
    // Set player HPs to the chosen value
    setPlayerHP({
      player1: hp,
      player2: hp,
      player3: hp,
      player4: hp,
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
    <ApplicationProvider {...eva} theme={eva.light}>
      <Nav/>
      <View style={styles.separator}>
        <Text style={styles.winnerText}>Choose Winner</Text>
        <Button onPress={() => setWinner(0)}>Player 1</Button>
        <Button onPress={() => setWinner(1)}>Player 2</Button>
        <Button onPress={() => setWinner(2)}>Player 3</Button>
        <Button onPress={() => setWinner(3)}>Player 4</Button>
      </View>
      <Layout style={styles.container}>
        <View style={styles.row}>
          <PlayerHP
            initialHP={playerHP.player1}
            playerName="Player 1"
            setHP={(hp) => setPlayerHP((prev) => ({ ...prev, player1: hp }))}
            textStyle={styles.outwardText}
            containerStyle={[styles.quadrant, styles.blue]}
            top={true}
          />
          <PlayerHP
            initialHP={playerHP.player2}
            playerName="Player 2"
            setHP={(hp) => setPlayerHP((prev) => ({ ...prev, player2: hp }))}
            textStyle={styles.outwardText}
            containerStyle={[styles.quadrant, styles.quadrant]}
            top={true}
          />
        </View>
        <View style={styles.row}>
          <PlayerHP
            initialHP={playerHP.player3 || 0}
            playerName="Player 3"
            setHP={(hp) => setPlayerHP((prev) => ({ ...prev, player3: hp }))}
            textStyle={styles.inwardText}
            containerStyle={[styles.quadrant, styles.red]}
            top={false}
          />
          <PlayerHP
            initialHP={playerHP.player4 || 0}
            playerName="Player 4"
            setHP={(hp) => setPlayerHP((prev) => ({ ...prev, player4: hp }))}
            textStyle={styles.inwardText}
            containerStyle={[styles.quadrant, styles.black]}
            top={false}
          />
        </View>
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
function setVisible_winner(arg0: boolean) {
  throw new Error('Function not implemented.');
}

