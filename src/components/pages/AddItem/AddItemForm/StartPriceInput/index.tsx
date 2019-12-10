import React from "react";
import * as S from "../styles";

const StartPriceInput = () => (
  <S.FormItem>
    <S.FormLabel>Start Price</S.FormLabel>
  <S.FormField name="startPrice" component="input" type="text" placeholder="starting price" />
  </S.FormItem>
);

export default StartPriceInput
