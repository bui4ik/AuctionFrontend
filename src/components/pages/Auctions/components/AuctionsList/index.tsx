import React from 'react';
import { Avatar, Empty, List } from 'antd';
import { NavLink } from 'react-router-dom';
import * as S from '../../styles';
import { Typography } from 'antd';
import ListTitle from '../../../../shared/ListTitle';
import * as selectors from '../../../../../store/auth/selectors';
import { connect } from 'react-redux';
const { Text } = Typography;

const AuctionsList = ({ auctions, title, noItemsText, loggedUserId }: any) => {
  return (
    <List
      header={<ListTitle title={title} />}
      itemLayout="horizontal"
      locale={{
        emptyText: (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>{noItemsText}</span>} />
        ),
      }}
      dataSource={auctions}
      renderItem={(auction: any) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size="large" icon="skin" />}
            title={
              <React.Fragment>
                <NavLink to={`/auction/${auction._id}`}>{auction.title}</NavLink>
                { loggedUserId === auction.hostId && <Text code>Your auction</Text>}
              </React.Fragment>
            }
            description={
              <S.DescContainer>
                <S.DescItem>
                  <Text strong>Lot: </Text> <Text underline>{auction.item ? auction.item[0].name : null} </Text>
                </S.DescItem>
                <S.DescItem>
                  <Text strong>Start price: </Text>{' '}
                  <Text type="warning">{auction.startPrice} </Text>
                </S.DescItem>
                <S.DescItem>
                  <Text strong>Minimal bid: </Text> <Text type="warning">{auction.minBid} </Text>
                </S.DescItem>
              </S.DescContainer>
            }
          />
        </List.Item>
      )}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    loggedUserId: selectors.userIdSelector(state),
  };
};

export default connect(mapStateToProps)(AuctionsList);
