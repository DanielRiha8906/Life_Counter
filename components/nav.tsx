import React from 'react';
import { Button } from '@ui-kitten/components';
import { styles } from '@/app/styles/stylesheet_home';
import { router } from 'expo-router';
import * as Icons from "react-native-heroicons/outline";

export default function Nav() {
  return (
    <Button style={styles.archive} onPress={() => router.push('/archive')}>
      <Icons.ArchiveBoxIcon width={24} height={24} />
    </Button>
  );
}
