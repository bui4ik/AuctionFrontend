import React from "react";
import * as S from "../styles";
import {Field} from "react-final-form";

const InputPassword = () => (
  <S.InputWrapper>
    <S.Label>Password</S.Label>
    <Field name="password" component="input" type="password" placeholder="Password" />
  </S.InputWrapper>
);

export default InputPassword;
