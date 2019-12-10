import React from 'react';
import { Form } from 'react-final-form';
import {registrationValidation} from "../../../../utils/validation";
import * as S from '../../Login/styles';
import InputEmail from "../../../shared/forms/InputEmail";
import InputPassword from "../../../shared/forms/InputPassword";
import Errors from "../../../shared/forms/Errors";
import InputName from "../../../shared/forms/InputName/InputName";
import InputSurname from "../../../shared/forms/InputSurname";
import InputPasswordRepeat from "../../../shared/forms/InputPasswordRepeat";


class RegistrationForm extends React.Component {
  state = {
    errors: [],
  };

  onSubmit = (values: any) => {
    if(this.state.errors.length > 0) this.setState({errors: []});
    const errors = registrationValidation(values);
    if (errors) {
      const newErrors = Object.values(errors).map((el: any) => el[0]);
      this.setState({errors: newErrors});
      return;
    }
    console.log(values);
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <Errors errors={errors} />
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, submitting, pristine }) => (
            <S.FormContainer onSubmit={handleSubmit}>
              <InputName/>
              <InputSurname/>
              <InputEmail/>
              <InputPassword/>
              <InputPasswordRepeat/>
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

export default RegistrationForm;
