import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './exerciseItem.styles';

import {ScheduleItem} from '@gym-app/storage/realm/actions/scheduleActions';

interface Props {
  scheduleItem: ScheduleItem;
  onPress: () => void;
}

const ScheduleListItem = ({scheduleItem, onPress}: Props) => {
  //console.log('scheduleItem', scheduleItem.workouts[0].exercise.name);

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.container}>
        <Text style={styles.title}>{scheduleItem.name}</Text>
        <Text style={styles.description}>{scheduleItem.description}</Text>

        {scheduleItem.workouts.map(workout => {
          return (
            <View>
              <Text>{'Name: ' + workout.exercise.name}</Text>
              <Text>{'Reps: ' + workout.reps}</Text>
              <Text>{'Sets: ' + workout.sets}</Text>
            </View>
          );
        })}
      </View>

      {}
    </TouchableOpacity>
  );
};

export default ScheduleListItem;
