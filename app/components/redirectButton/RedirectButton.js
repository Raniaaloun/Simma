import PropTypes from 'prop-types';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';

function RedirectButton({ title, navigateTo, navigation, options }) {
  return (
    <Pressable
      title={title}
      onPress={() => navigation.navigate(navigateTo, options)}
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

RedirectButton.propTypes = {
  navigateTo: PropTypes.string,
  navigation: PropTypes.object,
  options: PropTypes.object,
  title: PropTypes.string,
};

RedirectButton.defaultProps = {
  navigateTo: '',
  navigation: undefined,
  options: undefined,
  title: '',
};

export default RedirectButton;
