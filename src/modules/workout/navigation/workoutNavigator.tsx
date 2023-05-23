import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WorkoutScreen from '../screens/workout/workoutScreen';
import TodayWorkoutScreen from '../screens/todayWorkout/todayWorkoutScreen';
import AnalysisScreen from '../screens/analysis/analysisScreen';

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
      <Stack.Screen
        name="AnalysisScreen"
        options={{headerShown: false}}
        component={AnalysisScreen}
      />
    </Stack.Navigator>
  );
};

export default WorkoutTabNavigator;
