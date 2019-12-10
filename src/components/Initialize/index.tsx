import React, { Component } from 'react';
import * as selectors from '../../store/auth/selectors';
import { initializeUserRequest } from '../../store/auth/actions';
import * as S from './styles'

import { connect } from 'react-redux';
import Loading from '../shared/Loading';

class Initialize extends Component<any> {
  componentDidMount(): void {
    if (!this.props.id) {
      this.props.initializeUser();
    }
  }

  render() {
    const { isLoading, children } = this.props;
    return (
      <React.Fragment>
        {isLoading ? <S.Wrapper><Loading /></S.Wrapper> : <React.Fragment>{children}</React.Fragment>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    id: selectors.userIdSelector(state),
    isLoading: selectors.initializingUserSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    initializeUser: () => dispatch(initializeUserRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Initialize);
