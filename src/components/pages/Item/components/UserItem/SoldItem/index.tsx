import React from "react";
import * as S from "../../ForeignItem/styles";
import { Avatar, Typography } from "antd";
import * as selectors from "../../../../../../store/item/selectors";
import { connect } from "react-redux";
const { Text } = Typography;

const SoldItem = ({item: {itemImage, description, price}}: any) => (
  <S.Wrapper>
    <S.ImageContainer>
      {itemImage && (
        <Avatar shape="square" size={350} src={'http://localhost:3030/' + itemImage} />
      )}
    </S.ImageContainer>
    <div>
      <Text strong>Description: </Text>
      <Text> {description} </Text>
    </div>
    <div>
      <Text strong>Price: </Text>
      <Text> {price}</Text>
    </div>
    <div>
      <Text>You sold this item</Text>
    </div>
  </S.Wrapper>
);

const mapStateToProps = (state: any) => {
  return {
    item: selectors.detailedItemSelector(state),
  };
};


export default connect(
  mapStateToProps,
)(SoldItem);
