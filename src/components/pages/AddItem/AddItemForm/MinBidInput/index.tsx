import React from "react";
import * as S from "../styles";

const MinimalBidInput = () => (
  <S.FormItem>
    <S.FormLabel>Minimal Bid</S.FormLabel>
    <S.FormField name="minBid" component="input" type="text" placeholder="minimal bid" />
  </S.FormItem>
);

export default MinimalBidInput
