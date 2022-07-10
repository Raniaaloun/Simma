import { SafeAreaView } from 'react-native';
import Button from '../../components/button/Button';
import { styles } from './styles';

function LandingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        navigateTo='WebViewPage'
        navigation={navigation}
        options={{ name: 'Jane' }}
        title='Take me to Shein!'
      />
    </SafeAreaView>
  );
}

export default LandingScreen;
