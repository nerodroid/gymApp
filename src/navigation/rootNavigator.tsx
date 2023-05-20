import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabNavigator from '@gym-app/modules/home/navigation/homeNavigator';
import Profile from '@gym-app/modules/profile/screens/Profile';
import TabBar from './components/TabBar';
import {StatusBar} from 'react-native';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'Home',
    label: 'Home',
    component: HomeTabNavigator,
  },
  {
    name: 'Workout',
    label: 'Workout',
    component: Profile,
  },
  {
    name: 'Profile',
    label: 'exit',
    component: Profile,
  },
];
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        {tabs.map((tab, index) => {
          return (
            <Tab.Screen
              key={index}
              name={tab.name}
              component={tab.component}
              options={{
                tabBarLabel: tab.label,
                headerShown: false,
              }}
            />
          );
        })}
        {/* <Tab.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeTabNavigator}
        />
        <Tab.Screen
          name="Workouts"
          options={{headerShown: false}}
          component={Profile}
        />
        <Tab.Screen
          name="Profile"
          options={{headerShown: false}}
          component={Profile}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigator};
