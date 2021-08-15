import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Dashboard } from '../screens/Dashboard';

const StackNavigation = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackNavigation.Navigator>
    <StackNavigation.Screen name="Home" component={Home} />
    <StackNavigation.Screen name="Dashboard" component={Dashboard} />
  </StackNavigation.Navigator>
);

export { AppRoutes };