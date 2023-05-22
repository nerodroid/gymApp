import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface WorkoutItem {
  _id: string;
  exercise: string;
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

interface ScheduleItemProps {
  scheduleItem: ScheduleItem;
}

const ScheduleItemDisplay: React.FC<ScheduleItemProps> = ({scheduleItem}) => {
  const renderWorkoutItem = (workout: WorkoutItem) => {
    return (
      <View style={styles.workoutContainer}>
        <Text style={styles.workoutText}>{workout.exercise}</Text>
        <Text style={styles.workoutText}>Reps: {workout.reps}</Text>

        <Text style={styles.workoutText}>Sets: {workout.sets}</Text>
        <Text style={styles.workoutText}>Index: {workout.index}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{scheduleItem.name}</Text>
      <Text style={styles.description}>{scheduleItem.description}</Text>
      <Text style={styles.sectionTitle}>Workouts:</Text>

      {scheduleItem.workouts.map(workout => renderWorkoutItem(workout))}
      {/* {scheduleItem.workouts.map(workout => (
        <View key={workout._id} style={styles.workoutContainer}>
          <Text style={styles.workoutText}>{workout.exercise}</Text>
          <Text style={styles.workoutText}>Reps: {workout.reps}</Text>
          <Text style={styles.workoutText}>Sets: {workout.sets}</Text>
          <Text style={styles.workoutText}>Index: {workout.index}</Text>
        </View>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  workoutContainer: {
    marginBottom: 8,
  },
  workoutText: {
    fontSize: 16,
    color: '#555555',
  },
});

export default ScheduleItemDisplay;
