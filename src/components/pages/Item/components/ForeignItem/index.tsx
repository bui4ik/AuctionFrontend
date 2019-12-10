import React from 'react';
import { Avatar, Button, Typography } from 'antd';
import * as S from './styles';
import * as selectors from '../../../../../store/item/selectors';
import * as authSelector from '../../../../../store/auth/selectors';
import { connect } from 'react-redux';
import * as ac from '../../../../../store/item/actions';
import { withRouter } from 'react-router';
import BoughtItem from "./BoughtItem";
const { Text } = Typography;

const ForeignItem = ({
  item: { description, price, itemImage, isSold },
  buyItem,
  match,
  buyerId,
  history,
}: any) => {
  const onBuyItemClick = () => {
    const newData = {
      isSold: true,
      buyerId: buyerId,
    };
    buyItem(match.params.id, newData, history);
  };

  return (
    <S.Wrapper>
      {isSold ? <BoughtItem/> : (
        <React.Fragment>
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
          <Button type="primary" onClick={onBuyItemClick}>
            Buy this item
          </Button>
        </React.Fragment>
      )}
    </S.Wrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    item: selectors.detailedItemSelector(state),
    buyerId: authSelector.userIdSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyItem: (id: any, newData: any, history: any) => dispatch(ac.buyItemRequest(id, newData, history)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ForeignItem));
