import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import HomePage from '../Pages/HomePage'

import ContentDisplay from '../Pages/ContentDisplay'

import Editar from '../Pages/Editar'

import List1 from '../Pages/List1'

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'homepage', title: 'Homepage', icon: 'home' },
    { key: 'contentdisplay', title: 'Content-display', icon: 'table-of-contents' },
    { key: 'edit', title: 'Edit', icon: 'account-edit' },
    { key: 'list1', title: 'List1', icon: 'table-of-contents' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    homepage: HomePage,
    contentdisplay: ContentDisplay,
    edit: Editar,
    list1: List1
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor: '#039BE5'}}
    />
  );
};

export default Home;