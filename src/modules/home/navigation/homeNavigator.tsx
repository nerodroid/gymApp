import Profile from '@gym-app/modules/profile/screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@gym-app/modules/home/screens/home/homeScreen';
import ExercisesScreen from '@gym-app/modules/home/screens/exercises/exerciseScreen';
import ScheduleScreen from '../screens/schedules/ScheduleScreen';

const Stack = createNativeStackNavigator();

const HomeTabNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="ExerciseScreen"
        component={ExercisesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeTabNavigator;
