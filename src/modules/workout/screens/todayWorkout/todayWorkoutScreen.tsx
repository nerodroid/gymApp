import {
  RouteProp,
  ParamListBase,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import {WorkoutStackParamList} from '../workout/workoutScreen';
import {ExerciseItem} from '@gym-app/storage/realm/actions/exerciseActions';
import TextInputList, {
  SetWeightsFormInput,
} from '../../components/testInputs/testInputs';
import TextButton from '@gym-app/shared/textButton/textButton';
import {Workout} from '@gym-app/storage/realm/models/Workout';
import {Schedule} from '@gym-app/storage/realm/models/Schedule';
import ScheduleProgressActions from '@gym-app/storage/realm/actions/scheduleProgressActions';
import DatePicker from 'react-native-date-picker';

interface WorkoutItem {
  _id: Realm.BSON.ObjectId;
  exercise: ExerciseItem;
  reps: number;
  sets: number;
  index: number;
}

interface ScheduleItem {
  _id: Realm.BSON.ObjectId;
  name: string;
  description: string;
  workouts: WorkoutItem[];
}

export interface WorkoutProgressItem {
  _id: Realm.BSON.ObjectId;
  exercise: ExerciseItem;
  reps?: number;
  sets?: number;
  weightAmounts: string[];
  index: number;
}

export interface ScheduleProgressItem {
  _id: Realm.BSON.ObjectId;
  date: Date;
  schedule: ScheduleItem;
  workoutProgresses: WorkoutProgressItem[];
}
interface ParamsProps {
  scheduleItem: ScheduleItem;
  past: boolean;
}

type Props = {
  route: RouteProp<ParamListBase, 'TodayWorkoutScreen'>;
  navigation: NativeStackNavigationProp<WorkoutStackParamList>;
};

const TodayWorkoutScreen = (props: Props) => {
  const {route} = props;
  const params: ParamsProps = route.params as ParamsProps;

  const scheduleItem = params.scheduleItem;
  const past = params.past;
  const workoutItems = scheduleItem.workouts;
  const navigation = useNavigation<NavigationProp<any>>();

  const [workoutInputs, setWorkoutInputs] = useState<WorkoutProgressItem[]>([]);

  const [pickedDate, setPickedDate] = useState(new Date());

  //   const [workoutProcessList, setWorkoutProcessList] = useState<
  //     WorkoutProcessItem[]
  //   >([]);

  const onSubmitWorkoutWeights = (inputValues: WorkoutProgressItem) => {
    console.log('inputValues', inputValues);

    const tempWorkoutArray = workoutInputs;
    const existingIndex = tempWorkoutArray.findIndex(
      obj => obj.index === inputValues.index,
    );

    if (existingIndex !== -1) {
      // Replace the existing object with the new object
      tempWorkoutArray[existingIndex] = inputValues;
    } else {
      // Add the new object to the array
      tempWorkoutArray.push(inputValues);
    }

    setWorkoutInputs(tempWorkoutArray);
  };
  const handleOncompleteWorkoutSession = () => {
    console.log(scheduleItem);
    const scheduleProgressItem: ScheduleProgressItem = {
      _id: new Realm.BSON.ObjectId(),
      date: pickedDate,
      schedule: scheduleItem,
      workoutProgresses: workoutInputs,
    };
    console.log('scheduleProgressItem to save', scheduleProgressItem);

    ScheduleProgressActions.addScheduleProgress(scheduleProgressItem);
  };
  const renderDatePickerButton = () => {
    return (
      <>
        <DatePicker
          date={pickedDate}
          mode={'date'}
          onDateChange={setPickedDate}
        />
      </>
    );
  };
  const renderWorkoutItem = ({item}: {item: Workout}) => {
    return (
      <View style={styles.workoutContainer}>
        {past && renderDatePickerButton()}
        <Text style={styles.workoutText}>{item.exercise.name}</Text>
        <Text style={styles.workoutText}>Reps: {item.reps}</Text>
        <Text style={styles.workoutText}>Sets: {item.sets}</Text>
        <Text style={styles.workoutText}>Index: {item.index}</Text>
        <View style={styles.setsContainer}>
          <TextInputList
            workoutItem={item}
            workoutIndex={item.index}
            initialInputAmount={item.sets}
            canChangeInputAmount={false}
            onSubmit={(inputValues: WorkoutProgressItem) =>
              onSubmitWorkoutWeights(inputValues)
            }
          />
        </View>
      </View>
    );
  };
  //   return (
  //     <View style={styles.container}>
  //       <TextInputList
  //         initialInputAmount={3}
  //         canChangeInputAmount={true}
  //         onSubmit={(inputValues: SetWeightsFormInput[]) =>
  //           onSubmitWorkoutWeights(inputValues)
  //         }
  //       />
  //     </View>
  //   );
  return (
    <View style={styles.container}>
      <TextButton onPress={() => navigation.goBack()} text={'Go Back'} />
      <Text style={styles.title}>{scheduleItem.name}</Text>
      <Text style={styles.description}>{scheduleItem.description}</Text>
      <Text style={styles.sectionTitle}>Workouts:</Text>
      <FlatList
        data={workoutItems as Workout[]}
        keyExtractor={item => item._id.toString()}
        renderItem={renderWorkoutItem}
        contentContainerStyle={styles.workoutsList}
      />
      <TextButton
        onPress={() => {
          handleOncompleteWorkoutSession();
        }}
        text={'Finish'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  workoutsList: {
    marginTop: 8,
  },
  workoutContainer: {
    marginBottom: 8,
  },
  workoutText: {
    fontSize: 16,
    color: '#555555',
  },
  setsContainer: {
    height: 200,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginBottom: 2,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    fontSize: 16,
    color: '#333333',
  },
});

export default TodayWorkoutScreen;
