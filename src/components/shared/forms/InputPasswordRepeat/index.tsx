import React from "react";
import * as S from "../styles";
import {Field} from "react-final-form";

const InputPasswordRepeat = () => (
  <S.InputWrapper>
    <S.Label>Repeat Password</S.Label>
    <Field name="repeat_password" component="input" type="password" placeholder="Repeat password" />
  </S.InputWrapper>
);

export default InputPasswordRepeat;
