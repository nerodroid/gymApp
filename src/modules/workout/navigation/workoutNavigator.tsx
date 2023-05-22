import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WorkoutScreen from '../screens/workout/workoutScreen';
import TodayWorkoutScreen from '../screens/todayWorkout/todayWorkoutScreen';

const Stack = createNativeStackNavigator();

const WorkoutTabNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WorkoutScreen">
      <Stack.Screen
        name="WorkoutScreen"
        options={{headerShown: false}}
        component={WorkoutScreen}
      />

      <Stack.Screen
        name="TodayWorkoutScreen"
        options={{headerShown: false}}
        component={TodayWorkoutScreen}
      />
    </Stack.Navigator>
  );
};

export default WorkoutTabNavigator;
