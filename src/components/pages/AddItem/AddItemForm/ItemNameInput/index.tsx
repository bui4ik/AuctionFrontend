import React from "react";
import * as S from "../styles";

const ItemNameInput = () => (
  <S.FormItem>
    <S.FormLabel>Name</S.FormLabel>
    <S.FormField name="name" component="input" type="text" placeholder="name" />
  </S.FormItem>
);

export default ItemNameInput
