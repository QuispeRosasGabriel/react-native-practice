import {createStackNavigator} from '@react-navigation/stack';
import RestaurantScreen from '../screens/Restaurants';

const RestaurantScreenStack = createStackNavigator({
  Restaurantes: {
    screen: RestaurantScreen,
    navigationOptions: () => ({
      title: 'Restaurantes',
    }),
  },
});

export default RestaurantScreenStack;
