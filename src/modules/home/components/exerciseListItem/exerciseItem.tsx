import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './exerciseItem.styles';
import {Exercise} from '@gym-app/storage/realm/models/Exercise';
import TextButton from '@gym-app/shared/textButton/textButton';
import {ExerciseItem} from '@gym-app/storage/realm/actions/exerciseActions';

interface Props {
  item: ExerciseItem;
  onUpdateClick: (item: ExerciseItem) => void;
  onDeleteClick: () => void;
}

const ExerciseListItem = (props: Props) => {
  const {item, onDeleteClick, onUpdateClick} = props;

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TextButton
          onPress={() => {
            onUpdateClick(item);
          }}
          buttonStyle={styles.buttonStyleUpdate}
          textStyle={styles.textStyle}
          text={'Update'}
        />
        <View style={styles.buttonSeparator}></View>
        <TextButton
          onPress={() => {
            onDeleteClick();
          }}
          buttonStyle={styles.buttonStyleDelete}
          textStyle={styles.textStyle}
          text={'Delete'}
        />
      </View>
    </View>
  );
};

export default ExerciseListItem;
