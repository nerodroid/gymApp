import TextButton from '@gym-app/shared/textButton/textButton';
import scheduleActions from '@gym-app/storage/realm/actions/scheduleActions';
import ScheduleProgressActions from '@gym-app/storage/realm/actions/scheduleProgressActions';
import {ScheduleProgress} from '@gym-app/storage/realm/models/ScheduleProgress';
import {useState} from 'react';
import {View, Text} from 'react-native';

const AnalysisScreen = () => {
  const [scheduleProgressItems, setScheduleProgressItems] = useState<any>(
    ScheduleProgressActions.getAllScheduleProgresses(),
  );
  console.log('scheduleProgressItems', scheduleProgressItems);

  const fetch = () => {
    const schedules1 = scheduleActions.getAllSchedules();
    console.log('schedules1', schedules1[0]._id);

    // const id: Realm.BSON.ObjectId = schedules1[0]._id;
    // console.log('id', id);
    // const schedules = scheduleActions.getScheduleById(id);

    // console.log('schedules', schedules);
  };
  return (
    <View>
      <Text>Analysis Screen</Text>

      <Text>scheduleProgressItems</Text>

      <TextButton onPress={() => fetch()} text={'Show all schedules'} />
    </View>
  );
};

export default AnalysisScreen;
