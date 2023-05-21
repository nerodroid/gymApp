import React from 'react';

import {RootNavigator} from '@gym-app/navigation/rootNavigator';
import {gymAppContext} from '@gym-app/storage/realm/models/realmConfig';
const {RealmProvider} = gymAppContext;

function App(): JSX.Element {
  return (
    <RealmProvider>
      <RootNavigator />
    </RealmProvider>
  );

  return <RootNavigator />;
}

export default App;
