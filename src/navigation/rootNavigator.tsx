import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabNavigator from '@gym-app/modules/home/navigation/homeNavigator';
import Profile from '@gym-app/modules/profile/screens/ProfileScreen';
import TabBar from './components/TabBar';
import {Dimensions, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const entireScreenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: entireScreenWidth / 375});

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
    <GestureHandlerRootView style={{flex: 1}}>
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
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export {RootNavigator};
