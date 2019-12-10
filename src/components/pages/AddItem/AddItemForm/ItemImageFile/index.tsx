import React from "react";
import * as S from "../styles";

const ItemImageFile = ({fileSelectHandler}: any) => (
  <S.FormItem>
    <S.FormLabel>Image</S.FormLabel>
    <input
      name="itemImage"
      type="file"
      onChange={fileSelectHandler}
    />
  </S.FormItem>
);

export default ItemImageFile
