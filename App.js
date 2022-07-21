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

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='LandingScreen'
          component={LandingScreen}
          options={{
            title: 'Simma',
            headerTitleStyle: styles.headerTitle,
            headerStyle: styles.header,
          }}
        />
        <Stack.Screen
          name='WebViewPage'
          component={WebViewPage}
          options={{
            title: 'The simma Lobby',
            headerTitleStyle: styles.headerTitle,
            headerStyle: styles.header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: `${colors.distantHorizon}`,
  },
  headerTitle: {
    color: `${colors.pureMidnight}`,
    fontFamily: 'Hiruko',
  },
});
