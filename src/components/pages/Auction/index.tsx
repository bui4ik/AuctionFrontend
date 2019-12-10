import React, { Component } from 'react';
import DefaultPageLayout from '../../layouts/DefaultPageLayout';
import * as selectors from '../../../store/auctions/selectors';
import * as authSelector from '../../../store/auth/selectors';
import { getAuctionRequest } from '../../../store/auctions/actions';
import Loading from '../../shared/Loading';
import { connect } from 'react-redux';
import { Button, Form, Typography } from "antd";
import InputTitle from '../../shared/AuctionForm/InputTitle';
import SubmitButton from '../../shared/SubtimButton';
import InputStartPrice from '../../shared/InputStartPrice';
import InputMinBid from '../../shared/AuctionForm/InputMinBid';
import { NavLink } from "react-router-dom";
const { Title, Text } = Typography;

class Auction extends Component<any> {
  componentDidMount(): void {
    this.props.form.validateFields();
    this.props.getAuction(this.props.match.params.id);
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        // const result = {
        //   title: values.title,
        //   startPrice: values.startPrice,
        //   minBid: values.minBid,
        //   itemId: values.item,
        //   startTime: values.auctionTime[0].unix(),
        //   endTime: values.auctionTime[1].unix(),
        // };
        // const { history } = this.props;
        console.log(values);
        // this.props.createNewAuction(result, history);
      }
    });
  };

  render() {
    const { getFieldsError } = this.props.form;
    const { isLoading, auction, form, loggedUserId } = this.props;
    return (
      <DefaultPageLayout>
        {isLoading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <Title level={2}>{auction.title}</Title>
            {loggedUserId !== auction.hostId ? (
              <React.Fragment>
                <div>
                  <Text strong>Start Price: </Text>
                  <Text>{auction.startPrice}</Text>
                </div>
                <div>
                  <Text strong>Minimal Bid: </Text>
                  <Text>{auction.minBid}</Text>
                </div>
                <div>
                  <Text strong>Lot: </Text>
                  <Text>{ auction.item !== undefined && auction.item[0].name }</Text>
                </div>
                <Button type='primary'>Take part</Button>
                <NavLink to={`/auctionRoom/${auction._id}`}>
                  <Button>Auction room</Button>
                </NavLink>
              </React.Fragment>
            ) : (
              <Form onSubmit={this.handleSubmit}>
                <InputTitle form={form} title={auction.title} />
                <InputStartPrice form={form} price={auction.startPrice} />
                <InputMinBid form={form} price={auction.minBid} />
                <SubmitButton getFieldsError={getFieldsError} text="Update auction" />
                <NavLink to={`/auctionRoom/${auction._id}`}>
                  <Button>Auction room</Button>
                </NavLink>
              </Form>
            )}
          </React.Fragment>
        )}
      </DefaultPageLayout>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: selectors.auctionDetailedLoadingSelector(state),
    auction: selectors.auctionDetailedSelector(state),
    loggedUserId: authSelector.userIdSelector(state),
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
)(Form.create()(Auction));
