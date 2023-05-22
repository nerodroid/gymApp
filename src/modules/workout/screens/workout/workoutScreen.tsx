import {View, Text} from 'react-native';
import {useEffect, useState} from 'react';

import TextButton from '@gym-app/shared/textButton/textButton';

import styles from './workoutScreen.styles';
import {
  RouteProp,
  ParamListBase,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SelectDropdown from 'react-native-select-dropdown';
import scheduleActions, {
  ScheduleItem,
} from '@gym-app/storage/realm/actions/scheduleActions';

export type WorkoutStackParamList = {
  WorkoutScreen: undefined;
  TodayWorkoutScreen: undefined;
  MissingWorkoutScreen: undefined;
};

type Props = {
  route: RouteProp<ParamListBase, 'WorkoutScreen'>;
  navigation: NativeStackNavigationProp<WorkoutStackParamList>;
};

const WorkoutScreen = (props: Props) => {
  const {route} = props;

  const {navigate} = useNavigation<NavigationProp<any>>();

  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>();
  const [selectedScheduleItem, setSelectedScheduleItem] =
    useState<ScheduleItem>();

  const [dropdownItems, setDropdownItems] = useState<string[]>();

  useEffect(() => {
    const tempScheduleItems = scheduleActions.getAllSchedules();
    setScheduleItems(tempScheduleItems);
    setDropdownItems(
      scheduleActions.getAllSchedules().map((item: {name: any}) => item.name),
    );
  }, []);

  const handleDropItemSelect = (item: any) => {
    const tempScheduleItem = scheduleItems?.find(
      (scheduleItem: {name: any}) => scheduleItem.name === item,
    );

    setSelectedScheduleItem(tempScheduleItem);
  };
  const handleNavigateToTodayWorkoutScreen = () => {
    if (selectedScheduleItem) {
      navigate('TodayWorkoutScreen', {
        scheduleItem: selectedScheduleItem,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Screen</Text>

      <SelectDropdown
        data={dropdownItems ? dropdownItems : []}
        onSelect={selectedItem => {
          handleDropItemSelect(selectedItem);
        }}
      />
      <TextButton
        onPress={() => {
          console.log(selectedScheduleItem);

          handleNavigateToTodayWorkoutScreen();
          //navigation.navigate('TodayWorkoutScreen');
        }}
        text={"Do Today's Workout"}
      />

      <View style={styles.separator}></View>
      <TextButton
        onPress={() => {
          console.log("Do today's workout");
        }}
        text={'Fill Missing Workout'}
      />
    </View>
  );
};

export default WorkoutScreen;
