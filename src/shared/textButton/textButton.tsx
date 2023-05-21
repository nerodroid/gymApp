import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface Props {
  onPress: () => void;
  text: string;
  buttonStyle?: any;
  textStyle?: any;
}
const TextButton = (props: Props) => {
  const {onPress, text, buttonStyle, textStyle} = props;
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    borderRadius: '8rem',
    paddingVertical: '12rem',

    alignItems: 'center',
  },
  buttonText: {
    fontSize: '16rem',
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default TextButton;
