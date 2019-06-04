import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../res';

export function MText(props) {
  return <Text style={styles({ ...props }).mText}>{props.title}</Text>;
}

MText.propTypes = {
  title: PropTypes.string.isRequired
};
