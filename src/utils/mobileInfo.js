import { Dimensions, Platform } from 'react-native';

// eslint-disable-next-line global-require
export const VERSION = JSON.stringify(require('../../package.json').version).replace(/"/g, '');

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
