import React from 'react';

import ProfileSection from '../../components/profileSection/profileSection';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './home.styles';
import CarouselComponent from '../../components/carousel/carousel';

import ImageButton from '@gym-app/shared/imageButton/imageButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {ParamListBase, RouteProp} from '@react-navigation/native';
import {View} from 'react-native';

type HomeStackParamList = {
  HomeScreen: undefined;
  ExerciseScreen: undefined;
  ScheduleScreen: undefined;
};

type Props = {
  route: RouteProp<ParamListBase, 'HomeScreen'>;
  navigation: NativeStackNavigationProp<HomeStackParamList>;
};

const HomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {<ProfileSection />}

      <CarouselComponent />

      <View style={styles.buttonContainer}>
        <ImageButton
          onClick={() => console.log()}
          title={'Start Workout'}
          subTitle="Start your workout"
          subTitleBackgroundColor="#FFD54F99"
          backgroundColor="#FAFAFA55"
          image="https://cdn.muscleandstrength.com/sites/default/files/3_day_beginner_workout_routine_-_1200x630.jpg"
        />

        <View style={{height: 10}} />
        <ImageButton
          onClick={() => {
            console.log();
            navigation.navigate('ScheduleScreen');
          }}
          title={'Schedules'}
          subTitle="View your schedules"
          subTitleBackgroundColor="#64B5F699"
          backgroundColor="#FAFAFA55"
          image="https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80"
        />
        <View style={{height: 10}} />
        <ImageButton
          onClick={() => navigation.navigate('ExerciseScreen')}
          title={'Exercises'}
          subTitle="View all exercises"
          backgroundColor="#FAFAFA55"
          subTitleBackgroundColor="#81C78499"
          image="https://www.zumub.com/blog/wp-content/uploads/2017/11/91_Craig-capurso-advanced-level.jpg"
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
