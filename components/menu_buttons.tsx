import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { View } from 'react-native';
import { styles } from '@/app/styles/stylesheet_home';
import { router } from 'expo-router';
import * as Icons from "react-native-heroicons/solid";

const MenuButtons = ({
  visible,
  toggleButtons,
  visible_choose_HP,
  toggleNewButtons,
  visible_choose_number_of_players,
  chooseNumberOfPlayers,
  setHP,
  choose_hp,
  resetGame,
  visible_winner,
  setWinner,
}: any) => (
  <Layout style={styles.buttonWrapper}>
    <Button onPress={toggleButtons} style={styles.showMenuButton}>
      <>
      <Icons.Cog6ToothIcon width={32} height={32} color={'black'} />
      <Text>
      Menu
      </Text>
      </>
    </Button>
    {visible && (
      <>
        <Button style={[styles.sideButton, styles.ChooseHP]} onPress={toggleNewButtons}>
          <Icons.HeartIcon/>
        </Button>
        <Button style={[styles.sideButton, styles.Restart]} onPress={() => resetGame(choose_hp)}>
          <Icons.ArrowPathIcon/>
        </Button>
        <Button style={[styles.sideButton, styles.Players]} onPress={chooseNumberOfPlayers}> 
          <Icons.UserIcon/>
        </Button>
      </>
    )}
    {visible_choose_HP && (
      <>
        <Button style={[styles.bottomButtons, styles.leftBotButton]} onPress={() => setHP(20)}>
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
        <Button style={[styles.bottomButtons, styles.leftBotButton]} onPress={() => router.push('/')}>
          <Icons.UsersIcon/>
        </Button>
        {/* <Button style={[styles.bottomButtons, styles.middleBotButton]} onPress={() => router.push('/Multiple_people/3_players')}>
          3
        </Button> */}
        <Button style={[styles.bottomButtons, styles.rightBotButton]} onPress={() => router.push('/Multiple_people/4_players')}>
          <Icons.UserGroupIcon/>
        </Button>
      </>
    )}
    {visible_winner && (
      <View style={styles.separator}>
        <Text style={styles.winnerText}>Choose Winner</Text>
        <Button onPress={() => setWinner(0)}>Player 1</Button>
        <Button onPress={() => setWinner(1)}>Player 2</Button>
      </View>
    )}
  </Layout>
);

export default MenuButtons;
