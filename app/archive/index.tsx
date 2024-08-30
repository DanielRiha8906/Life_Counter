import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { createTable, getMatches, reset_database, addMatch } from '@/components/db/db'; // Adjust the import path as needed
import { ApplicationProvider, Button } from '@ui-kitten/components';
import * as Icons from "react-native-heroicons/solid";
import { Match } from '@/types/types';
import * as eva from '@eva-design/eva';
import { styles } from '@/app/styles/stylesheet_home';
const MatchHistoryScreen = () => {
  const [matches, setMatches] = useState<Match[]>([]); // Use Match[] type

  useEffect(() => {
    const fetchData = async () => {
      try {
        await createTable(); // Ensure the table is created
        const data: Match[] = await getMatches(); // Type the fetched data
        setMatches(data);
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: Match }) => (
    <View style={styles.card}>
      <Text style={styles.title}>Match ID: {item.id}</Text>
      <Text>Player 1: {item.player1}</Text>
      <Text>Player 2: {item.player2}</Text>
      {item.player3 !== 0 && <Text>Player 3: {item.player3}</Text>}
      {item.player4 !== 0 && <Text>Player 4: {item.player4}</Text>}
      <Text>Winner: Player {item.winner + 1}</Text>
    </View>
  );

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <View style={styles.container_archive}>
      <Text style={styles.header}>Match History</Text>
      <FlatList
        data={matches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        />
      <Button style={styles.resetButton} onPress={reset_database}>
        <Icons.ArrowPathIcon width={24} height={24} />
      </Button>
    </View>
    </ApplicationProvider>
  );
};

export default MatchHistoryScreen;
