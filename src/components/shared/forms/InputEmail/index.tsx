import * as S from "../styles";
import {Field} from "react-final-form";
import React from "react";

const InputEmail = () => (
  <S.InputWrapper>
    <S.Label>Email</S.Label>
    <Field name="email" component="input" type="text" placeholder="Email" />
  </S.InputWrapper>
);

export default InputEmail;
