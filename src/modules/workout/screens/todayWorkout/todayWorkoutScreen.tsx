import {
  RouteProp,
  ParamListBase,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import {WorkoutStackParamList} from '../workout/workoutScreen';
import {ExerciseItem} from '@gym-app/storage/realm/actions/exerciseActions';
import TextInputList, {
  SetWeightsFormInput,
} from '../../components/testInputs/testInputs';
import TextButton from '@gym-app/shared/textButton/textButton';
import {Workout} from '@gym-app/storage/realm/models/Workout';
import {Schedule} from '@gym-app/storage/realm/models/Schedule';

interface WorkoutItem {
  _id: string;
  exercise: ExerciseItem;
  reps: number;
  sets: number;
  index: number;
}

interface ScheduleItem {
  _id: string;
  name: string;
  description: string;
  workouts: WorkoutItem[];
}

export interface WorkoutProcessItem {
  exercise: ExerciseItem;
  reps?: number;
  sets?: number;
  weightAmounts: string[];
}
interface ScheduleItemProps {
  scheduleItem: Schedule;
}

type Props = {
  route: RouteProp<ParamListBase, 'TodayWorkoutScreen'>;
  navigation: NativeStackNavigationProp<WorkoutStackParamList>;
};

const TodayWorkoutScreen = (props: Props) => {
  const {route} = props;
  const {params} = route;
  const scheduleItem = (params as ScheduleItemProps).scheduleItem;

  const navigation = useNavigation<NavigationProp<any>>();

  const [workoutInputs, setWorkoutInputs] = useState<WorkoutProcessItem[]>([]);
  const [workoutProcessList, setWorkoutProcessList] = useState<
    WorkoutProcessItem[]
  >([]);

  const onSubmitWorkoutWeights = (inputValues: WorkoutProcessItem) => {
    setWorkoutInputs([...workoutInputs, inputValues]);
    //console.log('inputValues', inputValues);
  };
  const handleOncompleteWorkoutSession = () => {
    console.log(workoutInputs);
  };

  const renderWorkoutItem = ({item}: {item: Workout}) => {
    return (
      <View style={styles.workoutContainer}>
        <Text style={styles.workoutText}>{item.exercise.name}</Text>
        <Text style={styles.workoutText}>Reps: {item.reps}</Text>
        <Text style={styles.workoutText}>Sets: {item.sets}</Text>
        <View style={styles.setsContainer}>
          <TextInputList
            workoutItem={item}
            initialInputAmount={item.sets}
            canChangeInputAmount={false}
            onSubmit={(inputValues: WorkoutProcessItem) =>
              onSubmitWorkoutWeights(inputValues)
            }
          />
        </View>

        <Text style={styles.workoutText}>Index: {item.index}</Text>
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
        data={scheduleItem.workouts}
        keyExtractor={item => item._id.toHexString()}
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
    height: 300,
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
