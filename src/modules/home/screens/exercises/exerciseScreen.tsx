import {
  exerciseContext,
  Exercise,
} from '@gym-app/storage/realm/models/Exercise';
import {FlatList, Text, View} from 'react-native';

const {useQuery} = exerciseContext;

const ExercisesScreen = () => {
  const exercises = useQuery(Exercise);

  console.log(exercises);
  return (
    <View>
      <Text style={{fontSize: 30, color: 'black'}}>Exercises</Text>

      <FlatList
        data={exercises}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, color: 'black'}}>{item.name}</Text>
        )}
      />
    </View>
  );
};

export default ExercisesScreen;
