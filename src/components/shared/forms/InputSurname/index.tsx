import * as S from "../styles";
import {Field} from "react-final-form";
import React from "react";

const InputSurname = () => (
  <S.InputWrapper>
    <S.Label>Surname</S.Label>
    <Field name="surname" component="input" type="text" placeholder="Surname" />
  </S.InputWrapper>
);

export default InputSurname;
