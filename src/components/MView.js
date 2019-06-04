import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../res';

export function MView(props) {
  return <View style={styles({ ...props }).mView}>{props.children}</View>;
}

MView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
};

MView.defaultProps = {
  children: null
};
