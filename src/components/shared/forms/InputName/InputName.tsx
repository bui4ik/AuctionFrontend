import * as S from "../styles";
import {Field} from "react-final-form";
import React from "react";

const InputName = () => (
  <S.InputWrapper>
    <S.Label>Name</S.Label>
  <Field name="name" component="input" type="text" placeholder="Name" />
  </S.InputWrapper>
);

export default InputName;
