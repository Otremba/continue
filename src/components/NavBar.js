import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { colors } from '../res/colors';
import { MText } from '.';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    alignItems: 'center',
    elevation: 4,
    backgroundColor: colors.primary
  },
  icon: { marginHorizontal: 16, width: 52, height: 52, justifyContent: 'center' }
});

export function NavBar(props) {
  const { title, onBackPress } = props;

  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity style={styles.icon} activeOpacity={0.6} onPress={onBackPress}>
          <Icon name="md-arrow-back" color={colors.icon} size={20} />
        </TouchableOpacity>
      )}
      <MText flex={1} title={title} textAlign="center" color={colors.textLight} medium bold />
      {onBackPress && <View style={styles.icon} />}
    </View>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  onBackPress: PropTypes.func
};

NavBar.defaultProps = {
  onBackPress: null
};
