import React from "react";
import * as S from "../styles";

const ItemPriceInput = () => (
  <S.FormItem>
    <S.FormLabel>Price</S.FormLabel>
    <S.FormField name="price" component="input" type="text" placeholder="price" />
  </S.FormItem>
);

export default ItemPriceInput
