import React from 'react';
import * as S from "../styles";
import * as selectors from "../../../../store/auth/selectors";
import {connect} from "react-redux";

class Errors extends React.Component<any>{
  render(){
    const { errors, signInError} = this.props;
    return (
      <React.Fragment>
        {errors.length > 0 && (
          <S.Error>
            {errors.map( (error: string, index: number) => <div key={`error-${index}`}>{error}</div>)}
          </S.Error>
        )}
        { signInError &&  <S.Error>{signInError}</S.Error>}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    signInError: selectors.errorSelector(state),
  }
};

export default connect(
  mapStateToProps,
)(Errors)
