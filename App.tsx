import React from 'react';

import {RootNavigator} from '@gym-app/navigation/rootNavigator';
import {exerciseContext} from '@gym-app/storage/realm/models/Exercise';
const {RealmProvider} = exerciseContext;

function App(): JSX.Element {
  return (
    <RealmProvider>
      <RootNavigator />
    </RealmProvider>
  );
}

export default App;
