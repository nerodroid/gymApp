import {FlatList, View} from 'react-native';

import styles from './schedules.styles';

import {useEffect, useState} from 'react';

import scheduleActions, {
  ScheduleItem,
  WorkoutItem,
} from '@gym-app/storage/realm/actions/scheduleActions';

import {ExerciseItem} from '@gym-app/storage/realm/actions/exerciseActions';
import ScheduleListItem from '../../components/scheduleListItem/scheduleListItem';
import AddSchedule from '../../components/addSchedule/addSchedule';

const ScheduleScreen = () => {
  const [schedules, setSchedules] = useState(scheduleActions.getAllSchedules());

  //   const deleteItem = (item: Exercise) => {
  //     exerciseActions.deleteExercise(item);
  //     setExercises(exerciseActions.getAllExercises());
  //   };

  //   const addExercise = (exerciseName: string, exerciseDescription: string) => {
  //     const tempExercise: ExerciseItem = {
  //       _id: new Realm.BSON.ObjectId(),
  //       name: exerciseName,
  //       description: exerciseDescription,
  //       muscleGroup: '',
  //     };
  //     exerciseActions.addExercise(tempExercise);
  //     setExercises(exerciseActions.getAllExercises());

  useEffect(() => {
    const exercise1: ExerciseItem = {
      _id: new Realm.BSON.ObjectId(),
      name: 'Barbell Squat',
      description: 'new1',
      muscleGroup: 'Upper legs',
    };
    const exercise2: ExerciseItem = {
      _id: new Realm.BSON.ObjectId(),
      name: 'Arm curls',
      description: 'New2',
      muscleGroup: 'Arms',
    };
    //console.log('exercise1', exercise1);
    const workout1: WorkoutItem = {
      _id: new Realm.BSON.ObjectId(),
      exercise: exercise1,
      index: 0,
      reps: 8,
      sets: 3,
    };

    const workout2: WorkoutItem = {
      _id: new Realm.BSON.ObjectId(),
      exercise: exercise2,
      index: 1,
      reps: 10,
      sets: 4,
    };

    const schedule1: ScheduleItem = {
      _id: new Realm.BSON.ObjectId(),
      name: 'Schedule day1',
      description: '',
      workouts: [workout1, workout2],
    };
    const schedule2: ScheduleItem = {
      _id: new Realm.BSON.ObjectId(),
      name: 'Schedule day1',
      description: '',
      workouts: [workout1, workout2],
    };
    //console.log(schedule);
    //scheduleActions.addSchedule(schedule1);

    //console.log('schedules', schedule1);
    // schedule1.workouts.forEach((workout: any) => {
    //   console.log('workout', workout);
    // });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <AddSchedule />
      <FlatList
        data={schedules}
        renderItem={({item}) => (
          <ScheduleListItem
            scheduleItem={item}
            onPress={() => {
              //deleteItem(item);
            }}
          />
        )}
      />
    </View>
  );
};

export default ScheduleScreen;
