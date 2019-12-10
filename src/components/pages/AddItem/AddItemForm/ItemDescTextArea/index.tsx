import React from "react";
import * as S from "../styles";

const ItemDescTextArea = () => (
  <S.FormItem>
    <S.FormLabel>Description</S.FormLabel>
    <S.FormField
      name="description"
      component="textarea"
      type="text"
      placeholder="description"
    />
  </S.FormItem>
);

export default ItemDescTextArea
