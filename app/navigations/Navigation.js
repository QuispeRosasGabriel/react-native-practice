import React from 'react';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RestaurantsScreenStack from './RestaurantsStacks';

const NavigationStack = createBottomTabNavigator({
  // Nuestro stack de navegacion
  Restaurants: {
    screen: RestaurantsScreenStack,
    navigationOptions: () => ({
      tabBarLabel: 'Restaurantes',
      tabBarIcon: ({tintColor}) => {
        <Icon
          type="material-community"
          name="compass-outline"
          size={22}
          color={tintColor}
        />;
      },
    }),
  },
});

export default NavigationContainer(NavigationStack);
