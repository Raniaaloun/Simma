import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import RedirectButton from '../../components/redirectButton/RedirectButton';
import { styles } from './styles';
function LandingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <RedirectButton
        navigateTo='WebViewPage'
        navigation={navigation}
        options={{ name: 'Jane' }}
        title='Take me to Shein!'
      />
    </SafeAreaView>
  );
}

LandingScreen.propTypes = {
  navigation: PropTypes.object,
};

LandingScreen.defaultProps = {
  navigation: undefined,
};

export default LandingScreen;
