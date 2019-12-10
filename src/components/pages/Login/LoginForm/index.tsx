import React from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';
import { loginValidation } from '../../../../utils/validation';
import * as S from '../styles';
import * as selectors from '../../../../store/auth/selectors';
import { signinRequest } from '../../../../store/auth/actions';
import InputEmail from '../../../shared/forms/InputEmail';
import InputPassword from '../../../shared/forms/InputPassword';
import Errors from '../../../shared/forms/Errors';

class LoginForm extends React.Component<any> {
  state = {
    errors: [],
  };

  onSubmit = (values: any) => {
    if (this.state.errors.length > 0) this.setState({ errors: [] });
    const errors = loginValidation(values);
    if (errors) {
      const newErrors = Object.values(errors).map((el: any) => el[0]);
      this.setState({ errors: newErrors });
      return;
    }
    this.props.signIn(values.email, values.password);
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <Errors errors={errors} />
        <Form
          onSubmit={this.onSubmit}
          initialValues={{ email: 'dagestan@gmail.com', password: '1234567q1' }}
          render={({ handleSubmit, submitting, pristine }) => (
            <S.FormContainer onSubmit={handleSubmit}>
              <InputEmail />
              <InputPassword />
              <S.Button type="submit" disabled={submitting || pristine}>
                Submit
              </S.Button>
            </S.FormContainer>
          )}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: selectors.isLoadingSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signIn: (email: string, password: string) => dispatch(signinRequest(email, password)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
