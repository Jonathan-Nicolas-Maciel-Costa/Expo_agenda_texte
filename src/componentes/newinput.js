import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
         Text, 
         View,
         TextInput} from 'react-native';

export function newinput() {
  return (
    <View style={styles.input_view}>
        <TextInput />
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
