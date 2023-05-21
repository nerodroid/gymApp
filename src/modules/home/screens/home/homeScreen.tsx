import React from 'react';

import ProfileSection from '../../components/profileSection/profileSection';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './home.styles';
import CarouselComponent from '../../components/carousel/carousel';

import ImageButton from '@gym-app/shared/imageButton/imageButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {ParamListBase, RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  HomeScreen: undefined;
  ExerciseScreen: undefined;
  ScheduleScreen: undefined;
};

type Props = {
  route: RouteProp<ParamListBase, 'HomeScreen'>;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const HomeScreen = ({navigation, route}: Props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {<ProfileSection />}

      <CarouselComponent />

      <ImageButton
        onClick={() => console.log()}
        title={'Start Workout'}
        backgroundColor="#FAFAFA55"
      />
      <ImageButton
        onClick={() => {
          console.log();
          navigation.navigate('ScheduleScreen');
        }}
        title={'Schedules'}
        backgroundColor="#FAFAFA55"
      />
      <ImageButton
        onClick={() => navigation.navigate('ExerciseScreen')}
        title={'Exercises'}
        backgroundColor="#FAFAFA55"
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
