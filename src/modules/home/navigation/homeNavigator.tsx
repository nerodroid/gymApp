import Profile from '@gym-app/modules/profile/screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '@gym-app/modules/home/screens/Home';

const Stack = createNativeStackNavigator();

const HomeTabNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeScreen"
        options={{headerShown: false}}
        component={Home}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeTabNavigator;
