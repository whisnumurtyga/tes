import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Box } from './box'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app bjir!</Text>
      <StatusBar style="auto" />
      <View>
            <Box/>
      </View>
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
