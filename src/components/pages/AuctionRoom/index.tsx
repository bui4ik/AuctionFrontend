import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import DefaultPageLayout from '../../layouts/DefaultPageLayout';
import * as selectors from "../../../store/auth/selectors";
import * as auctionSelectors from '../../../store/auctions/selectors';
import { getAuctionRequest } from "../../../store/auctions/actions";
import { Typography, Descriptions, Avatar, Comment, InputNumber, Button} from "antd";
import { connect } from "react-redux";
import * as S from './styles'
const { Title } = Typography;

let socket: any;
const ENDPOINT = 'localhost:3030';

const AuctionRoom = ({match, email, getAuction, auction}: any)=> {
  const room = match.params.id;
  const [bid, setBid]: any = useState('');
  const [bids, setBids]: any = useState([]);
  const [currentPrice, setCurrentPrice]: any = useState('');

  useEffect(() => {
    getAuction(room);
    socket = io(ENDPOINT);
    socket.emit('join', {email, room });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [email, room, getAuction]);

  useEffect(() => {
    socket.on('bid', ({email, bid, price}: any) =>{
      setBids([...bids, {email, bid}]);
      setCurrentPrice(price);
    })
  }, [bids]);

  useEffect(() => {
    socket.on('getBidHistory', ({bids, price}: any) =>{
      setBids(bids);
      setCurrentPrice(price)
    })
  }, [bids]);

  const sendMessage = () => {
    if(bid){
      socket.emit('setBid', bid, () => setBid(''));
    }
  };

  return (
    <DefaultPageLayout>
      <Title level={2}>AuctionRoom: {room}</Title>
        <Descriptions title="Auction Info">
          <Descriptions.Item label="Lot">{auction.item ? auction.item[0].name : null}</Descriptions.Item>
          <Descriptions.Item label="Start Price">{auction.startPrice}</Descriptions.Item>
          <Descriptions.Item label="Minimal Bid">{auction.minBid}</Descriptions.Item>
        </Descriptions>
      <InputNumber
        min={10}
        defaultValue={10}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
        onChange={(value: any) => setBid(value)}
      />
      {/*<input type='text' value={bid} onChange={event => setBid(event.target.value)}/>*/}
      <Button type='primary' onClick={sendMessage}>send bid</Button>
      <div> Current Price : {currentPrice} </div>
      <S.BidsContainer>
        { bids.map((bid: any) => (
          <Comment
            key = {bids.indexOf(bid)}
            author={<div>{bid.email}</div>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                New bid {bid.bid} backs
              </p>
            }
          />
        )).reverse()}
      </S.BidsContainer>
    </DefaultPageLayout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    name: selectors.nameSelector(state),
    surname: selectors.surnameSelector(state),
    email: selectors.emailSelector(state),
    auction: auctionSelectors.auctionDetailedSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAuction: (id: any) => dispatch(getAuctionRequest(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuctionRoom);
