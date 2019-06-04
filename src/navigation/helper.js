import { StackActions, NavigationActions } from 'react-navigation';

export default {
  dash: 'Dashboard',
  second: 'SecondScreen',
};

export const resetAction = route =>
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: route })],
  });
