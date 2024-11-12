import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';


import ContentDisplay from '../Pages/ContentDisplay'

import HomePage from '../Pages/HomePage'

import PerfilScreen from '../Pages/PerfilScreen'

import HomeMain from '../Navigations/HomeMain'

import List1 from '../Pages/List1'

import PerfilEdit from '../Navigations/PerfilEdit'

const Home = () => {
  const [index, setIndex] = React.useState(2);
  const [routes] = React.useState([
    { key: 'homemain', title: 'Home', icon: 'home' },
    { key: 'contentdisplay', title: 'Content-display', icon: 'table-of-contents' },
    { key: 'edit', title: 'Edit', icon: 'account-edit' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    homemain: HomeMain,
    contentdisplay: ContentDisplay,
    edit: PerfilScreen,
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