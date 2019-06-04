import { createStackNavigator, createAppContainer } from 'react-navigation';
import routes from './helper';
import Dashboard from '../screens/Dashboard';
import SecondScreen from '../screens/SecondScreen';

const AppNavigator = createStackNavigator(
  {
    Dashboard,
    SecondScreen,
  },
  {
    initialRouteName: routes.dash,
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
