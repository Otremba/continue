import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = props =>
  StyleSheet.create({
    mButton: {
      flexDirection: 'row',
      height: 40,
      marginTop: props.margin ? props.margin : props.vertical ? props.vertical : props.top || 0,
      marginBottom: props.margin
        ? props.margin
        : props.vertical
        ? props.vertical
        : props.bottom || 0,
      marginRight: props.margin
        ? props.margin
        : props.horizontal
        ? props.horizontal
        : props.right || 0,
      marginLeft: props.margin
        ? props.margin
        : props.horizontal
        ? props.horizontal
        : props.left || 0,
      borderRadius: 6,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: props.disabled ? colors.disable : props.color ? props.color : colors.accent
    },
    mView: {
      flexDirection: props.row ? 'row' : 'column',
      flex: props.flex || 0,
      backgroundColor: props.bgColor || 'transparent',
      alignItems: props.align || 'stretch',
      justifyContent: props.justify || 'flex-start',
      paddingRight: props.padding
        ? props.padding
        : props.right
        ? props.right
        : props.horizontal
        ? props.horizontal
        : 0,
      paddingLeft: props.padding
        ? props.padding
        : props.left
        ? props.left
        : props.horizontal
        ? props.horizontal
        : 0,
      paddingTop: props.padding
        ? props.padding
        : props.top
        ? props.top
        : props.vertical
        ? props.vertical
        : 0,
      paddingBottom: props.padding
        ? props.padding
        : props.bottom
        ? props.bottom
        : props.vertical
        ? props.vertical
        : 0
    },
    mText: {
      flex: props.flex || 0,
      fontWeight: props.bold ? 'bold' : 'normal',
      marginTop: props.margin ? props.margin : props.vertical ? props.vertical : props.top || 0,
      marginBottom: props.margin
        ? props.margin
        : props.vertical
        ? props.vertical
        : props.bottom || 0,
      marginRight: props.margin
        ? props.margin
        : props.horizontal
        ? props.horizontal
        : props.right || 0,
      marginLeft: props.margin
        ? props.margin
        : props.horizontal
        ? props.horizontal
        : props.left || 0,
      color: props.color || colors.textPrimary,
      textAlign: props.textAlign || 'auto',
      alignSelf: props.align || 'auto',
      fontSize: props.big ? 24 : props.medium ? 18 : props.small ? 12 : props.size ? props.size : 14
    }
  });
