import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { newinput } from '../src/componentes/newinput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>aaaaaaaaaaaaaaaaaaaa!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
