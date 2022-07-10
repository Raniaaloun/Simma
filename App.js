import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import LandingScreen from './app/screens/landingPage/LandingScreen';
import WebViewPage from './app/screens/webViewPage/WebViewPage';
import colors from './app/styles/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Hiruko: require('./app/assets/fonts/hiruko/HirukoBlackAlternate.ttf'),
  });

  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>rania</Text>
        <RedirectButton />
        <StatusBar style='auto' />
      </View> */}
      <Stack.Navigator>
        <Stack.Screen
          name='LandingScreen'
          component={LandingScreen}
          options={{
            title: 'Simma',
            headerTitleStyle: styles.test,
            headerStyle: styles.header,
          }}
        />
        <Stack.Screen
          name='WebViewPage'
          component={WebViewPage}
          options={{
            title: 'The simma Lobby',
            headerTitleStyle: styles.test,
            headerStyle: styles.header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    // fontFamily: 'Hiruko',
    color: `${colors.pureMidnight}`,
  },
  header: {
    backgroundColor: `${colors.distantHorizon}`,
  },
});
