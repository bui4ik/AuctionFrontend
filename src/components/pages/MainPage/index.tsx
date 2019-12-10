import React, { Component } from 'react';
import DefaultPageLayout from '../../layouts/DefaultPageLayout';
import * as selectors from '../../../store/item/selectors';
import * as S from './styles';
import { getItemsOnSaleRequest } from '../../../store/item/actions';
import { connect } from 'react-redux';
import ListsHeader from '../../shared/ListsHeader';
import ListItem from '../Items/components/List';
import Loading from '../../shared/Loading';
import { Pagination } from 'antd';

class MainPage extends Component<any> {
  componentDidMount(): void {
    const page = this.props.match.params.page ? this.props.match.params.page : 1;
    this.props.getItemsOnSale(page);
  }

  render() {
    const { items, count, isLoading } = this.props;
    return (
      <DefaultPageLayout>
        <ListsHeader title="Items on sale" btnDisplay="none" />
        {isLoading ? (
          <S.LoaderWrapper>
            <Loading />
          </S.LoaderWrapper>
        ) : (
          <S.Content>
            <ListItem items={items} noItemsText="No items yet" />
          </S.Content>
        )}
        <Pagination defaultCurrent={1} total={count} defaultPageSize={5} onChange={(page) => this.props.getItemsOnSale(page)}/>
      </DefaultPageLayout>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: selectors.fetchingItemsOnSaleSelector(state),
    items: selectors.itemsOnSaleSelector(state),
    count: selectors.itemsOnSaleCountSelector(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getItemsOnSale: (page: any) => dispatch(getItemsOnSaleRequest(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
