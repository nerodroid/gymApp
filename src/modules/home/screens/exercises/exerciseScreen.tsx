import {Exercise} from '@gym-app/storage/realm/models/Exercise';
import {Button, FlatList, Text, TextInput, View} from 'react-native';
import ExerciseListItem from '../../components/exerciseListItem/exerciseItem';
import styles from './exercises.styles';

import {useEffect, useState} from 'react';
import exerciseActions, {
  ExerciseItem,
} from '@gym-app/storage/realm/actions/exerciseActions';

const ExercisesScreen = () => {
  const [exercises, setExercises] = useState<ExerciseItem[]>(
    exerciseActions.getAllExercises(),
  );

  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDescription, setExerciseDescription] = useState('');
  // const deleteItem = (item: Exercise) => {
  //  // exerciseActions.deleteExercise(item);

  //   //setExercises(exerciseActions.getAllExercises());
  // };

  //const exercises = exerciseActions.getAllExercises();

  // const getExerciseById = (id: string) => {
  //   return exerciseActions.getExerciseById(id);
  // };
  //const exercises = useQuery(Exercise);

  const deleteItem = (item: Exercise) => {
    exerciseActions.deleteExercise(item);
    setExercises(exerciseActions.getAllExercises());
  };

  const addExercise = (exerciseName: string, exerciseDescription: string) => {
    const tempExercise: ExerciseItem = {
      _id: new Realm.BSON.ObjectId(),
      name: exerciseName,
      description: exerciseDescription,
      muscleGroup: '',
    };
    exerciseActions.addExercise(tempExercise);
    setExercises(exerciseActions.getAllExercises());

    setExerciseName('');
    setExerciseDescription('');
  };

  const handleUpdateItem = (item: ExerciseItem) => {
    const tempExercise: ExerciseItem = {
      _id: item._id,
      name: item.name + ' Updated',
      description: item.description + ' Updated',
      muscleGroup: 'Group1',
    };
    exerciseActions.updateExercise(tempExercise);
    setExercises(exerciseActions.getAllExercises());
    // console.log(tempExercise);
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Exercises</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={exerciseName}
          onChangeText={text => setExerciseName(text)}
          style={styles.textInput}
        />
        <TextInput
          value={exerciseDescription}
          onChangeText={text => setExerciseDescription(text)}
          style={styles.textInput}
        />
        <Button
          title="Add"
          onPress={() => addExercise(exerciseName, exerciseDescription)}
        />
      </View>
      <FlatList
        data={exercises}
        renderItem={({item}) => (
          <ExerciseListItem
            item={item}
            onDeleteClick={() => {
              console.log('Delete Simulated');
              // deleteItem(item);
            }}
            onUpdateClick={(item: ExerciseItem) => {
              handleUpdateItem(item);

              //exerciseActions.getExerciseById(item._id.toString());
            }}
          />
        )}
      />
    </View>
  );
};

export default ExercisesScreen;
