import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: `${colors.orangeDelight}`,
    borderRadius: 100,
    width: 70,
    bottom: 8,
    height: 70,
    borderColor: `${colors.white}`,
    borderWidth: 6,
  },
  container: {
    flex: 1,
    backgroundColor: `${colors.pureMidnight}`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    maxHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${colors.pureMidnight}`,
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: `${colors.pureMidnight}`,
  },
  webView: {
    marginTop: 20,
  },
});
