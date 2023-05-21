import {View, Text, Button} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import styles from './addSchedule.styles';
import {useEffect, useState} from 'react';
import scheduleActions, {
  ScheduleItem,
  WorkoutItem,
} from '@gym-app/storage/realm/actions/scheduleActions';

import SelectDropdown from 'react-native-select-dropdown';
import exerciseActions, {
  ExerciseItem,
} from '@gym-app/storage/realm/actions/exerciseActions';
import {Schedule} from '@gym-app/storage/realm/models/Schedule';

const AddSchedule = () => {
  const [scheduleName, setScheduleName] = useState('');
  const [scheduleDescription, setScheduleDescription] = useState('');

  const [selectedWorkouts, setSelectedWorkouts] = useState<WorkoutItem[]>([]);

  const [selectedWorkout, setSelectedWorkout] = useState<ExerciseItem>();
  const [workoutSets, setWorkoutSets] = useState('');
  const [workoutReps, setWorkoutReps] = useState('');

  const [exercises, setExercises] = useState(exerciseActions.getAllExercises());

  const [dropDownOptions, setDropDownOptions] = useState<string[]>();
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const tempExerciseArray: string[] = [];

    exercises.map((exercise: {name: any}) => {
      tempExerciseArray.push(exercise.name);
    });
    setDropDownOptions(tempExerciseArray);
  }, [exercises]);

  const handleValueChange = (value: any) => {
    setSelectedOption(value);
    const tempExercise = exercises.find(
      (exercise: {name: any}) => exercise.name === value,
    );

    setSelectedWorkout(tempExercise);
  };

  const handleAddWorkout = () => {
    if (!selectedWorkout) {
      return;
    }
    const tempWorkout: WorkoutItem = {
      _id: new Realm.BSON.ObjectId(),
      exercise: selectedWorkout,
      index: 0,
      reps: parseInt(workoutReps),
      sets: parseInt(workoutSets),
    };

    setSelectedWorkouts([...selectedWorkouts, tempWorkout]);
    setWorkoutReps('');
    setWorkoutSets('');
  };

  const handleAddSchedule = () => {
    const tempSchedule: ScheduleItem = {
      _id: new Realm.BSON.ObjectId(),
      name: scheduleName,
      description: scheduleDescription,
      workouts: selectedWorkouts,
    };
    scheduleActions.addSchedule(tempSchedule);
    console.log(tempSchedule);
  };
  return (
    <ScrollView style={styles.inputContainer}>
      <Text style={styles.title}>Add a Schedule</Text>
      <Text style={styles.subTitle}>Name</Text>
      <TextInput
        value={scheduleName}
        onChangeText={text => setScheduleName(text)}
        style={styles.textInput}
      />
      <Text style={styles.subTitle}>Desc</Text>
      <TextInput
        value={scheduleDescription}
        onChangeText={text => setScheduleDescription(text)}
        style={styles.textInput}
      />
      <View style={{padding: 10}} />
      <Text style={styles.subTitle}>Workout Name</Text>
      <SelectDropdown
        data={dropDownOptions ? dropDownOptions : []}
        onSelect={selectedItem => handleValueChange(selectedItem)}
        defaultButtonText="Select an Exercise"
        buttonTextAfterSelection={selectedItem => selectedItem}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        dropdownStyle={styles.dropdown}
        rowStyle={styles.dropdownRow}
        rowTextStyle={styles.dropdownRowText}
        renderDropdownIcon={() => <Text style={styles.dropdownIcon}>▼</Text>}
      />
      <Text style={styles.subTitle}>Sets</Text>
      <TextInput
        value={workoutSets}
        onChangeText={text => setWorkoutSets(text)}
        style={styles.textInput}
      />
      <Text style={styles.subTitle}>Reps</Text>
      <TextInput
        value={workoutReps}
        onChangeText={text => setWorkoutReps(text)}
        style={styles.textInput}
      />
      <View style={{padding: 10}} />
      <Button
        title="Add a workout to schedule"
        onPress={() => handleAddWorkout()}
      />

      {selectedWorkouts?.map((workout: WorkoutItem) => {
        return (
          <View>
            <Text>{'Name: ' + workout.exercise.name}</Text>
            <Text>{'Reps: ' + workout.reps}</Text>
            <Text>{'Sets: ' + workout.sets}</Text>
          </View>
        );
      })}

      <View style={{padding: 10}} />
      <Button title="Add Schedule" onPress={() => handleAddSchedule()} />
    </ScrollView>
  );
};

export default AddSchedule;
