import React, { Component } from 'react';
import DefaultPageLayout from '../../layouts/DefaultPageLayout';
import { Form, Typography } from 'antd';
import * as selectors from '../../../store/item/selectors';
import { createNewAuctionRequest } from '../../../store/auctions/actions';
import { connect } from 'react-redux';
import Loading from '../../shared/Loading';
import InputTitle from '../../shared/AuctionForm/InputTitle';
import SelectItem from '../../shared/AuctionForm/SelectItem';
import InputStartPrice from '../../shared/InputStartPrice';
import InputMinBid from '../../shared/AuctionForm/InputMinBid';
import RangePickerAuction from './components/RangePickerAuction';
import { getNotOnAuctionItemsRequest } from "../../../store/item/actions";
import SubmitButton from "../../shared/SubtimButton";
const { Title } = Typography;


class AddAuction extends Component<any> {
  componentDidMount() {
    this.props.form.validateFields();
    this.props.getItems()

  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        const result = {
          title: values.title,
          startPrice: values.startPrice,
          minBid: values.minBid,
          itemId: values.item,
          startTime: values.auctionTime[0].unix(),
          endTime: values.auctionTime[1].unix(),
        };
        const { history } = this.props;
        this.props.createNewAuction(result, history);
      }
    });
  };

  render() {
    const { getFieldsError } = this.props.form;
    const { isLoading, form } = this.props;
    return (
      <DefaultPageLayout>
        {isLoading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <Title>Create new auction</Title>
            <Form onSubmit={this.handleSubmit}>
              <InputTitle form={form} />
              <SelectItem form={form} />
              <InputStartPrice form={form} />
              <InputMinBid form={form} />
              <RangePickerAuction form={form} />
              <SubmitButton getFieldsError={getFieldsError} text='Create auction'/>
            </Form>
          </React.Fragment>
        )}
      </DefaultPageLayout>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: selectors.notOnAuctionItemsLoadingSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createNewAuction: (auctionInfo: any, history: any) =>
      dispatch(createNewAuctionRequest(auctionInfo, history)),
    getItems: () => dispatch(getNotOnAuctionItemsRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create()(AddAuction));
