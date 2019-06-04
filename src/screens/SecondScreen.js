import React from 'react';
import PropTypes from 'prop-types';
import { MText, Background } from '../components';
import {strings } from "../res";

export default function SecondScreen(props) {
  return (
    <Background onBackPress={() => props.navigation.goBack()}>
      <MText title={strings.app_name} />
    </Background>
  );
}

SecondScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
