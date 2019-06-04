import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../res/colors';
import { NavBar, MView } from '.';
import { IS_IOS } from '../utils';
import {strings} from "../res";

export function Background(props) {
  const { title, children, onBackPress, noPadding } = props;

  const renderView = () => (
    <MView bgColor={colors.background} flex={1}>
      <StatusBar animated backgroundColor={colors.primaryDark} barStyle="light-content" />
      <NavBar title={title} onBackPress={onBackPress} />
      <MView padding={noPadding ? 0 : 20}>{children}</MView>
    </MView>
  );

  if (IS_IOS) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.primaryDark }}>
        {renderView()}
      </SafeAreaView>
    );
  }
  return renderView();
}

Background.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
  title: PropTypes.string,
  onBackPress: PropTypes.func,
  noPadding: PropTypes.bool
};

Background.defaultProps = {
  title: strings.app_name,
  onBackPress: null,
  noPadding: false
};
