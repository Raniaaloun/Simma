import { Pressable, Text } from 'react-native';
import { styles } from './styles';

function Button({ title, navigateTo, navigation, options }) {
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

export default Button;
