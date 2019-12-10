import React from 'react';
import * as S from '../styles';

const ForAuctionCheckBox = ({ checked, setChecked }: any) => {
  const handleChange = (e: any) => {
    e.target.value = !e.target.value;
    setChecked(!checked);
    console.log(checked);
  };

  return (
    <S.FormItem>
      <S.FormLabel>For Auction</S.FormLabel>
      <S.FormField
        name="forAuction"
        component="input"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </S.FormItem>
  );
};

export default ForAuctionCheckBox;
