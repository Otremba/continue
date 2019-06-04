import React from 'react';
import PropTypes from 'prop-types';
import routes from '../navigation/helper';
import { Background, MView, MText, MButton } from '../components';
import {strings} from "../res";

export default function Dashboard(props) {
  return (
    <Background>
      <MView>
        <MText title={strings.app_name} />
        <MButton
          title={strings.next_page}
          onPress={() => props.navigation.navigate(routes.second)}
          top={24}
        />
      </MView>
    </Background>
  );
}

Dashboard.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
