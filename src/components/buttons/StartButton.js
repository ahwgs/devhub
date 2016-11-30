import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import styled from 'styled-components/native';

import { contentPadding } from '../../styles/variables';

const RepositoryStarButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const RepositoryStarIcon = styled(Icon)`
  margin-horizontal: ${contentPadding};
  font-size: 16;
  color: ${({ starred, theme }) => (starred ? theme.star : theme.base04)};
`;

export default class extends React.PureComponent {
  state = {
    starred: this.props.starred,
  };

  componentWillReceiveProps({ starred }) {
    if (starred !== this.state.starred) {
      this.setState({ starred });
    }
  }

  onPress = next => () => {
    this.setState({ starred: !this.state.starred });
    if (typeof next === 'function') next();
  };

  props: {
    containerStyle?: Object,
    onPress: Function,
    starred: boolean,
    style?: Object,
  };

  render() {
    const { starred } = this.state;
    const { containerStyle, onPress, ...props } = this.props;

    return (
      <RepositoryStarButton style={containerStyle} onPress={this.onPress(onPress)}>
        <RepositoryStarIcon name="star" {...props} starred={starred} />
      </RepositoryStarButton>
    );
  }
}