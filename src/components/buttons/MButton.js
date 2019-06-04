import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { MText } from '..';
import { colors, styles } from '../../res';

export function MButton(props) {
  const { title, disabled, onPress } = props;

  return (
    <TouchableOpacity
      style={styles({ ...props }).mButton}
      activeOpacity={0.6}
      disabled={disabled}
      onPress={onPress}>
      <MText
        textAlign="center"
        color={disabled ? colors.textPrimary : colors.textLight}
        title={title}
        bold
      />
    </TouchableOpacity>
  );
}

MButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

MButton.defaultProps = {
  disabled: false
};
