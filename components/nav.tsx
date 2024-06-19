import { TouchableHighlight } from 'react-native';
import * as Icons from "react-native-heroicons/outline";
import { styles } from '@/app/styles/stylesheet_home';
import { router } from 'expo-router';

function Icon() {
    return (
        <Icons.ArchiveBoxIcon width={32} height={32}/>
    )
}

export default function Nav() {
    return(
        <TouchableHighlight style={styles.archive} onPress={() => router.push('/archive')}>
            <Icon/>
        </TouchableHighlight>
    )

}