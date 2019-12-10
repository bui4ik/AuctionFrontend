import React from "react";
import * as S from "../styles";

const AuctionDurationInput = () => (
  <S.FormItem>
    <S.FormLabel>Auction Duration</S.FormLabel>
    <S.FormField name="duration" component="input" type="text" placeholder="duration in hours" />
  </S.FormItem>
);

export default AuctionDurationInput
